import React from 'react';
import Spline from '@splinetool/react-spline';
import { ShieldCheck, Users } from 'lucide-react';

export default function Hero({ role, onChangeRole }) {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="pt-10 pb-8 sm:pt-16 sm:pb-12 lg:pt-20 lg:pb-16 grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/5 px-3 py-1 text-xs text-black/70">
              <ShieldCheck className="h-4 w-4 text-[#B10100]" /> Secure client portal
            </div>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-black sm:text-4xl lg:text-5xl">
              Digital Marketing Client Portal
            </h1>
            <p className="mt-4 max-w-xl text-black/70">
              A clean, responsive space for clients and internal teams to track projects, manage invoices, and automate WhatsApp reminders.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="text-sm text-black/60">Viewing as:</span>
              <div className="inline-flex rounded-lg border border-black/10 bg-white p-1">
                <button
                  onClick={() => onChangeRole('client')}
                  className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
                    role === 'client' ? 'bg-[#B10100] text-white' : 'text-black hover:bg-black/5'
                  }`}
                >
                  Client
                </button>
                <button
                  onClick={() => onChangeRole('internal')}
                  className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
                    role === 'internal' ? 'bg-[#B10100] text-white' : 'text-black hover:bg-black/5'
                  }`}
                >
                  Internal Team
                </button>
              </div>
            </div>
            <div className="mt-6 flex items-center gap-3 text-black/60 text-sm">
              <Users className="h-4 w-4" />
              <span>Google Sign-In supported. Role-based access.</span>
            </div>
          </div>

          <div className="relative h-[320px] sm:h-[380px] lg:h-[440px] rounded-2xl bg-white border border-black/10 shadow-sm">
            <Spline
              scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-white/0 via-white/0 to-white/0" />
          </div>
        </div>
      </div>
    </section>
  );
}
