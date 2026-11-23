import type { PoliticianStatus } from '../types';
import './Header.css';
import {useState} from 'react';

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
  const [showInfo, setShowInfo] = useState(false);
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
      <div className="header-actions">
        <button
          className="submit-btn"
//          onClick={}
        >
          Submit
        </button>
        <button
          className="info-btn"
          onClick={() => setShowInfo(!showInfo)}
          aria-label="About this site"
        >
          ℹ️
        </button>
      </div>

      {showInfo && (
        <div className="info-box" role="dialog">
          <button
            className="info-close"
            onClick={() => setShowInfo(false)}
            aria-label="Close"
          >
            ×
          </button>
          <p>
            This site tracks politicians with criminal cases in India.
            If you can help me out in any way feel free to submit 
            any data you might have here
          </p>
        </div>
      )}
    </header>
  );
}

export default Header;
