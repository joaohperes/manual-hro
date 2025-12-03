import React, { useState, useMemo } from 'react';
import { MagnifyingGlassIcon, LightBulbIcon } from '@heroicons/react/24/outline';
import { useProtocols } from '../contexts/ProtocolContext';
import CompactContentCard from '../components/CompactContentCard';

const Orientacoes: React.FC = () => {
  const { protocols: allProtocols } = useProtocols();
  const [searchTerm, setSearchTerm] = useState('');

  // Filter only orientações
  const orientacoes = useMemo(() => {
    return allProtocols.filter(p => {
      const isOrientacao = p.category === 'Orientação';
      const matchesSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            p.tags.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()));
      return isOrientacao && matchesSearch;
    });
  }, [searchTerm, allProtocols]);

  return (
    <div className="space-y-8 pb-12">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Orientações Gerais</h1>
        <p className="text-slate-600 mt-2">Diretrizes operacionais e recomendações para o funcionamento do HRO.</p>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <MagnifyingGlassIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
        <input
          type="text"
          placeholder="Buscar por orientação, tag ou categoria..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-12 pr-4 py-4 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent shadow-sm text-base"
        />
      </div>

      {/* Orientações List */}
      {orientacoes.length > 0 && (
        <section>
          <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-300">
            <LightBulbIcon className="w-5 h-5 text-blue-600" />
            <h2 className="text-lg font-semibold text-slate-900">Orientações</h2>
            <span className="ml-auto text-xs font-semibold text-slate-600 bg-slate-100 px-2 py-1 rounded-full">
              {orientacoes.length}
            </span>
          </div>
          <div className="space-y-1">
            {orientacoes.map(doc => (
              <CompactContentCard
                key={doc.id}
                id={doc.id}
                title={doc.title}
                tags={doc.tags}
                basePath="/orientacoes"
                borderColor="border-blue-600"
              />
            ))}
          </div>
        </section>
      )}

      {orientacoes.length === 0 && (
        <div className="text-center py-16 bg-white rounded-lg border-2 border-dashed border-slate-300">
          <MagnifyingGlassIcon className="w-16 h-16 text-slate-300 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-slate-900 mb-2">Nenhuma orientação encontrada</h3>
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

export default Orientacoes;
