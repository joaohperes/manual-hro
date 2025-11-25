import React, { useEffect } from 'react';
import DOMPurify from 'dompurify';
import { marked } from 'marked';
import CollapsibleSection from './CollapsibleSection';

interface MarkdownRendererProps {
  content: string;
  onImageClick?: (imageSrc: string) => void;
  collapsibleSections?: boolean;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content, onImageClick, collapsibleSections = false }) => {
  // Configure marked options
  marked.setOptions({
    breaks: true,
    gfm: true,
  });

  if (!collapsibleSections) {
    // Simple rendering without collapsible sections
    const rawHtml = marked.parse(content) as string;
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

    useEffect(() => {
      if (!onImageClick) return;
      const container = document.querySelector('.prose-slate > div');
      if (!container) return;

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
    }, [onImageClick]);

    return (
      <div className="prose prose-slate max-w-none">
        <div dangerouslySetInnerHTML={{ __html: cleanHtml }} />
      </div>
    );
  }

  // Split content by h2 sections
  const sections = content.split(/(?=^## )/m).filter(s => s.trim());

  const renderSection = (sectionContent: string) => {
    const titleMatch = sectionContent.match(/^## (.+)/);
    const title = titleMatch ? titleMatch[1].trim() : 'Section';

    const rawHtml = marked.parse(sectionContent) as string;
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
      <CollapsibleSection key={title} title={title} defaultOpen={false}>
        <div className="prose prose-slate max-w-none">
          <div dangerouslySetInnerHTML={{ __html: cleanHtml }} />
        </div>
      </CollapsibleSection>
    );
  };

  useEffect(() => {
    if (!onImageClick) return;

    const containers = document.querySelectorAll('.prose-slate > div');
    const handleImageClick = (e: Event) => {
      const img = e.target as HTMLImageElement;
      if (img && img.src) {
        onImageClick(img.src);
      }
    };

    containers.forEach(container => {
      const images = container.querySelectorAll('img');
      images.forEach(img => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', handleImageClick);
      });
    });

    return () => {
      containers.forEach(container => {
        const images = container.querySelectorAll('img');
        images.forEach(img => {
          img.removeEventListener('click', handleImageClick);
        });
      });
    };
  }, [onImageClick, sections]);

  return (
    <div className="space-y-4">
      {sections.map(renderSection)}
    </div>
  );
};

export default MarkdownRenderer;
