import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { MagnifyingGlassIcon, ClipboardDocumentCheckIcon } from '@heroicons/react/24/outline';
import { useProtocols } from '../contexts/ProtocolContext';
import PageContentMenu from '../components/PageContentMenu';

const Normatives: React.FC = () => {
  const { protocols: allProtocols } = useProtocols();
  const [searchTerm, setSearchTerm] = useState('');

  // Filter only normatives
  const normatives = useMemo(() => {
    return allProtocols.filter(p => {
      const isNormativa = p.category === 'Normativa' || p.title.toLowerCase().startsWith('instrução normativa');
      const matchesSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            p.tags.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()));
      return isNormativa && matchesSearch;
    });
  }, [searchTerm, allProtocols]);

  return (
    <div className="space-y-8 pb-12">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Instruções Normativas</h1>
        <p className="text-slate-600 mt-2">Consulte todas as instruções normativas do HRO.</p>
      </div>

      {/* Content Menu */}
      {normatives.length > 0 && (
        <PageContentMenu
          title="Instruções Normativas"
          items={normatives}
          basePath="/normativas"
        />
      )}

      {/* Search Bar */}
      <div className="relative">
        <MagnifyingGlassIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
        <input
          type="text"
          placeholder="Buscar por normativa, tag ou categoria..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-12 pr-4 py-4 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent shadow-sm text-base"
        />
      </div>

      {/* Normativas Grid */}
      {normatives.length > 0 && (
        <section>
          <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-green-600">
            <div className="p-2 bg-green-50 rounded-lg text-green-600">
              <ClipboardDocumentCheckIcon className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Lista de Instruções Normativas</h2>
            <span className="ml-auto text-sm font-semibold text-slate-600 bg-slate-100 px-3 py-1 rounded-full">
              {normatives.length} {normatives.length === 1 ? 'documento' : 'documentos'}
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {normatives.map(doc => (
              <Link
                key={doc.id}
                to={`/normativas/${doc.id}`}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:border-l-4 hover:border-green-600 transition-all border-l-4 border-transparent"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-green-50 text-green-600 rounded-lg">
                    <ClipboardDocumentCheckIcon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold px-3 py-1 bg-green-100 text-green-700 rounded-full uppercase tracking-wide">
                    Normativa
                  </span>
                </div>
                <h3 className="font-bold text-lg text-slate-900 mb-3 line-clamp-2">
                  {doc.title}
                </h3>
                <div className="flex flex-wrap gap-2 pt-3 border-t border-slate-100">
                  {doc.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="text-xs text-slate-600 bg-slate-50 px-2 py-1 rounded border border-slate-200">
                      #{tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {normatives.length === 0 && (
        <div className="text-center py-16 bg-white rounded-lg border-2 border-dashed border-slate-300">
          <MagnifyingGlassIcon className="w-16 h-16 text-slate-300 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-slate-900 mb-2">Nenhuma instrução normativa encontrada</h3>
          <p className="text-slate-600 mb-6">Tente buscar por outros termos ou palavras-chave.</p>
          <button
            onClick={() => setSearchTerm('')}
            className="px-6 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
          >
            Limpar busca
          </button>
        </div>
      )}
    </div>
  );
};

export default Normatives;
