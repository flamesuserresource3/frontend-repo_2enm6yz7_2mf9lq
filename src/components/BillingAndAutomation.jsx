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
              <h2 className="text-xl sm:text-2xl font-semibold text-black">Invoices</h2>
              <p className="text-black/70 text-sm mt-1">View invoices, payment status, and history.</p>
            </div>
            {role === 'internal' && (
              <button className="hidden sm:inline-flex items-center gap-2 rounded-lg border border-[#B10100] bg-[#B10100] px-3 py-2 text-sm text-white shadow-sm hover:opacity-90">
                <FileText className="h-4 w-4" /> Upload Invoice
              </button>
            )}
          </div>

          <div className="mt-4 rounded-xl border border-black/10 bg-white shadow-sm overflow-hidden">
            <div className="divide-y divide-black/5">
              {invoices.map((inv) => (
                <div key={inv.id} className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-black/5 border border-black/10 inline-flex items-center justify-center text-black/70">
                      <CreditCard className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-black">{inv.id} • {inv.client}</p>
                      <p className="text-xs text-black/60">{inv.due}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <span className="text-black font-semibold">${inv.amount.toLocaleString()}</span>
                    <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs border ${
                      inv.status === 'Paid'
                        ? 'border-black/20 text-black'
                        : 'border-[#B10100] text-[#B10100]'
                    }`}>
                      {inv.status}
                    </span>
                    {role === 'internal' && (
                      <button className="ml-auto rounded-lg border border-black/10 bg-white px-3 py-1.5 text-sm text-black hover:bg-black/5">
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
          <h2 className="text-xl sm:text-2xl font-semibold text-black">WhatsApp Automation</h2>
          <p className="text-black/70 text-sm mt-1">Automatic reminders for payments, milestones and approvals.</p>

          <div className="mt-4 space-y-4">
            <div className="rounded-xl border border-black/10 bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-[#B10100]/10 text-[#B10100] inline-flex items-center justify-center">
                    <Send className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-black">Payment due reminders</p>
                    <p className="text-xs text-black/60">7, 3 and 1 day before due date</p>
                  </div>
                </div>
                <label className="inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="peer sr-only" defaultChecked />
                  <span className="h-5 w-9 rounded-full bg-black/20 peer-checked:bg-[#B10100] transition-colors relative">
                    <span className="absolute left-0.5 top-0.5 h-4 w-4 rounded-full bg-white shadow transition-transform peer-checked:translate-x-4" />
                  </span>
                </label>
              </div>
            </div>

            <div className="rounded-xl border border-black/10 bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-black/5 text-black inline-flex items-center justify-center">
                    <Bell className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-black">Milestone updates</p>
                    <p className="text-xs text-black/60">Notify clients upon phase completion</p>
                  </div>
                </div>
                <label className="inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="peer sr-only" defaultChecked />
                  <span className="h-5 w-9 rounded-full bg-black/20 peer-checked:bg-[#B10100] transition-colors relative">
                    <span className="absolute left-0.5 top-0.5 h-4 w-4 rounded-full bg-white shadow transition-transform peer-checked:translate-x-4" />
                  </span>
                </label>
              </div>
            </div>

            <div className="rounded-xl border border-black/10 bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-black/5 text-black inline-flex items-center justify-center">
                    <Send className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-black">Task / approval nudges</p>
                    <p className="text-xs text-black/60">Escalate if no response in 48h</p>
                  </div>
                </div>
                <label className="inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="peer sr-only" defaultChecked />
                  <span className="h-5 w-9 rounded-full bg-black/20 peer-checked:bg-[#B10100] transition-colors relative">
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
