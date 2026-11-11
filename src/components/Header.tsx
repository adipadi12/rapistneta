import type { PoliticianStatus } from '../types';
import './Header.css';

interface HeaderProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  filterStatus: PoliticianStatus | 'all';
  setFilterStatus: (status: PoliticianStatus | 'all') => void;
  onRandomClick: () => void;
}

function Header({
  searchTerm,
  setSearchTerm,
  filterStatus,
  setFilterStatus,
  onRandomClick,
}: HeaderProps) {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="header-top">
            <h1 className="logo">
              RapistNeta
            </h1>
            <p className="tagline">Tracking accountability in Indian politics</p>
          </div>

          <div className="header-controls">
            <div className="search-wrapper">
              <input
                type="text"
                placeholder="Search by name, party, or position..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>

            <div className="filter-buttons">
              <button
                className={`filter-btn ${filterStatus === 'all' ? 'active' : ''}`}
                onClick={() => setFilterStatus('all')}
              >
                All
              </button>
              <button
                className={`filter-btn rapist ${filterStatus === 'rapist' ? 'active' : ''}`}
                onClick={() => setFilterStatus('rapist')}
              >
                Sexual Assault
              </button>
              <button
                className={`filter-btn garbage ${filterStatus === 'garbage' ? 'active' : ''}`}
                onClick={() => setFilterStatus('garbage')}
              >
                Other Cases
              </button>
              <button
                className={`filter-btn clean ${filterStatus === 'clean' ? 'active' : ''}`}
                onClick={() => setFilterStatus('clean')}
              >
                Clean
              </button>
            </div>

            <button className="random-btn" onClick={onRandomClick}>
              <span className="random-icon">🎲</span>
              Random Spin
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
