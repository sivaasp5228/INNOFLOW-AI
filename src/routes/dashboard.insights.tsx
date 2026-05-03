import { createFileRoute } from "@tanstack/react-router";
import { TrendingUp, BarChart3, PieChart, Activity, Brain, Lightbulb, Target, Zap, AlertTriangle } from "lucide-react";

export const Route = createFileRoute("/dashboard/insights")({
  component: InsightsPage,
});

const rows = [
  { name: "Customer Onboarding", industry: "Operations", strategy: "Balanced", efficiency: 9.2, cost: "Medium", status: "Active" },
  { name: "Q4 Marketing Launch", industry: "Marketing", strategy: "Fast Execution", efficiency: 8.6, cost: "High", status: "Active" },
  { name: "Sales Pipeline Revamp", industry: "Sales", strategy: "Balanced", efficiency: 8.8, cost: "Medium", status: "Draft" },
  { name: "Vendor Procurement", industry: "Operations", strategy: "Low Cost", efficiency: 7.4, cost: "Low", status: "Active" },
  { name: "Founder Outreach", industry: "Startup", strategy: "Fast Execution", efficiency: 8.2, cost: "Medium", status: "Archived" },
];

function InsightsPage() {
  const bars = [62, 78, 45, 88, 70, 95, 60, 80, 72, 90, 84, 67];
  
  const aiInsights = [
    {
      icon: Brain,
      title: "AI Pattern Detection",
      description: "Marketing workflows show 23% higher efficiency when automated follow-up sequences are implemented",
      type: "insight",
      priority: "high"
    },
    {
      icon: Target,
      title: "Optimization Opportunity",
      description: "Sales pipelines can reduce cycle time by 18% through AI-powered lead scoring",
      type: "opportunity", 
      priority: "medium"
    },
    {
      icon: Zap,
      title: "Performance Boost",
      description: "Operations workflows using parallel processing show 34% faster completion times",
      type: "success",
      priority: "high"
    },
    {
      icon: AlertTriangle,
      title: "Risk Alert",
      description: "3 workflows show declining efficiency scores over the past 2 weeks",
      type: "warning",
      priority: "medium"
    }
  ];

  return (
    <div className="p-6 lg:p-10 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-2">
        <h1 className="text-3xl font-bold tracking-tight">AI Workflow Insights</h1>
        <div className="flex items-center gap-2 text-xs text-green-600">
          <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
          🤖 AI Analysis Active
        </div>
      </div>
      <p className="mt-1 text-muted-foreground">Performance, cost, and decision quality across all generated workflows with AI-powered recommendations.</p>

      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { icon: TrendingUp, label: "Avg. Efficiency", value: "8.7 / 10" },
          { icon: Activity, label: "Active Workflows", value: "38" },
          { icon: BarChart3, label: "Cost Reduction", value: "37%" },
          { icon: PieChart, label: "Recommended Adopted", value: "92%" },
        ].map((s) => (
          <div key={s.label} className="glass rounded-2xl p-5">
            <s.icon className="h-5 w-5 text-primary" />
            <div className="mt-3 text-2xl font-bold">{s.value}</div>
            <div className="text-xs text-muted-foreground mt-0.5">{s.label}</div>
          </div>
        ))}
      </div>

      {/* AI Insights Section */}
      <div className="mt-8">
        <div className="flex items-center gap-2 mb-4">
          <Lightbulb className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-semibold">AI-Powered Insights</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {aiInsights.map((insight, index) => {
            const Icon = insight.icon;
            return (
              <div key={index} className={`glass rounded-2xl p-5 border-l-4 ${
                insight.type === 'warning' ? 'border-l-amber-500' :
                insight.type === 'success' ? 'border-l-green-500' :
                insight.type === 'opportunity' ? 'border-l-blue-500' :
                'border-l-purple-500'
              }`}>
                <div className="flex items-start gap-3">
                  <div className={`p-2 rounded-lg ${
                    insight.type === 'warning' ? 'bg-amber-500/20 text-amber-400' :
                    insight.type === 'success' ? 'bg-green-500/20 text-green-400' :
                    insight.type === 'opportunity' ? 'bg-blue-500/20 text-blue-400' :
                    'bg-purple-500/20 text-purple-400'
                  }`}>
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-sm">{insight.title}</h3>
                    <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{insight.description}</p>
                    <div className="mt-2 flex items-center gap-2">
                      <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                        insight.priority === 'high' ? 'bg-red-500/20 text-red-300' :
                        'bg-amber-500/20 text-amber-300'
                      }`}>
                        {insight.priority} priority
                      </span>
                      <span className="text-[10px] text-muted-foreground">
                        AI detected
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-8 grid lg:grid-cols-3 gap-5">
        <div className="glass rounded-2xl p-6 lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold">Efficiency over time</h2>
            <span className="text-xs text-muted-foreground">Last 12 weeks</span>
          </div>
          <div className="h-48 flex items-end gap-2">
            {bars.map((h, i) => (
              <div key={i} className="flex-1 rounded-t-md bg-gradient-brand opacity-80 hover:opacity-100 transition" style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>
        <div className="glass rounded-2xl p-6">
          <h2 className="font-semibold mb-4">Strategy mix</h2>
          {[
            { label: "Balanced", v: 56 },
            { label: "Fast Execution", v: 28 },
            { label: "Low Cost", v: 16 },
          ].map((s) => (
            <div key={s.label} className="mb-4 last:mb-0">
              <div className="flex justify-between text-xs mb-1.5">
                <span>{s.label}</span><span className="text-muted-foreground">{s.v}%</span>
              </div>
              <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                <div className="h-full bg-gradient-brand" style={{ width: `${s.v}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 glass rounded-2xl overflow-hidden">
        <div className="p-6 border-b border-border"><h2 className="font-semibold">All workflows</h2></div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-xs text-muted-foreground bg-white/5">
              <tr>
                {["Workflow", "Industry", "Strategy", "Efficiency", "Cost", "Status"].map((h) => (
                  <th key={h} className="text-left font-medium px-6 py-3">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.name} className="border-t border-border hover:bg-white/[0.02]">
                  <td className="px-6 py-3 font-medium">{r.name}</td>
                  <td className="px-6 py-3 text-muted-foreground">{r.industry}</td>
                  <td className="px-6 py-3">{r.strategy}</td>
                  <td className="px-6 py-3 text-gradient-brand font-semibold">{r.efficiency}</td>
                  <td className="px-6 py-3 text-muted-foreground">{r.cost}</td>
                  <td className="px-6 py-3">
                    <span className={`text-[11px] px-2 py-0.5 rounded-full border ${
                      r.status === "Active" ? "bg-emerald-500/15 text-emerald-300 border-emerald-500/30" :
                      r.status === "Draft" ? "bg-amber-500/15 text-amber-300 border-amber-500/30" :
                      "bg-white/5 text-muted-foreground border-border"
                    }`}>{r.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}