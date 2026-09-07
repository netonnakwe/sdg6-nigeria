import { ReactNode } from "react";
import { Sidebar } from "./sidebar";
import { Topbar } from "./topbar";

export function DashboardShell({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-[#f5f7fb]">
      <Sidebar />

      <div className="min-w-0 flex-1">
        <Topbar />

        <main className="mx-auto max-w-[1500px] p-6">
          {children}
        </main>
      </div>
    </div>
  );
}