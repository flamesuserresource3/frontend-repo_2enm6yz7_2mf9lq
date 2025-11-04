import React, { useState } from 'react';
import Hero from './components/Hero';
import StatCards from './components/StatCards';
import ProjectsSection from './components/ProjectsSection';
import BillingAndAutomation from './components/BillingAndAutomation';

function App() {
  const [role, setRole] = useState('client'); // 'client' | 'internal'

  const stats = {
    active: 6,
    pending: 3,
    completed: 24,
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Top Nav */}
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-blue-600 to-indigo-600" />
            <span className="font-semibold">Agency Portal</span>
          </div>
          <div className="flex items-center gap-3">
            <button className="hidden sm:inline-flex rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-50">
              Sign in with Google
            </button>
            <div className="text-xs text-slate-500">Role: {role}</div>
          </div>
        </div>
      </header>

      {/* Hero with Spline and Role Toggle */}
      <Hero role={role} onChangeRole={setRole} />

      {/* Key stats */}
      <StatCards stats={stats} />

      {/* Projects */}
      <ProjectsSection role={role} />

      {/* Invoices + WhatsApp Automation */}
      <BillingAndAutomation role={role} />

      {/* Footer */}
      <footer className="border-t border-slate-200 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Digital Marketing Agency • All rights reserved
        </div>
      </footer>
    </div>
  );
}

export default App;
