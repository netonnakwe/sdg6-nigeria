import { LucideIcon } from "lucide-react";

interface KpiCardProps {
  title: string;
  value: string;
  description: string;
  change?: string;
  icon: LucideIcon;
  variant?: "cyan" | "green" | "orange" | "purple";
}

export function KpiCard({
  title,
  value,
  description,
  change,
  icon: Icon,
  variant = "cyan",
}: KpiCardProps) {
  const backgrounds = {
    cyan: "bg-cyan-50 text-cyan-700",
    green: "bg-emerald-50 text-emerald-700",
    orange: "bg-orange-50 text-orange-600",
    purple: "bg-indigo-50 text-indigo-600",
  };

  return (
    <div className="rounded-2xl border bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between">
        <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
          {title}
        </p>

        <div className={`rounded-full p-2 ${backgrounds[variant]}`}>
          <Icon className="h-4 w-4" />
        </div>
      </div>

      <div className="mt-7 flex items-end gap-2">
        <span className="text-3xl font-semibold tracking-tight text-slate-900">
          {value}
        </span>

        {change && (
          <span className="mb-1 rounded-md bg-emerald-50 px-2 py-1 text-[10px] font-medium text-emerald-600">
            ↗ {change}
          </span>
        )}
      </div>

      <p className="mt-2 text-[11px] text-slate-400">
        {description}
      </p>
    </div>
  );
}