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
        <div className="p-6 bg-white text-slate-700 animate-in fade-in duration-200 prose prose-slate max-w-none prose-p:text-sm prose-p:leading-relaxed prose-p:mb-4 prose-h2:mt-6 prose-h2:mb-3 prose-h3:mt-5 prose-h3:mb-2 prose-ul:my-3 prose-li:my-1 prose-blockquote:border-l-4 prose-blockquote:pl-4 prose-blockquote:py-2 prose-blockquote:my-3 prose-code:bg-slate-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-pre:bg-slate-900 prose-pre:text-emerald-400 prose-table:border-collapse prose-table:w-full prose-td:border prose-td:border-slate-200 prose-td:px-3 prose-td:py-2 prose-th:bg-slate-100 prose-th:border prose-th:border-slate-200 prose-th:px-3 prose-th:py-2">
          <MarkdownRenderer content={content} onImageClick={onImageClick} />
        </div>
      )}
    </div>
  );
};

export default CollapsibleContent;
