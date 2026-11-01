import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import LocationFilter from './components/LocationFilter'
import PoliticianGrid from './components/PoliticianGrid'
import SpinWheel from './components/SpinWheel'
import PoliticianModal from './components/PoliticianModal'
import { politicians } from './data/politicians'
import './App.css'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')
  const [selectedState, setSelectedState] = useState('')
  const [selectedDistrict, setSelectedDistrict] = useState('')
  const [showWheel, setShowWheel] = useState(false)
  const [selectedPolitician, setSelectedPolitician] = useState(null)
  const [filteredPoliticians, setFilteredPoliticians] = useState(politicians)

  useEffect(() => {
    let filtered = politicians

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.party.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (p.state && p.state.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (p.district && p.district.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    }

    // Filter by status
    if (filterStatus !== 'all') {
      filtered = filtered.filter(p => p.status === filterStatus)
    }

    // Filter by state
    if (selectedState) {
      filtered = filtered.filter(p => p.state === selectedState)
    }

    // Filter by district
    if (selectedDistrict) {
      filtered = filtered.filter(p => p.district === selectedDistrict)
    }

    setFilteredPoliticians(filtered)
  }, [searchTerm, filterStatus, selectedState, selectedDistrict])

  const handleRandomSelect = (politician) => {
    setSelectedPolitician(politician)
    setShowWheel(false)
  }

  return (
    <div className="app">
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        filterStatus={filterStatus}
        setFilterStatus={setFilterStatus}
        onRandomClick={() => setShowWheel(true)}
      />

      <main className="container">
        <div className="stats-bar">
          <div className="stat">
            <span className="stat-number">{politicians.length}</span>
            <span className="stat-label">Total Politicians</span>
          </div>
          <div className="stat">
            <span className="stat-number rapist-color">
              {politicians.filter(p => p.status === 'rapist').length}
            </span>
            <span className="stat-label">Sexual Assault Cases</span>
          </div>
          <div className="stat">
            <span className="stat-number garbage-color">
              {politicians.filter(p => p.status === 'garbage').length}
            </span>
            <span className="stat-label">Other Criminal Cases</span>
          </div>
          <div className="stat">
            <span className="stat-number clean-color">
              {politicians.filter(p => p.status === 'clean').length}
            </span>
            <span className="stat-label">Clean Record</span>
          </div>
        </div>

        <LocationFilter
          politicians={politicians}
          selectedState={selectedState}
          setSelectedState={setSelectedState}
          selectedDistrict={selectedDistrict}
          setSelectedDistrict={setSelectedDistrict}
        />

        <PoliticianGrid
          politicians={filteredPoliticians}
          onSelectPolitician={setSelectedPolitician}
        />
      </main>

      {showWheel && (
        <SpinWheel
          politicians={politicians}
          onSelect={handleRandomSelect}
          onClose={() => setShowWheel(false)}
        />
      )}

      {selectedPolitician && (
        <PoliticianModal
          politician={selectedPolitician}
          onClose={() => setSelectedPolitician(null)}
        />
      )}
    </div>
  )
}

export default App
