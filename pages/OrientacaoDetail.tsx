import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeftIcon, CalendarDaysIcon, ArrowDownTrayIcon, XMarkIcon } from '@heroicons/react/24/outline';
import StyledContent from '../components/StyledContent';
import PDFViewer from '../components/PDFViewer';
import DiscreetDisclaimer from '../components/DiscreetDisclaimer';
import { useProtocols } from '../contexts/ProtocolContext';

const OrientacaoDetail: React.FC = () => {
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
        <h2 className="text-2xl font-bold text-slate-900">Orientação não encontrada</h2>
        <Link to="/orientacoes" className="text-blue-600 mt-4 inline-block hover:underline">Voltar para lista</Link>
      </div>
    );
  }

  const handleDownloadPdf = () => {
    if (!protocol.pdfUrl) {
      alert('Arquivo PDF não disponível para download.');
      return;
    }

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
    <div className="max-w-4xl mx-auto pb-8">
      <div className="mb-3 flex items-center justify-between print:hidden">
        <Link to="/orientacoes" className="flex items-center text-slate-500 hover:text-blue-600 transition-colors">
          <ArrowLeftIcon className="w-4 h-4 mr-1" />
          Voltar
        </Link>
        <div className="flex items-center gap-2">
          {protocol.pdfUrl && (
            <button
              onClick={handleDownloadPdf}
              className="flex items-center px-2 py-1 text-xs bg-blue-50 border border-blue-200 rounded hover:bg-blue-100 text-blue-700 transition-colors"
              title={`Download: ${protocol.pdfFileName || 'orientacao.pdf'} (${formatFileSize(protocol.pdfSize)})`}
            >
              <ArrowDownTrayIcon className="w-3 h-3 mr-1" />
              Baixar PDF
            </button>
          )}
          {protocol.googleDriveFileId && (
            <button
              onClick={handleDownloadFromGoogleDrive}
              className="flex items-center px-2 py-1 text-xs bg-blue-50 border border-blue-200 rounded hover:bg-blue-100 text-blue-700 transition-colors"
              title="Baixar do Google Drive"
            >
              <ArrowDownTrayIcon className="w-3 h-3 mr-1" />
              Google Drive
            </button>
          )}
        </div>
      </div>

      <article className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden print:shadow-none print:border-none">
        {/* Header */}
        <div className="p-3 md:p-4 border-b border-slate-100 bg-blue-50/50 print:bg-white">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2 py-0.5 rounded-full text-xs font-bold uppercase tracking-wide print:border print:border-blue-300 bg-blue-100 text-blue-700">
              Orientação
            </span>
            <span className="flex items-center text-xs text-slate-500">
              <CalendarDaysIcon className="w-3 h-3 mr-1" />
              Atualizado em {new Date(protocol.lastUpdated).toLocaleDateString('pt-BR')}
            </span>
          </div>
          <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-slate-900 mb-2 leading-tight">{protocol.title}</h1>
          <div className="flex flex-wrap gap-1">
             {protocol.tags.map(tag => (
                 <span key={tag} className="text-xs text-slate-500 bg-white px-1.5 py-0.5 rounded border border-slate-200">#{tag}</span>
             ))}
          </div>
        </div>

        {/* Content Body */}
        <div className="p-3 md:p-4 text-slate-700">
          <StyledContent content={protocol.content} onImageClick={setZoomedImage} />
        </div>

        {/* PDF Viewer (if available) */}
        {protocol.googleDriveFileId && (
          <div className="p-3 md:p-4 border-t border-slate-100">
            <h2 className="text-base font-bold text-slate-900 mb-2">Documento Completo</h2>
            <PDFViewer googleDriveFileId={protocol.googleDriveFileId} />
          </div>
        )}

        {/* Footer Disclaimer */}
        <div className="border-t border-yellow-100 bg-yellow-50/30">
          <DiscreetDisclaimer
            title="Aviso Legal"
            content="Este documento é uma orientação geral do HRO. As recomendações aqui apresentadas servem como guia operacional."
          />
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

export default OrientacaoDetail;
