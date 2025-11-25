import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import MarkdownRenderer from './MarkdownRenderer';

interface CollapsibleContentProps {
  title: string;
  content: string;
  isExpanded?: boolean;
  onImageClick?: (imageSrc: string) => void;
}

const CollapsibleContent: React.FC<CollapsibleContentProps> = ({
  title,
  content,
  isExpanded = false,
  onImageClick,
}) => {
  const [expanded, setExpanded] = useState(isExpanded);

  return (
    <div className="border border-slate-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow mb-6">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between p-4 bg-slate-50 hover:bg-slate-100 transition-colors border-b border-slate-200"
      >
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
        <ChevronDownIcon
          className={`w-5 h-5 text-slate-600 transition-transform duration-300 ${
            expanded ? 'rotate-180' : ''
          }`}
        />
      </button>

      {expanded && (
        <div className="p-6 bg-white text-slate-700 animate-in fade-in duration-200" style={{
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
      )}
    </div>
  );
};

export default CollapsibleContent;
