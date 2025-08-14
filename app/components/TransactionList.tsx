import React from 'react'

type TransactionListProps = {
    limit?: number;
};

export default function TransactionList({ limit = 10 }: TransactionListProps) {
    // Replace with your actual data source if available
    const transactions = Array.from({ length: 50 }, (_, i) => ({
        date: new Date().toLocaleDateString(),
        amount: (Math.random() * 100).toFixed(2),
        type: i % 2 === 0 ? 'Contribution' : 'Received',
        group: `Group ${((i % 3) + 1)}`,
    }));

    const displayedTransactions = transactions.slice(0, limit);

    return (
        <div className="overflow-x-auto rounded-lg shadow mt-6 mb-32">
            <table className="min-w-full bg-white">
                <thead>
                    <tr>
                        <th className="px-4 py-2 text-left bg-blue-400">Date</th>
                        <th className="px-4 py-2 text-left bg-blue-400">Amount</th>
                        <th className="px-4 py-2 text-left bg-blue-400">Type</th>
                        <th className="px-4 py-2 text-left bg-blue-400">Group Name</th>
                    </tr>
                </thead>
                <tbody>
                    {displayedTransactions.map((tx, i) => (
                        <tr key={i} className="border-b hover:bg-gray-50 transition-colors">
                            <td className="px-4 py-2 text-gray-700">{tx.date}</td>
                            <td className="px-4 py-2 text-gray-900 font-semibold">$ {tx.amount}</td>
                            <td className={`px-4 py-2 font-medium ${i % 2 === 0 ? 'text-blue-600' : 'text-green-600'}`}>
                                {tx.type}
                            </td>
                            <td className="px-4 py-2 text-gray-700">{tx.group}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
