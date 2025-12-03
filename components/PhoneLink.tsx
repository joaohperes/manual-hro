import React from 'react';

interface PhoneLinkProps {
  number: string;
  label?: string;
}

const PhoneLink: React.FC<PhoneLinkProps> = ({ number, label }) => {
  return (
    <a
      href={`tel:${number}`}
      className="inline-block bg-blue-100 text-blue-700 border border-blue-300 rounded-full px-3 py-1 text-sm font-semibold hover:bg-blue-200 transition-colors"
      title={`Ligar para ${number}`}
    >
      📞 {label || number}
    </a>
  );
};

export default PhoneLink;
