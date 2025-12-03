import React, { useState, useMemo } from 'react';
import { MagnifyingGlassIcon, BookOpenIcon } from '@heroicons/react/24/outline';
import { useProtocols } from '../contexts/ProtocolContext';
import CompactContentCard from '../components/CompactContentCard';

const Protocols: React.FC = () => {
  const { protocols: allProtocols } = useProtocols();
  const [searchTerm, setSearchTerm] = useState('');

  // Filter only clinical protocols (not normatives or orientações)
  const protocols = useMemo(() => {
    return allProtocols.filter(p => {
      const isNotNormativa = p.category !== 'Normativa' && p.category !== 'Orientação' && !p.title.toLowerCase().startsWith('instrução normativa');
      const matchesSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            p.tags.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()));
      return isNotNormativa && matchesSearch;
    });
  }, [searchTerm, allProtocols]);

  return (
    <div className="space-y-8 pb-12">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Protocolos Clínicos</h1>
        <p className="text-slate-600 mt-2">Consulte todos os protocolos clínicos do HRO.</p>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <MagnifyingGlassIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
        <input
          type="text"
          placeholder="Buscar por protocolo, tag ou categoria..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-12 pr-4 py-4 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent shadow-sm text-base"
        />
      </div>

      {/* Protocols List */}
      {protocols.length > 0 && (
        <section>
          <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-300">
            <BookOpenIcon className="w-5 h-5 text-blue-600" />
            <h2 className="text-lg font-semibold text-slate-900">Protocolos</h2>
            <span className="ml-auto text-xs font-semibold text-slate-600 bg-slate-100 px-2 py-1 rounded-full">
              {protocols.length}
            </span>
          </div>
          <div className="space-y-1">
            {protocols.map(protocol => (
              <CompactContentCard
                key={protocol.id}
                id={protocol.id}
                title={protocol.title}
                tags={protocol.tags}
                basePath="/protocolos"
              />
            ))}
          </div>
        </section>
      )}

      {protocols.length === 0 && (
        <div className="text-center py-16 bg-white rounded-lg border-2 border-dashed border-slate-300">
          <MagnifyingGlassIcon className="w-16 h-16 text-slate-300 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-slate-900 mb-2">Nenhum protocolo encontrado</h3>
          <p className="text-slate-600 mb-6">Tente buscar por outros termos ou palavras-chave.</p>
          <button
            onClick={() => setSearchTerm('')}
            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Limpar busca
          </button>
        </div>
      )}
    </div>
  );
};

export default Protocols;