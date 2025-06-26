import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: React.ReactNode;
}

export function MetricCard({ title, value, change, isPositive, icon }: MetricCardProps) {
  return (
    <div className="bg-slate-800 overflow-hidden rounded-lg border border-slate-700">
      <div className="p-5">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
              {icon}
            </div>
          </div>
          <div className="ml-5 w-0 flex-1">
            <dl>
              <dt className="text-sm font-medium text-slate-400 truncate">{title}</dt>
              <dd className="text-lg font-medium text-white">{value}</dd>
            </dl>
          </div>
        </div>
        <div className="mt-4 flex items-center">
          <div className={`flex items-center ${isPositive ? 'text-emerald-400' : 'text-red-400'}`}>
            {isPositive ? (
              <TrendingUp className="h-4 w-4 mr-1" />
            ) : (
              <TrendingDown className="h-4 w-4 mr-1" />
            )}
            <span className="text-sm font-medium">{change}</span>
          </div>
          <span className="text-slate-400 text-sm ml-2">vs last month</span>
        </div>
      </div>
    </div>
  );
}