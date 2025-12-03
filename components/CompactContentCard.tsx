import React from 'react';
import { Link } from 'react-router-dom';

interface CompactContentCardProps {
  id: string;
  title: string;
  tags: string[];
  basePath: string;
  borderColor: string;
}

const CompactContentCard: React.FC<CompactContentCardProps> = ({
  id,
  title,
  tags,
  basePath,
  borderColor,
}) => {
  return (
    <Link
      to={`${basePath}/${id}`}
      className={`flex items-center justify-between px-4 py-2.5 bg-white border-l-4 ${borderColor} rounded hover:bg-slate-50 transition-colors group`}
    >
      <h3 className="font-medium text-sm text-slate-900 flex-1 line-clamp-2">
        {title}
      </h3>
      <div className="flex flex-wrap gap-1 ml-4">
        {tags.slice(0, 2).map(tag => (
          <span
            key={tag}
            className="text-xs text-slate-600 bg-slate-100 px-2 py-1 rounded whitespace-nowrap"
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
};

export default CompactContentCard;
