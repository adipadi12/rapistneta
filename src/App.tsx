import { useState, useMemo, lazy, Suspense } from 'react';
import Header from './components/Header';
import LocationFilter from './components/LocationFilter';
import PoliticianGrid from './components/PoliticianGrid';
import Pagination from './components/Pagination';
import { usePoliticians, useAllPoliticians, useStatistics, useDebounce } from './hooks';
import type { Politician, PoliticianStatus } from './types';
import './App.css';

// Lazy load heavy components to reduce initial bundle size
const SpinWheel = lazy(() => import('./components/SpinWheel'));
const PoliticianModal = lazy(() => import('./components/PoliticianModal'));

const ITEMS_PER_PAGE = 50;

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<PoliticianStatus | 'all'>('all');
  const [selectedState, setSelectedState] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [showWheel, setShowWheel] = useState(false);
  const [selectedPolitician, setSelectedPolitician] = useState<Politician | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  // Debounce search term to avoid filtering on every keystroke
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  // Fetch filtered politicians with debounced search
  const { politicians: allFilteredPoliticians, loading: loadingFiltered } = usePoliticians({
    searchTerm: debouncedSearchTerm || undefined,
    status: filterStatus === 'all' ? undefined : filterStatus,
    state: selectedState || undefined,
    district: selectedDistrict || undefined,
  });

  // Fetch all politicians for statistics and spin wheel
  const { politicians: allPoliticians, loading: loadingAll } = useAllPoliticians();

  // Fetch statistics (memoized for performance)
  const { statistics } = useStatistics();

  // Calculate pagination
  const totalPages = Math.ceil(allFilteredPoliticians.length / ITEMS_PER_PAGE);

  // Get paginated politicians (memoized to avoid recalculation)
  const paginatedPoliticians = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return allFilteredPoliticians.slice(startIndex, endIndex);
  }, [allFilteredPoliticians, currentPage]);

  // Reset to page 1 when filters change
  const handleFilterChange = (callback: () => void) => {
    callback();
    setCurrentPage(1);
  };

  const handleRandomSelect = (politician: Politician) => {
    setSelectedPolitician(politician);
    setShowWheel(false);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top when page changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app">
      <Header
        searchTerm={searchTerm}
        setSearchTerm={(term) => handleFilterChange(() => setSearchTerm(term))}
        filterStatus={filterStatus}
        setFilterStatus={(status) => handleFilterChange(() => setFilterStatus(status))}
        onRandomClick={() => setShowWheel(true)}
      />

      <main className="container">
        <div className="stats-bar">
          <div className="stat">
            <span className="stat-number">
              {statistics?.total ?? allPoliticians.length}
            </span>
            <span className="stat-label">Total Politicians</span>
          </div>
          <div className="stat">
            <span className="stat-number rapist-color">
              {statistics?.byStatus.rapist ?? 0}
            </span>
            <span className="stat-label">Sexual Assault Cases</span>
          </div>
          <div className="stat">
            <span className="stat-number garbage-color">
              {statistics?.byStatus.garbage ?? 0}
            </span>
            <span className="stat-label">Other Criminal Cases</span>
          </div>
          <div className="stat">
            <span className="stat-number clean-color">
              {statistics?.byStatus.clean ?? 0}
            </span>
            <span className="stat-label">Clean Record</span>
          </div>
        </div>

        <LocationFilter
          politicians={allPoliticians}
          selectedState={selectedState}
          setSelectedState={(state) => handleFilterChange(() => setSelectedState(state))}
          selectedDistrict={selectedDistrict}
          setSelectedDistrict={(district) => handleFilterChange(() => setSelectedDistrict(district))}
        />

        {/* Results summary */}
        {allFilteredPoliticians.length > 0 && (
          <div className="results-summary">
            Showing {((currentPage - 1) * ITEMS_PER_PAGE) + 1}-
            {Math.min(currentPage * ITEMS_PER_PAGE, allFilteredPoliticians.length)} of{' '}
            {allFilteredPoliticians.length} {allFilteredPoliticians.length === 1 ? 'politician' : 'politicians'}
          </div>
        )}

        {loadingFiltered ? (
          <div className="loading-state">
            <div className="loading-spinner">Loading...</div>
          </div>
        ) : (
          <>
            <PoliticianGrid
              politicians={paginatedPoliticians}
              onSelectPolitician={setSelectedPolitician}
            />

            {/* Pagination controls */}
            {totalPages > 1 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            )}
          </>
        )}
      </main>

      {showWheel && !loadingAll && (
        <Suspense fallback={<div className="loading-overlay">Loading wheel...</div>}>
          <SpinWheel
            politicians={allPoliticians}
            onSelect={handleRandomSelect}
            onClose={() => setShowWheel(false)}
          />
        </Suspense>
      )}

      {selectedPolitician && (
        <Suspense fallback={<div className="loading-overlay">Loading details...</div>}>
          <PoliticianModal
            politician={selectedPolitician}
            onClose={() => setSelectedPolitician(null)}
          />
        </Suspense>
      )}
    </div>
  );
}

export default App;
