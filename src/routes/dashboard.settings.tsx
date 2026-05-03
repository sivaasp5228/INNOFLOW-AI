import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export const Route = createFileRoute("/dashboard/settings")({
  component: SettingsPage,
});

function SettingsPage() {
  const [name, setName] = useState("Demo Account");
  const [email, setEmail] = useState("demo@innoflow.ai");
  const [autonomy, setAutonomy] = useState(true);
  const [notify, setNotify] = useState(true);

  return (
    <div className="p-6 lg:p-10 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
      <p className="mt-1 text-muted-foreground">Manage your workspace and decision-engine preferences.</p>

      <div className="mt-8 glass rounded-2xl p-6">
        <h2 className="font-semibold">Profile</h2>
        <div className="mt-4 grid sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" value={name} onChange={(e) => setName(e.target.value)} className="bg-background/50" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-background/50" />
          </div>
        </div>
      </div>

      <div className="mt-6 glass rounded-2xl p-6 space-y-5">
        <h2 className="font-semibold">Decision Engine</h2>
        <div className="flex items-center justify-between">
          <div>
            <div className="font-medium">Autonomous mode</div>
            <div className="text-xs text-muted-foreground">Auto-select recommended strategy without confirmation.</div>
          </div>
          <Switch checked={autonomy} onCheckedChange={setAutonomy} />
        </div>
        <div className="flex items-center justify-between">
          <div>
            <div className="font-medium">Email notifications</div>
            <div className="text-xs text-muted-foreground">Get notified when a new optimization is found.</div>
          </div>
          <Switch checked={notify} onCheckedChange={setNotify} />
        </div>
      </div>

      <div className="mt-6 flex justify-end gap-2">
        <Button variant="outline" className="bg-transparent">Cancel</Button>
        <Button className="bg-gradient-brand text-white border-0 hover:opacity-90">Save changes</Button>
      </div>
    </div>
  );
}