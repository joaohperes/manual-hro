import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { MagnifyingGlassIcon, DocumentTextIcon, ClipboardDocumentCheckIcon, BookOpenIcon } from '@heroicons/react/24/outline';
import { useProtocols } from '../contexts/ProtocolContext';

const Protocols: React.FC = () => {
  const { protocols: allProtocols } = useProtocols();
  const [searchTerm, setSearchTerm] = useState('');

  // Logic to separate Protocols from Normatives
  const { protocols, normatives } = useMemo(() => {
    const filtered = allProtocols.filter(p => {
      const matchesSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            p.tags.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchesSearch;
    });

    const normativesList = filtered.filter(p => 
      p.category === 'Normativa' || 
      p.title.toLowerCase().startsWith('instrução normativa')
    );

    const protocolsList = filtered.filter(p => 
      p.category !== 'Normativa' && 
      !p.title.toLowerCase().startsWith('instrução normativa')
    );

    return { protocols: protocolsList, normatives: normativesList };
  }, [searchTerm]);

  return (
    <div className="space-y-8 pb-12">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Biblioteca de Documentos</h1>
        <p className="text-slate-500 mt-1">Consulte protocolos clínicos e instruções normativas do HRO.</p>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
        <input 
          type="text" 
          placeholder="O que você está procurando? (ex: Sepse, Torácica, Ramal...)"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-hro-500 focus:border-transparent shadow-sm text-lg"
        />
      </div>

      {/* Section: Protocolos Clínicos */}
      {protocols.length > 0 && (
        <section>
          <div className="flex items-center gap-2 mb-4">
             <BookOpenIcon className="w-6 h-6 text-hro-600" />
             <h2 className="text-xl font-bold text-slate-800">Protocolos Clínicos Assistenciais</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {protocols.map(protocol => (
              <Link 
                key={protocol.id}
                to={`/protocolos/${protocol.id}`}
                className="bg-white p-5 rounded-xl border border-slate-200 hover:border-hro-300 hover:shadow-md transition-all group flex flex-col h-full"
              >
                <div className="flex justify-between items-start mb-3">
                  <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                    <DocumentTextIcon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-medium px-2 py-1 bg-slate-100 text-slate-600 rounded-full">
                    {protocol.category}
                  </span>
                </div>
                <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-hro-700 transition-colors">
                  {protocol.title}
                </h3>
                <div className="mt-auto pt-3 flex flex-wrap gap-2">
                  {protocol.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="text-xs text-slate-500 bg-slate-50 px-2 py-1 rounded border border-slate-100">
                      #{tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Section: Instruções Normativas */}
      {normatives.length > 0 && (
        <section>
          <div className="flex items-center gap-2 mb-4 pt-4 border-t border-slate-200">
             <ClipboardDocumentCheckIcon className="w-6 h-6 text-slate-600" />
             <h2 className="text-xl font-bold text-slate-800">Instruções Normativas & Fluxos</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {normatives.map(doc => (
              <Link 
                key={doc.id}
                to={`/protocolos/${doc.id}`}
                className="bg-slate-50 p-5 rounded-xl border border-slate-200 hover:bg-white hover:border-slate-400 hover:shadow-sm transition-all group"
              >
                <h3 className="font-semibold text-base text-slate-900 mb-2 group-hover:text-slate-700">
                  {doc.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                   <span className="text-xs font-medium px-2 py-1 bg-slate-200 text-slate-600 rounded">
                      Normativa
                   </span>
                   {doc.tags.slice(0, 2).map(tag => (
                    <span key={tag} className="text-xs text-slate-500 px-2 py-1">
                      #{tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {protocols.length === 0 && normatives.length === 0 && (
        <div className="text-center py-12 bg-white rounded-xl border border-slate-200 border-dashed">
          <MagnifyingGlassIcon className="w-12 h-12 text-slate-300 mx-auto mb-3" />
          <h3 className="text-lg font-medium text-slate-900">Nenhum documento encontrado</h3>
          <p className="text-slate-500">Tente buscar por outros termos.</p>
          <button 
            onClick={() => setSearchTerm('')}
            className="mt-4 text-hro-600 font-medium hover:underline"
          >
            Limpar busca
          </button>
        </div>
      )}
    </div>
  );
};

export default Protocols;