import React, { useState, useEffect } from 'react'
import './SpinWheel.css'

function SpinWheel({ politicians, onSelect, onClose }) {
  const [spinning, setSpinning] = useState(false)
  const [rotation, setRotation] = useState(0)
  const [selectedIndex, setSelectedIndex] = useState(null)

  const handleSpin = () => {
    if (spinning) return

    setSpinning(true)
    const randomIndex = Math.floor(Math.random() * politicians.length)
    const spinRotations = 5 + Math.random() * 3 // 5-8 full rotations
    const segmentAngle = 360 / politicians.length
    const targetRotation = spinRotations * 360 + (randomIndex * segmentAngle)

    setRotation(targetRotation)

    setTimeout(() => {
      setSelectedIndex(randomIndex)
      setSpinning(false)
      setTimeout(() => {
        onSelect(politicians[randomIndex])
      }, 1000)
    }, 4000)
  }

  useEffect(() => {
    // Auto-spin when wheel opens
    setTimeout(handleSpin, 500)
  }, [])

  return (
    <div className="wheel-overlay" onClick={onClose}>
      <div className="wheel-container" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>

        <h2 className="wheel-title">Random Politician Selector</h2>

        <div className="wheel-wrapper">
          <div className="wheel-pointer">▼</div>
          <div
            className="wheel"
            style={{
              transform: `rotate(${rotation}deg)`,
              transition: spinning ? 'transform 4s cubic-bezier(0.17, 0.67, 0.12, 0.99)' : 'none'
            }}
          >
            {politicians.map((politician, index) => {
              const angle = (360 / politicians.length) * index
              return (
                <div
                  key={politician.id}
                  className="wheel-segment"
                  style={{
                    transform: `rotate(${angle}deg)`,
                    backgroundColor: index % 2 === 0 ? '#2a2a2a' : '#1f1f1f'
                  }}
                >
                  <div className="segment-content">
                    <span className="segment-name">{politician.name.split(' ').slice(-1)[0]}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {selectedIndex !== null && !spinning && (
          <div className="wheel-result">
            <p className="result-text">Selected:</p>
            <p className="result-name">{politicians[selectedIndex].name}</p>
          </div>
        )}

        {!spinning && selectedIndex === null && (
          <button className="spin-btn" onClick={handleSpin}>
            🎲 Spin Again
          </button>
        )}
      </div>
    </div>
  )
}

export default SpinWheel
