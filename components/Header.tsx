import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 border-b-4 border-blue-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-blue-600/50 transition-shadow">
              <span className="text-white font-bold text-xl">HRO</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-white">Manual HRO</h1>
              <p className="text-xs text-blue-200">Protocolos Médicos</p>
            </div>
          </Link>

          <nav className="flex items-center gap-6">
            <Link
              to="/protocolos"
              className="text-gray-100 hover:text-white transition-colors font-medium"
            >
              Protocolos
            </Link>
            <Link
              to="/contatos"
              className="text-gray-100 hover:text-white transition-colors font-medium"
            >
              Contatos
            </Link>
            <Link
              to="/importar"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Importar
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
