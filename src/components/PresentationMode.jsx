import React from 'react'
import { MODES } from '../constants/modes'

export default function PresentationMode({
  mode,
  notes,
  currentSlide,
  children,
}) {
  if (mode === MODES.SPEAKER) {
    return (
      <div className="flex p-12 max-h-screen">
        <div className="w-[65%] overflow-y-auto">
          <div className="p-4 max-h-[80vh]">
            <div className="border border-gray-300 dark:border-gray-700">
              {children}
            </div>
          </div>
        </div>
        <div className="w-[35%]">
          <div className="p-4">
            <div className="w-full h-[50vh] overflow-y-auto border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
              <div className="p-4 text-base">
                {notes[currentSlide]}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  return children
}
