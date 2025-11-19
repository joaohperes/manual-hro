import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  HomeIcon, 
  BookOpenIcon, 
  PhoneIcon, 
  Bars3Icon, 
  XMarkIcon,
  CalendarDaysIcon,
  ArrowTopRightOnSquareIcon,
  DocumentPlusIcon
} from '@heroicons/react/24/outline';
import { PageRoute } from '../types';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Início', href: PageRoute.HOME, icon: HomeIcon },
    { name: 'Protocolos', href: PageRoute.PROTOCOLS, icon: BookOpenIcon },
    { name: 'Ramais & Contatos', href: PageRoute.CONTACTS, icon: PhoneIcon },
    { name: 'Importar PDF (Beta)', href: PageRoute.IMPORT, icon: DocumentPlusIcon },
  ];

  const externalLinks = [
    { name: 'Escala HRO', href: 'https://escala-hro.vercel.app/', icon: CalendarDaysIcon },
    { name: 'Repositório GitHub', href: 'https://github.com/joaohperes/manualHROgemini', icon: ArrowTopRightOnSquareIcon },
  ];

  const isActive = (path: string) => {
      if (path === PageRoute.HOME) return location.pathname === '/';
      return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Mobile Sidebar Backdrop */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-slate-900/50 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={`
          fixed top-0 left-0 z-50 h-screen w-64 bg-white border-r border-slate-200 transition-transform duration-300 ease-in-out
          lg:translate-x-0 lg:static lg:inset-auto lg:block
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <div className="flex items-center justify-between h-16 px-6 border-b border-slate-100">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-hro-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
              H
            </div>
            <span className="text-xl font-bold text-slate-800 tracking-tight">Manual HRO</span>
          </div>
          <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden text-slate-500">
            <XMarkIcon className="w-6 h-6" />
          </button>
        </div>

        <nav className="p-4 space-y-8 overflow-y-auto h-[calc(100vh-4rem)]">
          <div>
            <p className="px-2 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Menu Principal</p>
            <ul className="space-y-1">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    onClick={() => setIsSidebarOpen(false)}
                    className={`
                      flex items-center px-3 py-2.5 rounded-lg text-sm font-medium transition-colors
                      ${isActive(item.href) 
                        ? 'bg-hro-50 text-hro-900' 
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}
                    `}
                  >
                    <item.icon className={`w-5 h-5 mr-3 ${isActive(item.href) ? 'text-hro-600' : 'text-slate-400'}`} />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="px-2 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Ferramentas Externas</p>
            <ul className="space-y-1">
              {externalLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors"
                  >
                    <item.icon className="w-5 h-5 mr-3 text-slate-400" />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="pt-4 mt-4 border-t border-slate-100">
             <div className="px-3 py-2 bg-slate-50 rounded-lg border border-slate-100">
                <p className="text-xs text-slate-500 font-medium mb-1">Status do Sistema</p>
                <div className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                    <span className="text-xs text-slate-600">Operacional</span>
                </div>
             </div>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen overflow-hidden">
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 lg:px-8 lg:hidden">
          <button onClick={() => setIsSidebarOpen(true)} className="text-slate-600 p-2 -ml-2">
            <Bars3Icon className="w-6 h-6" />
          </button>
          <span className="font-semibold text-slate-800">HRO Digital</span>
          <div className="w-6" /> {/* Spacer for centering */}
        </header>

        <main className="flex-1 overflow-y-auto bg-slate-50 p-4 lg:p-8">
          <div className="max-w-5xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;