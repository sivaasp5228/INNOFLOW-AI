import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { B as Button } from "./button-Cz8PAkJh.mjs";
import { u as useAuth } from "./useAuth-B67bTPb3.mjs";
import { u as useRecentWorkflows, a as useWorkflowStats } from "./useWorkflows-CJ-mzWei.mjs";
import { L as LoaderCircle, S as Sparkles, W as Workflow, g as TrendingUp, h as Clock, i as Activity, A as ArrowRight } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/supabase__supabase-js.mjs";
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "tslib";
import "../_libs/supabase__functions-js.mjs";
function DashboardHome() {
  const {
    user,
    loading: authLoading
  } = useAuth();
  const {
    recentWorkflows,
    loading: workflowsLoading
  } = useRecentWorkflows(user?.id);
  const {
    stats,
    loading: statsLoading
  } = useWorkflowStats(user?.id);
  const loading = authLoading || workflowsLoading || statsLoading;
  if (loading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-6 lg:p-10 max-w-7xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center min-h-[400px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-8 w-8 animate-spin text-primary" }) }) });
  }
  const userName = user?.profile?.name || user?.email || "User";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 lg:p-10 max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row md:items-end md:justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-3xl font-bold tracking-tight", children: [
          "Welcome back, ",
          userName.split(" ")[0],
          "! 👋"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-muted-foreground", children: "Your decision engine is ready. Generate a new workflow or review insights." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/dashboard/generate", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { className: "bg-gradient-brand hover:opacity-90 text-white border-0 ring-glow", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "mr-1.5 h-4 w-4" }),
        " Generate Workflow"
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4", children: [{
      icon: Workflow,
      label: "Workflows",
      value: stats.totalWorkflows.toString(),
      trend: stats.totalWorkflows > 0 ? "+1" : "0"
    }, {
      icon: TrendingUp,
      label: "Avg. Confidence",
      value: stats.avgConfidence.toFixed(1),
      trend: "+0.1"
    }, {
      icon: Clock,
      label: "Time Saved",
      value: `${Math.floor(stats.totalWorkflows * 4.2)}h`,
      trend: "+12%"
    }, {
      icon: Activity,
      label: "This Week",
      value: Math.min(stats.totalWorkflows, 7).toString(),
      trend: "+2"
    }].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-2xl p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "h-5 w-5 text-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-primary", children: s.trend })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 text-2xl font-bold", children: s.value }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-0.5", children: s.label })
    ] }, s.label)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 grid lg:grid-cols-3 gap-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-2xl p-6 lg:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-semibold", children: "Recent workflows" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/dashboard/insights", className: "text-xs text-primary hover:underline", children: "View all" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-border", children: recentWorkflows.length > 0 ? recentWorkflows.map((workflow) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-3 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: workflow.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
              workflow.industry || "General",
              " · ",
              new Date(workflow.created_at).toLocaleDateString()
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold text-gradient-brand", children: workflow.confidence ? `${workflow.confidence}%` : "N/A" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 text-muted-foreground" })
          ] })
        ] }, workflow.id)) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-8 text-center text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "No workflows yet. Generate your first workflow to get started!" }) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-2xl p-6 flex flex-col", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-semibold", children: "AI Suggestion" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Your sales pipeline can drop 22% in cycle time by parallelizing stages 3 and 4." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-auto pt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/dashboard/generate", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", className: "w-full bg-transparent", children: "Generate optimized variant" }) }) })
      ] })
    ] })
  ] });
}
export {
  DashboardHome as component
};
