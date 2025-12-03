import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

interface DiscreetDisclaimerProps {
  title: string;
  content: string;
}

const DiscreetDisclaimer: React.FC<DiscreetDisclaimerProps> = ({ title, content }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="print:hidden">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full p-1.5 flex items-center gap-2 text-left hover:bg-yellow-100/50 transition-colors group"
      >
        <svg className="h-3 w-3 text-yellow-600 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
        </svg>
        <span className="text-xs font-medium text-yellow-800 group-hover:text-yellow-900">{title}</span>
        <ChevronDownIcon
          className={`h-3 w-3 text-yellow-600 transition-transform flex-shrink-0 ml-auto ${
            expanded ? 'rotate-180' : ''
          }`}
        />
      </button>

      {expanded && (
        <div className="px-3 py-1.5 bg-yellow-50 border-t border-yellow-100 animate-in fade-in duration-200">
          <p className="text-xs text-yellow-700 leading-relaxed">{content}</p>
        </div>
      )}
    </div>
  );
};

export default DiscreetDisclaimer;
