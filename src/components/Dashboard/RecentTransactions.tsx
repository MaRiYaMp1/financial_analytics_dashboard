import React from 'react';
import { MoreHorizontal } from 'lucide-react';
import { format } from 'date-fns';

interface Transaction {
  id: number;
  user_id: string;
  user_profile: string;
  amount: number;
  date: string;
  category: 'Revenue' | 'Expense';
  status: 'Paid' | 'Pending';
}

interface RecentTransactionsProps {
  transactions: Transaction[];
}

export function RecentTransactions({ transactions }: RecentTransactionsProps) {
  const recentTransactions = transactions.slice(0, 5);

  return (
    <div className="bg-slate-800 rounded-lg border border-slate-700 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-medium text-white">Recent Transactions</h3>
        <button className="text-emerald-400 text-sm font-medium hover:text-emerald-300">
          View All
        </button>
      </div>
      <div className="space-y-4">
        {recentTransactions.map((transaction) => (
          <div key={transaction.id} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img
                src={transaction.user_profile}
                alt={transaction.user_id}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="text-sm font-medium text-white">{transaction.user_id}</p>
                <p className="text-xs text-slate-400">
                  {format(new Date(transaction.date), 'MMM dd, yyyy')}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span
                className={`text-sm font-medium ${
                  transaction.category === 'Revenue' ? 'text-emerald-400' : 'text-red-400'
                }`}
              >
                {transaction.category === 'Revenue' ? '+' : '-'}$
                {Math.abs(transaction.amount).toLocaleString()}
              </span>
              <span
                className={`px-2 py-1 text-xs rounded-full ${
                  transaction.status === 'Paid'
                    ? 'bg-emerald-900 text-emerald-300'
                    : 'bg-orange-900 text-orange-300'
                }`}
              >
                {transaction.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}