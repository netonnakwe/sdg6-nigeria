"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  Target,
  TrendingUp,
  Map,
  Database,
  BookOpen,
  Settings,
  CircleHelp,
  Scale,
} from "lucide-react";

const platformLinks = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
    active: true,
  },
  {
    label: "Indicators",
    href: "/indicators",
    icon: Target,
    badge: "3",
  },
  {
    label: "Trends & 2030 Goals",
    href: "/trends",
    icon: TrendingUp,
  },
  {
    label: "Rural vs Urban",
    href: "/rural-urban",
    icon: Scale,
  },
  {
    label: "Geopolitical Zones",
    href: "/zones",
    icon: Map,
  },
  {
    label: "Data Sources",
    href: "/sources",
    icon: Database,
  },
];

const governanceLinks = [
  {
    label: "Methodology Notes",
    href: "/methodology",
    icon: BookOpen,
  },
  {
    label: "Settings",
    href: "/settings",
    icon: Settings,
  },
  {
    label: "Help & Support",
    href: "/help",
    icon: CircleHelp,
  },
];

export function Sidebar() {
  return (
    <aside className="hidden w-[224px] shrink-0 border-r bg-white lg:flex lg:flex-col">
      <div className="flex h-[76px] items-center gap-3 border-b px-5">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-50 text-cyan-700">
          💧
        </div>

        <div>
          <p className="text-sm font-semibold text-slate-900">
            SDG 6 Nigeria
          </p>
          <p className="text-[10px] text-slate-400">
            Clean Water & Sanitation
          </p>
        </div>
      </div>

      <div className="flex-1 px-3 py-5">
        <SidebarSection title="PLATFORM" links={platformLinks} />

        <div className="my-6 border-t" />

        <SidebarSection title="GOVERNANCE" links={governanceLinks} />
      </div>

      <div className="m-4 rounded-2xl bg-slate-900 p-4 text-white">
        <p className="text-xs font-semibold">WHO / UNICEF JMP</p>

        <p className="mt-2 text-[10px] leading-4 text-slate-300">
          Official WASH data and longitudinal estimates.
        </p>

        <button className="mt-4 w-full rounded-lg bg-cyan-500 py-2 text-xs font-semibold">
          Download CSV Data
        </button>
      </div>
    </aside>
  );
}

function SidebarSection({
  title,
  links,
}: {
  title: string;
  links: typeof platformLinks;
}) {
  return (
    <div>
      <p className="mb-3 px-3 text-[10px] font-semibold tracking-widest text-slate-400">
        {title}
      </p>

      <nav className="space-y-1">
        {links.map((link) => {
          const Icon = link.icon;

          return (
            <Link
              key={link.label}
              href={link.href}
              className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm ${
                link.active
                  ? "bg-cyan-50 font-medium text-cyan-900"
                  : "text-slate-600 hover:bg-slate-50"
              }`}
            >
              <Icon className="h-4 w-4" />

              <span className="flex-1">{link.label}</span>

              {link.badge && (
                <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px]">
                  {link.badge}
                </span>
              )}

              {link.active && (
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
              )}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}