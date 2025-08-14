import React from 'react'

export default function GroupCard() {
return (
    <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow p-6">
        <h2 className="text-2xl font-semibold mb-3 text-black">Group Name</h2>
        <p className="text-green-500 font-medium mb-2">Status: Active</p>
        <p className="text-gray-700 mb-2">Members: 5</p>
        <p className="text-gray-700 mb-4">Next payout date: 2024-07-15</p>
        <button
            className="px-5 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition"
        >
            Pay
        </button>
    </div>
)
}
