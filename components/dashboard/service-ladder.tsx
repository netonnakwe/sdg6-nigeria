const services = [
  {
    name: "Water (6.1.1)",
    values: [
      ["Safely Managed", 13.1],
      ["Basic", 54.1],
      ["Limited", 9.8],
      ["Unimproved", 8.2],
      ["Unserved", 14.8],
    ],
  },
  {
    name: "Sanitation (6.2.1a)",
    values: [
      ["Safely Managed", 18.2],
      ["Basic", 28.3],
      ["Limited", 11.2],
      ["Open Defecation", 23.3],
      ["Other", 19],
    ],
  },
  {
    name: "Hygiene (6.2.1b)",
    values: [
      ["Basic", 17.8],
      ["Limited", 49.8],
      ["No Facility", 32.4],
    ],
  },
];

export function ServiceLadder() {
  return (
    <div className="rounded-2xl border bg-white p-5 shadow-sm">
      <h2 className="font-semibold text-slate-900">
        JMP Service Ladder Distribution
      </h2>

      <p className="mt-1 text-xs text-slate-400">
        Granular tier classifications across household population
      </p>

      <div className="mt-6 space-y-6">
        {services.map((service) => (
          <div key={service.name}>
            <div className="mb-2 flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-700">
                {service.name}
              </span>

              <span className="text-[10px] text-slate-400">
                {service.values
                  .slice(0, 3)
                  .map(([name, value]) => `${value}% ${name}`)
                  .join(" • ")}
              </span>
            </div>

            <div className="flex h-2.5 overflow-hidden rounded-full bg-slate-100">
              {service.values.map(([name, value], index) => (
                <div
                  key={name}
                  title={`${name}: ${value}%`}
                  style={{ width: `${value}%` }}
                  className={
                    index === 0
                      ? "bg-emerald-600"
                      : index === 1
                        ? "bg-cyan-500"
                        : index === 2
                          ? "bg-slate-300"
                          : index === 3
                            ? "bg-amber-400"
                            : "bg-rose-400"
                  }
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}