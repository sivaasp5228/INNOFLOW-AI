import { createFileRoute, Link } from "@tanstack/react-router";
import { Sparkles, ArrowRight, TrendingUp, Workflow, Activity, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/dashboard/")({
  component: DashboardHome,
});

const recent = [
  { name: "Customer Onboarding", industry: "Operations", score: 9.1, time: "2h ago" },
  { name: "Q4 Marketing Launch", industry: "Marketing", score: 8.4, time: "Yesterday" },
  { name: "Sales Pipeline Revamp", industry: "Sales", score: 8.8, time: "2 days ago" },
];

function DashboardHome() {
  return (
    <div className="p-6 lg:p-10 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Welcome back 👋</h1>
          <p className="mt-1 text-muted-foreground">Your decision engine is ready. Generate a new workflow or review insights.</p>
        </div>
        <Link to="/dashboard/generate">
          <Button className="bg-gradient-brand hover:opacity-90 text-white border-0 ring-glow">
            <Sparkles className="mr-1.5 h-4 w-4" /> Generate Workflow
          </Button>
        </Link>
      </div>

      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { icon: Workflow, label: "Workflows", value: "247", trend: "+12%" },
          { icon: TrendingUp, label: "Avg. Efficiency", value: "8.7", trend: "+0.4" },
          { icon: Clock, label: "Time Saved", value: "1,284h", trend: "+18%" },
          { icon: Activity, label: "Decisions / wk", value: "62", trend: "+9%" },
        ].map((s) => (
          <div key={s.label} className="glass rounded-2xl p-5">
            <div className="flex items-center justify-between">
              <s.icon className="h-5 w-5 text-primary" />
              <span className="text-xs text-primary">{s.trend}</span>
            </div>
            <div className="mt-3 text-2xl font-bold">{s.value}</div>
            <div className="text-xs text-muted-foreground mt-0.5">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="mt-8 grid lg:grid-cols-3 gap-5">
        <div className="glass rounded-2xl p-6 lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold">Recent workflows</h2>
            <Link to="/dashboard/insights" className="text-xs text-primary hover:underline">View all</Link>
          </div>
          <div className="divide-y divide-border">
            {recent.map((r) => (
              <div key={r.name} className="py-3 flex items-center justify-between">
                <div>
                  <div className="font-medium">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.industry} · {r.time}</div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-semibold text-gradient-brand">{r.score}/10</span>
                  <ArrowRight className="h-4 w-4 text-muted-foreground" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass rounded-2xl p-6 flex flex-col">
          <h2 className="font-semibold">AI Suggestion</h2>
          <p className="mt-2 text-sm text-muted-foreground">Your sales pipeline can drop 22% in cycle time by parallelizing stages 3 and 4.</p>
          <div className="mt-auto pt-6">
            <Link to="/dashboard/generate">
              <Button variant="outline" className="w-full bg-transparent">Generate optimized variant</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}