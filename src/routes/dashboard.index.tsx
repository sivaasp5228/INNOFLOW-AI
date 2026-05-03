import { createFileRoute, Link } from "@tanstack/react-router";
import { Sparkles, ArrowRight, TrendingUp, Workflow, Activity, Clock, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { useRecentWorkflows, useWorkflowStats } from "@/hooks/useWorkflows";

export const Route = createFileRoute("/dashboard/")({
  component: DashboardHome,
});

function DashboardHome() {
  const { user, loading: authLoading } = useAuth();
  const { recentWorkflows, loading: workflowsLoading } = useRecentWorkflows(user?.id);
  const { stats, loading: statsLoading } = useWorkflowStats(user?.id);

  const loading = authLoading || workflowsLoading || statsLoading;

  if (loading) {
    return (
      <div className="p-6 lg:p-10 max-w-7xl mx-auto">
        <div className="flex items-center justify-center min-h-[400px]">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      </div>
    );
  }

  const userName = user?.profile?.name || user?.email || "User";

  return (
    <div className="p-6 lg:p-10 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Welcome back, {userName.split(' ')[0]}! 👋</h1>
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
          { 
            icon: Workflow, 
            label: "Workflows", 
            value: stats.totalWorkflows.toString(), 
            trend: stats.totalWorkflows > 0 ? "+1" : "0" 
          },
          { 
            icon: TrendingUp, 
            label: "Avg. Confidence", 
            value: stats.avgConfidence.toFixed(1), 
            trend: "+0.1" 
          },
          { 
            icon: Clock, 
            label: "Time Saved", 
            value: `${Math.floor(stats.totalWorkflows * 4.2)}h`, 
            trend: "+12%" 
          },
          { 
            icon: Activity, 
            label: "This Week", 
            value: Math.min(stats.totalWorkflows, 7).toString(), 
            trend: "+2" 
          },
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
            {recentWorkflows.length > 0 ? (
              recentWorkflows.map((workflow) => (
                <div key={workflow.id} className="py-3 flex items-center justify-between">
                  <div>
                    <div className="font-medium">{workflow.title}</div>
                    <div className="text-xs text-muted-foreground">
                      {workflow.industry || 'General'} · {new Date(workflow.created_at).toLocaleDateString()}
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold text-gradient-brand">
                      {workflow.confidence ? `${workflow.confidence}%` : 'N/A'}
                    </span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                  </div>
                </div>
              ))
            ) : (
              <div className="py-8 text-center text-muted-foreground">
                <p className="text-sm">No workflows yet. Generate your first workflow to get started!</p>
              </div>
            )}
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