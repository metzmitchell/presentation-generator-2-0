import React from 'react';

/**
 * AI-friendly chart slide layout
 * @param {string} title - Slide title
 * @param {React.ReactNode} chart - Chart component
 * @param {string} description - Optional description
 */
export default function ChartSlide({ title, chart, description }) {
  return (
    <div className="slide-container">
      <div className="slide-content">
        {title && <h2 className="slide-heading mb-6">{title}</h2>}
        <div className="flex flex-col items-center">
          <div className="w-full max-w-4xl">
            {chart}
          </div>
          {description && (
            <p className="mt-6 text-xl text-gray-600 dark:text-gray-400 max-w-3xl text-center">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}