import React from 'react';
import { Calendar, FileText, CheckCircle2, Clock } from 'lucide-react';

const sampleProjects = [
  {
    id: 'PR-1042',
    name: 'SEO Revamp - Acme Inc',
    status: 'Active',
    due: 'Nov 30, 2025',
    progress: 72,
    tasks: [
      { id: 1, title: 'Keyword audit', done: true },
      { id: 2, title: 'On-page fixes', done: true },
      { id: 3, title: 'Content briefs x10', done: false },
      { id: 4, title: 'Backlink outreach', done: false },
    ],
    files: 5,
  },
  {
    id: 'PR-1037',
    name: 'Paid Media Funnel - Nimbus',
    status: 'Pending Review',
    due: 'Dec 8, 2025',
    progress: 45,
    tasks: [
      { id: 1, title: 'Audience mapping', done: true },
      { id: 2, title: 'Creative concepts', done: false },
      { id: 3, title: 'Landing page draft', done: false },
    ],
    files: 3,
  },
  {
    id: 'PR-1009',
    name: 'Brand Guidelines - Polar',
    status: 'Completed',
    due: 'Oct 02, 2025',
    progress: 100,
    tasks: [
      { id: 1, title: 'Discovery workshop', done: true },
      { id: 2, title: 'Design system', done: true },
      { id: 3, title: 'Handover', done: true },
    ],
    files: 9,
  },
];

export default function ProjectsSection({ role }) {
  return (
    <section className="py-6 sm:py-10 bg-slate-50/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">Projects</h2>
            <p className="text-slate-600 text-sm mt-1">Active, pending and completed projects with timelines and tasks.</p>
          </div>
          <button
            className={`hidden sm:inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm shadow-sm transition-colors ${
              role === 'internal'
                ? 'border-blue-600 bg-blue-600 text-white hover:bg-blue-700'
                : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
            }`}
          >
            <FileText className="h-4 w-4" /> {role === 'internal' ? 'New Project' : 'Download Summary'}
          </button>
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {sampleProjects.map((p) => (
            <article key={p.id} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-slate-900">{p.name}</h3>
                  <p className="text-xs text-slate-500">{p.id}</p>
                </div>
                <span className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs ${
                  p.status === 'Completed'
                    ? 'bg-emerald-50 text-emerald-700'
                    : p.status === 'Active'
                    ? 'bg-blue-50 text-blue-700'
                    : 'bg-amber-50 text-amber-700'
                }`}>
                  {p.status === 'Completed' ? (
                    <CheckCircle2 className="h-3.5 w-3.5" />
                  ) : (
                    <Clock className="h-3.5 w-3.5" />
                  )}
                  {p.status}
                </span>
              </div>

              <div className="mt-4 flex items-center justify-between text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-slate-500" /> Due {p.due}
                </div>
                <div className="text-slate-500">{p.files} files</div>
              </div>

              <div className="mt-4">
                <div className="h-2 w-full rounded-full bg-slate-100">
                  <div
                    className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500"
                    style={{ width: `${p.progress}%` }}
                  />
                </div>
                <div className="mt-2 text-xs text-slate-500">{p.progress}% complete</div>
              </div>

              <ul className="mt-4 space-y-2">
                {p.tasks.slice(0, 3).map((t) => (
                  <li key={t.id} className="flex items-center gap-2 text-sm">
                    <span
                      className={`inline-block h-4 w-4 rounded-full border ${t.done ? 'bg-emerald-500 border-emerald-500' : 'border-slate-300'}`}
                    />
                    <span className={`${t.done ? 'line-through text-slate-400' : 'text-slate-700'}`}>{t.title}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex justify-end">
                <button className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-50">View details</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
