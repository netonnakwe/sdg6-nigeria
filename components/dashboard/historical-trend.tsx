"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { dashboardData } from "@/data/mock-dashboard";

export function HistoricalTrend() {
  return (
    <div className="rounded-2xl border bg-white p-5 shadow-sm">
      <div className="flex flex-col justify-between gap-4 md:flex-row">
        <div>
          <h2 className="font-semibold text-slate-900">
            Historical Trend & 2030 Projection
          </h2>

          <p className="mt-1 text-xs text-slate-400">
            Progress rate vs required 100% universal access trajectory
          </p>
        </div>

        <div className="flex flex-wrap gap-4 text-[11px]">
          <Legend label="Water 6.1.1" />
          <Legend label="Sanitation 6.2.1a" />
          <Legend label="Hygiene 6.2.1b" />
          <Legend label="2030 Goal" />
        </div>
      </div>

      <div className="mt-6 h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={dashboardData.trend}>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#eef2f7"
            />

            <XAxis
              dataKey="year"
              tick={{ fontSize: 10, fill: "#94a3b8" }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              domain={[0, 100]}
              tick={{ fontSize: 10, fill: "#94a3b8" }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(value) => `${value}%`}
            />

            <Tooltip
              contentStyle={{
                borderRadius: 12,
                border: "1px solid #e2e8f0",
                fontSize: 11,
              }}
              formatter={(value) => `${value}%`}
            />

            <Line
              type="monotone"
              dataKey="water"
              stroke="#0891b2"
              strokeWidth={2.5}
              dot={false}
            />

            <Line
              type="monotone"
              dataKey="sanitation"
              stroke="#059669"
              strokeWidth={2.5}
              dot={false}
            />

            <Line
              type="monotone"
              dataKey="hygiene"
              stroke="#d97706"
              strokeWidth={2.5}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-3 gap-3 border-t pt-4">
        <SummaryBox
          label="2000 Baseline"
          value="43.1% Water"
        />

        <SummaryBox
          label="2024 JMP Update"
          value="67.2% (+24.1%)"
          highlighted
        />

        <SummaryBox
          label="2030 Required"
          value="100% Target"
          danger
        />
      </div>
    </div>
  );
}

function Legend({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-1.5">
      <span className="h-2 w-2 rounded-full bg-cyan-600" />
      {label}
    </div>
  );
}

function SummaryBox({
  label,
  value,
  highlighted,
  danger,
}: {
  label: string;
  value: string;
  highlighted?: boolean;
  danger?: boolean;
}) {
  return (
    <div
      className={`rounded-xl p-4 text-center ${
        danger
          ? "bg-red-50"
          : highlighted
            ? "bg-cyan-50"
            : "bg-slate-50"
      }`}
    >
      <p className="text-[10px] text-slate-400">{label}</p>
      <p
        className={`mt-1 text-xs font-semibold ${
          danger ? "text-red-600" : "text-slate-700"
        }`}
      >
        {value}
      </p>
    </div>
  );
}