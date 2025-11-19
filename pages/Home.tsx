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
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-hro-50 rounded-full -mr-16 -mt-16 opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Bem-vindo ao Manual HRO</h1>
          <p className="text-slate-600 max-w-2xl">
            Acesso centralizado aos protocolos clínicos, fluxos administrativos e contatos do Hospital Regional do Oeste. Use o chat inteligente para tirar dúvidas rápidas.
          </p>
          
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to={PageRoute.PROTOCOLS} className="inline-flex items-center px-4 py-2 bg-hro-600 text-white text-sm font-medium rounded-lg hover:bg-hro-700 transition-colors shadow-sm shadow-hro-200">
              <BookOpenIcon className="w-4 h-4 mr-2" />
              Acessar Protocolos
            </Link>
            <Link to={PageRoute.CONTACTS} className="inline-flex items-center px-4 py-2 bg-white text-slate-700 border border-slate-300 text-sm font-medium rounded-lg hover:bg-slate-50 transition-colors">
              <PhoneIcon className="w-4 h-4 mr-2" />
              Lista de Ramais
            </Link>
          </div>
        </div>
      </div>

      {/* Quick Stats/Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
          <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
            <ClockIcon className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="font-semibold text-slate-900">Escala Médica</h3>
          <p className="text-sm text-slate-500 mt-1 mb-3">Confira a escala atualizada dos profissionais de plantão hoje.</p>
          <a href="https://escala-hro.vercel.app/" target="_blank" rel="noreferrer" className="text-sm font-medium text-blue-600 hover:text-blue-800">Ver Escala &rarr;</a>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
          <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-100 transition-colors">
            <BookOpenIcon className="w-6 h-6 text-green-600" />
          </div>
          <h3 className="font-semibold text-slate-900">Protocolos Atualizados</h3>
          <p className="text-sm text-slate-500 mt-1 mb-3">{protocols.length} protocolos clínicos disponíveis para consulta.</p>
          <Link to={PageRoute.PROTOCOLS} className="text-sm font-medium text-green-600 hover:text-green-800">Buscar Protocolo &rarr;</Link>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
          <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-amber-100 transition-colors">
            <ExclamationTriangleIcon className="w-6 h-6 text-amber-600" />
          </div>
          <h3 className="font-semibold text-slate-900">Notificações</h3>
          <p className="text-sm text-slate-500 mt-1 mb-3">Nenhum aviso crítico ativo no momento para a unidade.</p>
          <span className="text-sm text-slate-400 cursor-not-allowed">Sem alertas</span>
        </div>
      </div>

      {/* Recent Updates */}
      <div>
        <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
          <ClockIcon className="w-5 h-5 mr-2 text-slate-400" />
          Atualizações Recentes
        </h2>
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm divide-y divide-slate-100">
          {recentProtocols.map((protocol) => (
            <Link 
              key={protocol.id} 
              to={`/protocolos/${protocol.id}`}
              className="flex items-center justify-between p-4 hover:bg-slate-50 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 bg-slate-100 rounded-lg text-slate-500">
                   <BookOpenIcon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium text-slate-900">{protocol.title}</h4>
                  <p className="text-sm text-slate-500 mt-0.5">
                    Categoria: <span className="text-slate-700 font-medium">{protocol.category}</span> • Atualizado em {new Date(protocol.lastUpdated).toLocaleDateString('pt-BR')}
                  </p>
                </div>
              </div>
              <div className="hidden sm:block text-slate-400">
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