import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeftIcon, CalendarDaysIcon, PrinterIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import MarkdownRenderer from '../components/MarkdownRenderer';
import { useProtocols } from '../contexts/ProtocolContext';

const ProtocolDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { getProtocol } = useProtocols();
  const protocol = id ? getProtocol(id) : undefined;

  if (!protocol) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-slate-900">Protocolo não encontrado</h2>
        <Link to="/protocolos" className="text-hro-600 mt-4 inline-block hover:underline">Voltar para lista</Link>
      </div>
    );
  }

  const handleDownloadPdf = () => {
    if (!protocol.pdfUrl) {
      alert('Arquivo PDF não disponível para download.');
      return;
    }

    // Create a temporary anchor element to trigger download
    const a = document.createElement('a');
    a.href = protocol.pdfUrl;
    a.download = protocol.pdfFileName || `${protocol.id}.pdf`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const formatFileSize = (bytes?: number): string => {
    if (!bytes) return '';
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };


  return (
    <div className="max-w-4xl mx-auto pb-12">
      <div className="mb-6 flex items-center justify-between print:hidden">
        <Link to="/protocolos" className="flex items-center text-slate-500 hover:text-hro-600 transition-colors">
          <ArrowLeftIcon className="w-4 h-4 mr-1" />
          Voltar
        </Link>
        <div className="flex items-center gap-2">
          {protocol.pdfUrl && (
            <button
              onClick={handleDownloadPdf}
              className="flex items-center px-3 py-1.5 text-sm bg-green-50 border border-green-200 rounded-lg hover:bg-green-100 text-green-700 transition-colors"
              title={`Download: ${protocol.pdfFileName || 'protocolo.pdf'} (${formatFileSize(protocol.pdfSize)})`}
            >
              <ArrowDownTrayIcon className="w-4 h-4 mr-2" />
              Baixar PDF
            </button>
          )}
          <button
            onClick={() => window.print()}
            className="flex items-center px-3 py-1.5 text-sm bg-white border border-slate-200 rounded-lg hover:bg-slate-50 text-slate-600 transition-colors"
          >
            <PrinterIcon className="w-4 h-4 mr-2" />
            Imprimir
          </button>
        </div>
      </div>

      <article className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden print:shadow-none print:border-none">
        {/* Header */}
        <div className="p-6 md:p-10 border-b border-slate-100 bg-slate-50/50 print:bg-white">
          <div className="flex items-center gap-2 mb-4">
            <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide print:border print:border-slate-300 ${
                protocol.category === 'Normativa' ? 'bg-slate-200 text-slate-700' : 'bg-hro-100 text-hro-700'
            }`}>
              {protocol.category}
            </span>
            <span className="flex items-center text-xs text-slate-500">
              <CalendarDaysIcon className="w-3.5 h-3.5 mr-1" />
              Atualizado em {new Date(protocol.lastUpdated).toLocaleDateString('pt-BR')}
            </span>
          </div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-4 leading-tight">{protocol.title}</h1>
          <div className="flex flex-wrap gap-2">
             {protocol.tags.map(tag => (
                 <span key={tag} className="text-xs text-slate-500 bg-white px-2 py-1 rounded border border-slate-200">#{tag}</span>
             ))}
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 md:p-10 text-slate-700">
            <MarkdownRenderer content={protocol.content} />
        </div>

        {/* Footer Disclaimer */}
        <div className="p-6 bg-yellow-50 border-t border-yellow-100 print:hidden">
          <div className="flex">
             <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                   <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
             </div>
             <div className="ml-3">
                <h3 className="text-sm font-medium text-yellow-800">Aviso Legal</h3>
                <div className="mt-1 text-sm text-yellow-700">
                   <p>Este documento é um guia de referência rápida para uso interno. A decisão clínica final deve ser sempre individualizada pelo profissional responsável.</p>
                </div>
             </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ProtocolDetail;