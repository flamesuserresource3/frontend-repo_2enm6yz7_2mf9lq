import React from 'react';
import { CreditCard, FileText, Send, Bell } from 'lucide-react';

const invoices = [
  { id: 'INV-2045', client: 'Acme Inc', amount: 3200, due: 'Nov 25, 2025', status: 'Due' },
  { id: 'INV-2038', client: 'Nimbus', amount: 5800, due: 'Dec 3, 2025', status: 'Pending' },
  { id: 'INV-2011', client: 'Polar', amount: 2100, due: 'Paid Oct 12, 2025', status: 'Paid' },
];

export default function BillingAndAutomation({ role }) {
  return (
    <section className="py-6 sm:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-5 gap-6">
        <div className="lg:col-span-3">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">Invoices</h2>
              <p className="text-slate-600 text-sm mt-1">View invoices, payment status, and history.</p>
            </div>
            {role === 'internal' && (
              <button className="hidden sm:inline-flex items-center gap-2 rounded-lg border border-blue-600 bg-blue-600 px-3 py-2 text-sm text-white shadow-sm hover:bg-blue-700">
                <FileText className="h-4 w-4" /> Upload Invoice
              </button>
            )}
          </div>

          <div className="mt-4 rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
            <div className="divide-y divide-slate-100">
              {invoices.map((inv) => (
                <div key={inv.id} className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-slate-50 border border-slate-200 inline-flex items-center justify-center text-slate-600">
                      <CreditCard className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">{inv.id} • {inv.client}</p>
                      <p className="text-xs text-slate-500">{inv.due}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <span className="text-slate-900 font-semibold">${inv.amount.toLocaleString()}</span>
                    <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs ${
                      inv.status === 'Paid'
                        ? 'bg-emerald-50 text-emerald-700'
                        : inv.status === 'Due'
                        ? 'bg-rose-50 text-rose-700'
                        : 'bg-amber-50 text-amber-700'
                    }`}>
                      {inv.status}
                    </span>
                    {role === 'internal' && (
                      <button className="ml-auto rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-50">
                        Mark as {inv.status === 'Paid' ? 'Unpaid' : 'Paid'}
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">WhatsApp Automation</h2>
          <p className="text-slate-600 text-sm mt-1">Automatic reminders for payments, milestones and approvals.</p>

          <div className="mt-4 space-y-4">
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-emerald-50 text-emerald-700 inline-flex items-center justify-center">
                    <Send className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">Payment due reminders</p>
                    <p className="text-xs text-slate-500">7, 3 and 1 day before due date</p>
                  </div>
                </div>
                <label className="inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="peer sr-only" defaultChecked />
                  <span className="h-5 w-9 rounded-full bg-slate-200 peer-checked:bg-emerald-500 transition-colors relative">
                    <span className="absolute left-0.5 top-0.5 h-4 w-4 rounded-full bg-white shadow transition-transform peer-checked:translate-x-4" />
                  </span>
                </label>
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-blue-50 text-blue-700 inline-flex items-center justify-center">
                    <Bell className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">Milestone updates</p>
                    <p className="text-xs text-slate-500">Notify clients upon phase completion</p>
                  </div>
                </div>
                <label className="inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="peer sr-only" defaultChecked />
                  <span className="h-5 w-9 rounded-full bg-slate-200 peer-checked:bg-blue-600 transition-colors relative">
                    <span className="absolute left-0.5 top-0.5 h-4 w-4 rounded-full bg-white shadow transition-transform peer-checked:translate-x-4" />
                  </span>
                </label>
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-amber-50 text-amber-700 inline-flex items-center justify-center">
                    <Send className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">Task / approval nudges</p>
                    <p className="text-xs text-slate-500">Escalate if no response in 48h</p>
                  </div>
                </div>
                <label className="inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="peer sr-only" defaultChecked />
                  <span className="h-5 w-9 rounded-full bg-slate-200 peer-checked:bg-amber-500 transition-colors relative">
                    <span className="absolute left-0.5 top-0.5 h-4 w-4 rounded-full bg-white shadow transition-transform peer-checked:translate-x-4" />
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
