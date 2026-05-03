import { createFileRoute, Outlet, Link, useRouterState } from "@tanstack/react-router";
import { LayoutDashboard, Sparkles, BarChart3, Settings, LogOut, Bell, Menu } from "lucide-react";
import { Logo } from "@/components/innoflow/Logo";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { useState } from "react";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Dashboard — Innoflow AI" },
      { name: "description", content: "Generate, analyze, and optimize business workflows." },
    ],
  }),
  component: DashboardLayout,
});

type NavItem = {
  to: "/dashboard" | "/dashboard/generate" | "/dashboard/insights" | "/dashboard/settings";
  label: string;
  icon: typeof LayoutDashboard;
  exact?: boolean;
};

const items: NavItem[] = [
  { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard, exact: true },
  { to: "/dashboard/generate", label: "Generate Workflow", icon: Sparkles },
  { to: "/dashboard/insights", label: "Workflow Insights", icon: BarChart3 },
  { to: "/dashboard/settings", label: "Settings", icon: Settings },
];

function DashboardLayout() {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);

  const NavList = ({ onNavigate }: { onNavigate?: () => void }) => (
    <nav className="flex-1 p-3 space-y-1">
      {items.map((it) => {
        const active = it.exact ? path === it.to : path.startsWith(it.to);
        return (
          <Link
            key={it.to}
            to={it.to}
            onClick={onNavigate}
            className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-smooth ${
              active
                ? "bg-gradient-brand text-white ring-glow"
                : "text-muted-foreground hover:text-foreground hover:bg-white/5"
            }`}
          >
            <it.icon className="h-4 w-4" />
            {it.label}
          </Link>
        );
      })}
    </nav>
  );

  return (
    <div className="min-h-screen bg-hero text-foreground flex">
      {/* Sidebar */}
      <aside className="hidden md:flex fixed left-0 top-0 w-64 h-screen shrink-0 flex-col border-r border-border bg-sidebar/60 backdrop-blur-xl z-10">
        <div className="p-5 border-b border-border">
          <Link to="/"><Logo size="sm" /></Link>
        </div>
        <NavList />
        <div className="p-3 border-t border-border">
          <Link to="/" className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-white/5 transition">
            <LogOut className="h-4 w-4" /> Sign out
          </Link>
        </div>
      </aside>

      <div className="flex-1 flex flex-col min-w-0 md:ml-64">
        <header className="h-16 border-b border-border bg-background/40 backdrop-blur-md flex items-center justify-between px-4 sm:px-6 sticky top-0 z-20">
          <div className="md:hidden flex items-center gap-2">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open menu"><Menu className="h-5 w-5" /></Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-72 bg-sidebar/95 backdrop-blur-xl p-0 flex flex-col border-border">
                <SheetTitle className="sr-only">Navigation</SheetTitle>
                <div className="p-5 border-b border-border"><Logo size="sm" /></div>
                <NavList onNavigate={() => setOpen(false)} />
                <div className="p-3 border-t border-border">
                  <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-white/5 transition">
                    <LogOut className="h-4 w-4" /> Sign out
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
            <Logo size="sm" />
          </div>
          <div className="hidden md:block">
            <div className="text-xs text-muted-foreground">Workspace</div>
            <div className="text-sm font-medium">Acme Operations · Production</div>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="rounded-full"><Bell className="h-4 w-4" /></Button>
            <div className="h-9 w-9 rounded-full bg-gradient-brand grid place-items-center text-white text-sm font-semibold ring-glow">DA</div>
          </div>
        </header>
        <main className="flex-1 overflow-auto"><Outlet /></main>
      </div>
    </div>
  );
}