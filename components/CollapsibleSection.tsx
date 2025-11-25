import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

interface CollapsibleSectionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border border-slate-200 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-6 py-4 bg-slate-50 hover:bg-slate-100 transition-colors"
      >
        <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
        <ChevronDownIcon
          className={`w-5 h-5 text-slate-600 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-white border-t border-slate-200">
          {children}
        </div>
      )}
    </div>
  );
};

export default CollapsibleSection;
