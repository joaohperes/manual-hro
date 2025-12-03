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
import Header from './Header';
import Footer from './Footer';
import { PageRoute } from '../types';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Início', href: PageRoute.HOME, icon: HomeIcon },
    { name: 'Protocolos', href: PageRoute.PROTOCOLS, icon: BookOpenIcon },
    { name: 'Normativas', href: '/normativas', icon: BookOpenIcon },
    { name: 'Orientações', href: '/orientacoes', icon: BookOpenIcon },
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
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content Area */}
      <div className="flex-1 flex overflow-hidden">
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
            fixed top-16 left-0 z-50 h-[calc(100vh-4rem)] w-96 bg-white border-r border-slate-200 transition-transform duration-300 ease-in-out overflow-y-auto
            lg:translate-x-0 lg:static lg:inset-auto lg:block lg:top-0 lg:h-auto
            ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          `}
        >
          <nav className="p-4 space-y-8">
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
                          ? 'bg-blue-50 text-blue-900 border-l-4 border-blue-600'
                          : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}
                      `}
                    >
                      <item.icon className={`w-5 h-5 mr-3 ${isActive(item.href) ? 'text-blue-600' : 'text-slate-400'}`} />
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

            <div className="pt-4 border-t border-slate-100">
               <div className="px-3 py-2 bg-green-50 rounded-lg border border-green-200">
                  <p className="text-xs text-green-700 font-medium mb-1">Status do Sistema</p>
                  <div className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                      <span className="text-xs text-green-700">Operacional</span>
                  </div>
               </div>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 lg:px-8 lg:hidden">
            <button onClick={() => setIsSidebarOpen(true)} className="text-slate-600 p-2 -ml-2">
              <Bars3Icon className="w-6 h-6" />
            </button>
            <span className="font-semibold text-slate-800">Manual HRO</span>
            <div className="w-6" />
          </header>

          <main className="flex-1 overflow-y-auto bg-slate-50 p-4 lg:p-8">
            <div className="max-w-5xl mx-auto">
              {children}
            </div>
          </main>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;