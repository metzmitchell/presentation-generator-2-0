import React from 'react';

/**
 * AI-friendly title slide layout
 * @param {string} title - Main title
 * @param {string} subtitle - Optional subtitle
 * @param {string} author - Optional author name
 * @param {string} date - Optional date
 */
export default function TitleSlide({ title, subtitle, author, date }) {
  return (
    <div className="slide-container">
      <div className="slide-content text-center">
        <h1 className="presentation-title">{title}</h1>
        {subtitle && (
          <h2 className="presentation-subtitle">{subtitle}</h2>
        )}
        {(author || date) && (
          <div className="mt-12 text-xl text-gray-500 dark:text-gray-400">
            {author && <p className="mb-2">{author}</p>}
            {date && <p>{date}</p>}
          </div>
        )}
      </div>
    </div>
  );
}