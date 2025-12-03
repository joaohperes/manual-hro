import React from 'react';

interface ClinicalGridProps {
  items: string[];
  title?: string;
}

const ClinicalGrid: React.FC<ClinicalGridProps> = ({ items, title }) => {
  return (
    <div className="my-4">
      {title && <h3 className="font-bold text-slate-900 mb-3">{title}</h3>}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-slate-50 border border-slate-200 rounded-md p-3 text-sm text-slate-700 hover:bg-slate-100 transition-colors"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClinicalGrid;
