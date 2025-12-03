import React, { useState, useMemo, useRef } from 'react';
import { Link } from 'react-router-dom';
import { MagnifyingGlassIcon, DocumentTextIcon, ClipboardDocumentCheckIcon, BookOpenIcon } from '@heroicons/react/24/outline';
import { useProtocols } from '../contexts/ProtocolContext';
import TableOfContents from '../components/TableOfContents';

const Protocols: React.FC = () => {
  const { protocols: allProtocols } = useProtocols();
  const [searchTerm, setSearchTerm] = useState('');
  const contentRef = useRef<HTMLDivElement>(null);

  // Filter only clinical protocols (not normatives or orientações)
  const protocols = useMemo(() => {
    return allProtocols.filter(p => {
      const isNotNormativa = p.category !== 'Normativa' && p.category !== 'Orientação' && !p.title.toLowerCase().startsWith('instrução normativa');
      const matchesSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            p.tags.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()));
      return isNotNormativa && matchesSearch;
    });
  }, [searchTerm, allProtocols]);

  const handleSelectItem = (id: string) => {
    const element = document.getElementById(`protocolo-${id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="space-y-8 pb-12">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Protocolos Clínicos</h1>
        <p className="text-slate-600 mt-2">Consulte todos os protocolos clínicos do HRO.</p>
      </div>

      {/* Table of Contents */}
      {protocols.length > 0 && (
        <TableOfContents
          items={protocols}
          onSelectItem={handleSelectItem}
          title="Lista de Protocolos"
        />
      )}

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

      {/* Protocols Grid */}
      {protocols.length > 0 && (
        <section>
          <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-blue-600">
            <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
              <BookOpenIcon className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Lista de Protocolos</h2>
            <span className="ml-auto text-sm font-semibold text-slate-600 bg-slate-100 px-3 py-1 rounded-full">
              {protocols.length} {protocols.length === 1 ? 'protocolo' : 'protocolos'}
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5" ref={contentRef}>
            {protocols.map(protocol => (
              <div
                key={protocol.id}
                id={`protocolo-${protocol.id}`}
              >
                <Link
                  to={`/protocolos/${protocol.id}`}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:border-l-4 hover:border-blue-600 transition-all border-l-4 border-transparent block h-full"
                >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
                    <DocumentTextIcon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold px-3 py-1 bg-blue-100 text-blue-700 rounded-full uppercase tracking-wide">
                    {protocol.category}
                  </span>
                </div>
                <h3 className="font-bold text-lg text-slate-900 mb-3 line-clamp-2">
                  {protocol.title}
                </h3>
                <div className="flex flex-wrap gap-2 pt-3 border-t border-slate-100">
                  {protocol.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="text-xs text-slate-600 bg-slate-50 px-2 py-1 rounded border border-slate-200">
                      #{tag}
                    </span>
                  ))}
                </div>
                </Link>
              </div>
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