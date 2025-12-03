import React from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpenIcon,
  PhoneIcon,
  ClockIcon,
  ExclamationTriangleIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline';
import { PageRoute } from '../types';
import { useProtocols } from '../contexts/ProtocolContext';

const Home: React.FC = () => {
  const { protocols } = useProtocols();

  // Sort by lastUpdated (descending) to show the newest protocols first
  const recentProtocols = [...protocols]
    .sort((a, b) => new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime())
    .slice(0, 3);

  return (
    <div className="space-y-6">
      {/* Compact Welcome Bar */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg p-4 shadow-md">
        <p className="text-sm text-blue-100">
          Acesso centralizado aos protocolos clínicos, fluxos administrativos e contatos do HRO
        </p>
      </div>

      {/* Navigation Cards - Above the Fold */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Link to={PageRoute.PROTOCOLS} className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow border-l-4 border-blue-600 cursor-pointer block">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-slate-900 text-lg">Protocolos</h3>
            <BookOpenIcon className="w-8 h-8 text-blue-600" />
          </div>
          <p className="text-3xl font-bold text-slate-900 mb-1">{protocols.length}</p>
          <p className="text-sm text-slate-600">Protocolos clínicos disponíveis</p>
        </Link>

        <a href="https://escala-hro.vercel.app/" target="_blank" rel="noreferrer" className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow border-l-4 border-green-600 cursor-pointer block">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-slate-900 text-lg">Escala</h3>
            <ClockIcon className="w-8 h-8 text-green-600" />
          </div>
          <p className="text-slate-600 text-sm mb-3">Acesse a escala médica atualizada</p>
          <span className="text-sm font-semibold text-green-600 hover:text-green-800">Ver Escala →</span>
        </a>

        <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow border-l-4 border-emerald-600">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-slate-900 text-lg">Status</h3>
            <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
          </div>
          <p className="text-emerald-700 font-semibold mb-1">Operacional</p>
          <p className="text-sm text-slate-600">Sistema funcionando normalmente</p>
        </div>
      </div>

      {/* Recent Updates */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
          <ClockIcon className="w-6 h-6 mr-3 text-blue-600" />
          Atualizações Recentes
        </h2>
        <div className="space-y-3">
          {recentProtocols.map((protocol) => (
            <Link
              key={protocol.id}
              to={`/protocolos/${protocol.id}`}
              className="flex items-center gap-4 p-5 bg-white rounded-lg shadow-md hover:shadow-lg hover:border-l-4 hover:border-blue-600 transition-all border-l-4 border-transparent"
            >
              <div className="p-3 bg-blue-50 rounded-lg text-blue-600">
                <BookOpenIcon className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-slate-900">{protocol.title}</h4>
                <p className="text-sm text-slate-500 mt-1">
                  <span className="text-blue-600 font-medium">{protocol.category}</span> • {new Date(protocol.lastUpdated).toLocaleDateString('pt-BR')}
                </p>
              </div>
              <div className="hidden sm:block text-slate-300">
                <MagnifyingGlassIcon className="w-5 h-5" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;