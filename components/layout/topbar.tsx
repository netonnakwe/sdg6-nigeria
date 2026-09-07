"use client";

import {
  Bell,
  CalendarDays,
  Download,
  Search,
  ChevronDown,
} from "lucide-react";

export function Topbar() {
  return (
    <header className="flex h-[76px] items-center gap-4 border-b bg-white px-6">
      <div className="relative max-w-[290px] flex-1">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

        <input
          placeholder="Search indicators, targets, states..."
          className="h-10 w-full rounded-xl border bg-slate-50 pl-10 pr-4 text-xs outline-none focus:border-cyan-400"
        />
      </div>

      <button className="flex h-10 items-center gap-3 rounded-xl border px-3 text-xs">
        <CalendarDays className="h-4 w-4 text-slate-400" />

        <span>
          <strong>2000 – 2024</strong>
          <br />
          <span className="text-slate-400">(Latest)</span>
        </span>

        <ChevronDown className="h-3 w-3 text-slate-400" />
      </button>

      <div className="hidden rounded-xl bg-emerald-50 px-4 py-2 text-xs text-emerald-700 md:block">
        <span className="font-semibold">Target</span>
        <br />
        2030
      </div>

      <div className="hidden items-center rounded-xl bg-slate-100 p-1 md:flex">
        {["National", "Urban", "Rural"].map((item, index) => (
          <button
            key={item}
            className={`rounded-lg px-3 py-2 text-[11px] ${
              index === 0
                ? "bg-white font-medium shadow-sm"
                : "text-slate-500"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <button className="hidden items-center gap-2 rounded-xl bg-cyan-700 px-4 py-2.5 text-xs font-semibold text-white md:flex">
        <Download className="h-4 w-4" />
        Export
      </button>

      <button className="rounded-full border p-2">
        <Bell className="h-4 w-4 text-slate-500" />
      </button>

      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-600 text-xs font-bold text-white">
        NG
      </div>
    </header>
  );
}