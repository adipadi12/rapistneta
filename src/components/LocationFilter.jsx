import React, { useState } from 'react'
import './LocationFilter.css'
import { statesAndUTs, getDistrictsForState } from '../data/geography'

function LocationFilter({ politicians, selectedState, setSelectedState, selectedDistrict, setSelectedDistrict }) {
  const [showStateDropdown, setShowStateDropdown] = useState(false)
  const [showDistrictDropdown, setShowDistrictDropdown] = useState(false)

  // Get states that have politicians
  const statesWithData = [...new Set(politicians.map(p => p.state).filter(Boolean))].sort()

  // Check if selected state is a UT
  const isSelectedStateUT = statesAndUTs.unionTerritories.includes(selectedState)

  // Get districts for selected state
  const districts = selectedState ? getDistrictsForState(politicians, selectedState) : []

  const handleStateSelect = (state) => {
    setSelectedState(state)
    setSelectedDistrict('') // Reset district when state changes
    setShowStateDropdown(false)
  }

  const handleDistrictSelect = (district) => {
    setSelectedDistrict(district)
    setShowDistrictDropdown(false)
  }

  const clearFilters = () => {
    setSelectedState('')
    setSelectedDistrict('')
  }

  return (
    <div className="location-filter">
      <div className="location-filter-title">
        📍 Filter by Location
      </div>

      <div className="location-dropdowns">
        {/* State/UT Dropdown */}
        <div className="location-dropdown">
          <button
            className="location-dropdown-btn"
            onClick={() => setShowStateDropdown(!showStateDropdown)}
          >
            {selectedState || 'Select State/UT'}
            <span className="dropdown-arrow">▼</span>
          </button>

          {showStateDropdown && (
            <div className="location-dropdown-menu">
              <div className="dropdown-section">
                <div className="dropdown-section-title">States</div>
                {statesAndUTs.states.filter(s => statesWithData.includes(s)).map(state => (
                  <button
                    key={state}
                    className={`dropdown-item ${selectedState === state ? 'selected' : ''}`}
                    onClick={() => handleStateSelect(state)}
                  >
                    {state}
                    <span className="politician-count">
                      ({politicians.filter(p => p.state === state).length})
                    </span>
                  </button>
                ))}
              </div>

              <div className="dropdown-section">
                <div className="dropdown-section-title">Union Territories</div>
                {statesAndUTs.unionTerritories.filter(ut => statesWithData.includes(ut)).map(ut => (
                  <button
                    key={ut}
                    className={`dropdown-item ${selectedState === ut ? 'selected' : ''}`}
                    onClick={() => handleStateSelect(ut)}
                  >
                    {ut}
                    <span className="politician-count">
                      ({politicians.filter(p => p.state === ut).length})
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* District Dropdown */}
        {selectedState && districts.length > 0 && (
          <div className="location-dropdown">
            <button
              className="location-dropdown-btn"
              onClick={() => setShowDistrictDropdown(!showDistrictDropdown)}
            >
              {selectedDistrict || 'Select District'}
              <span className="dropdown-arrow">▼</span>
            </button>

            {showDistrictDropdown && (
              <div className="location-dropdown-menu">
                {districts.map(district => (
                  <button
                    key={district}
                    className={`dropdown-item ${selectedDistrict === district ? 'selected' : ''}`}
                    onClick={() => handleDistrictSelect(district)}
                  >
                    {district}
                    <span className="politician-count">
                      ({politicians.filter(p => p.state === selectedState && p.district === district).length})
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Clear Button */}
        {(selectedState || selectedDistrict) && (
          <button className="clear-location-btn" onClick={clearFilters}>
            ✕ Clear
          </button>
        )}
      </div>

      {/* Current Selection Display */}
      {selectedState && (
        <div className="current-selection">
          <span className="selection-label">Showing:</span>
          <span className="selection-value">
            {selectedDistrict ? `${selectedDistrict}, ` : ''}{selectedState}
            {isSelectedStateUT && <span className="ut-badge">UT</span>}
          </span>
        </div>
      )}
    </div>
  )
}

export default LocationFilter
