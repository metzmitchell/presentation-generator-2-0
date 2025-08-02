import React from 'react'

export default function Cover({ children }) {
  return (
    <div className="slide-container">
      <div className="slide-content text-center">
        {children}
      </div>
    </div>
  )
}
