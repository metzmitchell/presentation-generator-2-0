import React from 'react'
import Link from 'next/link'

export default function Header({ name, title, date, url }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-4 bg-white dark:bg-gray-900 shadow-sm">
      <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
        <a href={url} className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
          <span className="font-medium">{name}</span>
        </a>
        <span>—</span>
        <Link href="/1">
          <a className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors">{title}</a>
        </Link>
      </div>
      <time className="text-sm text-gray-500 dark:text-gray-500">{date}</time>
    </header>
  )
}
