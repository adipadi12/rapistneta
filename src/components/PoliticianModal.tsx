import { useState } from 'react';
import type { Politician } from '../types';
import './PoliticianModal.css';

interface PoliticianModalProps {
  politician: Politician;
  onClose: () => void;
}

function PoliticianModal({ politician, onClose }: PoliticianModalProps) {
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

  const getConvictedAllegedText = (politician: any): string => {
    // Check sexualAssault caseDetails for conviction language
    const sexualAssaultDetails = politician.caseDetails?.sexualAssault;
    if (Array.isArray(sexualAssaultDetails)) {
      const hasConviction = sexualAssaultDetails.some(
        (detail: string) => detail.includes('Convicted')
      );
      if (hasConviction) return 'Convicted';
    }
    // Check other caseDetails for conviction language
    const otherDetails = politician.caseDetails?.other;
    if (Array.isArray(otherDetails)) {
      const hasConviction = otherDetails.some(
        (detail: string) => detail.includes('Convicted')
      );
      if (hasConviction) return 'Convicted';
    }
    return 'Alleged';
  };

  const getStampClass = (status: string): string => {
    return `modal-stamp stamp-${status}`;
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          ×
        </button>

        <div className="modal-content">
          <div className="modal-image-section">
            <div className="modal-image-wrapper">
              {politician.image && !imageError ? (
                <img
                  src={politician.image}
                  alt={politician.name}
                  onError={() => setImageError(true)}
                  crossOrigin="anonymous"
                />
              ) : (
                <div className="modal-placeholder-image">{politician.name.charAt(0)}</div>
              )}
              <div className={getStampClass(politician.status)}>
                {getStampText(politician.status)}
              </div>
            </div>
          </div>

          <div className="modal-info-section">
            <h2 className="modal-name">{politician.name}</h2>
            <p className="modal-party">{politician.party}</p>
            <p className="modal-position">{politician.position}</p>

            <div className="modal-divider"></div>

            <div className="modal-cases">
              <h3 className="modal-section-title">Criminal Cases</h3>

              {politician.status === 'clean' ? (
                <div className="modal-clean-message">
                  <span className="clean-icon">✓</span>
                  <p>No reported criminal cases on record.</p>
                </div>
              ) : (
                <>
                  {politician.cases.sexualAssault > 0 || politician.cases.other > 0 ? (
                    <div className={`alleged-convicted-badge ${
                        (politician.cases.other > 0 && politician.cases.sexualAssault <= 0)
                          ? 'convicted-badge-other'
                          : 'convicted-badge'
                      }`}
                    >
                      {getConvictedAllegedText(politician)}
                    </div>
                  ) : null}
                  {politician.cases.sexualAssault > 0 && (
                    <div className="case-detail rapist-case">
                      <div className="case-header">
                        <span className="case-icon">⚠️</span>
                        <strong>Sexual Assault Cases: {politician.cases.sexualAssault}</strong>
                      </div>
                      {politician.caseDetails?.sexualAssault && (
                        <ul className="case-list">
                          {politician.caseDetails.sexualAssault.map((detail, idx) => (
                            <li key={idx}>{detail}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}

                  {politician.cases.other > 0 && (
                    <div className="case-detail other-case">
                      <div className="case-header">
                        <span className="case-icon">⚠️</span>
                        <strong>Other Criminal Cases: {politician.cases.other}</strong>
                      </div>
                      {politician.caseDetails?.other && (
                        <ul className="case-list">
                          {politician.caseDetails.other.map((detail, idx) => (
                            <li key={idx}>{detail}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </>
              )}
            </div>

            {politician.sources && politician.sources.length > 0 && (
              <>
                <div className="modal-divider"></div>
                <div className="modal-sources">
                  <h3 className="modal-section-title">Sources</h3>
                  <ul className="sources-list">
                    {politician.sources.map((source, idx) => (
                      <li key={idx}>
                        <a href={source.url} target="_blank" rel="noopener noreferrer">
                          {source.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PoliticianModal;
