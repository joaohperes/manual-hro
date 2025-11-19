import React, { useState, useRef, useEffect } from 'react';
import { ChatBubbleLeftRightIcon, XMarkIcon, PaperAirplaneIcon, SparklesIcon } from '@heroicons/react/24/outline';
import { ChatMessage } from '../types';
import { sendMessageToGemini } from '../services/geminiService';
import { getChatHistoryFromStorage, saveChatHistoryToStorage } from '../utils/localStorage';

const AIChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const initialMessages: ChatMessage[] = [
    { role: 'model', text: 'Olá! Sou o HRO Bot. Posso ajudar a encontrar protocolos, telefones ou informações do manual. Como posso ajudar hoje?', timestamp: Date.now() }
  ];

  const storedHistory = getChatHistoryFromStorage();
  const [messages, setMessages] = useState<ChatMessage[]>(storedHistory.length > 0 ? storedHistory : initialMessages);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Persist messages to localStorage whenever they change
  useEffect(() => {
    saveChatHistoryToStorage(messages);
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputText.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      role: 'user',
      text: inputText,
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsLoading(true);

    try {
      const responseText = await sendMessageToGemini(userMsg.text);
      const aiMsg: ChatMessage = {
        role: 'model',
        text: responseText,
        timestamp: Date.now()
      };
      setMessages(prev => [...prev, aiMsg]);
    } catch (err) {
        console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-hro-600 hover:bg-hro-800 text-white p-4 rounded-full shadow-lg shadow-hro-600/30 transition-all duration-300 z-50 flex items-center group"
        >
          <SparklesIcon className="w-6 h-6 mr-2" />
          <span className="font-medium pr-1">HRO Assistente</span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 w-[90vw] sm:w-96 h-[600px] max-h-[85vh] bg-white rounded-2xl shadow-2xl flex flex-col border border-slate-200 z-50 animate-in slide-in-from-bottom-10 fade-in duration-300">
          {/* Header */}
          <div className="h-16 bg-gradient-to-r from-hro-600 to-hro-800 rounded-t-2xl flex items-center justify-between px-4 shrink-0">
            <div className="flex items-center text-white">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3 backdrop-blur-sm">
                <SparklesIcon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-sm">HRO Inteligência</h3>
                <p className="text-xs text-hro-100">Baseado no Manual Oficial</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white hover:bg-white/10 rounded-full p-1 transition-colors"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 bg-slate-50 space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`
                    max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm
                    ${msg.role === 'user' 
                      ? 'bg-hro-600 text-white rounded-br-none' 
                      : 'bg-white text-slate-700 border border-slate-100 rounded-bl-none'}
                  `}
                >
                  {/* Simple Markdown rendering for lists/bold */}
                  <div dangerouslySetInnerHTML={{ 
                    __html: msg.text
                      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                      .replace(/\n/g, '<br/>') 
                  }} />
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start w-full">
                <div className="bg-white border border-slate-100 rounded-2xl rounded-bl-none px-4 py-3 flex items-center space-x-2 shadow-sm">
                  <div className="w-2 h-2 bg-hro-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 bg-hro-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 bg-hro-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 bg-white border-t border-slate-100 rounded-b-2xl">
            <div className="relative flex items-center">
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Pergunte sobre protocolos..."
                className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-xl pl-4 pr-12 py-3 focus:outline-none focus:ring-2 focus:ring-hro-500 focus:border-transparent resize-none h-12 max-h-24 overflow-y-auto"
                rows={1}
              />
              <button
                onClick={handleSend}
                disabled={!inputText.trim() || isLoading}
                className="absolute right-2 p-1.5 bg-hro-600 text-white rounded-lg hover:bg-hro-700 disabled:opacity-50 disabled:hover:bg-hro-600 transition-colors"
              >
                <PaperAirplaneIcon className="w-4 h-4" />
              </button>
            </div>
            <p className="text-[10px] text-center text-slate-400 mt-2">
              A IA pode cometer erros. Verifique informações críticas nos protocolos originais.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default AIChatAssistant;
