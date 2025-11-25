import React from 'react';
import MarkdownRenderer from './MarkdownRenderer';

interface ExecutiveSummaryCardProps {
  content: string;
  onImageClick?: (imageSrc: string) => void;
}

const ExecutiveSummaryCard: React.FC<ExecutiveSummaryCardProps> = ({ content, onImageClick }) => {
  return (
    <div className="border-l-4 border-blue-600 bg-white rounded-r-lg p-6 mb-8 shadow-md hover:shadow-lg transition-shadow">
      <h2 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
        <span className="w-1 h-6 bg-blue-600 rounded-full"></span>
        Sumário Executivo
      </h2>
      <div className="text-slate-700 space-y-3 prose prose-slate max-w-none prose-p:text-sm">
        <MarkdownRenderer content={content} onImageClick={onImageClick} />
      </div>
    </div>
  );
};

export default ExecutiveSummaryCard;
