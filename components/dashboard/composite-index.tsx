export function CompositeIndex() {
  return (
    <div className="rounded-2xl border bg-white p-5 shadow-sm">
      <div>
        <h2 className="font-semibold text-slate-900">
          SDG 6 Composite Index
        </h2>

        <p className="mt-1 text-xs text-slate-400">
          Overall national progress toward universal target
        </p>
      </div>

      <div className="flex flex-col items-center justify-center py-8">
        <div className="relative flex h-44 w-44 items-center justify-center">
          <svg
            className="absolute inset-0 h-full w-full -rotate-90"
            viewBox="0 0 100 100"
          >
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#e8eef5"
              strokeWidth="8"
              strokeDasharray="125 251"
              strokeLinecap="round"
            />

            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#10b981"
              strokeWidth="8"
              strokeDasharray="135 251"
              strokeLinecap="round"
            />
          </svg>

          <div className="text-center">
            <p className="text-4xl font-semibold text-slate-900">
              54%
            </p>
            <p className="text-[10px] text-slate-400">
              On track for 2030 target
            </p>
          </div>
        </div>

        <button className="rounded-xl border px-4 py-2 text-xs font-medium text-slate-700">
          View Detailed Metrics
        </button>
      </div>
    </div>
  );
}