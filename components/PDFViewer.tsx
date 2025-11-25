import React, { useState, useEffect } from 'react';
import * as pdfjsLib from 'pdfjs-dist';
import { ChevronLeftIcon, ChevronRightIcon, MagnifyingGlassMinusIcon, MagnifyingGlassPlusIcon } from '@heroicons/react/24/outline';

// Set up PDF.js worker
pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

interface PDFViewerProps {
  googleDriveFileId: string;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ googleDriveFileId }) => {
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [numPages, setNumPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [scale, setScale] = useState<number>(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [useFallback, setUseFallback] = useState(false);
  const [canvasRef, setCanvasRef] = React.useState<HTMLCanvasElement | null>(null);

  // Convert Google Drive ID to accessible PDF URL
  useEffect(() => {
    // Use the export=pdf endpoint which is more reliable for PDF.js
    const directUrl = `https://drive.google.com/uc?export=pdf&id=${googleDriveFileId}`;
    setPdfUrl(directUrl);
  }, [googleDriveFileId]);

  // Load and render PDF
  useEffect(() => {
    if (!pdfUrl || !canvasRef) return;

    const loadPDF = async () => {
      try {
        setLoading(true);

        // Use getDocument with the URL directly
        const loadingTask = pdfjsLib.getDocument({
          url: pdfUrl,
          withCredentials: false,
        });

        const pdf = await loadingTask.promise;
        setNumPages(pdf.numPages);

        // Render the current page
        const page = await pdf.getPage(currentPage);
        const viewport = page.getViewport({ scale });
        canvasRef.width = viewport.width;
        canvasRef.height = viewport.height;

        const context = canvasRef.getContext('2d');
        if (context) {
          await page.render({
            canvasContext: context,
            viewport: viewport,
          } as any).promise;
        }

        setError(null);
      } catch (err) {
        // If PDF.js fails due to CORS, fallback to Google Drive Preview
        console.error('PDF.js loading failed, using fallback:', err);
        setUseFallback(true);
        setError(null);
        setLoading(false);
      }
    };

    loadPDF();
  }, [pdfUrl, currentPage, scale, canvasRef]);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < numPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleZoomIn = () => {
    setScale(scale + 0.2);
  };

  const handleZoomOut = () => {
    if (scale > 0.5) {
      setScale(scale - 0.2);
    }
  };

  // Fallback to Google Drive Preview if PDF.js fails
  if (useFallback) {
    return (
      <div className="w-full bg-blue-50 border border-blue-200 rounded-lg overflow-hidden shadow-sm">
        <div className="p-4 bg-blue-50 border-b border-blue-200 text-sm text-blue-700">
          ℹ️ Usando visualização integrada do Google Drive
        </div>
        <iframe
          src={`https://drive.google.com/file/d/${googleDriveFileId}/preview`}
          className="w-full"
          style={{
            height: '600px',
            border: 'none',
            display: 'block',
          }}
          allow="autoplay"
        />
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full bg-red-50 border border-red-200 rounded-lg p-6 text-center">
        <p className="text-red-700 font-medium">{error}</p>
        <p className="text-red-600 text-sm mt-2">
          Certifique-se que o arquivo está compartilhado e acessível.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
      {/* Controls */}
      <div className="flex items-center justify-between p-4 bg-slate-50 border-b border-slate-200">
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrevPage}
            disabled={currentPage <= 1}
            className="p-2 rounded-lg text-slate-600 hover:bg-slate-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            title="Página anterior"
          >
            <ChevronLeftIcon className="w-5 h-5" />
          </button>

          <span className="text-sm font-medium text-slate-700 min-w-[100px] text-center">
            Página {currentPage} de {numPages}
          </span>

          <button
            onClick={handleNextPage}
            disabled={currentPage >= numPages}
            className="p-2 rounded-lg text-slate-600 hover:bg-slate-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            title="Próxima página"
          >
            <ChevronRightIcon className="w-5 h-5" />
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleZoomOut}
            disabled={scale <= 0.5}
            className="p-2 rounded-lg text-slate-600 hover:bg-slate-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            title="Zoom reduzido"
          >
            <MagnifyingGlassMinusIcon className="w-5 h-5" />
          </button>

          <span className="text-sm font-medium text-slate-700 min-w-[60px] text-center">
            {Math.round(scale * 100)}%
          </span>

          <button
            onClick={handleZoomIn}
            className="p-2 rounded-lg text-slate-600 hover:bg-slate-200 transition-colors"
            title="Zoom aumentado"
          >
            <MagnifyingGlassPlusIcon className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Canvas Container */}
      <div className="w-full overflow-auto bg-slate-100 flex items-center justify-center" style={{ height: '600px' }}>
        {loading && (
          <div className="flex items-center justify-center">
            <div className="text-center">
              <div className="w-10 h-10 rounded-full border-4 border-slate-200 border-t-blue-600 animate-spin mx-auto mb-3"></div>
              <p className="text-slate-600">Carregando PDF...</p>
            </div>
          </div>
        )}
        <canvas
          ref={setCanvasRef}
          className="max-w-full max-h-full shadow-lg"
          style={{ display: loading ? 'none' : 'block' }}
        />
      </div>

      {/* Info */}
      <div className="p-3 bg-blue-50 border-t border-blue-100 text-sm text-blue-700">
        ℹ️ Use os controles acima para navegar entre páginas e ajustar o zoom
      </div>
    </div>
  );
};

export default PDFViewer;
