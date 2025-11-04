import React from 'react';
import { Briefcase, CheckCircle2, Clock } from 'lucide-react';

export default function StatCards({ stats }) {
  const items = [
    {
      label: 'Active Projects',
      value: stats.active,
      icon: Briefcase,
      color: 'text-blue-600',
      bg: 'bg-blue-50',
    },
    {
      label: 'Pending Reviews',
      value: stats.pending,
      icon: Clock,
      color: 'text-amber-600',
      bg: 'bg-amber-50',
    },
    {
      label: 'Completed',
      value: stats.completed,
      icon: CheckCircle2,
      color: 'text-emerald-600',
      bg: 'bg-emerald-50',
    },
  ];

  return (
    <section className="py-6 sm:py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map(({ label, value, icon: Icon, color, bg }) => (
          <div key={label} className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <div className={`h-10 w-10 ${bg} ${color} inline-flex items-center justify-center rounded-lg`}>
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-slate-500">{label}</p>
                <p className="text-xl font-semibold text-slate-900">{value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
