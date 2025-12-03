import React from 'react';
import MarkdownRenderer from './MarkdownRenderer';

interface StyledContentProps {
  content: string;
  onImageClick?: (imageSrc: string) => void;
}

const StyledContent: React.FC<StyledContentProps> = ({
  content,
  onImageClick,
}) => {
  return (
    <div style={{
      lineHeight: '1.6',
      fontSize: '13px'
    }}>
      <style>{`
        .prose-content p {
          margin-bottom: 0.5rem;
          line-height: 1.6;
        }
        .prose-content h2 {
          margin-top: 0.75rem;
          margin-bottom: 0.4rem;
          font-size: 1.1rem;
          font-weight: 800;
          color: #1e293b;
        }
        .prose-content h3 {
          margin-top: 0.6rem;
          margin-bottom: 0.3rem;
          font-size: 0.95rem;
          font-weight: 700;
          color: #1e293b;
        }
        .prose-content h4 {
          margin-top: 0.5rem;
          margin-bottom: 0.25rem;
          font-size: 0.9rem;
          font-weight: 700;
          color: #2563eb;
        }
        .prose-content ul,
        .prose-content ol {
          margin: 0.5rem 0;
          padding-left: 1.5rem;
        }
        .prose-content li {
          margin-bottom: 0.25rem;
          line-height: 1.6;
        }
        .prose-content blockquote {
          border-left: 4px solid #e2e8f0;
          padding: 0.5rem 0.75rem;
          margin: 0.5rem 0;
          color: #475569;
          font-style: italic;
          font-size: 0.93rem;
        }
        .prose-content code {
          background-color: #f1f5f9;
          padding: 2px 4px;
          border-radius: 3px;
          font-family: 'Courier New', monospace;
          font-size: 0.85em;
          font-weight: 600;
        }
        .prose-content pre {
          background-color: #1e293b;
          color: #10b981;
          padding: 0.6rem;
          border-radius: 6px;
          overflow-x: auto;
          margin: 0.5rem 0;
          font-size: 0.85rem;
        }
        .prose-content table {
          width: 100%;
          border-collapse: collapse;
          margin: 0.5rem 0;
          font-size: 0.92rem;
        }
        .prose-content th {
          background-color: #f1f5f9;
          border: 1px solid #e2e8f0;
          padding: 0.4rem 0.5rem;
          text-align: left;
          font-weight: 800;
          color: #1e293b;
        }
        .prose-content td {
          border: 1px solid #e2e8f0;
          padding: 0.4rem 0.5rem;
          color: #475569;
        }
        .prose-content strong {
          font-weight: 800;
          color: #1e293b;
        }
        .prose-content em {
          font-style: italic;
          color: #475569;
        }
      `}</style>
      <div className="prose-content">
        <MarkdownRenderer content={content} onImageClick={onImageClick} />
      </div>
    </div>
  );
};

export default StyledContent;
