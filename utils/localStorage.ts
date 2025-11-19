/**
 * Utilities para gerenciar dados no localStorage de forma segura e tipada
 */

const STORAGE_KEYS = {
  PROTOCOLS: 'hro_protocols',
  CHAT_HISTORY: 'hro_chat_history',
};

// Protocols
export const getProtocolsFromStorage = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.PROTOCOLS);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error('Error reading protocols from localStorage:', error);
    return null;
  }
};

export const saveProtocolsToStorage = (protocols: any) => {
  try {
    localStorage.setItem(STORAGE_KEYS.PROTOCOLS, JSON.stringify(protocols));
  } catch (error) {
    console.error('Error saving protocols to localStorage:', error);
  }
};

// Chat History
export const getChatHistoryFromStorage = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.CHAT_HISTORY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error reading chat history from localStorage:', error);
    return [];
  }
};

export const saveChatHistoryToStorage = (messages: any) => {
  try {
    // Limit to last 100 messages to avoid storage overflow
    const limited = messages.slice(-100);
    localStorage.setItem(STORAGE_KEYS.CHAT_HISTORY, JSON.stringify(limited));
  } catch (error) {
    console.error('Error saving chat history to localStorage:', error);
  }
};

export const clearChatHistoryFromStorage = () => {
  try {
    localStorage.removeItem(STORAGE_KEYS.CHAT_HISTORY);
  } catch (error) {
    console.error('Error clearing chat history:', error);
  }
};
