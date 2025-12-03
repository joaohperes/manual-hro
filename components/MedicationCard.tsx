import React from 'react';

interface MedicationCardProps {
  medicationName: string;
  dose: string;
  route?: string;
  frequency?: string;
  severity?: 'high' | 'medium' | 'low';
}

const MedicationCard: React.FC<MedicationCardProps> = ({
  medicationName,
  dose,
  route,
  frequency,
  severity = 'medium',
}) => {
  const borderColor = {
    high: 'border-l-red-600 bg-red-50',
    medium: 'border-l-yellow-600 bg-yellow-50',
    low: 'border-l-blue-600 bg-blue-50',
  }[severity];

  const textColor = {
    high: 'text-red-900',
    medium: 'text-yellow-900',
    low: 'text-blue-900',
  }[severity];

  return (
    <div className={`border-l-4 rounded-md p-4 my-3 ${borderColor}`}>
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1">
          <h4 className={`font-bold text-base ${textColor}`}>{medicationName}</h4>
          <p className={`font-semibold text-sm mt-1 ${textColor}`}>{dose}</p>
          {(route || frequency) && (
            <p className={`text-xs mt-2 ${textColor}`}>
              {route && <span>Via: {route}</span>}
              {route && frequency && <span> • </span>}
              {frequency && <span>Frequência: {frequency}</span>}
            </p>
          )}
        </div>
        {severity === 'high' && (
          <span className="inline-block bg-red-600 text-white text-xs font-bold px-2 py-1 rounded whitespace-nowrap">
            ⚠️ Alta Vigilância
          </span>
        )}
      </div>
    </div>
  );
};

export default MedicationCard;
