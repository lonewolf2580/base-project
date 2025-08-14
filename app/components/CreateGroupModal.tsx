"use client"
import React from 'react'

export default function CreateGroupModal() {
    const [open, setOpen] = React.useState(false)

  return (
    <div>
      <button
        onClick={() => setOpen(true)}
        className="px-4 py-2 mb-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Create Group
      </button>
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg min-w-[320px] shadow-lg">
            <h1 className="text-xl font-semibold mb-4">Create Group</h1>
            <form>
              <div className="mb-3">
            <label htmlFor="groupName" className="block mb-1 font-medium text-gray-700">
              Group Name:
            </label>
            <input
              id="groupName"
              type="text"
              name="groupName"
              className="mt-1 w-full px-3 py-2 border border-gray-400 text-gray-900 bg-white rounded focus:outline-none focus:ring focus:border-blue-500"
            />
              </div>
              <div className="mb-3">
            <label htmlFor="walletAddresses" className="block mb-1 font-medium text-gray-700">
              Members’ Wallet Addresses:
            </label>
            <textarea
              id="walletAddresses"
              name="walletAddresses"
              rows={3}
              className="mt-1 w-full px-3 py-2 border border-gray-400 text-gray-900 bg-white rounded focus:outline-none focus:ring focus:border-blue-500"
            />
              </div>
              <div className="mb-3">
            <label htmlFor="contribution" className="block mb-1 font-medium text-gray-700">
              Contribution Amount:
            </label>
            <input
              id="contribution"
              type="number"
              name="contribution"
              className="mt-1 w-full px-3 py-2 border border-gray-400 text-gray-900 bg-white rounded focus:outline-none focus:ring focus:border-blue-500"
            />
              </div>
              <div className="mb-3">
            <label htmlFor="frequency" className="block mb-1 font-medium text-gray-700">
              Payout Frequency:
            </label>
            <select
              id="frequency"
              name="frequency"
              className="mt-1 w-full px-3 py-2 border border-gray-400 text-gray-900 bg-white rounded focus:outline-none focus:ring focus:border-blue-500"
            >
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
            </select>
              </div>
              <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Create
            </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
