import React, { useEffect, useState } from 'react';
import DOMPurify from 'dompurify';
import { marked } from 'marked';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

interface MarkdownRendererProps {
  content: string;
  onImageClick?: (imageSrc: string) => void;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content, onImageClick }) => {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());

  // Configure marked options
  marked.setOptions({
    breaks: true,
    gfm: true,
  });

  // Split content by major sections (h2)
  const sections = content.split(/(?=^## )/m).filter(s => s.trim());

  // Identify which sections should be collapsible (Sumário, Executivo, ou primeira seção)
  const isCollapsible = (sectionContent: string, index: number) => {
    // Always collapsible for summary/executive sections
    if (/^## (?:Sumário|SUMÁRIO|Executivo|EXECUTIVO|Summary)/i.test(sectionContent)) {
      return true;
    }
    // Also make first section collapsible
    return index === 0;
  };

  const getSectionId = (sectionContent: string) => {
    const match = sectionContent.match(/^## (.+)/);
    if (!match) return '';
    return match[1]
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]/g, '');
  };

  const toggleSection = (sectionId: string) => {
    const newSet = new Set(expandedSections);
    if (newSet.has(sectionId)) {
      newSet.delete(sectionId);
    } else {
      newSet.add(sectionId);
    }
    setExpandedSections(newSet);
  };

  // Render each section
  const renderSection = (sectionContent: string, index: number) => {
    const sectionId = getSectionId(sectionContent);
    const collapsible = isCollapsible(sectionContent, index);
    const isExpanded = expandedSections.has(sectionId);

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

    if (collapsible) {
      return (
        <div key={sectionId} className="border-t border-slate-200 pt-6 mt-6">
          <button
            onClick={() => toggleSection(sectionId)}
            className="w-full flex items-center justify-between text-left hover:bg-slate-50 p-4 rounded-lg transition-colors"
          >
            <h2 className="text-xl font-bold text-slate-900 m-0">
              {getSectionId(sectionContent)
                .split('-')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ')}
            </h2>
            <ChevronDownIcon
              className={`w-5 h-5 text-slate-600 transition-transform ${isExpanded ? '' : '-rotate-90'}`}
            />
          </button>
          {isExpanded && (
            <div className="prose prose-slate max-w-none px-4 pt-4">
              <div dangerouslySetInnerHTML={{ __html: cleanHtml }} />
            </div>
          )}
        </div>
      );
    }

    return (
      <div key={sectionId} className="prose prose-slate max-w-none">
        <div dangerouslySetInnerHTML={{ __html: cleanHtml }} />
      </div>
    );
  };

  // Add click handlers to images
  useEffect(() => {
    if (!onImageClick) return;

    const container = document.querySelector('.prose-slate');
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
  }, [onImageClick, expandedSections]);

  return (
    <div className="space-y-6">
      {sections.map((section, index) => renderSection(section, index))}
    </div>
  );
};

export default MarkdownRenderer;
