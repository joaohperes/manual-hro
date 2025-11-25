import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DocumentArrowUpIcon, SparklesIcon, ClipboardDocumentIcon, CheckIcon, PlayCircleIcon, DocumentTextIcon } from '@heroicons/react/24/outline';
import { generateProtocolFromPdf, generateProtocolFromText, GeneratedProtocolData } from '../services/geminiService';
import { uploadPdfToStorage, isFirebaseConfigured } from '../services/pdfStorageService';
import { getProtocolsFromStorage, saveProtocolsToStorage } from '../utils/localStorage';
import { MOCK_PROTOCOLS } from '../data/mockContent';
import { Protocol } from '../types';

const ImportProtocol: React.FC = () => {
  const navigate = useNavigate();
  const [importType, setImportType] = useState<'pdf' | 'text'>('pdf');
  const [textInput, setTextInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [generatedData, setGeneratedData] = useState<GeneratedProtocolData | null>(null);
  const [copied, setCopied] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [googleDriveFileId, setGoogleDriveFileId] = useState<string>('');

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (file.type !== 'application/pdf') {
      setError('Por favor, envie apenas arquivos PDF.');
      return;
    }

    // Validate file size (max 10MB)
    const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
    if (file.size > MAX_FILE_SIZE) {
      setError(`Arquivo muito grande. Máximo permitido: 10MB. Tamanho atual: ${(file.size / 1024 / 1024).toFixed(2)}MB`);
      return;
    }

    setIsLoading(true);
    setError(null);
    setGeneratedData(null);
    setUploadedFile(file); // Store the file for later upload

    try {
      const base64 = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
          const result = reader.result as string;
          const base64String = result.split(',')[1];
          resolve(base64String);
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });

      const result = await generateProtocolFromPdf(base64);
      setGeneratedData(result);
    } catch (err) {
      setError('Erro ao processar o PDF. Verifique a API Key.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleTextSubmit = async () => {
    if (!textInput.trim()) {
        setError('Por favor, insira o texto da normativa.');
        return;
    }

    setIsLoading(true);
    setError(null);
    setGeneratedData(null);

    try {
        const result = await generateProtocolFromText(textInput);
        setGeneratedData(result);
    } catch (err) {
        setError('Erro ao processar o texto. Verifique a API Key.');
        console.error(err);
    } finally {
        setIsLoading(false);
    }
  };

  const generateCodeSnippet = (data: GeneratedProtocolData) => {
    const safeContent = data.content
        .replace(/\\/g, '\\\\')
        .replace(/`/g, '\\`')
        .replace(/\${/g, '\\${');

    return `  {
    id: '${data.id}',
    title: '${data.title.replace(/'/g, "\\'")}',
    category: '${data.category}',
    lastUpdated: '${new Date().toISOString().split('T')[0]}',
    tags: [${data.tags.map(t => `'${t}'`).join(', ')}],
    content: \`
${safeContent}
    \`
  },`;
  };

  const copyToClipboard = () => {
    if (!generatedData) return;
    const code = generateCodeSnippet(generatedData);
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleTestInApp = async () => {
    if (!generatedData) return;

    try {
      setIsLoading(true);

      const newProtocol: Protocol = {
        id: generatedData.id,
        title: generatedData.title,
        category: generatedData.category,
        lastUpdated: new Date().toISOString().split('T')[0],
        tags: generatedData.tags,
        content: generatedData.content
      };

      // Add Google Drive File ID if provided
      if (googleDriveFileId.trim()) {
        newProtocol.googleDriveFileId = googleDriveFileId.trim();
        console.log('📁 Google Drive File ID saved:', googleDriveFileId);
      }

      // Upload PDF to Firebase if available and file exists
      if (uploadedFile && isFirebaseConfigured()) {
        try {
          console.log('📤 Uploading PDF to Firebase Storage...');
          const pdfUrl = await uploadPdfToStorage(uploadedFile, newProtocol.id);
          newProtocol.pdfUrl = pdfUrl;
          newProtocol.pdfFileName = uploadedFile.name;
          newProtocol.pdfSize = uploadedFile.size;
          console.log('✅ PDF uploaded successfully');
        } catch (uploadError) {
          console.warn('⚠️ PDF upload failed, continuing without PDF download:', uploadError);
          // Continue without PDF - it's not critical
        }
      } else if (uploadedFile) {
        console.warn('⚠️ Firebase not configured, PDF download will not be available');
      }

      // Get existing protocols from storage or use mock data
      const storedProtocols = getProtocolsFromStorage();
      const allProtocols = storedProtocols || [...MOCK_PROTOCOLS];

      // Check if protocol already exists
      const existingIndex = allProtocols.findIndex((p: Protocol) => p.id === newProtocol.id);
      if (existingIndex === -1) {
        // Add new protocol at the beginning
        allProtocols.unshift(newProtocol);
        saveProtocolsToStorage(allProtocols);
      }

      navigate(`/protocolos/${newProtocol.id}`);
    } catch (err) {
      setError('Erro ao salvar protocolo. Tente novamente.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-8 pb-12">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Importar Conteúdo via IA</h1>
        <p className="text-slate-600 mt-2">
          Gere resumos estruturados a partir de PDFs ou Texto Bruto (Normativas) usando inteligência artificial.
        </p>
      </div>

      {/* Input Type Toggle */}
      <div className="bg-white p-1 rounded-xl border border-slate-200 inline-flex shadow-sm">
        <button
            onClick={() => { setImportType('pdf'); setError(null); setGeneratedData(null); }}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                importType === 'pdf'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-500 hover:bg-slate-50'
            }`}
        >
            <div className="flex items-center">
                <DocumentArrowUpIcon className="w-4 h-4 mr-2" />
                Upload PDF
            </div>
        </button>
        <button
            onClick={() => { setImportType('text'); setError(null); setGeneratedData(null); }}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                importType === 'text'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-500 hover:bg-slate-50'
            }`}
        >
            <div className="flex items-center">
                <DocumentTextIcon className="w-4 h-4 mr-2" />
                Colar Texto
            </div>
        </button>
      </div>

      {/* Upload/Input Area */}
      <div className="bg-white p-8 rounded-2xl border-2 border-dashed border-slate-300 hover:border-blue-400 transition-colors shadow-sm">

        {isLoading ? (
            <div className="text-center py-8">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                     <SparklesIcon className="w-8 h-8 text-blue-600 animate-pulse" />
                </div>
                <h3 className="text-lg font-medium text-slate-900">Analisando Conteúdo...</h3>
                <p className="text-slate-500 max-w-md mx-auto text-sm mt-2">
                    A IA está estruturando as informações. Isso pode levar alguns segundos.
                </p>
            </div>
        ) : (
            <>
                {importType === 'pdf' ? (
                    <div className="text-center">
                        <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                            <DocumentArrowUpIcon className="w-8 h-8 text-blue-600" />
                        </div>
                        <h3 className="text-lg font-medium text-slate-900">Selecione o Arquivo PDF</h3>
                        <p className="text-slate-500 mb-6 max-w-md mx-auto text-sm">
                            Ideal para protocolos clínicos já diagramados.
                        </p>
                        <label className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg cursor-pointer hover:bg-blue-700 transition-colors shadow-sm">
                            <span>Escolher Arquivo</span>
                            <input type="file" accept="application/pdf" className="hidden" onChange={handleFileUpload} />
                        </label>
                    </div>
                ) : (
                    <div className="max-w-3xl mx-auto">
                        <div className="flex items-start mb-4">
                            <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                                <DocumentTextIcon className="w-5 h-5 text-blue-600" />
                            </div>
                            <div>
                                <h3 className="text-lg font-medium text-slate-900">Cole o Texto da Normativa</h3>
                                <p className="text-sm text-slate-500">Cole o texto completo abaixo. A IA irá formatar títulos, listas e regras.</p>
                            </div>
                        </div>
                        <textarea
                            className="w-full h-64 p-4 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none text-sm text-slate-700 font-mono"
                            placeholder="Ex: PORTARIA Nº 123/2024 - Dispõe sobre o uso de uniformes..."
                            value={textInput}
                            onChange={(e) => setTextInput(e.target.value)}
                        />
                        <div className="mt-4 flex justify-end">
                            <button
                                onClick={handleTextSubmit}
                                disabled={!textInput.trim()}
                                className="px-6 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            >
                                Processar Texto
                            </button>
                        </div>
                    </div>
                )}
            </>
        )}
        {error && <p className="mt-6 text-center text-red-500 text-sm bg-red-50 p-3 rounded w-full font-medium">{error}</p>}
      </div>

      {/* Google Drive File ID Input */}
      {generatedData && (
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <label className="block mb-3">
            <span className="text-sm font-medium text-slate-900">
              📁 Google Drive File ID (Opcional)
            </span>
            <p className="text-xs text-slate-500 mt-1">
              Cole o ID do arquivo no Google Drive se tiver um link para compartilhar (ex: 1NjJRgPvoCIyH-4ypfsOpJRkUAvJzLd9_)
            </p>
          </label>
          <input
            type="text"
            placeholder="1NjJRgPvoCIyH-4ypfsOpJRkUAvJzLd9_"
            value={googleDriveFileId}
            onChange={(e) => setGoogleDriveFileId(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none text-sm font-mono"
          />
          <p className="text-xs text-slate-500 mt-2">
            Extraído de: https://drive.google.com/file/d/<strong>ID_AQUI</strong>/view
          </p>
        </div>
      )}

      {/* Result Area */}
      {generatedData && (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="flex items-center justify-between">
             <div className="flex items-center gap-2">
                 <h2 className="text-lg font-bold text-slate-900">Conteúdo Gerado</h2>
                 <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">Pronto</span>
             </div>
             <button
                onClick={handleTestInApp}
                className="flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 bg-blue-50 px-3 py-1.5 rounded-lg transition-colors border border-blue-100"
             >
                <PlayCircleIcon className="w-4 h-4 mr-1.5" />
                Visualizar no App
             </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Preview */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 flex flex-col h-[500px]">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Pré-visualização</h3>
                <div className="space-y-4 flex-1 overflow-y-auto pr-2 custom-scrollbar">
                    <div>
                        <span className="text-xs text-slate-500">Título</span>
                        <p className="font-bold text-slate-900">{generatedData.title}</p>
                    </div>
                    <div className="flex gap-4">
                        <div>
                            <span className="text-xs text-slate-500">Categoria</span>
                            <p className="text-sm font-medium text-slate-700">{generatedData.category}</p>
                        </div>
                        <div>
                            <span className="text-xs text-slate-500">ID</span>
                            <p className="text-sm font-mono text-slate-600 bg-slate-100 px-1 rounded">{generatedData.id}</p>
                        </div>
                    </div>
                    <div className="pt-4 border-t border-slate-100">
                        <div className="prose prose-sm prose-slate max-w-none p-3 bg-slate-50 rounded-lg border border-slate-100">
                             <pre className="whitespace-pre-wrap text-xs font-mono text-slate-600 font-sans">{generatedData.content}</pre>
                        </div>
                    </div>
                </div>
            </div>

            {/* Code Snippet */}
            <div className="bg-slate-900 rounded-xl shadow-lg p-6 flex flex-col h-[500px]">
                <div className="flex items-center justify-between mb-4 shrink-0">
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Código TypeScript</h3>
                    <button 
                        onClick={copyToClipboard}
                        className={`flex items-center text-xs font-medium px-3 py-1.5 rounded-lg transition-all ${copied ? 'bg-green-500/20 text-green-400' : 'bg-white/10 text-white hover:bg-white/20'}`}
                    >
                        {copied ? <CheckIcon className="w-4 h-4 mr-1" /> : <ClipboardDocumentIcon className="w-4 h-4 mr-1" />}
                        {copied ? 'Copiado!' : 'Copiar código'}
                    </button>
                </div>
                <div className="flex-1 bg-black/30 rounded-lg p-4 overflow-auto font-mono text-xs text-emerald-400 border border-white/10 custom-scrollbar">
                    <pre>{generateCodeSnippet(generatedData)}</pre>
                </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImportProtocol;