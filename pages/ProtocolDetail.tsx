import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeftIcon, CalendarDaysIcon, ArrowDownTrayIcon, XMarkIcon } from '@heroicons/react/24/outline';
import MarkdownRenderer from '../components/MarkdownRenderer';
import CollapsibleContent from '../components/CollapsibleContent';
import { useProtocols } from '../contexts/ProtocolContext';

const ProtocolDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { getProtocol } = useProtocols();
  const protocol = id ? getProtocol(id) : undefined;
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setZoomedImage(null);
      }
    };

    if (zoomedImage) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [zoomedImage]);

  if (!protocol) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-slate-900">Protocolo não encontrado</h2>
        <Link to="/protocolos" className="text-blue-600 mt-4 inline-block hover:underline">Voltar para lista</Link>
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

  const handleDownloadFromGoogleDrive = () => {
    if (!protocol.googleDriveFileId) {
      alert('Arquivo no Google Drive não disponível.');
      return;
    }

    // Open Google Drive download link in a new tab
    const downloadUrl = `https://drive.google.com/uc?export=download&id=${protocol.googleDriveFileId}`;
    window.open(downloadUrl, '_blank');
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
        <Link to="/protocolos" className="flex items-center text-slate-500 hover:text-blue-600 transition-colors">
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
          {protocol.googleDriveFileId && (
            <button
              onClick={handleDownloadFromGoogleDrive}
              className="flex items-center px-3 py-1.5 text-sm bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 text-blue-700 transition-colors"
              title="Baixar do Google Drive"
            >
              <ArrowDownTrayIcon className="w-4 h-4 mr-2" />
              Google Drive
            </button>
          )}
        </div>
      </div>

      <article className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden print:shadow-none print:border-none">
        {/* Header */}
        <div className="p-6 md:p-10 border-b border-slate-100 bg-slate-50/50 print:bg-white">
          <div className="flex items-center gap-2 mb-4">
            <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide print:border print:border-slate-300 ${
                protocol.category === 'Normativa' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
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
            {/* Main content with fluxogram */}
            <MarkdownRenderer content={protocol.content} onImageClick={setZoomedImage} />

            {/* Collapsible summary section */}
            {protocol.executiveSummary && (
              <CollapsibleContent
                title="Conteúdo Detalhado"
                content={protocol.executiveSummary}
                isExpanded={false}
                onImageClick={setZoomedImage}
              />
            )}
        </div>

        {/* PDF Embed (if available) - After content */}
        {protocol.googleDriveFileId && (
          <div className="w-full bg-black border-t border-slate-100 flex justify-center" style={{ maxHeight: '800px', overflow: 'hidden', margin: '0', padding: '0' }}>
            <iframe
              src={`https://drive.google.com/file/d/${protocol.googleDriveFileId}/preview`}
              style={{
                width: '100%',
                height: '800px',
                border: 'none',
                display: 'block',
                margin: '-40px',
                padding: '0',
              }}
              allow="autoplay"
            />
          </div>
        )}

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

      {/* Image Zoom Modal */}
      {zoomedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-2 print:hidden"
          onClick={() => setZoomedImage(null)}
        >
          <div className="relative w-full h-full flex flex-col items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setZoomedImage(null)}
              className="absolute top-6 right-6 bg-white rounded-full p-2 hover:bg-slate-200 transition-colors z-10 shadow-lg"
              title="Fechar (Esc)"
            >
              <XMarkIcon className="w-6 h-6 text-slate-900" />
            </button>
            <img
              src={zoomedImage}
              alt="Imagem ampliada"
              className="max-w-[95vw] max-h-[95vh] object-contain rounded-lg shadow-2xl"
            />
            <p className="text-white text-sm mt-4 text-center">Clique fora ou pressione Esc para fechar</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProtocolDetail;