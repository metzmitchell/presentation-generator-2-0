import React from 'react';

/**
 * AI-friendly bullet point slide layout
 * @param {string} title - Slide title
 * @param {Array<string>} bullets - Array of bullet points
 * @param {boolean} numbered - Use numbered list instead of bullets
 */
export default function BulletSlide({ title, bullets, numbered = false }) {
  const ListTag = numbered ? 'ol' : 'ul';
  
  return (
    <div className="slide-container">
      <div className="slide-content">
        {title && <h2 className="slide-heading mb-8">{title}</h2>}
        <ListTag className={`slide-text space-y-4 ${numbered ? '' : 'list-disc'} list-inside max-w-4xl mx-auto text-left`}>
          {bullets.map((bullet, index) => (
            <li key={index} className="leading-relaxed">
              {bullet}
            </li>
          ))}
        </ListTag>
      </div>
    </div>
  );
}