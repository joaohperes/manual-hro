import React, { useState, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { useProtocols } from '../contexts/ProtocolContext';

const SidebarContentMenu: React.FC = () => {
  const { protocols: allProtocols } = useProtocols();
  const location = useLocation();
  const [isExpanded, setIsExpanded] = useState(false);

  // Determine which category to show based on current route
  const currentRoute = location.pathname.split('/')[1] || '';

  const contentList = useMemo(() => {
    switch (currentRoute) {
      case 'protocolos':
        return {
          title: 'Conteúdo',
          items: allProtocols.filter(p =>
            p.category !== 'Normativa' &&
            p.category !== 'Orientação' &&
            !p.title.toLowerCase().startsWith('instrução normativa')
          ),
        };
      case 'normativas':
        return {
          title: 'Conteúdo',
          items: allProtocols.filter(p =>
            p.category === 'Normativa' ||
            p.title.toLowerCase().startsWith('instrução normativa')
          ),
        };
      case 'orientacoes':
        return {
          title: 'Conteúdo',
          items: allProtocols.filter(p => p.category === 'Orientação'),
        };
      default:
        return { title: 'Conteúdo', items: [] };
    }
  }, [currentRoute, allProtocols]);

  // Don't show if no items or not on a content page
  if (!contentList.items.length || !['protocolos', 'normativas', 'orientacoes'].includes(currentRoute)) {
    return null;
  }

  return (
    <div className="mb-6">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors group"
      >
        <div className="flex items-center gap-2">
          <span>{contentList.title}</span>
          <span className="text-xs bg-slate-100 px-1.5 py-0.5 rounded text-slate-500 font-semibold">
            {contentList.items.length}
          </span>
        </div>
        <ChevronDownIcon
          className={`w-4 h-4 text-slate-400 transition-transform ${
            isExpanded ? 'rotate-180' : ''
          }`}
        />
      </button>

      {isExpanded && (
        <div className="mt-1 bg-slate-50 rounded-lg border border-slate-200 overflow-hidden">
          <ul className="max-h-64 overflow-y-auto">
            {contentList.items.map((item) => (
              <li key={item.id} className="border-b border-slate-200 last:border-b-0">
                <Link
                  to={`/${currentRoute}/${item.id}`}
                  onClick={() => setIsExpanded(false)}
                  className="block px-3 py-2 text-xs text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-colors line-clamp-2"
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

export default SidebarContentMenu;
