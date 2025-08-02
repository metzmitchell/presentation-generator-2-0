import React from 'react'

export default function Slide({ children, id, className = '' }) {
  return (
    <div id={id} className={`w-full ${className}`}>
      {children}
    </div>
  )
}
