export interface Protocol {
  id: string;
  title: string;
  category: string;
  lastUpdated: string;
  content: string; // Markdown or HTML string
  tags: string[];
}

export interface Contact {
  id: string;
  department: string;
  name?: string;
  extension: string;
  external?: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

export enum PageRoute {
  HOME = '/',
  PROTOCOLS = '/protocolos',
  CONTACTS = '/contatos',
  PROTOCOL_DETAIL = '/protocolos/:id',
  IMPORT = '/importar',
}