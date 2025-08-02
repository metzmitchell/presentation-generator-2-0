import React from 'react';

/**
 * AI-friendly content slide layout
 * @param {string} title - Slide title
 * @param {React.ReactNode} children - Slide content
 * @param {string} layout - Layout type: 'center', 'left', 'two-column'
 */
export default function ContentSlide({ title, children, layout = 'center' }) {
  const getLayoutClass = () => {
    switch (layout) {
      case 'left':
        return 'text-left';
      case 'two-column':
        return 'grid grid-cols-2 gap-8';
      default:
        return 'text-center';
    }
  };

  return (
    <div className="slide-container">
      <div className="slide-content">
        {title && <h2 className="slide-heading mb-8">{title}</h2>}
        <div className={getLayoutClass()}>
          {children}
        </div>
      </div>
    </div>
  );
}