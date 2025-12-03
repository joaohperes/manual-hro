import React from 'react';

interface PDFViewerProps {
  googleDriveFileId: string;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ googleDriveFileId }) => {
  return (
    <div className="w-full bg-white rounded border border-slate-200 shadow-sm overflow-hidden">
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
    </div>
  );
};

export default PDFViewer;
