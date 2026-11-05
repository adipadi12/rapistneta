import PoliticianCard from './PoliticianCard';
import type { Politician } from '../types';
import './PoliticianGrid.css';

interface PoliticianGridProps {
  politicians: Politician[];
  onSelectPolitician: (politician: Politician) => void;
}

function PoliticianGrid({ politicians, onSelectPolitician }: PoliticianGridProps) {
  if (politicians.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-icon">🔍</div>
        <h2>No politicians found</h2>
        <p>Try adjusting your search or filters</p>
      </div>
    );
  }

  return (
    <div className="politician-grid">
      {politicians.map((politician) => (
        <PoliticianCard
          key={politician.id}
          politician={politician}
          onClick={() => onSelectPolitician(politician)}
        />
      ))}
    </div>
  );
}

export default PoliticianGrid;
