import React from 'react';
import MarkdownRenderer from './MarkdownRenderer';

interface ExecutiveSummaryCardProps {
  content: string;
  onImageClick?: (imageSrc: string) => void;
}

const ExecutiveSummaryCard: React.FC<ExecutiveSummaryCardProps> = ({ content, onImageClick }) => {
  return (
    <div className="bg-gradient-to-br from-hro-50 to-hro-100 border border-hro-200 rounded-xl p-6 mb-8">
      <h2 className="text-lg font-semibold text-hro-900 mb-4 flex items-center gap-2">
        <span className="text-2xl">📋</span>
        Sumário Executivo
      </h2>
      <div className="text-hro-800 space-y-3">
        <MarkdownRenderer content={content} onImageClick={onImageClick} />
      </div>
    </div>
  );
};

export default ExecutiveSummaryCard;
