import React, { createContext, useContext, useState, useEffect } from 'react';
import { Protocol } from '../types';
import { MOCK_PROTOCOLS } from '../data/mockContent';
import { getProtocolsFromStorage, saveProtocolsToStorage } from '../utils/localStorage';

interface ProtocolContextType {
  protocols: Protocol[];
  addProtocol: (protocol: Protocol) => void;
  updateProtocol: (id: string, protocol: Protocol) => void;
  deleteProtocol: (id: string) => void;
  getProtocol: (id: string) => Protocol | undefined;
  resetToDefault: () => void;
}

const ProtocolContext = createContext<ProtocolContextType | undefined>(undefined);

export const ProtocolProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initialize with stored protocols or mock data
  const [protocols, setProtocols] = useState<Protocol[]>(() => {
    const stored = getProtocolsFromStorage();
    return stored || [...MOCK_PROTOCOLS];
  });

  // Persist protocols whenever they change
  useEffect(() => {
    saveProtocolsToStorage(protocols);
  }, [protocols]);

  const addProtocol = (protocol: Protocol) => {
    setProtocols(prev => {
      const exists = prev.find(p => p.id === protocol.id);
      if (exists) return prev;
      return [protocol, ...prev];
    });
  };

  const updateProtocol = (id: string, updatedProtocol: Protocol) => {
    setProtocols(prev =>
      prev.map(p => (p.id === id ? updatedProtocol : p))
    );
  };

  const deleteProtocol = (id: string) => {
    setProtocols(prev => prev.filter(p => p.id !== id));
  };

  const getProtocol = (id: string) => {
    return protocols.find(p => p.id === id);
  };

  const resetToDefault = () => {
    setProtocols([...MOCK_PROTOCOLS]);
  };

  return (
    <ProtocolContext.Provider
      value={{
        protocols,
        addProtocol,
        updateProtocol,
        deleteProtocol,
        getProtocol,
        resetToDefault,
      }}
    >
      {children}
    </ProtocolContext.Provider>
  );
};

export const useProtocols = () => {
  const context = useContext(ProtocolContext);
  if (!context) {
    throw new Error('useProtocols deve ser usado dentro de ProtocolProvider');
  }
  return context;
};
