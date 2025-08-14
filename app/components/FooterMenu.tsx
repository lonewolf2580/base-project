import React from 'react'

export default function FooterMenu() {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow-lg z-50">
      <nav className="flex justify-around items-center h-16">
        <a href="/dashboard" className="flex flex-col items-center text-gray-500 hover:text-blue-600 transition">
          <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0h6" />
          </svg>
          <span className="text-xs">Home</span>
        </a>
        <a href="/groups" className="flex flex-col items-center text-gray-500 hover:text-blue-600 transition">
          <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87M12 4a4 4 0 014 4v1a4 4 0 01-8 0V8a4 4 0 014-4z" />
          </svg>
          <span className="text-xs">Groups</span>
        </a>
        <a href="/history" className="flex flex-col items-center text-gray-500 hover:text-blue-600 transition">
          <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path d="M8 17v-1a4 4 0 014-4h0a4 4 0 014 4v1M12 7a4 4 0 100 8 4 4 0 000-8z" />
          </svg>
          <span className="text-xs">History</span>
        </a>
        <a href="#" className="flex flex-col items-center text-gray-500 hover:text-blue-600 transition">
          <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
          <span className="text-xs">Profile</span>
        </a>
      </nav>
    </footer>
  )
}
