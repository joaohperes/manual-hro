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
    <div className="border border-blue-100 rounded overflow-hidden shadow-sm hover:shadow-md transition-all mb-3 hover:border-blue-300">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between p-2.5 bg-gradient-to-r from-blue-50 to-slate-50 hover:from-blue-100 hover:to-slate-100 transition-colors border-b border-blue-100"
      >
        <h3 className="text-sm font-bold text-blue-900">{title}</h3>
        <ChevronDownIcon
          className={`w-4 h-4 text-blue-600 transition-transform duration-300 ${
            expanded ? 'rotate-180' : ''
          }`}
        />
      </button>

      {expanded && (
        <div className="p-3 bg-white text-slate-700 animate-in fade-in duration-200" style={{
          lineHeight: '1.6',
          fontSize: '13px'
        }}>
          <style>{`
            .prose-content p {
              margin-bottom: 0.5rem;
              line-height: 1.6;
              color: #334155;
            }
            .prose-content h2 {
              margin-top: 0.75rem;
              margin-bottom: 0.4rem;
              font-size: 1.1rem;
              font-weight: 800;
              color: #1e40af;
              border-bottom: 2px solid #dbeafe;
              padding-bottom: 0.25rem;
            }
            .prose-content h3 {
              margin-top: 0.6rem;
              margin-bottom: 0.3rem;
              font-size: 0.95rem;
              font-weight: 700;
              color: #1e40af;
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
              color: #334155;
            }
            .prose-content li strong {
              color: #1e40af;
              font-weight: 800;
            }
            .prose-content blockquote {
              border-left: 4px solid #3b82f6;
              padding: 0.5rem 0.75rem;
              margin: 0.5rem 0;
              color: #1e3a8a;
              background-color: #eff6ff;
              border-radius: 4px;
              font-style: italic;
              font-size: 0.93rem;
            }
            .prose-content code {
              background-color: #f0f9ff;
              padding: 2px 4px;
              border-radius: 3px;
              font-family: 'Courier New', monospace;
              font-size: 0.85em;
              color: #0369a1;
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
              box-shadow: 0 1px 2px rgba(0,0,0,0.08);
              border-radius: 4px;
              overflow: hidden;
              font-size: 0.92rem;
            }
            .prose-content th {
              background: linear-gradient(135deg, #e0f2fe 0%, #f0f9ff 100%);
              border: 1px solid #bae6fd;
              padding: 0.4rem 0.5rem;
              text-align: left;
              font-weight: 800;
              color: #0c4a6e;
            }
            .prose-content td {
              border: 1px solid #e0f2fe;
              padding: 0.4rem 0.5rem;
              color: #334155;
            }
            .prose-content tr:nth-child(even) {
              background-color: #f8fafc;
            }
            .prose-content strong {
              font-weight: 800;
              color: #1e40af;
            }
            .prose-content em {
              font-style: italic;
              color: #64748b;
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
