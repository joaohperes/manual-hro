import React, { useState } from 'react';
import { PhoneIcon, BuildingOfficeIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { MOCK_CONTACTS } from '../data/mockContent';

const Contact: React.FC = () => {
  const [search, setSearch] = useState('');

  const filteredContacts = MOCK_CONTACTS.filter(c =>
    c.department.toLowerCase().includes(search.toLowerCase()) ||
    c.extension.includes(search)
  );

  return (
    <div className="space-y-8 pb-12">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Ramais & Contatos</h1>
        <p className="text-slate-600 mt-2">Lista telefônica interna do HRO. Encontre ramais e telefones de todos os setores.</p>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <MagnifyingGlassIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
        <input
          type="text"
          placeholder="Pesquisar por setor, departamento ou ramal..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full pl-12 pr-4 py-4 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent shadow-sm text-base"
        />
      </div>

      {filteredContacts.length > 0 ? (
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200">
              <thead className="bg-slate-50 border-b-2 border-blue-600">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Setor / Departamento</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Ramal Interno</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Telefone Externo</th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Ação</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-slate-200">
                {filteredContacts.map((contact) => (
                  <tr key={contact.id} className="hover:bg-blue-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                          <BuildingOfficeIcon className="w-5 h-5" />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-slate-900">{contact.department}</div>
                          {contact.name && <div className="text-sm text-slate-500">{contact.name}</div>}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center text-sm text-slate-900 font-mono bg-slate-100 px-3 py-1 rounded-md w-fit">
                          <PhoneIcon className="w-3 h-3 mr-2 text-slate-500" />
                          {contact.extension}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                      {contact.external || '-'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a
                        href={`tel:${contact.external || contact.extension}`}
                        className="text-blue-600 hover:text-blue-900 bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-lg transition-colors font-medium"
                      >
                          Ligar
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-lg border-2 border-dashed border-slate-300">
          <MagnifyingGlassIcon className="w-16 h-16 text-slate-300 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-slate-900 mb-2">Nenhum contato encontrado</h3>
          <p className="text-slate-600 mb-6">Tente buscar por outro setor ou ramal.</p>
          <button
            onClick={() => setSearch('')}
            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Limpar busca
          </button>
        </div>
      )}
    </div>
  );
};

export default Contact;
