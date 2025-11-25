import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t-4 border-blue-600 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold mb-4">Manual HRO</h3>
            <p className="text-sm text-gray-400">
              Guia de referência rápida com protocolos médicos para profissionais de saúde.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/protocolos" className="hover:text-blue-400 transition-colors">Protocolos</a></li>
              <li><a href="/contatos" className="hover:text-blue-400 transition-colors">Contatos</a></li>
              <li><a href="/importar" className="hover:text-blue-400 transition-colors">Importar PDF</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Informações</h4>
            <p className="text-xs text-gray-400">
              Este documento é um guia de referência rápida para uso interno. A decisão clínica final deve ser sempre individualizada pelo profissional responsável.
            </p>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8">
          <p className="text-center text-sm text-gray-500">
            © {currentYear} Manual HRO. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
