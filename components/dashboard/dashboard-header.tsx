export function DashboardHeader() {
  return (
    <div className="mb-6 flex flex-col justify-between gap-3 md:flex-row md:items-end">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
          National WASH Overview
        </h1>

        <p className="mt-1 text-xs text-slate-500">
          Empirical tracking across UN SDG Targets 6.1 & 6.2
          for the Federal Republic of Nigeria.
        </p>
      </div>

      <div className="flex items-center gap-2 text-[11px] text-slate-400">
        <span className="h-2 w-2 rounded-full bg-emerald-500" />
        NBS & JMP Modelled Synthesis
        <span>•</span>
        CI 95%
      </div>
    </div>
  );
}