import { useState, memo } from 'react';
import type { Politician } from '../types';
import './PoliticianCard.css';

interface PoliticianCardProps {
  politician: Politician;
  onClick: () => void;
}

function PoliticianCardComponent({ politician, onClick }: PoliticianCardProps) {
  const [imageError, setImageError] = useState(false);

  const getStampText = (status: string): string => {
    switch (status) {
      case 'rapist':
        return 'RAPIST';
      case 'garbage':
        return 'STILL GARBAGE';
      case 'clean':
        return 'CLEAN';
      default:
        return '';
    }
  };

  const getStampClass = (status: string): string => {
    return `stamp stamp-${status}`;
  };

  return (
    <div className={`politician-card ${politician.status}`} onClick={onClick}>
      <div className="card-image-wrapper">
        <div className="card-image">
          {politician.image && !imageError ? (
            <img
              src={politician.image}
              alt={politician.name}
              onError={() => setImageError(true)}
              crossOrigin="anonymous"
            />
          ) : (
            <div className="placeholder-image">{politician.name.charAt(0)}</div>
          )}
        </div>
        <div className={getStampClass(politician.status)}>
          {getStampText(politician.status)}
        </div>
      </div>

      <div className="card-content">
        <h3 className="politician-name">{politician.name}</h3>
        <p className="politician-party">{politician.party}</p>
        <p className="politician-position">{politician.position}</p>

        {politician.state && (
          <p className="politician-location">
            📍 {politician.district ? `${politician.district}, ` : ''}
            {politician.state}
          </p>
        )}

        <div className="case-summary">
          {politician.status === 'rapist' && (
            <div className="case-badge rapist-badge">
              {politician.cases.sexualAssault} Sexual Assault Case
              {politician.cases.sexualAssault > 1 ? 's' : ''}
            </div>
          )}
          {politician.cases.other > 0 && (
            <div className="case-badge other-badge">
              {politician.cases.other} Other Case{politician.cases.other > 1 ? 's' : ''}
            </div>
          )}
          {politician.status === 'clean' && (
            <div className="case-badge clean-badge">No Criminal Cases</div>
          )}
        </div>
      </div>
    </div>
  );
}

// Memoize to prevent unnecessary re-renders when parent re-renders
const PoliticianCard = memo(PoliticianCardComponent);

export default PoliticianCard;
