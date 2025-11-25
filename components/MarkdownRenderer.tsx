import React, { useEffect } from 'react';
import DOMPurify from 'dompurify';
import { marked } from 'marked';

interface MarkdownRendererProps {
  content: string;
  onImageClick?: (imageSrc: string) => void;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content, onImageClick }) => {
  // Configure marked options
  marked.setOptions({
    breaks: true,
    gfm: true,
  });

  // Convert markdown to HTML (marked now returns Promise, so use parseInline for sync)
  const rawHtml = marked.parse(content) as string;

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

  // Add click handlers to images
  useEffect(() => {
    const container = document.querySelector('.prose-slate > div');
    if (container && onImageClick) {
      const images = container.querySelectorAll('img');
      const handleImageClick = (e: Event) => {
        const img = e.target as HTMLImageElement;
        if (img && img.src) {
          onImageClick(img.src);
        }
      };

      images.forEach(img => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', handleImageClick);
      });

      return () => {
        images.forEach(img => {
          img.removeEventListener('click', handleImageClick);
        });
      };
    }
  }, [cleanHtml, onImageClick]);

  return (
    <div className="prose prose-slate max-w-none">
      <div dangerouslySetInnerHTML={{ __html: cleanHtml }} />
    </div>
  );
};

export default MarkdownRenderer;
