import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

interface TableOfContentsItem {
  id: string;
  title: string;
  tags: string[];
}

interface TableOfContentsProps {
  items: TableOfContentsItem[];
  onSelectItem: (id: string) => void;
  emptyMessage?: string;
  title?: string;
}

const TableOfContents: React.FC<TableOfContentsProps> = ({
  items,
  onSelectItem,
  emptyMessage = 'Nenhum item encontrado',
  title = 'Lista de Conteúdos',
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-lg border border-slate-200 shadow-sm">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between px-4 py-3 hover:bg-slate-50 transition-colors group"
      >
        <div className="flex items-center gap-2">
          <h3 className="font-semibold text-slate-900">{title}</h3>
          <span className="text-sm text-slate-600 bg-slate-100 px-2 py-0.5 rounded-full">
            {items.length}
          </span>
        </div>
        <ChevronDownIcon
          className={`w-5 h-5 text-slate-600 transition-transform ${
            isExpanded ? 'rotate-180' : ''
          }`}
        />
      </button>

      {isExpanded && (
        <div className="border-t border-slate-200 max-h-96 overflow-y-auto">
          {items.length > 0 ? (
            <ul className="divide-y divide-slate-100">
              {items.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      onSelectItem(item.id);
                      setIsExpanded(false);
                    }}
                    className="w-full text-left px-4 py-3 hover:bg-slate-50 transition-colors group"
                  >
                    <h4 className="font-medium text-slate-900 text-sm mb-1 group-hover:text-blue-600">
                      {item.title}
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {item.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs text-slate-500 bg-slate-50 px-1.5 py-0.5 rounded"
                        >
                          #{tag}
                        </span>
                      ))}
                      {item.tags.length > 2 && (
                        <span className="text-xs text-slate-500">
                          +{item.tags.length - 2} mais
                        </span>
                      )}
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <div className="px-4 py-8 text-center text-slate-500">
              {emptyMessage}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TableOfContents;
