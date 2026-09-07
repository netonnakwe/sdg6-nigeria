import {
  Droplets,
  Accessibility,
  Hand,
  Gauge,
} from "lucide-react";

import { DashboardShell } from "@/components/layout/dashboard-shell";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { KpiCard } from "@/components/dashboard/kpi-card";
import { HistoricalTrend } from "@/components/dashboard/historical-trend";
import { CompositeIndex } from "@/components/dashboard/composite-index";
import { ServiceLadder } from "@/components/dashboard/service-ladder";
import { RegionalPerformance } from "@/components/dashboard/regional-performance";
import { DemographicDisparity } from "@/components/dashboard/demographic-disparity";

export default function DashboardPage() {
  return (
    <DashboardShell>
      <DashboardHeader />

      {/* KPI ROW */}
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <KpiCard
          title="Drinking Water"
          value="67.2%"
          change="+8.4%"
          description="SDG 6.1.1 Basic or Safely Managed"
          icon={Droplets}
          variant="cyan"
        />

        <KpiCard
          title="Sanitation"
          value="46.5%"
          change="+5.2%"
          description="SDG 6.2.1a"
          icon={Accessibility}
          variant="green"
        />

        <KpiCard
          title="Hygiene Access"
          value="17.8%"
          description="SDG 6.2.1b Basic"
          icon={Hand}
          variant="orange"
        />

        <KpiCard
          title="Target Run-Rate"
          value="5.46%"
          description="Needed for 100% universal access"
          icon={Gauge}
          variant="purple"
        />
      </section>

      {/* TREND + COMPOSITE */}
      <section className="mt-5 grid gap-5 xl:grid-cols-[minmax(0,2fr)_minmax(280px,1fr)]">
        <HistoricalTrend />
        <CompositeIndex />
      </section>

      {/* SERVICE LADDER + REGIONS */}
      <section className="mt-5 grid gap-5 xl:grid-cols-[minmax(0,2fr)_minmax(280px,1fr)]">
        <ServiceLadder />
        <RegionalPerformance />
      </section>

      {/* DISPARITY */}
      <section className="mt-5">
        <DemographicDisparity />
      </section>
    </DashboardShell>
  );
}