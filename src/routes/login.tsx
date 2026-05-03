import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Logo } from "@/components/innoflow/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight, Info } from "lucide-react";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Sign in — Innoflow AI" },
      { name: "description", content: "Enter the Innoflow AI dashboard." },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("demo@innoflow.ai");
  const [password, setPassword] = useState("••••••••");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate({ to: "/dashboard" });
  };

  return (
    <div className="min-h-screen bg-hero grid lg:grid-cols-2">
      <div className="hidden lg:flex flex-col justify-between p-12">
        <Link to="/"><Logo /></Link>
        <div>
          <h2 className="text-4xl font-bold tracking-tight max-w-md">
            "Innoflow cut our process design time by <span className="text-gradient-brand">82%</span>."
          </h2>
          <p className="mt-4 text-muted-foreground">— Head of Operations, Fortune 500 retailer</p>
        </div>
        <div className="text-xs text-muted-foreground">© {new Date().getFullYear()} Innoflow AI</div>
      </div>

      <div className="flex items-center justify-center p-6 lg:p-12">
        <form onSubmit={submit} className="w-full max-w-md glass rounded-2xl p-8 ring-glow">
          <div className="lg:hidden mb-6"><Logo /></div>
          <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
          <p className="mt-1 text-sm text-muted-foreground">Sign in to access the decision engine.</p>

          <div className="mt-6 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-background/50" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="bg-background/50" />
            </div>
          </div>

          <Button type="submit" className="mt-6 w-full bg-gradient-brand hover:opacity-90 text-white border-0 h-11">
            Enter Dashboard <ArrowRight className="ml-1.5 h-4 w-4" />
          </Button>

          <div className="mt-5 flex items-start gap-2 rounded-lg border border-border bg-background/40 p-3 text-xs text-muted-foreground">
            <Info className="h-4 w-4 text-primary shrink-0 mt-0.5" />
            <span><span className="text-foreground font-medium">Demo Mode</span> — No authentication required. Any credentials will work.</span>
          </div>

          <div className="mt-6 text-center text-xs text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition">← Back to home</Link>
          </div>
        </form>
      </div>
    </div>
  );
}