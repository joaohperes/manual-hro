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
      lineHeight: '1.8',
      fontSize: '14px'
    }}>
      <style>{`
        .prose-content p {
          margin-bottom: 1rem;
          line-height: 1.8;
        }
        .prose-content h2 {
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
          font-size: 1.25rem;
          font-weight: 600;
          color: #1e293b;
        }
        .prose-content h3 {
          margin-top: 1.25rem;
          margin-bottom: 0.5rem;
          font-size: 1.1rem;
          font-weight: 600;
          color: #1e293b;
        }
        .prose-content ul,
        .prose-content ol {
          margin: 1rem 0;
          padding-left: 1.5rem;
        }
        .prose-content li {
          margin-bottom: 0.5rem;
          line-height: 1.8;
        }
        .prose-content blockquote {
          border-left: 4px solid #e2e8f0;
          padding-left: 1rem;
          margin: 1rem 0;
          color: #475569;
          font-style: italic;
        }
        .prose-content code {
          background-color: #f1f5f9;
          padding: 2px 6px;
          border-radius: 4px;
          font-family: 'Courier New', monospace;
          font-size: 0.9em;
        }
        .prose-content pre {
          background-color: #1e293b;
          color: #10b981;
          padding: 1rem;
          border-radius: 8px;
          overflow-x: auto;
          margin: 1rem 0;
        }
        .prose-content table {
          width: 100%;
          border-collapse: collapse;
          margin: 1rem 0;
        }
        .prose-content th {
          background-color: #f1f5f9;
          border: 1px solid #e2e8f0;
          padding: 0.75rem;
          text-align: left;
          font-weight: 600;
          color: #1e293b;
        }
        .prose-content td {
          border: 1px solid #e2e8f0;
          padding: 0.75rem;
          color: #475569;
        }
        .prose-content strong {
          font-weight: 700;
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
