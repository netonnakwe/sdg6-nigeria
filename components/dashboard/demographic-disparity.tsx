export function DemographicDisparity() {
  return (
    <div className="rounded-2xl border bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-semibold text-slate-900">
            Demographic Setting Disparity
          </h2>

          <p className="mt-1 text-xs text-slate-400">
            Urban metropolitan centres versus rural communities
          </p>
        </div>

        <span className="rounded-lg bg-cyan-50 px-3 py-2 text-[10px] font-medium text-cyan-700">
          Sub-national Gap
        </span>
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <DisparityCard
          title="Clean Water Coverage"
          gap="31% Gap"
          urban="87%"
          rural="56%"
        />

        <DisparityCard
          title="Sanitation & Latrine Access"
          gap="24% Gap"
          urban="61%"
          rural="37%"
        />
      </div>
    </div>
  );
}

function DisparityCard({
  title,
  gap,
  urban,
  rural,
}: {
  title: string;
  gap: string;
  urban: string;
  rural: string;
}) {
  return (
    <div className="rounded-xl bg-slate-50 p-4">
      <div className="flex justify-between">
        <p className="text-xs font-semibold text-slate-700">
          {title}
        </p>

        <span className="text-[10px] font-medium text-red-500">
          {gap}
        </span>
      </div>

      <div className="mt-4">
        <div className="flex justify-between text-[10px]">
          <span className="text-slate-400">Urban Access</span>
          <strong>{urban}</strong>
        </div>

        <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-200">
          <div
            className="h-full rounded-full bg-cyan-500"
            style={{ width: urban }}
          />
        </div>
      </div>

      <div className="mt-4">
        <div className="flex justify-between text-[10px]">
          <span className="text-slate-400">Rural Access</span>
          <strong>{rural}</strong>
        </div>

        <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-200">
          <div
            className="h-full rounded-full bg-slate-400"
            style={{ width: rural }}
          />
        </div>
      </div>
    </div>
  );
}