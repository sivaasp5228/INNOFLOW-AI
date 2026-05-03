import { createFileRoute, Link } from "@tanstack/react-router";
import { Brain, Cpu, GitBranch, Sparkles, TrendingDown, ArrowRight, Workflow, ShieldCheck } from "lucide-react";
import { Logo } from "@/components/innoflow/Logo";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Innoflow AI" },
      { name: "description", content: "Autonomous AI Workflow Optimizer." },
    ],
  }),
  component: Index,
});

const features = [
  { icon: Brain, title: "AI-Powered Workflow Analysis", desc: "Deep semantic parsing of business processes to surface bottlenecks and dependencies." },
  { icon: GitBranch, title: "Autonomous Workflow Generation", desc: "Generates complete, executable workflows from a single prompt — no setup required." },
  { icon: Cpu, title: "Multi-Strategy Decision Engine", desc: "Evaluates cost, speed, and balance strategies in parallel using internal heuristics." },
  { icon: Sparkles, title: "Intelligent Recommendations", desc: "Picks the optimal strategy with transparent reasoning your team can trust." },
  { icon: TrendingDown, title: "Efficiency & Cost Optimization", desc: "Cuts manual effort and operational cost while preserving execution quality." },
];

function Index() {
  return (
    <div className="min-h-screen bg-hero text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-30 backdrop-blur-md bg-background/40 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Logo />
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#features" className="hover:text-foreground transition">Features</a>
            <a href="#how" className="hover:text-foreground transition">How it works</a>
            <a href="#enterprise" className="hover:text-foreground transition">Enterprise</a>
          </nav>
          <div className="flex items-center gap-2">
            <Link to="/login"><Button variant="ghost" className="text-foreground/80">Sign in</Button></Link>
            <Link to="/login">
              <Button className="bg-gradient-brand hover:opacity-90 text-white border-0">
                Get Started <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 pt-24 pb-32 text-center relative">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs text-muted-foreground mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Autonomous Decision Intelligence — v2.0
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] max-w-5xl mx-auto">
            Autonomous AI that <span className="text-gradient-brand">analyzes, optimizes</span>,
            and decides the best workflow for your business
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Transform complex business processes into intelligent, optimized execution strategies instantly.
          </p>
          <div className="mt-10 flex items-center justify-center gap-3">
            <Link to="/login">
              <Button size="lg" className="bg-gradient-brand hover:opacity-90 text-white border-0 h-12 px-7 text-base ring-glow">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <a href="#features">
              <Button size="lg" variant="outline" className="h-12 px-7 text-base bg-transparent">
                Explore features
              </Button>
            </a>
          </div>

          {/* Floating preview */}
          <div className="mt-20 relative">
            <div className="glass rounded-2xl p-6 max-w-4xl mx-auto text-left ring-glow">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
                <div className="h-2.5 w-2.5 rounded-full bg-primary/70" />
                <div className="h-2.5 w-2.5 rounded-full bg-accent/70" />
                <span className="ml-3 text-xs text-muted-foreground">innoflow.ai / dashboard</span>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                {["Low Cost", "Fast Execution", "Balanced"].map((label, i) => (
                  <div key={label} className={`rounded-xl p-4 border ${i === 2 ? "border-primary glow-pink" : "border-border"} bg-background/40`}>
                    <div className="text-xs text-muted-foreground mb-1">Strategy {String.fromCharCode(65 + i)}</div>
                    <div className="text-base font-semibold">{label}</div>
                    <div className="mt-3 space-y-1.5">
                      <div className="h-1.5 rounded bg-muted overflow-hidden"><div className="h-full bg-gradient-brand" style={{ width: `${60 + i * 12}%` }} /></div>
                      <div className="h-1.5 rounded bg-muted overflow-hidden"><div className="h-full bg-gradient-brand" style={{ width: `${40 + i * 18}%` }} /></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <div className="text-sm text-primary font-medium tracking-wider uppercase">Capabilities</div>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight">An AI that thinks like an operator</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">Five core systems work together to turn ambiguous processes into measurable execution.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <div key={f.title} className="glass rounded-2xl p-6 hover:border-primary/50 transition group">
              <div className="h-11 w-11 rounded-lg bg-gradient-brand grid place-items-center mb-4 group-hover:ring-glow transition">
                <f.icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="max-w-7xl mx-auto px-6 py-24">
        <div className="glass rounded-3xl p-10 md:p-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-sm text-primary font-medium tracking-wider uppercase">How it works</div>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">From raw process to recommended strategy in seconds</h2>
              <p className="mt-4 text-muted-foreground">Innoflow's decision engine evaluates multiple execution paths in parallel and recommends the optimum based on your industry context.</p>
              <ul className="mt-6 space-y-3 text-sm">
                {["Describe your process in plain English", "AI generates 3 strategy options", "Recommendation with transparent reasoning"].map((s, i) => (
                  <li key={s} className="flex items-start gap-3">
                    <span className="h-6 w-6 rounded-full bg-gradient-brand grid place-items-center text-xs font-semibold text-white">{i + 1}</span>
                    <span className="text-foreground/90">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Workflow, label: "Workflows generated", value: "12,480+" },
                { icon: TrendingDown, label: "Avg. cost reduction", value: "37%" },
                { icon: ShieldCheck, label: "Enterprise ready", value: "SOC 2" },
                { icon: Sparkles, label: "Decision accuracy", value: "94.6%" },
              ].map((s) => (
                <div key={s.label} className="rounded-2xl p-5 border border-border bg-background/40">
                  <s.icon className="h-5 w-5 text-primary mb-3" />
                  <div className="text-2xl font-bold">{s.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="enterprise" className="max-w-5xl mx-auto px-6 py-24 text-center">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Make every workflow your best workflow.</h2>
        <p className="mt-4 text-muted-foreground">Step into the dashboard and let Innoflow decide for you.</p>
        <Link to="/login" className="inline-block mt-8">
          <Button size="lg" className="bg-gradient-brand hover:opacity-90 text-white border-0 h-12 px-8 ring-glow">
            Launch Innoflow <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </section>

      <footer className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <Logo size="sm" />
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Innoflow AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
