import React, { useState } from 'react';
import { PhoneIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline';
import { MOCK_CONTACTS } from '../data/mockContent';

const Contact: React.FC = () => {
  const [search, setSearch] = useState('');

  const filteredContacts = MOCK_CONTACTS.filter(c => 
    c.department.toLowerCase().includes(search.toLowerCase()) || 
    c.extension.includes(search)
  );

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900">Ramais & Contatos</h1>
        <p className="text-slate-500 mt-1">Lista telefônica interna do HRO.</p>
      </div>

      <div className="mb-6">
        <input 
          type="text"
          placeholder="Pesquisar setor ou ramal..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full md:w-96 px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-hro-500 shadow-sm"
        />
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200">
            <thead className="bg-slate-50">
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
                <tr key={contact.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 bg-hro-50 rounded-full flex items-center justify-center text-hro-600">
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
                      className="text-hro-600 hover:text-hro-900 bg-hro-50 hover:bg-hro-100 px-3 py-1.5 rounded-lg transition-colors"
                    >
                        Ligar
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filteredContacts.length === 0 && (
            <div className="p-8 text-center text-slate-500">
                Nenhum contato encontrado.
            </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
