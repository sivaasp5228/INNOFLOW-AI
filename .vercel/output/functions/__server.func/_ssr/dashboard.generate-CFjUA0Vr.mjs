import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { j as jsPDF } from "../_libs/jspdf.mjs";
import { B as Button, c as cn } from "./button-Cz8PAkJh.mjs";
import { L as Label } from "./label-DOAnQvhy.mjs";
import { R as Root2$1, V as Value, T as Trigger$1, I as Icon, P as Portal, C as Content2, a as Viewport, b as Item, c as ItemIndicator, d as ItemText, S as ScrollUpButton, e as ScrollDownButton, L as Label$1, f as Separator } from "../_libs/radix-ui__react-select.mjs";
import { B as Badge, C as Card, a as CardHeader, b as CardTitle, d as CardContent, S as Slider } from "./badge-CSVD5CH-.mjs";
import { R as Root, I as Indicator } from "../_libs/radix-ui__react-progress.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { R as Root2, L as List, T as Trigger, C as Content } from "../_libs/radix-ui__react-tabs.mjs";
import { G as GoogleGenerativeAI } from "../_libs/google__generative-ai.mjs";
import { u as useAuth } from "./useAuth-B67bTPb3.mjs";
import { b as useWorkflows } from "./useWorkflows-CJ-mzWei.mjs";
import { o as WandSparkles, L as LoaderCircle, S as Sparkles, p as CircleCheck, q as Shield, A as ArrowRight, r as ScanSearch, d as Brain, G as GitBranch, e as Cpu, h as Clock, D as DollarSign, Z as Zap, s as Download, t as ChevronDown, u as Check, v as Upload, X, w as Circle, x as Diamond, y as Square, m as TriangleAlert, z as Users, E as CircleCheckBig, n as Target, l as Lightbulb, g as TrendingUp, c as Settings, F as Wrench, H as Star, J as UserPlus, N as BookOpen, T as TrendingDown, O as ChevronUp, P as FileText, Q as CircleAlert, R as CircleX, I as Info } from "../_libs/lucide-react.mjs";
import "fs";
import "path";
import "../_libs/fflate.mjs";
import "../_libs/fast-png.mjs";
import "../_libs/iobuffer.mjs";
import "../_libs/pako.mjs";
import "../_libs/html2canvas.mjs";
import "../_libs/dompurify.mjs";
import "../_libs/canvg.mjs";
import "../_libs/core-js.mjs";
import "../_libs/babel__runtime.mjs";
import "../_libs/raf.mjs";
import "../_libs/performance-now.mjs";
import "../_libs/rgbcolor.mjs";
import "../_libs/svg-pathdata.mjs";
import "../_libs/stackblur-canvas.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/radix-ui__react-label.mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/radix-ui__number.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-collection.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-direction.mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "../_libs/@radix-ui/react-use-escape-keydown+[...].mjs";
import "../_libs/radix-ui__react-focus-guards.mjs";
import "../_libs/radix-ui__react-focus-scope.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/radix-ui__react-popper.mjs";
import "../_libs/floating-ui__react-dom.mjs";
import "../_libs/floating-ui__dom.mjs";
import "../_libs/floating-ui__core.mjs";
import "../_libs/floating-ui__utils.mjs";
import "../_libs/radix-ui__react-arrow.mjs";
import "../_libs/radix-ui__react-use-size.mjs";
import "../_libs/radix-ui__react-portal.mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/radix-ui__react-use-previous.mjs";
import "../_libs/@radix-ui/react-visually-hidden+[...].mjs";
import "../_libs/aria-hidden.mjs";
import "../_libs/react-remove-scroll.mjs";
import "tslib";
import "../_libs/react-remove-scroll-bar.mjs";
import "../_libs/react-style-singleton.mjs";
import "../_libs/get-nonce.mjs";
import "../_libs/use-sidecar.mjs";
import "../_libs/use-callback-ref.mjs";
import "../_libs/radix-ui__react-slider.mjs";
import "../_libs/radix-ui__react-roving-focus.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/supabase__supabase-js.mjs";
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "../_libs/supabase__functions-js.mjs";
const Textarea = reactExports.forwardRef(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "textarea",
      {
        className: cn(
          "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Textarea.displayName = "Textarea";
const Select = Root2$1;
const SelectValue = Value;
const SelectTrigger = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  Trigger$1,
  {
    ref,
    className: cn(
      "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
SelectTrigger.displayName = Trigger$1.displayName;
const SelectScrollUpButton = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  ScrollUpButton,
  {
    ref,
    className: cn("flex cursor-default items-center justify-center py-1", className),
    ...props,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "h-4 w-4" })
  }
));
SelectScrollUpButton.displayName = ScrollUpButton.displayName;
const SelectScrollDownButton = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  ScrollDownButton,
  {
    ref,
    className: cn("flex cursor-default items-center justify-center py-1", className),
    ...props,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-4 w-4" })
  }
));
SelectScrollDownButton.displayName = ScrollDownButton.displayName;
const SelectContent = reactExports.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Portal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
  Content2,
  {
    ref,
    className: cn(
      "relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-select-content-transform-origin)",
      position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      className
    ),
    position,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectScrollUpButton, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Viewport,
        {
          className: cn(
            "p-1",
            position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectScrollDownButton, {})
    ]
  }
) }));
SelectContent.displayName = Content2.displayName;
const SelectLabel = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Label$1,
  {
    ref,
    className: cn("px-2 py-1.5 text-sm font-semibold", className),
    ...props
  }
));
SelectLabel.displayName = Label$1.displayName;
const SelectItem = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  Item,
  {
    ref,
    className: cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ItemIndicator, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ItemText, { children })
    ]
  }
));
SelectItem.displayName = Item.displayName;
const SelectSeparator = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
));
SelectSeparator.displayName = Separator.displayName;
const Progress = reactExports.forwardRef(({ className, value, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Root,
  {
    ref,
    className: cn("relative h-2 w-full overflow-hidden rounded-full bg-primary/20", className),
    ...props,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Indicator,
      {
        className: "h-full w-full flex-1 bg-primary transition-all",
        style: { transform: `translateX(-${100 - (value || 0)}%)` }
      }
    )
  }
));
Progress.displayName = Root.displayName;
function DocumentUpload({ onFilesProcessed, maxFiles = 5 }) {
  const [files, setFiles] = reactExports.useState([]);
  const [isDragOver, setIsDragOver] = reactExports.useState(false);
  const handleDragOver = reactExports.useCallback((e) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);
  const handleDragLeave = reactExports.useCallback((e) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);
  const handleDrop = reactExports.useCallback((e) => {
    e.preventDefault();
    setIsDragOver(false);
    const droppedFiles = Array.from(e.dataTransfer.files);
    processFiles(droppedFiles);
  }, []);
  const handleFileSelect = reactExports.useCallback((e) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      processFiles(selectedFiles);
    }
  }, []);
  const processFiles = (newFiles) => {
    if (files.length + newFiles.length > maxFiles) {
      alert(`Maximum ${maxFiles} files allowed`);
      return;
    }
    const validTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "text/plain"
    ];
    const processedFiles = newFiles.filter((file) => validTypes.includes(file.type)).map((file) => ({
      id: Math.random().toString(36).substr(2, 9),
      name: file.name,
      size: file.size,
      type: file.type,
      status: "uploading",
      progress: 0
    }));
    setFiles((prev) => [...prev, ...processedFiles]);
    processedFiles.forEach((file) => {
      simulateFileProcessing(file);
    });
  };
  const simulateFileProcessing = (file) => {
    const uploadInterval = setInterval(() => {
      setFiles((prev) => prev.map((f) => {
        if (f.id === file.id && f.status === "uploading") {
          const newProgress = Math.min(f.progress + Math.random() * 20 + 10, 100);
          if (newProgress >= 100) {
            clearInterval(uploadInterval);
            setTimeout(() => startProcessing(f.id), 500);
          }
          return { ...f, progress: newProgress };
        }
        return f;
      }));
    }, 200);
    file.uploadInterval = uploadInterval;
  };
  const startProcessing = (fileId) => {
    setFiles((prev) => prev.map(
      (f) => f.id === fileId ? { ...f, status: "processing", progress: 0 } : f
    ));
    const processingInterval = setInterval(() => {
      setFiles((prev) => prev.map((f) => {
        if (f.id === fileId && f.status === "processing") {
          const newProgress = Math.min(f.progress + Math.random() * 15 + 5, 100);
          if (newProgress >= 100) {
            clearInterval(processingInterval);
            const extractedSteps = [
              "Initial client consultation and requirements gathering",
              "Stakeholder analysis and identification",
              "Process documentation and mapping",
              "Bottleneck identification and analysis",
              "Optimization recommendations generation",
              "Implementation planning and timeline creation",
              "Resource allocation and team assignment",
              "Success metrics and KPI definition",
              "Testing and validation procedures",
              "Deployment and monitoring setup"
            ];
            const updatedFile = {
              ...f,
              status: "completed",
              progress: 100,
              extractedSteps: extractedSteps.slice(0, Math.floor(Math.random() * 4) + 3)
            };
            onFilesProcessed([updatedFile]);
            return updatedFile;
          }
          return { ...f, progress: newProgress };
        }
        return f;
      }));
    }, 300);
  };
  const removeFile = (fileId) => {
    setFiles((prev) => prev.filter((f) => f.id !== fileId));
  };
  const formatFileSize = (bytes) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };
  const getFileIcon = (type) => {
    if (type.includes("pdf")) return /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-4 w-4 text-red-400" });
    if (type.includes("word")) return /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-4 w-4 text-blue-400" });
    return /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-4 w-4 text-gray-400" });
  };
  const getStatusIcon = (status) => {
    switch (status) {
      case "uploading":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-3 w-3 animate-spin text-blue-500" });
      case "processing":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-3 w-3 animate-spin text-orange-500" });
      case "completed":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "h-3 w-3 text-green-500" });
      case "error":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "h-3 w-3 text-red-500" });
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Card,
      {
        className: `border-2 border-dashed transition-colors ${isDragOver ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"}`,
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "p-8 text-center",
            onDragOver: handleDragOver,
            onDragLeave: handleDragLeave,
            onDrop: handleDrop,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "h-12 w-12 text-muted-foreground mx-auto mb-4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold mb-2", children: "Upload Process Documents" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-4", children: "Drag and drop PDF, Word, or text files here, or click to browse" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "file",
                  id: "file-upload",
                  multiple: true,
                  accept: ".pdf,.doc,.docx,.txt",
                  onChange: handleFileSelect,
                  className: "hidden"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { htmlFor: "file-upload", className: "cursor-pointer", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "mr-2 h-4 w-4" }),
                "Select Files"
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-2", children: [
                "Maximum ",
                maxFiles,
                " files • PDF, DOC, DOCX, TXT"
              ] })
            ]
          }
        )
      }
    ),
    files.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-medium", children: "Uploaded Files" }),
      files.map((file) => /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
        getFileIcon(file.type),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium truncate", children: file.name }),
            getStatusIcon(file.status),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-xs", children: file.status })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-2", children: formatFileSize(file.size) }),
          (file.status === "uploading" || file.status === "processing") && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Progress, { value: file.progress, className: "h-1" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-1", children: [
              file.status === "uploading" ? "Uploading..." : "Processing...",
              " ",
              Math.round(file.progress),
              "%"
            ] })
          ] }),
          file.status === "completed" && file.extractedSteps && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium mb-2", children: "Extracted Process Steps:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1", children: file.extractedSteps.map((step, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-primary" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: step })
            ] }, index)) })
          ] }),
          file.status === "error" && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-red-500 mt-1", children: file.error })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "ghost",
            size: "sm",
            onClick: () => removeFile(file.id),
            className: "shrink-0",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-3 w-3" })
          }
        )
      ] }) }, file.id))
    ] })
  ] });
}
const stepTypes = {
  start: { icon: Circle, color: "bg-green-500", borderColor: "border-green-500" },
  process: { icon: Square, color: "bg-blue-500", borderColor: "border-blue-500" },
  decision: { icon: Diamond, color: "bg-orange-500", borderColor: "border-orange-500" },
  end: { icon: Circle, color: "bg-red-500", borderColor: "border-red-500" }
};
function ProcessFlowDiagram({ steps, onStepClick, interactive = true }) {
  const [selectedStep, setSelectedStep] = reactExports.useState(null);
  const [hoveredStep, setHoveredStep] = reactExports.useState(null);
  const handleStepClick = (step) => {
    if (interactive) {
      setSelectedStep(step.id);
      onStepClick?.(step);
    }
  };
  const renderConnection = (fromStep, toStepId) => {
    const toStep = steps.find((s) => s.id === toStepId);
    if (!toStep) return null;
    const fromX = fromStep.position.x + 80;
    const fromY = fromStep.position.y + 40;
    const toX = toStep.position.x;
    const toY = toStep.position.y + 40;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "svg",
      {
        className: "absolute inset-0 pointer-events-none",
        style: { zIndex: 1 },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "marker",
            {
              id: "arrowhead",
              markerWidth: "10",
              markerHeight: "7",
              refX: "9",
              refY: "3.5",
              orient: "auto",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "polygon",
                {
                  points: "0 0, 10 3.5, 0 7",
                  fill: "#6366f1",
                  className: "opacity-60"
                }
              )
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: `M ${fromX} ${fromY} L ${toX - 5} ${toY}`,
              stroke: "#6366f1",
              strokeWidth: "2",
              fill: "none",
              markerEnd: "url(#arrowhead)",
              className: "opacity-60"
            }
          )
        ]
      },
      `${fromStep.id}-${toStepId}`
    );
  };
  const getStepIcon = (type) => {
    const Icon2 = stepTypes[type].icon;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Icon2, { className: "h-4 w-4 text-white" });
  };
  const getEfficiencyColor = (efficiency) => {
    if (!efficiency) return "text-gray-500";
    if (efficiency >= 8) return "text-green-500";
    if (efficiency >= 6) return "text-yellow-500";
    return "text-red-500";
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-6 bg-gradient-to-br from-background to-background/50", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold mb-2", children: "Interactive Process Flow" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Click on any step to view detailed information and optimization suggestions" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative bg-background/30 rounded-lg border border-border overflow-hidden", style: { height: "500px" }, children: [
        steps.map(
          (step) => step.connections.map((connectionId) => renderConnection(step, connectionId))
        ),
        steps.map((step) => {
          const isSelected = selectedStep === step.id;
          const isHovered = hoveredStep === step.id;
          const stepConfig = stepTypes[step.type];
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: `absolute cursor-pointer transition-all duration-200 ${isSelected ? "z-20 scale-110" : isHovered ? "z-10 scale-105" : "z-0"}`,
              style: {
                left: `${step.position.x}px`,
                top: `${step.position.y}px`,
                width: "160px"
              },
              onClick: () => handleStepClick(step),
              onMouseEnter: () => setHoveredStep(step.id),
              onMouseLeave: () => setHoveredStep(null),
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: `
                    relative p-4 rounded-lg border-2 transition-all duration-200
                    ${stepConfig.borderColor} 
                    ${isSelected ? "ring-2 ring-primary ring-offset-2 ring-offset-background" : ""}
                    ${isHovered ? "shadow-lg" : "shadow-sm"}
                    bg-background
                  `,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute -top-3 -right-3 w-6 h-6 ${stepConfig.color} rounded-full flex items-center justify-center`, children: getStepIcon(step.type) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-medium text-sm leading-tight", children: step.title }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground line-clamp-2", children: step.description }),
                      step.duration && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-3 w-3 text-muted-foreground" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: step.duration })
                      ] }),
                      step.efficiency && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: `h-3 w-3 ${getEfficiencyColor(step.efficiency)}` }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `text-xs font-medium ${getEfficiencyColor(step.efficiency)}`, children: [
                          step.efficiency,
                          "/10"
                        ] })
                      ] }),
                      step.bottlenecks && step.bottlenecks.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-3 w-3 text-orange-500" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-orange-500", children: [
                          step.bottlenecks.length,
                          " bottleneck",
                          step.bottlenecks.length > 1 ? "s" : ""
                        ] })
                      ] })
                    ] })
                  ]
                }
              )
            },
            step.id
          );
        })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex flex-wrap gap-4 text-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Circle, { className: "h-3 w-3 text-green-500" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Start/End" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Square, { className: "h-3 w-3 text-blue-500" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Process" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Diamond, { className: "h-3 w-3 text-orange-500" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Decision" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-3 w-3 text-orange-500" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Bottleneck" })
        ] })
      ] })
    ] }),
    selectedStep && /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "p-6 border-primary/20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold", children: steps.find((s) => s.id === selectedStep)?.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: steps.find((s) => s.id === selectedStep)?.description })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "ghost",
            size: "sm",
            onClick: () => setSelectedStep(null),
            children: "×"
          }
        )
      ] }),
      (() => {
        const step = steps.find((s) => s.id === selectedStep);
        if (!step) return null;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: [
            step.duration && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-5 w-5 text-primary mx-auto mb-1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", children: step.duration }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Duration" })
            ] }),
            step.efficiency && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: `h-5 w-5 ${getEfficiencyColor(step.efficiency)} mx-auto mb-1` }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: `text-sm font-medium ${getEfficiencyColor(step.efficiency)}`, children: [
                step.efficiency,
                "/10"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Efficiency" })
            ] }),
            step.resources && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-5 w-5 text-primary mx-auto mb-1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", children: step.resources.length }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Resources" })
            ] }),
            step.bottlenecks && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-5 w-5 text-orange-500 mx-auto mb-1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", children: step.bottlenecks.length }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Bottlenecks" })
            ] })
          ] }),
          step.resources && step.resources.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-medium mb-2", children: "Required Resources" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: step.resources.map((resource, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-xs", children: resource }, index)) })
          ] }),
          step.bottlenecks && step.bottlenecks.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-medium mb-2 text-orange-500", children: "Identified Bottlenecks" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: step.bottlenecks.map((bottleneck, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2 p-2 bg-orange-500/10 rounded-lg border border-orange-500/20", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-4 w-4 text-orange-500 mt-0.5 shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-orange-700", children: bottleneck })
            ] }, index)) })
          ] })
        ] });
      })()
    ] }) })
  ] });
}
const severityColors = {
  low: "bg-green-500/10 text-green-700 border-green-500/30",
  medium: "bg-yellow-500/10 text-yellow-700 border-yellow-500/30",
  high: "bg-orange-500/10 text-orange-700 border-orange-500/30",
  critical: "bg-red-500/10 text-red-700 border-red-500/30"
};
const typeIcons = {
  time: Clock,
  resource: Users,
  dependency: TriangleAlert,
  quality: Target
};
const effortColors = {
  low: "bg-green-100 text-green-800",
  medium: "bg-yellow-100 text-yellow-800",
  high: "bg-red-100 text-red-800"
};
const impactColors = {
  low: "bg-blue-100 text-blue-800",
  medium: "bg-purple-100 text-purple-800",
  high: "bg-pink-100 text-pink-800"
};
function BottleneckDetection({ bottlenecks, optimizations, onApplyOptimization }) {
  const [selectedBottleneck, setSelectedBottleneck] = reactExports.useState(null);
  const [selectedOptimization, setSelectedOptimization] = reactExports.useState(null);
  const getSeverityIcon = (severity) => {
    switch (severity) {
      case "critical":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-4 w-4 text-red-500" });
      case "high":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-4 w-4 text-orange-500" });
      case "medium":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-4 w-4 text-yellow-500" });
      case "low":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-4 w-4 text-green-500" });
    }
  };
  const getOverallHealthScore = () => {
    const severityWeights = { critical: 4, high: 3, medium: 2, low: 1 };
    const totalWeight = bottlenecks.reduce((sum, b) => sum + severityWeights[b.severity], 0);
    const maxWeight = bottlenecks.length * 4;
    return Math.max(0, 100 - totalWeight / maxWeight * 100);
  };
  const healthScore = getOverallHealthScore();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-6 bg-gradient-to-r from-background to-background/50", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold mb-1", children: "Process Health Analysis" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "AI-powered bottleneck detection and optimization recommendations" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-2xl font-bold", children: [
              healthScore.toFixed(0),
              "%"
            ] }),
            healthScore >= 80 ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "h-6 w-6 text-green-500" }) : healthScore >= 60 ? /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-6 w-6 text-yellow-500" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-6 w-6 text-red-500" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Health Score" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Progress, { value: healthScore, className: "h-2" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex justify-between text-xs text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          "Critical Issues: ",
          bottlenecks.filter((b) => b.severity === "critical").length
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          "Total Bottlenecks: ",
          bottlenecks.length
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-lg font-semibold mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-5 w-5 text-orange-500" }),
          "Detected Bottlenecks",
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", children: bottlenecks.length })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: bottlenecks.map((bottleneck) => {
          const Icon2 = typeIcons[bottleneck.type];
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            Card,
            {
              className: `p-4 cursor-pointer transition-all duration-200 ${selectedBottleneck === bottleneck.id ? "border-primary ring-2 ring-primary/20" : "hover:border-primary/50"}`,
              onClick: () => setSelectedBottleneck(bottleneck.id),
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1", children: [
                  getSeverityIcon(bottleneck.severity),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Icon2, { className: "h-4 w-4 text-muted-foreground" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-medium text-sm", children: bottleneck.step }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: `text-xs ${severityColors[bottleneck.severity]}`, children: bottleneck.severity })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-2", children: bottleneck.description }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 text-xs", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-500", children: bottleneck.currentMetric }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3 w-3 text-muted-foreground" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-500", children: bottleneck.targetMetric })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
                      "+",
                      bottleneck.estimatedImprovement
                    ] })
                  ] })
                ] })
              ] })
            },
            bottleneck.id
          );
        }) })
      ] }),
      selectedBottleneck && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-lg font-semibold mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Lightbulb, { className: "h-5 w-5 text-primary" }),
          "Optimization Suggestions"
        ] }),
        (() => {
          const bottleneck = bottlenecks.find((b) => b.id === selectedBottleneck);
          if (!bottleneck) return null;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "p-4 border-primary/20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-medium mb-2", children: bottleneck.step }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-3", children: bottleneck.impact }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4 text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Current:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-red-500", children: bottleneck.currentMetric })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Target:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-green-500", children: bottleneck.targetMetric })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-medium mb-2", children: "AI Recommendations:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: bottleneck.suggestions.map((suggestion, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2 p-2 bg-primary/5 rounded-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "h-4 w-4 text-primary mt-0.5 shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: suggestion })
              ] }, index)) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                className: "w-full",
                onClick: () => {
                  if (optimizations.length > 0) {
                    onApplyOptimization?.(optimizations[0]);
                  }
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "mr-2 h-4 w-4" }),
                  "Apply Optimization"
                ]
              }
            ) })
          ] }) });
        })()
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-lg font-semibold mb-4 flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-5 w-5 text-primary" }),
        "AI-Generated Optimizations",
        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", children: optimizations.length })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-4", children: optimizations.map((optimization) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Card,
        {
          className: `p-4 cursor-pointer transition-all duration-200 ${selectedOptimization === optimization.id ? "border-primary ring-2 ring-primary/20" : "hover:border-primary/50 hover:shadow-md"}`,
          onClick: () => setSelectedOptimization(optimization.id),
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-medium text-sm leading-tight", children: optimization.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: `text-xs ${effortColors[optimization.effort]}`, children: [
                optimization.effort,
                " effort"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground line-clamp-2", children: optimization.description }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: impactColors[optimization.impact], children: [
                optimization.impact,
                " impact"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: optimization.category })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2 text-xs", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-3 w-3 text-muted-foreground" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: optimization.timeToImplement })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, { className: "h-3 w-3 text-green-500" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-600", children: optimization.costSavings })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "sm",
                className: "w-full",
                onClick: (e) => {
                  e.stopPropagation();
                  onApplyOptimization?.(optimization);
                },
                children: "Apply Optimization"
              }
            )
          ] })
        },
        optimization.id
      )) })
    ] })
  ] });
}
const presetProfiles = [
  {
    id: "cost-focused",
    name: "Cost Focused",
    description: "Minimize budget while maintaining acceptable quality",
    icon: DollarSign,
    priorities: { cost: 80, time: 30, quality: 40 }
  },
  {
    id: "speed-focused",
    name: "Speed Focused",
    description: "Fastest execution with reasonable cost and quality",
    icon: Clock,
    priorities: { cost: 30, time: 80, quality: 40 }
  },
  {
    id: "quality-focused",
    name: "Quality Focused",
    description: "Maximum quality with flexible timeline and budget",
    icon: Target,
    priorities: { cost: 30, time: 40, quality: 80 }
  },
  {
    id: "balanced",
    name: "Balanced",
    description: "Equal weight on all objectives",
    icon: Zap,
    priorities: { cost: 50, time: 50, quality: 50 }
  }
];
function OptimizationControls({ priorities, onPrioritiesChange, disabled = false }) {
  const [activePreset, setActivePreset] = reactExports.useState(null);
  const handleSliderChange = reactExports.useCallback((key, value) => {
    const newPriorities = { ...priorities, [key]: value[0] };
    onPrioritiesChange(newPriorities);
    setActivePreset(null);
  }, [priorities, onPrioritiesChange]);
  const applyPreset = reactExports.useCallback((preset) => {
    onPrioritiesChange(preset.priorities);
    setActivePreset(preset.id);
  }, [onPrioritiesChange]);
  const getPriorityLabel = (key, value) => {
    if (value >= 70) return "High Priority";
    if (value >= 40) return "Medium Priority";
    return "Low Priority";
  };
  const getPriorityColor = (value) => {
    if (value >= 70) return "text-red-500";
    if (value >= 40) return "text-yellow-500";
    return "text-green-500";
  };
  const totalPriority = priorities.cost + priorities.time + priorities.quality;
  const normalizedPriorities = {
    cost: priorities.cost / totalPriority * 100,
    time: priorities.time / totalPriority * 100,
    quality: priorities.quality / totalPriority * 100
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Settings, { className: "h-5 w-5" }),
        "Quick Presets"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-3", children: presetProfiles.map((preset) => {
          const Icon2 = preset.icon;
          const isActive = activePreset === preset.id;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: isActive ? "default" : "outline",
              className: `p-3 h-auto flex flex-col items-center gap-2 transition-all duration-200 ${isActive ? "ring-2 ring-primary ring-offset-2" : "hover:border-primary/50"}`,
              onClick: () => applyPreset(preset),
              disabled,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Icon2, { className: "h-4 w-4" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium", children: preset.name })
              ]
            },
            preset.id
          );
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-3", children: "Select a preset to quickly configure optimization priorities" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-5 w-5" }),
        "Optimization Priorities"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, { className: "h-4 w-4 text-muted-foreground" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "Cost Efficiency" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: getPriorityColor(priorities.cost), children: getPriorityLabel("cost", priorities.cost) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium w-12 text-right", children: priorities.cost })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Slider,
            {
              value: [priorities.cost],
              onValueChange: (value) => handleSliderChange("cost", value),
              max: 100,
              step: 5,
              disabled,
              className: "w-full"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Minimize Cost" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Balanced" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Maximize Value" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-4 w-4 text-muted-foreground" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "Execution Speed" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: getPriorityColor(priorities.time), children: getPriorityLabel("time", priorities.time) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium w-12 text-right", children: priorities.time })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Slider,
            {
              value: [priorities.time],
              onValueChange: (value) => handleSliderChange("time", value),
              max: 100,
              step: 5,
              disabled,
              className: "w-full"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Extended Timeline" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Balanced" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Fast Delivery" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "h-4 w-4 text-muted-foreground" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "Quality Excellence" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: getPriorityColor(priorities.quality), children: getPriorityLabel("quality", priorities.quality) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium w-12 text-right", children: priorities.quality })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Slider,
            {
              value: [priorities.quality],
              onValueChange: (value) => handleSliderChange("quality", value),
              max: 100,
              step: 5,
              disabled,
              className: "w-full"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Basic Quality" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Balanced" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Premium Quality" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Priority Distribution" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, { className: "h-4 w-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: "Cost" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 bg-background rounded-full h-2 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "h-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-300",
                style: { width: `${normalizedPriorities.cost}%` }
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-medium w-12 text-right", children: [
              normalizedPriorities.cost.toFixed(0),
              "%"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-4 w-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: "Time" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 bg-background rounded-full h-2 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "h-full bg-gradient-to-r from-green-500 to-green-600 transition-all duration-300",
                style: { width: `${normalizedPriorities.time}%` }
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-medium w-12 text-right", children: [
              normalizedPriorities.time.toFixed(0),
              "%"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "h-4 w-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: "Quality" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 bg-background rounded-full h-2 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "h-full bg-gradient-to-r from-purple-500 to-purple-600 transition-all duration-300",
                style: { width: `${normalizedPriorities.quality}%` }
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-medium w-12 text-right", children: [
              normalizedPriorities.quality.toFixed(0),
              "%"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-4", children: "Strategy recommendations will be optimized based on these priority weights" })
      ] })
    ] })
  ] });
}
function ResourceAllocation({ strategyId, requirements, availableTeam, onApplyAllocation }) {
  const [selectedTeam, setSelectedTeam] = reactExports.useState([]);
  const [selectedTools, setSelectedTools] = reactExports.useState([]);
  const recommendedTeam = availableTeam.filter(
    (member) => member.skills.some((skill) => requirements.skills.includes(skill)) && member.availability >= 50
  ).sort((a, b) => {
    const aMatch = a.skills.filter((skill) => requirements.skills.includes(skill)).length;
    const bMatch = b.skills.filter((skill) => requirements.skills.includes(skill)).length;
    return bMatch - aMatch;
  }).slice(0, requirements.teamSize);
  const calculateTeamEfficiency = (teamIds) => {
    const team = availableTeam.filter((m) => teamIds.includes(m.id));
    if (team.length === 0) return 0;
    const skillCoverage = requirements.skills.filter(
      (skill) => team.some((member) => member.skills.includes(skill))
    ).length / requirements.skills.length;
    const avgEfficiency = team.reduce((sum, m) => sum + m.efficiency, 0) / team.length;
    const avgAvailability = team.reduce((sum, m) => sum + m.availability, 0) / team.length;
    return (skillCoverage * 0.4 + avgEfficiency * 0.4 + avgAvailability * 0.2) * 100;
  };
  const teamEfficiency = calculateTeamEfficiency(selectedTeam.length > 0 ? selectedTeam : recommendedTeam.map((m) => m.id));
  const requiredTools = requirements.tools.filter((t) => t.necessity === "Required");
  const recommendedTools = requirements.tools.filter((t) => t.necessity === "Recommended");
  const optionalTools = requirements.tools.filter((t) => t.necessity === "Optional");
  const getSkillMatchColor = (member) => {
    const matchCount = member.skills.filter((skill) => requirements.skills.includes(skill)).length;
    const percentage = matchCount / requirements.skills.length * 100;
    if (percentage >= 80) return "text-green-500";
    if (percentage >= 50) return "text-yellow-500";
    return "text-red-500";
  };
  const getSkillMatchBadge = (member) => {
    const matchCount = member.skills.filter((skill) => requirements.skills.includes(skill)).length;
    const percentage = matchCount / requirements.skills.length * 100;
    if (percentage >= 80) return { text: "Excellent Match", color: "bg-green-100 text-green-800" };
    if (percentage >= 50) return { text: "Good Match", color: "bg-yellow-100 text-yellow-800" };
    return { text: "Partial Match", color: "bg-red-100 text-red-800" };
  };
  const handleApplyRecommendedTeam = () => {
    setSelectedTeam(recommendedTeam.map((m) => m.id));
  };
  const handleApplyRecommendedTools = () => {
    setSelectedTools([...requiredTools.map((t) => t.id), ...recommendedTools.map((t) => t.id)]);
  };
  const handleApplyAllocation = () => {
    const allocation = {
      team: availableTeam.filter((m) => selectedTeam.includes(m.id)),
      tools: requirements.tools.filter((t) => selectedTools.includes(t.id)),
      efficiency: teamEfficiency,
      estimatedCost: calculateTotalCost()
    };
    onApplyAllocation(allocation);
  };
  const calculateTotalCost = () => {
    const toolCosts = requirements.tools.filter((t) => selectedTools.includes(t.id)).reduce((sum, tool) => {
      const cost = parseInt(tool.cost.replace(/[^0-9]/g, ""));
      return sum + cost;
    }, 0);
    const teamCost = selectedTeam.length * 5e3;
    return `$${(toolCosts + teamCost).toLocaleString()}`;
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-5 w-5" }),
        "Resource Requirements"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-5 w-5 text-primary mx-auto mb-1" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", children: requirements.teamSize }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Team Size" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Wrench, { className: "h-5 w-5 text-primary mx-auto mb-1" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", children: requirements.tools.length }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Tools Required" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-5 w-5 text-primary mx-auto mb-1" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-medium", children: [
            teamEfficiency.toFixed(0),
            "%"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Team Efficiency" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-5 w-5 text-primary mx-auto mb-1" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", children: calculateTotalCost() }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Est. Cost" })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-5 w-5" }),
          "AI Team Recommendations"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", onClick: handleApplyRecommendedTeam, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(UserPlus, { className: "mr-2 h-4 w-4" }),
          "Apply Recommended Team"
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: recommendedTeam.map((member) => {
          const isSelected = selectedTeam.includes(member.id);
          const skillMatch = getSkillMatchBadge(member);
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: `p-4 rounded-lg border transition-all cursor-pointer ${isSelected ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"}`,
              onClick: () => {
                setSelectedTeam(
                  (prev) => isSelected ? prev.filter((id) => id !== member.id) : [...prev, member.id]
                );
              },
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-medium", children: member.name }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: skillMatch.color, children: skillMatch.text }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", children: member.role })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1 mb-2", children: member.skills.map((skill, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: `text-xs px-2 py-1 rounded-full ${requirements.skills.includes(skill) ? "bg-primary/10 text-primary border border-primary/20" : "bg-muted text-muted-foreground"}`,
                      children: skill
                    },
                    index
                  )) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-4 text-xs", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Experience: " }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: member.experience })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Availability: " }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium", children: [
                        member.availability,
                        "%"
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Efficiency: " }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `font-medium ${getSkillMatchColor(member)}`, children: [
                        member.efficiency,
                        "%"
                      ] })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ml-4", children: isSelected ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "h-5 w-5 text-primary" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-5 w-5 rounded border-2 border-dashed border-muted-foreground" }) })
              ] })
            },
            member.id
          );
        }) }),
        recommendedTeam.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-8 w-8 text-yellow-500 mx-auto mb-2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "No team members match the required skills. Consider training or hiring." })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Wrench, { className: "h-5 w-5" }),
          "Tool Requirements"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", onClick: handleApplyRecommendedTools, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Wrench, { className: "mr-2 h-4 w-4" }),
          "Apply Recommended Tools"
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-6", children: [
        requiredTools.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-medium mb-3 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-4 w-4 text-red-500" }),
            "Required Tools"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: requiredTools.map((tool) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            ToolCard,
            {
              tool,
              isSelected: selectedTools.includes(tool.id),
              onToggle: (id) => {
                setSelectedTools(
                  (prev) => prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]
                );
              }
            },
            tool.id
          )) })
        ] }),
        recommendedTools.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-medium mb-3 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-4 w-4 text-yellow-500" }),
            "Recommended Tools"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: recommendedTools.map((tool) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            ToolCard,
            {
              tool,
              isSelected: selectedTools.includes(tool.id),
              onToggle: (id) => {
                setSelectedTools(
                  (prev) => prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]
                );
              }
            },
            tool.id
          )) })
        ] }),
        optionalTools.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-medium mb-3 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "h-4 w-4 text-blue-500" }),
            "Optional Tools"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: optionalTools.map((tool) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            ToolCard,
            {
              tool,
              isSelected: selectedTools.includes(tool.id),
              onToggle: (id) => {
                setSelectedTools(
                  (prev) => prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]
                );
              }
            },
            tool.id
          )) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "pt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-medium", children: "Resource Allocation Summary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
          selectedTeam.length,
          " team members, ",
          selectedTools.length,
          " tools selected"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: handleApplyAllocation, disabled: selectedTeam.length === 0, children: "Apply Resource Allocation" })
    ] }) }) })
  ] });
}
function ToolCard({ tool, isSelected, onToggle }) {
  const getNecessityColor = (necessity) => {
    switch (necessity) {
      case "Required":
        return "bg-red-100 text-red-800";
      case "Recommended":
        return "bg-yellow-100 text-yellow-800";
      case "Optional":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };
  const getLearningCurveColor = (curve) => {
    switch (curve) {
      case "Low":
        return "text-green-500";
      case "Medium":
        return "text-yellow-500";
      case "High":
        return "text-red-500";
      default:
        return "text-gray-500";
    }
  };
  const getIntegrationColor = (integration) => {
    switch (integration) {
      case "Easy":
        return "text-green-500";
      case "Medium":
        return "text-yellow-500";
      case "Complex":
        return "text-red-500";
      default:
        return "text-gray-500";
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: `p-3 rounded-lg border transition-all cursor-pointer ${isSelected ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"}`,
      onClick: () => onToggle(tool.id),
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-medium", children: tool.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: getNecessityColor(tool.necessity), children: tool.necessity }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", children: tool.category })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-4 text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Cost: " }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: tool.cost })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Learning: " }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `font-medium ${getLearningCurveColor(tool.learningCurve)}`, children: tool.learningCurve })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Integration: " }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `font-medium ${getIntegrationColor(tool.integration)}`, children: tool.integration })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ml-4", children: isSelected ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "h-5 w-5 text-primary" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-5 w-5 rounded border-2 border-dashed border-muted-foreground" }) })
      ] })
    }
  );
}
function RiskAssessment({ strategyId, risks, onMitigateRisk, onAcceptRisk }) {
  const [selectedRisk, setSelectedRisk] = reactExports.useState(null);
  const [filterCategory, setFilterCategory] = reactExports.useState("all");
  const riskMatrix = {
    low: risks.filter((r) => r.riskScore < 25),
    medium: risks.filter((r) => r.riskScore >= 25 && r.riskScore < 50),
    high: risks.filter((r) => r.riskScore >= 50 && r.riskScore < 75),
    critical: risks.filter((r) => r.riskScore >= 75)
  };
  const filteredRisks = filterCategory === "all" ? risks : risks.filter((r) => r.category === filterCategory);
  const overallRiskScore = risks.length > 0 ? risks.reduce((sum, r) => sum + r.riskScore, 0) / risks.length : 0;
  const categories = [
    { id: "all", name: "All Risks", icon: TriangleAlert, count: risks.length },
    { id: "technical", name: "Technical", icon: Target, count: risks.filter((r) => r.category === "technical").length },
    { id: "resource", name: "Resource", icon: Users, count: risks.filter((r) => r.category === "resource").length },
    { id: "timeline", name: "Timeline", icon: Clock, count: risks.filter((r) => r.category === "timeline").length },
    { id: "budget", name: "Budget", icon: DollarSign, count: risks.filter((r) => r.category === "budget").length },
    { id: "quality", name: "Quality", icon: Shield, count: risks.filter((r) => r.category === "quality").length }
  ];
  const getRiskColor = (score) => {
    if (score >= 75) return "text-red-500";
    if (score >= 50) return "text-orange-500";
    if (score >= 25) return "text-yellow-500";
    return "text-green-500";
  };
  const getRiskBadgeColor = (score) => {
    if (score >= 75) return "bg-red-100 text-red-800";
    if (score >= 50) return "bg-orange-100 text-orange-800";
    if (score >= 25) return "bg-yellow-100 text-yellow-800";
    return "bg-green-100 text-green-800";
  };
  const getRiskLabel = (score) => {
    if (score >= 75) return "Critical";
    if (score >= 50) return "High";
    if (score >= 25) return "Medium";
    return "Low";
  };
  const getCategoryIcon = (category) => {
    switch (category) {
      case "technical":
        return Target;
      case "resource":
        return Users;
      case "timeline":
        return Clock;
      case "budget":
        return DollarSign;
      case "quality":
        return Shield;
      default:
        return TriangleAlert;
    }
  };
  const getStatusIcon = (status) => {
    switch (status) {
      case "mitigated":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "h-4 w-4 text-green-500" });
      case "mitigating":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-4 w-4 text-yellow-500" });
      case "accepted":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "h-4 w-4 text-blue-500" });
      default:
        return /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "h-4 w-4 text-red-500" });
    }
  };
  const handleMitigateRisk = (riskId, mitigationIndex) => {
    const risk = risks.find((r) => r.id === riskId);
    if (risk && risk.mitigation[mitigationIndex]) {
      onMitigateRisk(riskId, risk.mitigation[mitigationIndex]);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "h-5 w-5" }),
        "Risk Assessment Overview"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4 mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: `h-5 w-5 mx-auto mb-1 ${getRiskColor(overallRiskScore)}` }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-bold", children: overallRiskScore.toFixed(0) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Overall Risk Score" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingDown, { className: "h-5 w-5 text-red-500 mx-auto mb-1" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-bold", children: riskMatrix.critical.length }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Critical Risks" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-5 w-5 text-orange-500 mx-auto mb-1" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-bold", children: riskMatrix.high.length }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "High Risks" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "h-5 w-5 text-green-500 mx-auto mb-1" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-bold", children: risks.filter((r) => r.status === "mitigated").length }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Mitigated" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Risk Distribution" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "Total: ",
              risks.length,
              " risks"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-4 gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 bg-green-500 rounded-full mb-1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs", children: riskMatrix.low.length })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 bg-yellow-500 rounded-full mb-1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs", children: riskMatrix.medium.length })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 bg-orange-500 rounded-full mb-1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs", children: riskMatrix.high.length })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 bg-red-500 rounded-full mb-1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs", children: riskMatrix.critical.length })
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "pt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: categories.map((category) => {
      const Icon2 = category.icon;
      const isActive = filterCategory === category.id;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          variant: isActive ? "default" : "outline",
          size: "sm",
          onClick: () => setFilterCategory(category.id),
          className: "flex items-center gap-2",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon2, { className: "h-4 w-4" }),
            category.name,
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "text-xs", children: category.count })
          ]
        },
        category.id
      );
    }) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Risk Matrix" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-medium text-green-600", children: "Low Risk" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-[60px] bg-green-50 border border-green-200 rounded-lg p-3", children: riskMatrix.low.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
            riskMatrix.low.slice(0, 3).map((risk) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-green-700", children: [
              "• ",
              risk.title
            ] }, risk.id)),
            riskMatrix.low.length > 3 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-green-600", children: [
              "+",
              riskMatrix.low.length - 3,
              " more"
            ] })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-green-600 text-center", children: "No low risks" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-medium text-yellow-600", children: "Medium Risk" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-[60px] bg-yellow-50 border border-yellow-200 rounded-lg p-3", children: riskMatrix.medium.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
            riskMatrix.medium.slice(0, 3).map((risk) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-yellow-700", children: [
              "• ",
              risk.title
            ] }, risk.id)),
            riskMatrix.medium.length > 3 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-yellow-600", children: [
              "+",
              riskMatrix.medium.length - 3,
              " more"
            ] })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-yellow-600 text-center", children: "No medium risks" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-medium text-orange-600", children: "High Risk" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-[60px] bg-orange-50 border border-orange-200 rounded-lg p-3", children: riskMatrix.high.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
            riskMatrix.high.slice(0, 3).map((risk) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-orange-700", children: [
              "• ",
              risk.title
            ] }, risk.id)),
            riskMatrix.high.length > 3 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-orange-600", children: [
              "+",
              riskMatrix.high.length - 3,
              " more"
            ] })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-orange-600 text-center", children: "No high risks" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-medium text-red-600", children: "Critical Risk" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-[60px] bg-red-50 border border-red-200 rounded-lg p-3", children: riskMatrix.critical.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
            riskMatrix.critical.slice(0, 3).map((risk) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-red-700", children: [
              "• ",
              risk.title
            ] }, risk.id)),
            riskMatrix.critical.length > 3 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-red-600", children: [
              "+",
              riskMatrix.critical.length - 3,
              " more"
            ] })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-red-600 text-center", children: "No critical risks" }) })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Risk Details & Mitigation" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: filteredRisks.map((risk) => {
          const CategoryIcon = getCategoryIcon(risk.category);
          const isSelected = selectedRisk === risk.id;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: `p-4 rounded-lg border transition-all cursor-pointer ${isSelected ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"}`,
              onClick: () => setSelectedRisk(isSelected ? null : risk.id),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between mb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CategoryIcon, { className: "h-4 w-4 text-muted-foreground" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-medium", children: risk.title }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: getRiskBadgeColor(risk.riskScore), children: getRiskLabel(risk.riskScore) }),
                    getStatusIcon(risk.status)
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-sm font-bold ${getRiskColor(risk.riskScore)}`, children: risk.riskScore }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Risk Score" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-3", children: risk.description }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4 text-xs mb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Probability: " }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium", children: [
                      risk.probability,
                      "%"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Impact: " }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium", children: [
                      risk.impact,
                      "%"
                    ] })
                  ] })
                ] }),
                isSelected && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 pt-4 border-t border-border", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-medium mb-3", children: "Mitigation Strategies" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: risk.mitigation.map((mitigation, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2 p-2 bg-muted rounded-lg", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "h-4 w-4 text-green-500 mt-0.5 shrink-0" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: mitigation }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Button,
                        {
                          size: "sm",
                          variant: "outline",
                          className: "mt-2",
                          onClick: (e) => {
                            e.stopPropagation();
                            handleMitigateRisk(risk.id, index);
                          },
                          children: "Apply Mitigation"
                        }
                      )
                    ] })
                  ] }, index)) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        size: "sm",
                        variant: "outline",
                        onClick: (e) => {
                          e.stopPropagation();
                          onAcceptRisk(risk.id);
                        },
                        children: "Accept Risk"
                      }
                    ),
                    risk.owner && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-xs text-muted-foreground ml-auto", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-3 w-3" }),
                      "Owner: ",
                      risk.owner
                    ] })
                  ] })
                ] })
              ]
            },
            risk.id
          );
        }) }),
        filteredRisks.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "h-8 w-8 text-green-500 mx-auto mb-2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "No risks identified for this category." })
        ] })
      ] })
    ] })
  ] });
}
const Tabs = Root2;
const TabsList = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  List,
  {
    ref,
    className: cn(
      "inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
      className
    ),
    ...props
  }
));
TabsList.displayName = List.displayName;
const TabsTrigger = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Trigger,
  {
    ref,
    className: cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",
      className
    ),
    ...props
  }
));
TabsTrigger.displayName = Trigger.displayName;
const TabsContent = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Content,
  {
    ref,
    className: cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    ),
    ...props
  }
));
TabsContent.displayName = Content.displayName;
const API_KEY = "AIzaSyCHPU9fjJBibZvY1hkhiQVa0OpPlM5HAVE";
const MODEL_NAME = "gemini-1.5-flash";
const TEMPERATURE = parseFloat("0.7");
const MAX_TOKENS = parseInt("2048");
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI ? genAI.getGenerativeModel({
  model: MODEL_NAME,
  generationConfig: {
    temperature: TEMPERATURE,
    maxOutputTokens: MAX_TOKENS
  }
}) : null;
const STRATEGY_GENERATION_PROMPT = `
You are an expert business process analyst and workflow optimization specialist. Based on the following information, generate 3 distinct, comprehensive strategies for workflow optimization.

PROCESS DESCRIPTION: {description}
INDUSTRY: {industry}
OPTIMIZATION PRIORITIES:
- Cost: {costPriority}% importance
- Time: {timePriority}% importance  
- Quality: {qualityPriority}% importance

Please generate 3 strategies (A, B, C) that cater to different approaches. For each strategy, provide:

1. **Strategy Title & Tagline**: Clear, compelling title and brief description
2. **Implementation Steps**: 5-7 specific, actionable steps
3. **Timeline**: Realistic time estimate (in weeks)
4. **Cost Level**: Low, Medium, or High
5. **Efficiency Score**: 1-10 rating
6. **Resource Requirements**:
   - Team size and roles needed
   - Required skills
   - Recommended tools with cost estimates
   - Total estimated cost
7. **Risk Assessment**: 2-3 key risks with probability, impact, and mitigation strategies
8. **Multi-Objective Score**: Score based on the provided priorities (0-100)
9. **Priority Breakdown**: Individual scores for cost, time, and quality
10. **AI Reasoning**: Brief explanation of why this strategy fits the priorities
11. **Confidence Level**: How confident you are in this recommendation (0-100)

Format your response as valid JSON that matches this structure:
{
  "strategies": [
    {
      "id": "A",
      "title": "...",
      "tagline": "...",
      "steps": ["...", "..."],
      "time": "...",
      "cost": "Low|Medium|High",
      "efficiency": 8.5,
      "resourceRequirements": {
        "teamSize": 5,
        "roles": ["...", "..."],
        "skills": ["...", "..."],
        "tools": [
          {
            "id": "tool-1",
            "name": "...",
            "category": "...",
            "cost": "$...",
            "learningCurve": "Low|Medium|High",
            "integration": "Easy|Medium|Complex",
            "necessity": "Required|Recommended"
          }
        ],
        "estimatedCost": "$...",
        "timeline": "..."
      },
      "risks": [
        {
          "id": "risk-1",
          "title": "...",
          "description": "...",
          "category": "technical|resource|timeline|external",
          "probability": 50,
          "impact": 60,
          "riskScore": 30,
          "mitigation": ["...", "..."],
          "status": "identified"
        }
      ],
      "multiObjectiveScore": 85,
      "priorityBreakdown": {
        "costScore": 80,
        "timeScore": 85,
        "qualityScore": 90
      },
      "reasoning": "...",
      "confidence": 85
    }
  ]
}

Ensure strategies are distinct and cater to different approaches (e.g., quick win vs comprehensive, automation-heavy vs people-focused, etc.).
`;
const PROCESS_MINING_PROMPT = `
You are an expert process mining and business process analysis specialist. Analyze the following process description and extract detailed process information.

PROCESS DESCRIPTION: {description}

Please provide:

1. **Process Steps**: Break down the process into individual steps with:
   - Step title and description
   - Estimated duration
   - Dependencies on other steps

2. **Bottlenecks**: Identify potential bottlenecks with:
   - Title and description
   - Severity level (low/medium/high)
   - Optimization suggestions

3. **Optimization Opportunities**: Suggest improvements with:
   - Title and description
   - Category (automation/resource/process/technology)
   - Effort level (low/medium/high)
   - Potential impact (low/medium/high)
   - Implementation time
   - Cost savings estimate
   - ROI estimate

Format your response as valid JSON:
{
  "steps": [
    {
      "id": "step-1",
      "title": "...",
      "description": "...",
      "duration": "...",
      "dependencies": ["step-0"]
    }
  ],
  "bottlenecks": [
    {
      "id": "bottleneck-1",
      "title": "...",
      "description": "...",
      "severity": "low|medium|high",
      "suggestions": ["...", "..."]
    }
  ],
  "optimizations": [
    {
      "id": "opt-1",
      "title": "...",
      "description": "...",
      "category": "automation|resource|process|technology",
      "effort": "low|medium|high",
      "impact": "low|medium|high",
      "timeToImplement": "...",
      "costSavings": "...",
      "roi": "..."
    }
  ]
}
`;
class GeminiService {
  model;
  isAvailable;
  constructor() {
    this.model = model;
    this.isAvailable = !!model;
  }
  async generateWithTimeout(prompt, timeout = 2e3) {
    if (!this.model || !this.isAvailable) {
      throw new Error("Gemini API is not available. Please check your API key configuration.");
    }
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);
    try {
      const result = await Promise.race([
        this.model.generateContent(prompt),
        new Promise(
          (_, reject) => setTimeout(() => reject(new Error("Request timeout")), timeout)
        )
      ]);
      clearTimeout(timeoutId);
      const response = await result.response;
      const text = response.text();
      if (!text) {
        throw new Error("Empty response from Gemini API");
      }
      return text;
    } catch (error) {
      clearTimeout(timeoutId);
      if (error instanceof Error && error.name === "AbortError") {
        throw new Error("API request timed out after 2 seconds");
      }
      console.error("Gemini API Error:", error);
      throw new Error(`Failed to generate response: ${error instanceof Error ? error.message : "Unknown error"}`);
    }
  }
  async generateResponse(prompt) {
    return this.generateWithTimeout(prompt, 2e3);
  }
  parseJSONResponse(response) {
    try {
      const jsonMatch = response.match(/\{[\s\S]*\}/);
      if (!jsonMatch) {
        throw new Error("No JSON found in response");
      }
      return JSON.parse(jsonMatch[0]);
    } catch (error) {
      console.error("JSON Parsing Error:", error);
      throw new Error(`Failed to parse AI response: ${error instanceof Error ? error.message : "Invalid JSON"}`);
    }
  }
  isValidResponse(data) {
    if (!data || typeof data !== "object") {
      return false;
    }
    if (data.strategies && Array.isArray(data.strategies)) {
      return data.strategies.every(
        (strategy) => strategy.id && strategy.title && strategy.steps && Array.isArray(strategy.steps) && strategy.time && strategy.cost && typeof strategy.efficiency === "number"
      );
    }
    if (data.options && Array.isArray(data.options) && data.best_option && data.reason) {
      return data.options.every(
        (option) => option.name && option.steps && Array.isArray(option.steps) && option.time && option.cost && typeof option.efficiency === "number"
      );
    }
    return false;
  }
  enhancedFallbackData(prompt) {
    const lowerPrompt = prompt.toLowerCase();
    if (lowerPrompt.includes("marketing") || lowerPrompt.includes("campaign") || lowerPrompt.includes("promotion")) {
      return this.getEnhancedMarketingWorkflow(lowerPrompt);
    } else if (lowerPrompt.includes("sales") || lowerPrompt.includes("crm") || lowerPrompt.includes("pipeline")) {
      return this.getEnhancedSalesWorkflow(lowerPrompt);
    } else if (lowerPrompt.includes("onboarding") || lowerPrompt.includes("customer") || lowerPrompt.includes("welcome")) {
      return this.getEnhancedOnboardingWorkflow(lowerPrompt);
    } else if (lowerPrompt.includes("hr") || lowerPrompt.includes("recruitment") || lowerPrompt.includes("hiring")) {
      return this.getEnhancedHRWorkflow(lowerPrompt);
    } else if (lowerPrompt.includes("finance") || lowerPrompt.includes("accounting") || lowerPrompt.includes("billing")) {
      return this.getEnhancedFinanceWorkflow(lowerPrompt);
    } else if (lowerPrompt.includes("operations") || lowerPrompt.includes("logistics") || lowerPrompt.includes("supply")) {
      return this.getEnhancedOperationsWorkflow(lowerPrompt);
    } else {
      return this.getEnhancedGenericWorkflow(lowerPrompt);
    }
  }
  getEnhancedMarketingWorkflow(prompt) {
    prompt.includes("digital") || prompt.includes("online");
    prompt.includes("social") || prompt.includes("instagram") || prompt.includes("facebook");
    return {
      options: [
        {
          name: "Rapid Digital Launch",
          steps: [
            "Market research & competitor analysis",
            "Create buyer personas & messaging",
            "Set up social media profiles",
            "Launch targeted paid campaigns",
            "Monitor metrics & optimize",
            "A/B test creative assets",
            "Scale successful channels"
          ],
          time: "1-2 weeks",
          cost: "Low",
          efficiency: 7.8
        },
        {
          name: "Integrated Marketing System",
          steps: [
            "Comprehensive market analysis",
            "Multi-channel content strategy",
            "Marketing automation setup",
            "Email + social media integration",
            "Advanced analytics dashboard",
            "Personalized customer journeys",
            "Continuous optimization cycles"
          ],
          time: "3-4 weeks",
          cost: "Medium",
          efficiency: 8.9
        },
        {
          name: "AI-Powered Marketing Engine",
          steps: [
            "AI-driven market segmentation",
            "Predictive analytics implementation",
            "Dynamic content personalization",
            "Real-time bid optimization",
            "Customer lifetime value modeling",
            "Automated campaign management",
            "Machine learning optimization"
          ],
          time: "5-6 weeks",
          cost: "High",
          efficiency: 9.4
        }
      ],
      best_option: "Integrated Marketing System",
      reason: "Optimal balance of automation, personalization, and scalability for modern marketing teams.",
      confidence: 88,
      source: "fallback"
    };
  }
  getEnhancedSalesWorkflow(prompt) {
    return {
      options: [
        {
          name: "Essential Sales Pipeline",
          steps: [
            "Lead qualification criteria setup",
            "Basic CRM implementation",
            "Sales script development",
            "Pipeline tracking system",
            "Weekly performance reviews",
            "Basic reporting dashboard"
          ],
          time: "1-2 weeks",
          cost: "Low",
          efficiency: 7.2
        },
        {
          name: "Professional Sales Automation",
          steps: [
            "Advanced lead scoring model",
            "Full CRM customization",
            "Sales training program",
            "Automated follow-up sequences",
            "Pipeline analytics & forecasting",
            "Integration with marketing tools",
            "Performance optimization"
          ],
          time: "3-4 weeks",
          cost: "Medium",
          efficiency: 8.8
        },
        {
          name: "Enterprise Sales Intelligence",
          steps: [
            "AI-powered lead scoring",
            "Predictive sales analytics",
            "Custom CRM + ERP integration",
            "Advanced sales automation",
            "Real-time performance monitoring",
            "Machine learning optimization",
            "Strategic account management"
          ],
          time: "5-6 weeks",
          cost: "High",
          efficiency: 9.2
        }
      ],
      best_option: "Professional Sales Automation",
      reason: "Best combination of automation efficiency and personal customer relationships.",
      confidence: 90,
      source: "fallback"
    };
  }
  getEnhancedOnboardingWorkflow(prompt) {
    return {
      options: [
        {
          name: "Quick Start Onboarding",
          steps: [
            "Welcome email sequence",
            "Basic user guide creation",
            "Setup progress tracking",
            "Initial check-in calls",
            "Feedback collection system",
            "Basic resource library"
          ],
          time: "1 week",
          cost: "Low",
          efficiency: 7.6
        },
        {
          name: "Comprehensive Onboarding Experience",
          steps: [
            "Personalized onboarding paths",
            "Interactive tutorial system",
            "Progress milestone tracking",
            "Dedicated success manager",
            "Advanced analytics dashboard",
            "Community integration",
            "Continuous feedback loops"
          ],
          time: "2-3 weeks",
          cost: "Medium",
          efficiency: 9.1
        },
        {
          name: "AI-Driven Onboarding Platform",
          steps: [
            "AI-powered personalization engine",
            "Gamified onboarding experience",
            "Real-time progress monitoring",
            "Predictive success analytics",
            "24/7 intelligent support",
            "Automated optimization",
            "Success prediction modeling"
          ],
          time: "4-5 weeks",
          cost: "High",
          efficiency: 9.5
        }
      ],
      best_option: "Comprehensive Onboarding Experience",
      reason: "Optimal mix of personalization, scalability, and measurable success metrics.",
      confidence: 92,
      source: "fallback"
    };
  }
  getEnhancedHRWorkflow(prompt) {
    return {
      options: [
        {
          name: "Essential HR Process",
          steps: [
            "Job description standardization",
            "Basic applicant tracking",
            "Interview process setup",
            "Offer management system",
            "Basic onboarding checklist",
            "Compliance tracking"
          ],
          time: "1-2 weeks",
          cost: "Low",
          efficiency: 7
        },
        {
          name: "Professional HR System",
          steps: [
            "Advanced recruitment pipeline",
            "AI-powered resume screening",
            "Structured interview framework",
            "Automated reference checks",
            "Comprehensive onboarding",
            "Performance management setup",
            "HR analytics dashboard"
          ],
          time: "3-4 weeks",
          cost: "Medium",
          efficiency: 8.6
        },
        {
          name: "Intelligent HR Platform",
          steps: [
            "AI-driven talent acquisition",
            "Predictive hiring analytics",
            "Automated workflow orchestration",
            "Advanced employee engagement",
            "Real-time performance monitoring",
            "Machine learning optimization",
            "Strategic workforce planning"
          ],
          time: "5-6 weeks",
          cost: "High",
          efficiency: 9.3
        }
      ],
      best_option: "Professional HR System",
      reason: "Balanced approach with modern automation while maintaining human touch.",
      confidence: 85,
      source: "fallback"
    };
  }
  getEnhancedFinanceWorkflow(prompt) {
    return {
      options: [
        {
          name: "Basic Finance Operations",
          steps: [
            "Invoice processing setup",
            "Basic expense tracking",
            "Financial reporting template",
            "Budget monitoring system",
            "Compliance checklist",
            "Monthly close process"
          ],
          time: "1-2 weeks",
          cost: "Low",
          efficiency: 7.3
        },
        {
          name: "Automated Finance System",
          steps: [
            "Advanced invoice automation",
            "Real-time expense tracking",
            "Automated financial reporting",
            "Budget forecasting tools",
            "Compliance automation",
            "Advanced analytics dashboard",
            "Risk monitoring system"
          ],
          time: "3-4 weeks",
          cost: "Medium",
          efficiency: 8.8
        },
        {
          name: "AI-Powered Finance Platform",
          steps: [
            "Intelligent invoice processing",
            "Predictive cash flow analysis",
            "Automated risk assessment",
            "Real-time fraud detection",
            "Advanced financial modeling",
            "Machine learning optimization",
            "Strategic financial insights"
          ],
          time: "5-6 weeks",
          cost: "High",
          efficiency: 9.4
        }
      ],
      best_option: "Automated Finance System",
      reason: "Optimal balance of automation, compliance, and financial intelligence.",
      confidence: 89,
      source: "fallback"
    };
  }
  getEnhancedOperationsWorkflow(prompt) {
    return {
      options: [
        {
          name: "Essential Operations",
          steps: [
            "Process mapping documentation",
            "Basic task automation",
            "Team coordination setup",
            "Performance tracking",
            "Quality control checkpoints",
            "Basic reporting system"
          ],
          time: "1-2 weeks",
          cost: "Low",
          efficiency: 7.1
        },
        {
          name: "Optimized Operations System",
          steps: [
            "Comprehensive process analysis",
            "Advanced automation implementation",
            "Cross-functional integration",
            "Real-time monitoring systems",
            "Quality assurance framework",
            "Advanced analytics dashboard",
            "Continuous improvement cycles"
          ],
          time: "3-4 weeks",
          cost: "Medium",
          efficiency: 8.7
        },
        {
          name: "Intelligent Operations Platform",
          steps: [
            "AI-powered process optimization",
            "Predictive maintenance scheduling",
            "Real-time resource allocation",
            "Automated quality control",
            "Advanced operational analytics",
            "Machine learning optimization",
            "Strategic operations planning"
          ],
          time: "5-6 weeks",
          cost: "High",
          efficiency: 9.3
        }
      ],
      best_option: "Optimized Operations System",
      reason: "Best combination of efficiency, quality, and scalability for operations teams.",
      confidence: 87,
      source: "fallback"
    };
  }
  getEnhancedGenericWorkflow(prompt) {
    return {
      options: [
        {
          name: "Rapid Process Setup",
          steps: [
            "Process documentation",
            "Basic automation setup",
            "Team training sessions",
            "Performance monitoring",
            "Initial optimization",
            "Feedback collection"
          ],
          time: "1-2 weeks",
          cost: "Low",
          efficiency: 7.4
        },
        {
          name: "Optimized Workflow System",
          steps: [
            "Comprehensive process analysis",
            "Advanced automation implementation",
            "Cross-team integration",
            "Advanced monitoring systems",
            "AI-driven optimization",
            "Continuous improvement framework",
            "Performance analytics"
          ],
          time: "3-4 weeks",
          cost: "Medium",
          efficiency: 8.9
        },
        {
          name: "Enterprise Workflow Platform",
          steps: [
            "Full digital transformation",
            "AI-powered automation",
            "Enterprise system integration",
            "Predictive analytics",
            "Real-time optimization",
            "Machine learning insights",
            "Strategic planning tools"
          ],
          time: "5-6 weeks",
          cost: "High",
          efficiency: 9.2
        }
      ],
      best_option: "Optimized Workflow System",
      reason: "Provides excellent return on investment with modern automation capabilities.",
      confidence: 83,
      source: "fallback"
    };
  }
  getMarketingWorkflow() {
    return {
      options: [
        {
          name: "Quick Launch Campaign",
          steps: [
            "Define target audience and messaging",
            "Create social media content calendar",
            "Set up email marketing automation",
            "Launch paid ads on 2 platforms",
            "Monitor and optimize performance"
          ],
          time: "1-2 weeks",
          cost: "Low",
          efficiency: 7.2
        },
        {
          name: "Integrated Marketing Strategy",
          steps: [
            "Comprehensive market research",
            "Multi-channel content creation",
            "Marketing automation setup",
            "Cross-platform campaign launch",
            "Advanced analytics and optimization"
          ],
          time: "3-4 weeks",
          cost: "Medium",
          efficiency: 8.5
        },
        {
          name: "Full-Funnel Marketing System",
          steps: [
            "Customer journey mapping",
            "Advanced marketing stack implementation",
            "Personalized content creation",
            "Multi-stage campaign automation",
            "AI-driven optimization and scaling"
          ],
          time: "5-6 weeks",
          cost: "High",
          efficiency: 9.3
        }
      ],
      best_option: "Integrated Marketing Strategy",
      reason: "Provides the best balance of cost, time, and effectiveness for most marketing campaigns.",
      confidence: 85,
      source: "fallback"
    };
  }
  getSalesWorkflow() {
    return {
      options: [
        {
          name: "Basic Sales Process",
          steps: [
            "Lead qualification criteria setup",
            "CRM implementation",
            "Sales script development",
            "Basic pipeline tracking",
            "Weekly performance reviews"
          ],
          time: "1-2 weeks",
          cost: "Low",
          efficiency: 6.8
        },
        {
          name: "Professional Sales Pipeline",
          steps: [
            "Advanced lead scoring system",
            "Full CRM customization",
            "Sales training program",
            "Automated pipeline management",
            "Advanced sales analytics"
          ],
          time: "3-4 weeks",
          cost: "Medium",
          efficiency: 8.7
        },
        {
          name: "Enterprise Sales System",
          steps: [
            "AI-powered lead scoring",
            "Custom CRM integration",
            "Comprehensive sales training",
            "Advanced sales automation",
            "Predictive sales analytics"
          ],
          time: "5-6 weeks",
          cost: "High",
          efficiency: 9.1
        }
      ],
      best_option: "Professional Sales Pipeline",
      reason: "Optimal balance of automation and personal touch for most sales teams.",
      confidence: 88,
      source: "fallback"
    };
  }
  getOnboardingWorkflow() {
    return {
      options: [
        {
          name: "Essential Onboarding",
          steps: [
            "Create welcome email sequence",
            "Basic user guide documentation",
            "Setup progress tracking",
            "Initial check-in calls",
            "Feedback collection"
          ],
          time: "1 week",
          cost: "Low",
          efficiency: 7.5
        },
        {
          name: "Comprehensive Onboarding",
          steps: [
            "Personalized onboarding paths",
            "Interactive tutorial system",
            "Progress milestone tracking",
            "Dedicated onboarding specialist",
            "Advanced analytics dashboard"
          ],
          time: "2-3 weeks",
          cost: "Medium",
          efficiency: 8.9
        },
        {
          name: "Premium Onboarding Experience",
          steps: [
            "AI-driven personalization",
            "Gamified onboarding process",
            "Real-time progress monitoring",
            "24/7 support availability",
            "Predictive success analytics"
          ],
          time: "4-5 weeks",
          cost: "High",
          efficiency: 9.4
        }
      ],
      best_option: "Comprehensive Onboarding",
      reason: "Best balance of personalization and scalability for most businesses.",
      confidence: 90,
      source: "fallback"
    };
  }
  getGenericWorkflow() {
    return {
      options: [
        {
          name: "Basic Process Setup",
          steps: [
            "Process mapping and documentation",
            "Basic automation of repetitive tasks",
            "Team training and handover",
            "Performance monitoring setup",
            "Continuous improvement cycle"
          ],
          time: "1-2 weeks",
          cost: "Low",
          efficiency: 7
        },
        {
          name: "Optimized Workflow",
          steps: [
            "Comprehensive process analysis",
            "Advanced automation implementation",
            "Cross-team integration",
            "Advanced monitoring systems",
            "AI-driven optimization"
          ],
          time: "3-4 weeks",
          cost: "Medium",
          efficiency: 8.6
        },
        {
          name: "Enterprise Workflow System",
          steps: [
            "Full process digital transformation",
            "AI-powered automation",
            "Enterprise system integration",
            "Predictive analytics",
            "Continuous innovation framework"
          ],
          time: "5-6 weeks",
          cost: "High",
          efficiency: 9.2
        }
      ],
      best_option: "Optimized Workflow",
      reason: "Provides the best return on investment for most business processes.",
      confidence: 82,
      source: "fallback"
    };
  }
  normalizeData(data) {
    if (data.options && data.best_option && data.reason) {
      return {
        options: data.options.map((opt) => ({
          name: opt.name || "Unnamed Strategy",
          steps: Array.isArray(opt.steps) ? opt.steps : ["Process analysis", "Implementation", "Review"],
          time: opt.time || "2-3 weeks",
          cost: opt.cost || "Medium",
          efficiency: typeof opt.efficiency === "number" ? opt.efficiency : 7.5
        })),
        best_option: data.best_option || data.options?.[0]?.name || "Optimized Workflow",
        reason: data.reason || "Balanced approach for most business needs.",
        confidence: data.confidence || 80,
        source: data.source || "ai"
      };
    }
    if (data.strategies && Array.isArray(data.strategies)) {
      const options = data.strategies.map((strategy) => ({
        name: strategy.title || "Unnamed Strategy",
        steps: Array.isArray(strategy.steps) ? strategy.steps : ["Process analysis", "Implementation", "Review"],
        time: strategy.time || "2-3 weeks",
        cost: strategy.cost || "Medium",
        efficiency: typeof strategy.efficiency === "number" ? strategy.efficiency : 7.5
      }));
      const recommended = data.strategies.find((s) => s.recommended) || data.strategies[0];
      return {
        options,
        best_option: recommended?.title || options[0]?.name || "Optimized Workflow",
        reason: recommended?.reasoning || recommended?.reason || "Balanced approach for most business needs.",
        confidence: 85,
        source: "ai"
      };
    }
    return this.getGenericWorkflow();
  }
  async generateStrategies(request) {
    if (!this.isAvailable) {
      return this.getMockStrategies(request);
    }
    try {
      const prompt = STRATEGY_GENERATION_PROMPT.replace("{description}", request.description).replace("{industry}", request.industry).replace("{costPriority}", request.priorities.cost.toString()).replace("{timePriority}", request.priorities.time.toString()).replace("{qualityPriority}", request.priorities.quality.toString());
      const response = await this.generateResponse(prompt);
      const parsed = this.parseJSONResponse(response);
      if (!parsed.strategies || !Array.isArray(parsed.strategies)) {
        throw new Error("Invalid response format: missing strategies array");
      }
      return parsed.strategies.map((strategy, index) => ({
        ...strategy,
        id: String.fromCharCode(65 + index)
      }));
    } catch (error) {
      console.error("Strategy Generation Error:", error);
      return this.getMockStrategies(request);
    }
  }
  // New enhanced workflow generation method
  async generateWorkflow(prompt) {
    console.log("🚀 Generating workflow for prompt:", prompt);
    toast.loading("🤖 AI is analyzing your workflow...", { id: "workflow-gen" });
    try {
      const fallbackPromise = new Promise((resolve) => {
        setTimeout(() => resolve(this.enhancedFallbackData(prompt)), 800);
      });
      if (this.isAvailable) {
        try {
          console.log("🔮 Attempting AI generation...");
          toast.loading("🧠 Connecting to AI brain...", { id: "workflow-gen" });
          const aiPrompt = `As an expert business process analyst, analyze this workflow description: "${prompt}". Generate 3 distinct strategy options (A, B, C) with:
          
          1. Clear strategy names
          2. 5-7 specific implementation steps
          3. Realistic timeline (weeks)
          4. Cost level (Low/Medium/High)
          5. Efficiency score (1-10)
          
          Return JSON with: {options: [{name, steps[], time, cost, efficiency}], best_option, reason, confidence}`;
          const response = await this.generateWithTimeout(aiPrompt, 1500);
          const parsed = this.parseJSONResponse(response);
          if (this.isValidResponse(parsed)) {
            console.log("✨ AI generation successful");
            toast.success("🎉 AI workflow generated successfully!", { id: "workflow-gen" });
            const normalized = this.normalizeData(parsed);
            return {
              ...normalized,
              source: "ai",
              confidence: normalized.confidence || 85
            };
          }
        } catch (error) {
          console.warn("⚠️ AI generation failed, using enhanced fallback:", error);
          toast.loading("🔄 Using intelligent fallback...", { id: "workflow-gen" });
          const fallbackResult = await fallbackPromise;
          const result = {
            ...fallbackResult,
            source: "fallback",
            confidence: 75
          };
          console.log("🎯 Enhanced fallback result:", result);
          toast.success("✅ Workflow generated with intelligent analysis!", { id: "workflow-gen" });
          return result;
        }
      } else {
        console.log("🔧 AI not available, using intelligent fallback");
        toast.loading("🔧 Using intelligent demo mode...", { id: "workflow-gen" });
        const fallbackResult = await fallbackPromise;
        const result = {
          ...fallbackResult,
          source: "fallback",
          confidence: 75
        };
        console.log("🎯 Enhanced fallback result:", result);
        toast.success("✅ Workflow generated with intelligent analysis!", { id: "workflow-gen" });
        return result;
      }
    } catch (error) {
      console.error("❌ Workflow generation error:", error);
      toast.error("❌ Generation failed, using backup data", { id: "workflow-gen" });
      const ultimateFallback = this.getGenericWorkflow();
      toast.success("🔄 Backup workflow loaded", { id: "workflow-gen" });
      return ultimateFallback;
    }
    return this.getGenericWorkflow();
  }
  async analyzeProcess(request) {
    if (!this.isAvailable) {
      return this.getMockProcessMining();
    }
    try {
      const prompt = PROCESS_MINING_PROMPT.replace("{description}", request.description);
      const response = await this.generateResponse(prompt);
      const parsed = this.parseJSONResponse(response);
      return {
        steps: parsed.steps || [],
        bottlenecks: parsed.bottlenecks || [],
        optimizations: parsed.optimizations || []
      };
    } catch (error) {
      console.error("Process Mining Error:", error);
      return this.getMockProcessMining();
    }
  }
  // Fallback methods for when API is not available
  getMockStrategies(request) {
    request.description.length > 100 ? "complex" : "simple";
    return [
      {
        id: "A",
        title: "Quick Start Strategy",
        tagline: "Rapid implementation with minimal setup",
        steps: ["Map current process", "Identify quick wins", "Implement basic automation", "Train team", "Monitor results"],
        time: "1-2 weeks",
        cost: "Low",
        efficiency: 7.2,
        resourceRequirements: {
          teamSize: 3,
          roles: ["Project Manager", "Business Analyst", "Technical Lead"],
          skills: ["Process Mapping", "Basic Automation"],
          tools: [
            {
              id: "basic-automation",
              name: "Basic Automation Tool",
              category: "Automation",
              cost: "$200/month",
              learningCurve: "Low",
              integration: "Easy",
              necessity: "Required"
            }
          ],
          estimatedCost: "$15K",
          timeline: "1-2 weeks"
        },
        risks: [
          {
            id: "risk-1",
            title: "Limited Scalability",
            description: "Quick start approach may not scale well",
            category: "technical",
            probability: 60,
            impact: 30,
            riskScore: 18,
            mitigation: ["Plan for future scaling", "Modular design approach"],
            status: "identified"
          }
        ],
        multiObjectiveScore: 75,
        priorityBreakdown: {
          costScore: 90,
          timeScore: 85,
          qualityScore: 50
        },
        reasoning: "This strategy prioritizes speed and cost-effectiveness while delivering basic functionality.",
        confidence: 80
      },
      {
        id: "B",
        title: "Balanced Approach",
        tagline: "Optimal mix of speed and quality",
        steps: ["Process analysis", "Stakeholder alignment", "Phased implementation", "Quality checks", "Optimization"],
        time: "3-4 weeks",
        cost: "Medium",
        efficiency: 8.5,
        resourceRequirements: {
          teamSize: 5,
          roles: ["Project Manager", "Business Analyst", "Technical Lead", "QA Engineer", "Stakeholder Manager"],
          skills: ["Process Analysis", "Stakeholder Management", "Quality Assurance"],
          tools: [
            {
              id: "workflow-platform",
              name: "Workflow Platform",
              category: "Platform",
              cost: "$800/month",
              learningCurve: "Medium",
              integration: "Medium",
              necessity: "Required"
            }
          ],
          estimatedCost: "$35K",
          timeline: "3-4 weeks"
        },
        risks: [
          {
            id: "risk-2",
            title: "Stakeholder Resistance",
            description: "Some stakeholders may resist changes",
            category: "resource",
            probability: 45,
            impact: 55,
            riskScore: 25,
            mitigation: ["Early stakeholder involvement", "Clear communication plan"],
            status: "identified"
          }
        ],
        multiObjectiveScore: 82,
        priorityBreakdown: {
          costScore: 70,
          timeScore: 75,
          qualityScore: 100
        },
        reasoning: "Balanced approach provides good quality while managing costs and timeline effectively.",
        confidence: 85
      },
      {
        id: "C",
        title: "Comprehensive Solution",
        tagline: "Full-featured with advanced capabilities",
        steps: ["Deep process analysis", "System design", "Full automation", "Integration testing", "Performance optimization"],
        time: "5-6 weeks",
        cost: "High",
        efficiency: 9.3,
        resourceRequirements: {
          teamSize: 8,
          roles: ["Project Manager", "Business Analyst", "Technical Lead", "QA Engineer", "Integration Specialist", "Performance Engineer"],
          skills: ["System Design", "Integration", "Performance Optimization"],
          tools: [
            {
              id: "enterprise-suite",
              name: "Enterprise Suite",
              category: "Enterprise",
              cost: "$2000/month",
              learningCurve: "High",
              integration: "Complex",
              necessity: "Required"
            }
          ],
          estimatedCost: "$75K",
          timeline: "5-6 weeks"
        },
        risks: [
          {
            id: "risk-3",
            title: "Implementation Complexity",
            description: "Complex implementation may encounter technical challenges",
            category: "technical",
            probability: 35,
            impact: 70,
            riskScore: 25,
            mitigation: ["Expert consultation", "Phased rollout", "Comprehensive testing"],
            status: "identified"
          }
        ],
        multiObjectiveScore: 78,
        priorityBreakdown: {
          costScore: 40,
          timeScore: 60,
          qualityScore: 100
        },
        reasoning: "Comprehensive solution delivers highest quality but requires more time and resources.",
        confidence: 75
      }
    ];
  }
  getMockProcessMining() {
    return {
      steps: [
        {
          id: "step-1",
          title: "Initial Request",
          description: "Customer submits initial request",
          duration: "5 minutes",
          dependencies: []
        },
        {
          id: "step-2",
          title: "Request Review",
          description: "Team reviews and validates request",
          duration: "2 hours",
          dependencies: ["step-1"]
        },
        {
          id: "step-3",
          title: "Processing",
          description: "Main processing of the request",
          duration: "1-3 days",
          dependencies: ["step-2"]
        },
        {
          id: "step-4",
          title: "Quality Check",
          description: "Final quality assurance",
          duration: "4 hours",
          dependencies: ["step-3"]
        },
        {
          id: "step-5",
          title: "Delivery",
          description: "Delivery to customer",
          duration: "30 minutes",
          dependencies: ["step-4"]
        }
      ],
      bottlenecks: [
        {
          id: "bottleneck-1",
          title: "Request Review Delay",
          description: "Manual review process creates delays",
          severity: "medium",
          suggestions: ["Automate initial screening", "Implement triage system"]
        },
        {
          id: "bottleneck-2",
          title: "Processing Variability",
          description: "Processing time varies significantly",
          severity: "high",
          suggestions: ["Standardize process", "Add automation where possible"]
        }
      ],
      optimizations: [
        {
          id: "opt-1",
          title: "Automated Triage",
          description: "Implement AI-powered request triage",
          category: "automation",
          effort: "medium",
          impact: "high",
          timeToImplement: "2-3 weeks",
          costSavings: "$10K/month",
          roi: "250%"
        },
        {
          id: "opt-2",
          title: "Process Standardization",
          description: "Create standardized processing templates",
          category: "process",
          effort: "low",
          impact: "medium",
          timeToImplement: "1 week",
          costSavings: "$5K/month",
          roi: "150%"
        }
      ]
    };
  }
  // Utility method to check API availability
  isApiAvailable() {
    return this.isAvailable;
  }
  // Method to test API connection
  async testConnection() {
    if (!this.isAvailable) {
      return false;
    }
    try {
      await this.generateResponse("Respond with 'OK' to test connection");
      return true;
    } catch (error) {
      console.error("API Connection Test Failed:", error);
      return false;
    }
  }
}
const geminiService = new GeminiService();
const buildStrategies = (industry) => [{
  id: "A",
  title: "Low Cost Strategy",
  tagline: "Minimize spend, leverage existing tooling",
  steps: ["Map process to existing internal tools", "Automate low-risk steps with rules engine", `Assign ${industry} owners for manual checkpoints`, "Weekly batch processing & review", "Quarterly optimization audit"],
  time: "3â€“5 weeks",
  cost: "Low",
  efficiency: 7.4,
  resourceRequirements: {
    teamSize: 3,
    roles: ["Process Analyst", "Automation Engineer", "Business Owner"],
    skills: ["Process Mapping", "Basic Automation", "Industry Knowledge"],
    tools: [{
      id: "rules-engine",
      name: "Rules Engine",
      category: "Automation",
      cost: "$300/month",
      learningCurve: "Low",
      integration: "Easy",
      necessity: "Required"
    }],
    estimatedCost: "$15K",
    timeline: "3-5 weeks"
  },
  risks: [{
    id: "risk-a1",
    title: "Limited Scalability",
    description: "Low-cost approach may not scale well",
    category: "technical",
    probability: 60,
    impact: 40,
    riskScore: 24,
    mitigation: ["Plan for future upgrades", "Modular design"],
    status: "identified"
  }],
  multiObjectiveScore: 75,
  priorityBreakdown: {
    costScore: 90,
    timeScore: 60,
    qualityScore: 75
  },
  reasoning: "Focuses on cost efficiency while maintaining basic functionality.",
  confidence: 80
}, {
  id: "B",
  title: "Fast Execution Strategy",
  tagline: "Maximum velocity with parallel pipelines",
  steps: ["Spin up dedicated automation cluster", "Parallelize independent steps via event queue", `Real-time ${industry} dashboards & alerts`, "Auto-escalation for blockers", "Daily AI-driven re-prioritization"],
  time: "5â€“8 days",
  cost: "High",
  efficiency: 8.6,
  resourceRequirements: {
    teamSize: 8,
    roles: ["DevOps Engineer", "Automation Specialist", "Data Engineer", "System Architect"],
    skills: ["Cloud Infrastructure", "Event-Driven Architecture", "Real-time Analytics"],
    tools: [{
      id: "automation-cluster",
      name: "Automation Cluster",
      category: "Infrastructure",
      cost: "$5000/month",
      learningCurve: "High",
      integration: "Complex",
      necessity: "Required"
    }],
    estimatedCost: "$75K",
    timeline: "5-8 days"
  },
  risks: [{
    id: "risk-b1",
    title: "High Complexity",
    description: "Complex architecture may be difficult to maintain",
    category: "technical",
    probability: 45,
    impact: 70,
    riskScore: 32,
    mitigation: ["Expert team", "Comprehensive documentation", "Regular maintenance"],
    status: "identified"
  }],
  multiObjectiveScore: 82,
  priorityBreakdown: {
    costScore: 30,
    timeScore: 95,
    qualityScore: 85
  },
  reasoning: "Maximizes execution speed with advanced automation infrastructure.",
  confidence: 75
}, {
  id: "C",
  title: "Balanced Strategy",
  tagline: "Optimal cost/speed/scalability blend",
  steps: ["Hybrid automation: critical path automated, edges manual", "Tiered SLAs based on impact", `${industry}-specific decision rules with AI fallback`, "Bi-weekly performance review loop", "Auto-scale during peak load"],
  time: "1â€“2 weeks",
  cost: "Medium",
  efficiency: 9.2,
  recommended: true,
  resourceRequirements: {
    teamSize: 5,
    roles: ["Process Engineer", "Automation Specialist", "Business Analyst", "QA Engineer"],
    skills: ["Process Design", "Hybrid Automation", "Performance Monitoring"],
    tools: [{
      id: "hybrid-platform",
      name: "Hybrid Automation Platform",
      category: "Platform",
      cost: "$1500/month",
      learningCurve: "Medium",
      integration: "Medium",
      necessity: "Required"
    }],
    estimatedCost: "$35K",
    timeline: "1-2 weeks"
  },
  risks: [{
    id: "risk-c1",
    title: "Integration Complexity",
    description: "Hybrid approach may face integration challenges",
    category: "technical",
    probability: 35,
    impact: 50,
    riskScore: 18,
    mitigation: ["Phased integration", "API standardization", "Testing framework"],
    status: "identified"
  }],
  multiObjectiveScore: 88,
  priorityBreakdown: {
    costScore: 70,
    timeScore: 85,
    qualityScore: 95
  },
  reasoning: "Optimal balance of cost, speed, and quality for most use cases.",
  confidence: 90
}];
function CostPill({
  level
}) {
  const map = {
    Low: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
    Medium: "bg-amber-500/15 text-amber-300 border-amber-500/30",
    High: "bg-rose-500/15 text-rose-300 border-rose-500/30"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `text-[11px] px-2 py-0.5 rounded-full border ${map[level]}`, children: [
    level,
    " cost"
  ] });
}
function GeneratePage() {
  const {
    user,
    isAuthenticated,
    getPreference
  } = useAuth();
  const {
    createWorkflow
  } = useWorkflows(user?.id);
  const confidenceThreshold = getPreference("confidence_threshold", 85);
  const autonomousMode = getPreference("autonomous_mode", true);
  const [description, setDescription] = reactExports.useState("");
  const [industry, setIndustry] = reactExports.useState("Operations");
  const [loading, setLoading] = reactExports.useState(false);
  const [strategies, setStrategies] = reactExports.useState(null);
  const [workflowResponse, setWorkflowResponse] = reactExports.useState(null);
  const [error, setError] = reactExports.useState(null);
  const [progress, setProgress] = reactExports.useState(0);
  const [stageIndex, setStageIndex] = reactExports.useState(0);
  const [typingText, setTypingText] = reactExports.useState("");
  const [showTyping, setShowTyping] = reactExports.useState(false);
  const [uploadedFiles, setUploadedFiles] = reactExports.useState([]);
  const [processSteps, setProcessSteps] = reactExports.useState([]);
  const [bottlenecks, setBottlenecks] = reactExports.useState([]);
  const [optimizations, setOptimizations] = reactExports.useState([]);
  const [activeTab, setActiveTab] = reactExports.useState("manual");
  const [priorities, setPriorities] = reactExports.useState({
    cost: 50,
    time: 50,
    quality: 50
  });
  const [showOptimization, setShowOptimization] = reactExports.useState(false);
  const [selectedStrategyForDetails, setSelectedStrategyForDetails] = reactExports.useState(null);
  const [selectedOption, setSelectedOption] = reactExports.useState(null);
  const timersRef = reactExports.useRef([]);
  const stages = [{
    icon: ScanSearch,
    label: "Parsing process description"
  }, {
    icon: Brain,
    label: "Analyzing dependencies & bottlenecks"
  }, {
    icon: GitBranch,
    label: "Generating candidate strategies"
  }, {
    icon: Cpu,
    label: "Scoring & selecting recommendation"
  }];
  const downloadWorkflowPDF = async () => {
    if (!workflowResponse || !selectedOption) {
      toast.error("Please select a workflow strategy first");
      return;
    }
    try {
      toast.loading("Generating PDF...");
      const pdf = new jsPDF("p", "mm", "a4");
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      pdf.setFont("helvetica");
      const addText = (text, x, y, fontSize = 12, maxWidth = pageWidth - 40) => {
        pdf.setFontSize(fontSize);
        const lines = pdf.splitTextToSize(text, maxWidth);
        lines.forEach((line, index) => {
          pdf.text(line, x, y + index * fontSize * 0.35);
        });
        return lines.length * fontSize * 0.35;
      };
      let currentY = 30;
      pdf.setFontSize(24);
      pdf.setTextColor(102, 126, 234);
      pdf.text("INNOFLOW-AI Workflow Plan", pageWidth / 2, currentY, {
        align: "center"
      });
      currentY += 15;
      pdf.setFontSize(14);
      pdf.setTextColor(100, 100, 100);
      pdf.text("AI-Powered Workflow Optimization", pageWidth / 2, currentY, {
        align: "center"
      });
      currentY += 20;
      pdf.setDrawColor(200, 200, 200);
      pdf.line(20, currentY, pageWidth - 20, currentY);
      currentY += 15;
      pdf.setFontSize(18);
      pdf.setTextColor(50, 50, 50);
      pdf.text("Selected Strategy:", 20, currentY);
      currentY += 10;
      const selectedWorkflow = workflowResponse.options.find((opt) => opt.name === selectedOption);
      if (selectedWorkflow) {
        pdf.setFontSize(16);
        pdf.setTextColor(102, 126, 234);
        currentY += addText(selectedWorkflow.name, 20, currentY, 16);
        currentY += 10;
        pdf.setFontSize(12);
        pdf.setTextColor(100, 100, 100);
        addText(`Time: ${selectedWorkflow.time}`, 20, currentY);
        currentY += 8;
        addText(`Cost: ${selectedWorkflow.cost}`, 20, currentY);
        currentY += 8;
        addText(`Efficiency: ${selectedWorkflow.efficiency}/10`, 20, currentY);
        currentY += 15;
      }
      pdf.setFontSize(16);
      pdf.setTextColor(50, 50, 50);
      pdf.text("Implementation Steps:", 20, currentY);
      currentY += 10;
      if (selectedWorkflow) {
        selectedWorkflow.steps.forEach((step, index) => {
          pdf.setFontSize(11);
          pdf.setTextColor(70, 70, 70);
          currentY += addText(`${index + 1}. ${step}`, 25, currentY, 11);
          currentY += 5;
        });
      }
      if (workflowResponse.reason) {
        currentY += 10;
        pdf.setFontSize(16);
        pdf.setTextColor(50, 50, 50);
        pdf.text("AI Recommendation Reasoning:", 20, currentY);
        currentY += 10;
        pdf.setFontSize(11);
        pdf.setTextColor(70, 70, 70);
        currentY += addText(workflowResponse.reason, 20, currentY, 11);
        currentY += 10;
      }
      currentY += 10;
      pdf.setFontSize(10);
      pdf.setTextColor(150, 150, 150);
      addText(`Generated on: ${(/* @__PURE__ */ new Date()).toLocaleDateString()}`, 20, currentY);
      currentY += 6;
      addText(`Confidence: ${workflowResponse.confidence || "N/A"}%`, 20, currentY);
      currentY += 6;
      addText(`Industry: ${industry}`, 20, currentY);
      pdf.setFontSize(8);
      pdf.setTextColor(200, 200, 200);
      pdf.text("Generated by INNOFLOW-AI - Autonomous Workflow Decision Engine", pageWidth / 2, pageHeight - 10, {
        align: "center"
      });
      const fileName = `INNOFLOW-Workflow-${selectedOption.replace(/\s+/g, "-")}-${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.pdf`;
      pdf.save(fileName);
      toast.success("PDF downloaded successfully!");
    } catch (error2) {
      console.error("PDF generation error:", error2);
      toast.error("Failed to generate PDF. Please try again.");
    }
  };
  reactExports.useEffect(() => () => {
    timersRef.current.forEach(clearTimeout);
  }, []);
  const calculateMultiObjectiveScore = (strategy, priorities2) => {
    const costValue = strategy.cost === "Low" ? 90 : strategy.cost === "Medium" ? 60 : 30;
    const timeValue = strategy.time.includes("days") ? 90 : strategy.time.includes("1-2") ? 70 : 50;
    const qualityValue = strategy.efficiency * 10;
    const costScore = costValue * priorities2.cost / 100;
    const timeScore = timeValue * priorities2.time / 100;
    const qualityScore = qualityValue * priorities2.quality / 100;
    return {
      totalScore: (costScore + timeScore + qualityScore) / 3,
      priorityBreakdown: {
        costScore,
        timeScore,
        qualityScore
      }
    };
  };
  const buildEnhancedStrategies = (industry2, priorities2) => {
    const baseStrategies = buildStrategies(industry2);
    return baseStrategies.map((strategy) => {
      const scoring = calculateMultiObjectiveScore(strategy, priorities2);
      return {
        ...strategy,
        multiObjectiveScore: scoring.totalScore,
        priorityBreakdown: scoring.priorityBreakdown,
        resourceRequirements: {
          teamSize: strategy.id === "A" ? 3 : strategy.id === "B" ? 8 : 5,
          roles: ["Project Manager", "Developer", "Analyst"],
          skills: ["Process Analysis", "Automation", "Stakeholder Management"],
          tools: [{
            id: `${strategy.id}-tool-1`,
            name: strategy.id === "A" ? "Basic Automation Tool" : strategy.id === "B" ? "Advanced AI Platform" : "Hybrid Solution",
            category: "Automation",
            cost: strategy.id === "A" ? "$500/month" : strategy.id === "B" ? "$5000/month" : "$2000/month",
            learningCurve: strategy.id === "A" ? "Low" : strategy.id === "B" ? "High" : "Medium",
            integration: strategy.id === "A" ? "Easy" : strategy.id === "B" ? "Complex" : "Medium",
            necessity: strategy.id === "A" ? "Required" : "Recommended"
          }],
          estimatedCost: strategy.id === "A" ? "$15K" : strategy.id === "B" ? "$50K" : "$30K",
          timeline: strategy.time
        },
        risks: [{
          id: `${strategy.id}-risk-1`,
          title: strategy.id === "A" ? "Limited Scalability" : strategy.id === "B" ? "High Complexity" : "Integration Challenges",
          description: `Risk associated with ${strategy.title.toLowerCase()}`,
          category: strategy.id === "A" ? "technical" : strategy.id === "B" ? "resource" : "timeline",
          probability: strategy.id === "A" ? 60 : strategy.id === "B" ? 40 : 50,
          impact: strategy.id === "A" ? 30 : strategy.id === "B" ? 70 : 50,
          riskScore: 0,
          mitigation: ["Implement monitoring systems", "Create contingency plans", "Regular progress reviews"],
          status: "identified"
        }].map((risk) => ({
          ...risk,
          riskScore: risk.probability * risk.impact / 100
        }))
      };
    }).sort((a, b) => (b.multiObjectiveScore || 0) - (a.multiObjectiveScore || 0));
  };
  const getDefaultProcessSteps = () => {
    return [{
      id: "step-0",
      title: "Process Initiation",
      description: "Start of the workflow process",
      type: "start",
      duration: "5-10 min",
      resources: ["Team Lead"],
      bottlenecks: [],
      efficiency: 8,
      position: {
        x: 50,
        y: 50
      },
      connections: ["step-1"]
    }, {
      id: "step-1",
      title: "Requirements Analysis",
      description: "Analyze and document requirements",
      type: "process",
      duration: "15-30 min",
      resources: ["Analyst", "Stakeholder"],
      bottlenecks: ["Resource constraint"],
      efficiency: 7,
      position: {
        x: 250,
        y: 50
      },
      connections: ["step-2"]
    }, {
      id: "step-2",
      title: "Process Design",
      description: "Design the optimized workflow",
      type: "process",
      duration: "20-45 min",
      resources: ["Process Designer", "Team Lead"],
      bottlenecks: [],
      efficiency: 9,
      position: {
        x: 450,
        y: 50
      },
      connections: ["step-3"]
    }, {
      id: "step-3",
      title: "Implementation",
      description: "Implement the workflow changes",
      type: "end",
      duration: "30-60 min",
      resources: ["Implementation Team"],
      bottlenecks: ["Dependency delay"],
      efficiency: 6,
      position: {
        x: 650,
        y: 50
      },
      connections: []
    }];
  };
  const handleFilesProcessed = (files) => {
    console.log("Files processed:", files);
    setUploadedFiles(files);
    if (files.length > 0) {
      const extractedSteps = files.flatMap((file) => file.extractedSteps || []);
      const uniqueSteps = Array.from(new Set(extractedSteps));
      let stepsToUse = uniqueSteps.length > 0 ? uniqueSteps : ["Document Analysis", "Process Mapping", "Bottleneck Identification", "Optimization Planning", "Implementation Strategy"];
      const flowSteps = stepsToUse.slice(0, 8).map((step, index) => ({
        id: `step-${index}`,
        title: step,
        description: `Process step ${index + 1} from workflow analysis`,
        type: index === 0 ? "start" : index === stepsToUse.length - 1 ? "end" : "process",
        duration: `${Math.floor(Math.random() * 30) + 5}-${Math.floor(Math.random() * 60) + 30} min`,
        resources: ["Team Lead", "Analyst", "Stakeholder"],
        bottlenecks: Math.random() > 0.6 ? ["Resource constraint", "Dependency delay"] : [],
        efficiency: Math.floor(Math.random() * 4) + 6,
        position: {
          x: 50 + index % 3 * 200,
          y: 50 + Math.floor(index / 3) * 120
        },
        connections: index < stepsToUse.length - 1 ? [`step-${index + 1}`] : []
      }));
      console.log("Generated flow steps:", flowSteps);
      setProcessSteps(flowSteps);
      const detectedBottlenecks = flowSteps.filter((step) => step.bottlenecks && step.bottlenecks.length > 0).map((step) => ({
        id: `bottleneck-${step.id}`,
        step: step.title,
        severity: ["low", "medium", "high", "critical"][Math.floor(Math.random() * 4)],
        type: ["time", "resource", "dependency", "quality"][Math.floor(Math.random() * 4)],
        description: `AI analysis detected potential bottleneck in this step`,
        impact: `This step may cause delays and impact overall process efficiency`,
        currentMetric: `${step.efficiency}/10`,
        targetMetric: "9/10",
        suggestions: ["Automate repetitive tasks", "Increase resource allocation", "Optimize decision points"],
        estimatedImprovement: "25-40%"
      }));
      setBottlenecks(detectedBottlenecks);
      const aiOptimizations = [{
        id: "opt-1",
        title: "Automate Document Processing",
        description: "Implement AI-powered document extraction and classification",
        category: "automation",
        effort: "medium",
        impact: "high",
        timeToImplement: "2-3 weeks",
        costSavings: "$15K/month",
        roi: "320%"
      }, {
        id: "opt-2",
        title: "Resource Reallocation",
        description: "Rebalance team assignments based on workload analysis",
        category: "resource",
        effort: "low",
        impact: "medium",
        timeToImplement: "1 week",
        costSavings: "$8K/month",
        roi: "180%"
      }, {
        id: "opt-3",
        title: "Process Redesign",
        description: "Restructure workflow to eliminate redundant steps",
        category: "process",
        effort: "high",
        impact: "high",
        timeToImplement: "4-6 weeks",
        costSavings: "$25K/month",
        roi: "450%"
      }];
      setOptimizations(aiOptimizations);
      toast.success(`Successfully processed ${files.length} documents and extracted ${uniqueSteps.length} process steps`);
    }
  };
  const handleApplyOptimization = (optimization) => {
    toast.success(`Applied optimization: ${optimization.title}`);
  };
  const handlePrioritiesChange = async (newPriorities) => {
    setPriorities(newPriorities);
    if (description && geminiService.isApiAvailable()) {
      try {
        const aiStrategies = await geminiService.generateStrategies({
          description,
          industry,
          priorities: newPriorities
        });
        setStrategies(aiStrategies);
        toast.success("Strategies updated based on new priorities");
      } catch (error2) {
        console.error("Real-time AI update failed:", error2);
        if (strategies) {
          const updatedStrategies = buildEnhancedStrategies(industry, newPriorities);
          setStrategies(updatedStrategies);
        }
      }
    } else if (strategies) {
      const updatedStrategies = buildEnhancedStrategies(industry, newPriorities);
      setStrategies(updatedStrategies);
    }
  };
  const handleResourceAllocation = (allocation) => {
    toast.success(`Resource allocation applied: ${allocation.team.length} team members, ${allocation.tools.length} tools`);
  };
  const handleMitigateRisk = (riskId, mitigation) => {
    toast.success(`Risk mitigation applied: ${mitigation}`);
  };
  const handleAcceptRisk = (riskId) => {
    toast.success(`Risk accepted and documented`);
  };
  const generate = () => {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
    setLoading(true);
    setStrategies(null);
    setWorkflowResponse(null);
    setError(null);
    setSelectedOption(null);
    setProgress(0);
    setStageIndex(0);
    setShowTyping(true);
    setTypingText("");
    const fullText = "Analyzing your workflow with AI...";
    let charIndex = 0;
    const typeInterval = window.setInterval(() => {
      if (charIndex < fullText.length) {
        setTypingText(fullText.slice(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        window.setTimeout(() => setShowTyping(false), 800);
      }
    }, 50);
    timersRef.current.push(typeInterval);
    const tick = window.setInterval(() => {
      setProgress((p) => {
        const next = p + Math.random() * 6 + 2;
        return next >= 95 ? 95 : next;
      });
    }, 120);
    timersRef.current.push(tick);
    stages.forEach((_, i) => {
      const t = window.setTimeout(() => setStageIndex(i), i * 550);
      timersRef.current.push(t);
    });
    const generateWorkflow = async () => {
      console.log("=== GENERATE WORKFLOW START ===");
      try {
        setError(null);
        console.log("Description:", description);
        if (!description.trim()) {
          console.log("No description provided, using fallback");
          const fallbackResult = {
            options: [{
              name: "Basic Strategy",
              steps: ["Analyze requirements", "Implement solution", "Test and deploy"],
              time: "2-3 weeks",
              cost: "Medium",
              efficiency: 7.5
            }],
            best_option: "Basic Strategy",
            reason: "Default strategy for empty input",
            source: "fallback"
          };
          setWorkflowResponse(fallbackResult);
          setShowOptimization(true);
          return;
        }
        console.log("Starting workflow generation for description:", description);
        const result = await geminiService.generateWorkflow(description);
        console.log("Workflow generation result:", result);
        let finalResult;
        if (!result || !result.options || result.options.length === 0) {
          console.log("Invalid result, using ultimate fallback");
          const ultimateFallback = {
            options: [{
              name: "Standard Strategy",
              steps: ["Process analysis", "Implementation", "Review"],
              time: "2-4 weeks",
              cost: "Medium",
              efficiency: 8
            }],
            best_option: "Standard Strategy",
            reason: "Ultimate fallback strategy",
            source: "fallback"
          };
          finalResult = ultimateFallback;
        } else {
          finalResult = result;
        }
        let filteredResult = finalResult;
        if (finalResult.confidence && finalResult.confidence < confidenceThreshold) {
          filteredResult = {
            ...finalResult,
            options: finalResult.options.map((option) => ({
              ...option,
              efficiency: option.efficiency * (finalResult.confidence / 100)
              // Adjust efficiency based on confidence
            })),
            confidence: finalResult.confidence
          };
        }
        setWorkflowResponse(filteredResult);
        if (autonomousMode && filteredResult.best_option) {
          setSelectedOption(filteredResult.best_option);
        }
        if (isAuthenticated && user) {
          try {
            await createWorkflow({
              user_id: user.id,
              title: `${industry} Workflow - ${(/* @__PURE__ */ new Date()).toLocaleDateString()}`,
              description: description.substring(0, 200),
              industry,
              status: "completed",
              input_data: {
                description,
                industry,
                priorities
              },
              ai_response: finalResult,
              confidence: finalResult.confidence || 85,
              source: finalResult.source || "ai",
              is_template: false,
              template_category: null,
              organization_id: null
            });
            console.log("Workflow saved to database");
          } catch (saveError) {
            console.error("Failed to save workflow:", saveError);
            toast.error("Workflow generated but failed to save to database");
          }
        }
        clearInterval(tick);
        clearInterval(typeInterval);
        setProgress(100);
        setShowOptimization(true);
        window.setTimeout(() => setLoading(false), 250);
      } catch (error2) {
        console.error("Workflow Generation Error:", error2);
        setError("Failed to generate workflow. Please try again.");
        const errorFallback = {
          options: [{
            name: "Fallback Strategy",
            steps: ["Error recovery", "Manual setup", "Basic implementation"],
            time: "1-2 weeks",
            cost: "Low",
            efficiency: 6.5
          }],
          best_option: "Fallback Strategy",
          reason: "Error recovery strategy",
          source: "fallback"
        };
        setWorkflowResponse(errorFallback);
        clearInterval(tick);
        clearInterval(typeInterval);
        setProgress(100);
        setShowOptimization(true);
        window.setTimeout(() => setLoading(false), 250);
      }
    };
    const done = window.setTimeout(generateWorkflow, 500);
    timersRef.current.push(done);
  };
  const examples = ["Customer onboarding for B2B SaaS clients", "Quarterly marketing campaign launch", "Lead-to-close sales pipeline", "HR recruitment and hiring process", "Finance invoice processing workflow", "Operations supply chain management"];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 sm:p-6 lg:p-10 max-w-7xl mx-auto animate-fade-in-up", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(WandSparkles, { className: "h-3.5 w-3.5 text-primary" }),
        " Decision Engine"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-2 w-2 rounded-full ${geminiService.isApiAvailable() ? "bg-green-500 animate-pulse" : "bg-yellow-500"}` }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: geminiService.isApiAvailable() ? "text-green-600" : "text-yellow-600", children: geminiService.isApiAvailable() ? "ðŸ¤– AI Online" : "ðŸ”§ Demo Mode" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl sm:text-3xl font-bold tracking-tight", children: "Generate a workflow" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-muted-foreground", children: "Describe your business process. Innoflow will autonomously generate three strategies and recommend the best one." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 sm:mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { value: activeTab, onValueChange: setActiveTab, className: "w-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "grid w-full grid-cols-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "manual", children: "Manual Input" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "document", children: "Process Mining" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "optimization", children: "Multi-Objective" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "manual", className: "mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glass rounded-2xl p-4 sm:p-6 transition-smooth", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-3 gap-4 sm:gap-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "desc", children: "Process description" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { id: "desc", value: description, onChange: (e) => setDescription(e.target.value), placeholder: "Try: marketing campaign, sales pipeline, onboarding process", className: "min-h-[140px] bg-background/50 resize-none" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 pt-1", children: examples.map((ex) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setDescription(ex), className: "text-xs rounded-full border border-border px-3 py-1 text-muted-foreground hover:text-foreground hover:border-primary/60 transition", type: "button", children: ex }, ex)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Industry" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: industry, onValueChange: setIndustry, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "bg-background/50", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Marketing", children: "Marketing" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Sales", children: "Sales" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Operations", children: "Operations" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Startup", children: "Startup" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: generate, disabled: loading, className: "w-full mt-2 h-11 bg-gradient-brand hover:opacity-90 text-white border-0 ring-glow transition-smooth", children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }),
            " Analyzingâ€¦"
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "mr-1.5 h-4 w-4" }),
            " Analyze & Generate"
          ] }) })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "document", className: "mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-2xl p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold mb-2", children: "AI Process Mining" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Upload your business documents and let AI automatically extract and optimize your workflows" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(DocumentUpload, { onFilesProcessed: handleFilesProcessed }),
          uploadedFiles.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", onClick: () => setProcessSteps(getDefaultProcessSteps()), className: "w-full", children: "📊 Show Sample Process Flow" }) })
        ] }),
        (processSteps.length > 0 || uploadedFiles.length > 0) && /* @__PURE__ */ jsxRuntimeExports.jsx(ProcessFlowDiagram, { steps: processSteps.length > 0 ? processSteps : getDefaultProcessSteps(), onStepClick: (step) => console.log("Step clicked:", step) }),
        bottlenecks.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(BottleneckDetection, { bottlenecks, optimizations, onApplyOptimization: handleApplyOptimization })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "optimization", className: "mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(OptimizationControls, { priorities, onPrioritiesChange: handlePrioritiesChange, disabled: loading }),
        workflowResponse && showOptimization && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 animate-fade-in", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-block", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs px-3 py-1 rounded-full bg-[#E91E63]/20 text-[#E91E63] border border-[#E91E63]/30", children: "Strategies generated using autonomous decision intelligence engine" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Recommendations adapt dynamically based on cost, speed, and quality priorities" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg sm:text-xl font-semibold", children: "Optimized Strategies" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              workflowResponse.source === "ai" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "bg-green-500/20 text-green-400 border-green-500/30", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "mr-1 h-3 w-3" }),
                " AI Generated"
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "mr-1 h-3 w-3" }),
                " Fallback Mode (Demo Safe)"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "Ranked by multi-objective score based on your priorities" })
            ] })
          ] }),
          workflowResponse && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 p-3 glass rounded-lg", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
              "Debug: workflowResponse has ",
              workflowResponse.options?.length || 0,
              " options"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
              "Source: ",
              workflowResponse.source
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5", children: workflowResponse?.options.map((option, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `relative glass rounded-2xl p-5 sm:p-6 transition-all duration-500 hover:scale-[1.03] hover:shadow-xl hover:shadow-primary/10 ${selectedOption === option.name ? "border-[#E91E63] glow-pink ring-2 ring-[#E91E63]/30" : option.name === workflowResponse.best_option ? "border-primary glow-pink ring-2 ring-primary/30" : ""}`, style: {
            animation: "fade-in-up 0.8s ease-out both",
            animationDelay: `${idx * 150}ms`
          }, children: [
            option.name === workflowResponse.best_option && /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "absolute -top-3 left-6 bg-gradient-brand text-white border-0 shadow-lg", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "mr-1 h-3 w-3" }),
              " Recommended by AI"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
                "Option ",
                String.fromCharCode(65 + idx)
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg font-bold text-primary", children: option.efficiency.toFixed(1) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Efficiency" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 text-lg font-semibold", children: option.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CostPill, { level: option.cost }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: option.time })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-medium mb-2 text-muted-foreground", children: "Key Steps" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-1", children: [
                option.steps.slice(0, 3).map((step, stepIdx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "text-xs text-muted-foreground flex items-start gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 bg-primary rounded-full mt-1.5 shrink-0" }),
                  step
                ] }, stepIdx)),
                option.steps.length > 3 && /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "text-xs text-muted-foreground italic", children: [
                  "+",
                  option.steps.length - 3,
                  " more steps"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: selectedOption === option.name ? "default" : "outline", className: `mt-5 w-full transition-all duration-200 ${selectedOption === option.name ? "bg-gradient-brand text-white border-0 hover:opacity-90" : "bg-transparent hover:bg-primary/10"}`, onClick: () => {
              setSelectedOption(option.name);
              toast.success(`Strategy selected: ${option.name}`);
            }, children: [
              selectedOption === option.name ? "Selected" : "Select Strategy",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-1.5 h-4 w-4" })
            ] })
          ] }, idx)) }),
          !workflowResponse?.options || workflowResponse.options.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "No strategies available. Please try generating again." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: generate, className: "mt-4", children: "Try Again" })
          ] }) : null
        ] }),
        selectedStrategyForDetails && strategies && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6", children: (() => {
          const strategy = strategies.find((s) => s.id === selectedStrategyForDetails);
          if (!strategy) return null;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            strategy.resourceRequirements && /* @__PURE__ */ jsxRuntimeExports.jsx(ResourceAllocation, { strategyId: strategy.id, requirements: strategy.resourceRequirements, availableTeam: [{
              id: "member-1",
              name: "Sarah Chen",
              role: "Project Manager",
              skills: ["Process Analysis", "Stakeholder Management"],
              availability: 90,
              experience: "5 years",
              efficiency: 85
            }, {
              id: "member-2",
              name: "Mike Johnson",
              role: "Senior Developer",
              skills: ["Automation", "System Integration"],
              availability: 75,
              experience: "8 years",
              efficiency: 90
            }, {
              id: "member-3",
              name: "Lisa Wang",
              role: "Business Analyst",
              skills: ["Process Analysis", "Data Analysis"],
              availability: 80,
              experience: "6 years",
              efficiency: 88
            }], onApplyAllocation: handleResourceAllocation }),
            strategy.risks && /* @__PURE__ */ jsxRuntimeExports.jsx(RiskAssessment, { strategyId: strategy.id, risks: strategy.risks, onMitigateRisk: handleMitigateRisk, onAcceptRisk: handleAcceptRisk })
          ] });
        })() })
      ] }) })
    ] }) }),
    loading && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 animate-fade-in-up", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-2xl p-5 sm:p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 text-primary animate-spin shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium truncate", children: "Analyzing your workflow..." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs sm:text-sm text-muted-foreground tabular-nums", children: [
            Math.floor(progress),
            "%"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Progress, { value: progress, className: "h-2" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 grid grid-cols-2 sm:grid-cols-4 gap-2", children: stages.map((s, i) => {
          const active = i === stageIndex;
          const done = i < stageIndex || progress >= 100;
          const Icon2 = s.icon;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex items-center gap-2 rounded-lg border px-3 py-2 text-xs transition-smooth ${done ? "border-primary/40 bg-primary/10 text-foreground" : active ? "border-primary bg-primary/10 text-foreground ring-glow" : "border-border bg-white/[0.02] text-muted-foreground"}`, children: [
            done ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-3.5 w-3.5 text-primary shrink-0" }) : active ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-3.5 w-3.5 text-primary animate-spin shrink-0" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Icon2, { className: "h-3.5 w-3.5 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: s.label })
          ] }, s.label);
        }) })
      ] }),
      showTyping && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 text-center animate-fade-in-up", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-primary/80 font-medium", children: [
        typingText,
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block w-0.5 h-4 bg-primary/80 ml-1 animate-pulse" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5", children: [0, 1, 2].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `relative glass rounded-2xl p-5 sm:p-6 overflow-hidden ${i === 2 ? "border-primary/40" : ""}`, style: {
        animation: `fade-in-up 0.5s ease-out both`,
        animationDelay: `${i * 120}ms`
      }, children: [
        i === 2 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-3 left-6 h-5 w-36 rounded-full shimmer" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 w-16 rounded shimmer" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-5 w-20 rounded-full shimmer" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 h-5 w-40 rounded shimmer" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 h-3 w-56 max-w-full rounded shimmer" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 space-y-3", children: [...Array(5)].map((_, j) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-5 w-5 rounded-full shimmer shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 rounded shimmer", style: {
            width: `${65 + j * 7 % 30}%`
          } })
        ] }, j)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 pt-4 border-t border-border grid grid-cols-3 gap-2", children: [...Array(3)].map((_, k) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3.5 w-3.5 rounded shimmer" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 w-12 rounded shimmer" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 w-8 rounded shimmer" })
        ] }, k)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 h-9 w-full rounded-md shimmer" })
      ] }, i)) })
    ] }),
    workflowResponse && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 sm:mt-10 animate-fade-in-up", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-6 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/30 text-xs font-medium text-primary/90", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3 w-3 mr-1.5" }),
        "3 workflow options generated using autonomous decision engine"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg sm:text-xl font-semibold", children: "Generated Workflow Options" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
          "3 options Â· ",
          workflowResponse.source === "ai" ? "AI Generated" : "Intelligent Demo",
          " Â· ",
          workflowResponse.confidence,
          "% confidence"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5", children: workflowResponse.options.map((option, idx) => {
        const isRecommended = option.name === workflowResponse.best_option;
        const optionId = String.fromCharCode(65 + idx);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `relative glass rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:scale-[1.02] hover-lift ${isRecommended ? "border-primary glow-pink" : ""}`, style: {
          animation: "fade-in-up 0.6s ease-out both",
          animationDelay: `${idx * 120}ms`
        }, children: [
          isRecommended && /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "absolute -top-3 left-6 bg-gradient-brand text-white border-0 shadow-lg", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "mr-1 h-3 w-3" }),
            " Recommended by AI"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
              "Option ",
              optionId
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CostPill, { level: option.cost })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 text-lg font-semibold", children: option.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: isRecommended ? "AI's top recommendation for your needs" : "Alternative approach for different priorities" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "mt-5 space-y-2.5", children: option.steps.map((step, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "shrink-0 h-5 w-5 rounded-full bg-white/5 border border-border grid place-items-center text-[10px] text-muted-foreground", children: i + 1 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/90", children: step })
          ] }, i)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 pt-4 border-t border-border grid grid-cols-3 gap-2 text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-3.5 w-3.5 text-primary mb-1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: option.time }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Time" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, { className: "h-3.5 w-3.5 text-primary mb-1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: option.cost }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Cost" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-3.5 w-3.5 text-primary mb-1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold", children: [
                option.efficiency,
                "/10"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Efficiency" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: isRecommended ? "default" : "outline", className: `mt-5 w-full transition-all duration-200 ${isRecommended ? "bg-gradient-brand text-white border-0 hover:opacity-90" : "bg-transparent hover:bg-primary/10"}`, onClick: () => {
            setSelectedOption(option.name);
            console.log("Selected:", option.name);
          }, children: [
            isRecommended ? "Select Recommended" : "Select Strategy",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-1.5 h-4 w-4" })
          ] })
        ] }, option.name);
      }) }),
      selectedOption && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 glass rounded-2xl p-6 border border-green-500/40 ring-glow-green", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 rounded-xl bg-green-500 grid place-items-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-5 w-5 text-white" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-green-400", children: "Selected Workflow Strategy" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-sm text-muted-foreground leading-relaxed", children: [
            "You have chosen ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: selectedOption }),
            " as your workflow strategy. This option will now be implemented for your business process."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex flex-wrap gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center px-3 py-1.5 rounded-full bg-green-500/20 border border-green-500/30 text-[11px] font-medium text-green-300", children: "Ready for Implementation" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center px-3 py-1.5 rounded-full bg-blue-500/20 border border-blue-500/30 text-[11px] font-medium text-blue-300", children: "AI Optimized" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { className: "bg-green-600 hover:bg-green-700 text-white border-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "mr-1.5 h-4 w-4" }),
              " Start Implementation"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", className: "border-green-500/30 text-green-400 hover:bg-green-500/10", onClick: downloadWorkflowPDF, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "mr-1.5 h-4 w-4" }),
              "Download Workflow Plan"
            ] })
          ] })
        ] })
      ] }) }),
      workflowResponse && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 glass rounded-2xl p-6 border border-primary/40 ring-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 rounded-xl bg-gradient-brand grid place-items-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Brain, { className: "h-5 w-5 text-white" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold", children: "AI Recommendation Reasoning" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground leading-relaxed", children: workflowResponse.reason }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex flex-wrap gap-2", children: ["Autonomous Analysis", "Multi-Objective", "Real-time Processing", "Confidence: " + workflowResponse.confidence + "%"].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center px-3 py-1.5 rounded-full bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 text-[11px] font-medium text-primary/90 hover:from-primary/20 hover:to-primary/10 transition-all duration-200", children: t }, t)) })
        ] })
      ] }) })
    ] })
  ] });
}
export {
  GeneratePage as component
};
