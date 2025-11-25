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
        <div className="p-6 bg-white text-slate-700 space-y-3 prose prose-slate max-w-none prose-p:text-sm animate-in fade-in duration-200">
          <MarkdownRenderer content={content} onImageClick={onImageClick} />
        </div>
      )}
    </div>
  );
};

export default CollapsibleContent;
