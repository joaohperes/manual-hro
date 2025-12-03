import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

interface ContentItem {
  id: string;
  title: string;
}

interface PageContentMenuProps {
  title: string;
  items: ContentItem[];
  basePath: string;
}

const PageContentMenu: React.FC<PageContentMenuProps> = ({
  title,
  items,
  basePath,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="mb-6 bg-white rounded-lg border border-slate-200 overflow-hidden">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between px-5 py-3 hover:bg-slate-50 transition-colors group"
      >
        <div className="flex items-center gap-3">
          <span className="font-semibold text-slate-900">{title}</span>
          <span className="text-sm text-slate-600 bg-slate-100 px-2 py-0.5 rounded-full font-medium">
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
        <div className="border-t border-slate-200 bg-slate-50">
          <ul className="max-h-96 overflow-y-auto">
            {items.map((item) => (
              <li key={item.id} className="border-b border-slate-200 last:border-b-0">
                <Link
                  to={`${basePath}/${item.id}`}
                  className="block px-5 py-2.5 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-colors"
                  title={item.title}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PageContentMenu;
