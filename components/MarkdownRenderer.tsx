import React from 'react';
import DOMPurify from 'dompurify';
import { marked } from 'marked';

interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  // Configure marked options
  marked.setOptions({
    breaks: true,
    gfm: true,
  });

  // Convert markdown to HTML
  const rawHtml = marked(content);

  // Sanitize the HTML to prevent XSS
  const cleanHtml = DOMPurify.sanitize(rawHtml, {
    ALLOWED_TAGS: [
      'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
      'p', 'br', 'strong', 'em', 'u', 'code', 'pre',
      'ul', 'ol', 'li', 'blockquote',
      'a', 'img', 'table', 'thead', 'tbody', 'tr', 'th', 'td',
      'div', 'span', 'hr'
    ],
    ALLOWED_ATTR: ['href', 'title', 'target', 'rel', 'src', 'alt', 'class'],
    ALLOW_DATA_ATTR: false,
  });

  return (
    <div className="prose prose-slate max-w-none">
      <div dangerouslySetInnerHTML={{ __html: cleanHtml }} />
    </div>
  );
};

export default MarkdownRenderer;
