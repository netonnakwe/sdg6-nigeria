"use client";

import { dashboardData } from "@/data/mock-dashboard";

export function RegionalPerformance() {
  return (
    <div className="rounded-2xl border bg-white p-5 shadow-sm">
      <h2 className="font-semibold text-slate-900">
        Regional Performance
      </h2>

      <p className="mt-1 text-xs text-slate-400">
        Basic WASH coverage across 6 geopolitical zones
      </p>

      <div className="mt-8 flex h-52 items-end justify-between gap-3">
        {dashboardData.regions.map((region) => (
          <div
            key={region.name}
            className="flex h-full flex-1 flex-col items-center justify-end gap-2"
          >
            <span className="text-[10px] font-semibold text-slate-500">
              {region.value}%
            </span>

            <div
              className={`w-full max-w-[30px] rounded-t-lg ${
                region.name === "SW"
                  ? "bg-cyan-600"
                  : "bg-slate-100"
              }`}
              style={{
                height: `${region.value * 1.5}px`,
              }}
            />

            <span className="text-[9px] font-medium text-slate-400">
              {region.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}