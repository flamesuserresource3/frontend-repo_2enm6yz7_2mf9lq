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
    <div className="min-h-screen bg-white text-black">
      {/* Top Nav */}
      <header className="sticky top-0 z-20 border-b border-black/10 bg-white/80 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-[#B10100]" />
            <span className="font-semibold">Agency Portal</span>
          </div>
          <div className="flex items-center gap-3">
            <button className="hidden sm:inline-flex rounded-lg border border-black/10 bg-white px-3 py-1.5 text-sm text-black hover:bg-black/5">
              Sign in with Google
            </button>
            <div className="text-xs text-black/60">Role: {role}</div>
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
      <footer className="border-t border-black/10 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-sm text-black/60">
          © {new Date().getFullYear()} Digital Marketing Agency • All rights reserved
        </div>
      </footer>
    </div>
  );
}

export default App;
