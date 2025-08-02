// Utility functions for managing presentation metadata

/**
 * Static presentation registry
 * In the future, this could be replaced with file system scanning or a CMS
 */
export const presentationRegistry = [
  {
    id: 'nextjs-mdx-deck',
    title: 'NextJS MDX Deck Demo',
    description: 'Create presentations using Next & React & MDX',
    path: '/demo',
    category: 'demo',
    tags: ['nextjs', 'mdx', 'react'],
    author: 'Demo',
    date: '2024-01-01'
  },
  {
    id: 'mdx-components',
    title: 'MDX Components Guide', 
    description: 'Elevate authoring with components',
    path: '/page-2',
    category: 'tutorial',
    tags: ['mdx', 'components', 'jsx'],
    author: 'Demo',
    date: '2024-01-02'
  },
  {
    id: 'july-report-2024',
    title: 'July 2024 Report',
    description: 'Construction Projects Update',
    path: '/presentations/2024-07/july-report',
    category: 'reports',
    tags: ['construction', 'buildertrend', 'monthly'],
    author: 'Mitchell Metz',
    date: '2024-07-31'
  }
]

/**
 * Get all presentations
 */
export const getAllPresentations = () => {
  return presentationRegistry.sort((a, b) => new Date(b.date) - new Date(a.date))
}

/**
 * Get presentations by category
 */
export const getPresentationsByCategory = (category) => {
  return presentationRegistry.filter(p => p.category === category)
}

/**
 * Get presentations by tag
 */
export const getPresentationsByTag = (tag) => {
  return presentationRegistry.filter(p => p.tags.includes(tag))
}

/**
 * Get all unique categories
 */
export const getCategories = () => {
  return [...new Set(presentationRegistry.map(p => p.category))]
}

/**
 * Get all unique tags
 */
export const getTags = () => {
  return [...new Set(presentationRegistry.flatMap(p => p.tags))]
}

/**
 * Search presentations by title or description
 */
export const searchPresentations = (query) => {
  const lowercaseQuery = query.toLowerCase()
  return presentationRegistry.filter(p => 
    p.title.toLowerCase().includes(lowercaseQuery) ||
    p.description.toLowerCase().includes(lowercaseQuery) ||
    p.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  )
}

/**
 * Category color mapping for UI
 */
export const getCategoryColor = (category) => {
  const colors = {
    demo: 'bg-blue-100 text-blue-800',
    tutorial: 'bg-green-100 text-green-800',
    reports: 'bg-purple-100 text-purple-800',
    business: 'bg-orange-100 text-orange-800',
    technical: 'bg-gray-100 text-gray-800',
    personal: 'bg-pink-100 text-pink-800'
  }
  return colors[category] || 'bg-gray-100 text-gray-800'
}