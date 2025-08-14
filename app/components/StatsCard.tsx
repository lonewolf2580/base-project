import React from 'react'

export default function StatsCard() {
  return (
    <div className="bg-white shadow-lg rounded-xl p-8 flex flex-col items-center justify-center" style={{ minHeight: '22vh', marginTop: '2vh' }}>
      <h2 className="text-xl font-bold mb-4 text-gray-800">Account Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        <div className="bg-blue-100 rounded-lg p-6 flex flex-col items-center shadow-sm">
          <span className="text-base text-blue-700 font-semibold mb-2">Total Contributions</span>
          <span className="text-3xl font-extrabold text-blue-900">1,234</span>
        </div>
        <div className="bg-green-100 rounded-lg p-6 flex flex-col items-center shadow-sm">
          <span className="text-base text-green-700 font-semibold mb-2">Total Received</span>
          <span className="text-3xl font-extrabold text-green-900">$5,678</span>
        </div>
        <div className="bg-purple-100 rounded-lg p-6 flex flex-col items-center shadow-sm">
          <span className="text-base text-purple-700 font-semibold mb-2">Active Groups</span>
          <span className="text-3xl font-extrabold text-purple-900">12</span>
        </div>
      </div>
    </div>
  )
}
