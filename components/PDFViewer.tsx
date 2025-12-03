import React from 'react';

interface PDFViewerProps {
  googleDriveFileId: string;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ googleDriveFileId }) => {
  return (
    <div className="w-full bg-white rounded border border-slate-200 shadow-sm overflow-hidden">
      {/* Header */}
      <div className="p-2 bg-slate-50 border-b border-slate-200">
        <p className="text-xs text-slate-600 font-medium">
          Visualização do Google Drive
        </p>
      </div>

      {/* Google Drive Preview Iframe */}
      <iframe
        src={`https://drive.google.com/file/d/${googleDriveFileId}/preview`}
        className="w-full"
        style={{
          height: '400px',
          border: 'none',
          display: 'block',
        }}
        allow="autoplay"
        title="PDF Document Preview"
      />

      {/* Info Footer */}
      <div className="p-2 bg-blue-50 border-t border-blue-100 text-xs text-blue-700">
        <p className="mb-1">
          ℹ️ Documento do Google Drive
        </p>
        <a
          href={`https://drive.google.com/file/d/${googleDriveFileId}/view`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 font-medium underline"
        >
          Abrir em nova aba
        </a>
      </div>
    </div>
  );
};

export default PDFViewer;
