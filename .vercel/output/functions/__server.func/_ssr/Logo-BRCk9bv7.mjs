import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { W as Workflow } from "../_libs/lucide-react.mjs";
function Logo({ size = "md" }) {
  const dim = size === "lg" ? "h-10 w-10" : size === "sm" ? "h-7 w-7" : "h-9 w-9";
  const text = size === "lg" ? "text-2xl" : size === "sm" ? "text-base" : "text-lg";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `${dim} rounded-xl bg-gradient-brand grid place-items-center ring-glow`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Workflow, { className: "h-5 w-5 text-white" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `${text} font-semibold tracking-tight`, children: [
      "Innoflow",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-brand", children: " AI" })
    ] })
  ] });
}
export {
  Logo as L
};
