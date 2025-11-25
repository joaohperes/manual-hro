export interface Protocol {
  id: string;
  title: string;
  category: string;
  lastUpdated: string;
  content: string; // Markdown or HTML string
  tags: string[];
  executiveSummary?: string; // Collapsible summary section
  googleDriveFileId?: string; // Google Drive File ID for PDF download
  pdfUrl?: string; // URL for downloading the full PDF
  pdfFileName?: string; // Original PDF file name
  pdfSize?: number; // File size in bytes
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