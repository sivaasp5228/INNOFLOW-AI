import { Workflow } from "lucide-react";

export function Logo({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const dim = size === "lg" ? "h-10 w-10" : size === "sm" ? "h-7 w-7" : "h-9 w-9";
  const text = size === "lg" ? "text-2xl" : size === "sm" ? "text-base" : "text-lg";
  return (
    <div className="flex items-center gap-2.5">
      <div className={`${dim} rounded-xl bg-gradient-brand grid place-items-center ring-glow`}>
        <Workflow className="h-5 w-5 text-white" />
      </div>
      <span className={`${text} font-semibold tracking-tight`}>
        Innoflow<span className="text-gradient-brand"> AI</span>
      </span>
    </div>
  );
}