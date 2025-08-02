import { useState, useEffect } from 'react'
import Link from 'next/link'
import { getAllPresentations, getCategories, getTags, getCategoryColor } from '../lib/presentations'

const Directory = () => {
  const [presentations, setPresentations] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedTag, setSelectedTag] = useState('all')

  useEffect(() => {
    setPresentations(getAllPresentations())
  }, [])

  const categories = ['all', ...getCategories()]
  const tags = ['all', ...getTags()]

  const filteredPresentations = presentations.filter(presentation => {
    const categoryMatch = selectedCategory === 'all' || presentation.category === selectedCategory
    const tagMatch = selectedTag === 'all' || presentation.tags.includes(selectedTag)
    return categoryMatch && tagMatch
  })

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Presentation Directory
          </h1>
          <p className="text-xl text-gray-600">
            Browse all presentations organized by category and tags
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tag
              </label>
              <select
                value={selectedTag}
                onChange={(e) => setSelectedTag(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {tags.map(tag => (
                  <option key={tag} value={tag}>
                    {tag.charAt(0).toUpperCase() + tag.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredPresentations.length} of {presentations.length} presentations
          </p>
        </div>

        {/* Presentations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPresentations.map(presentation => (
            <Link key={presentation.id} href={presentation.path}>
              <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer p-6 border border-gray-200">
                <div className="flex items-start justify-between mb-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(presentation.category)}`}>
                    {presentation.category}
                  </span>
                  <time className="text-sm text-gray-500">
                    {new Date(presentation.date).toLocaleDateString()}
                  </time>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {presentation.title}
                </h3>
                
                <p className="text-gray-600 mb-4 text-sm">
                  {presentation.description}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-3">
                  {presentation.tags.map(tag => (
                    <span 
                      key={tag}
                      className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    by {presentation.author}
                  </span>
                  <span className="text-blue-600 text-sm font-medium hover:text-blue-800">
                    View →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {filteredPresentations.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <p className="text-gray-500">No presentations found matching your filters.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Directory