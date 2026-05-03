import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Sparkles, Loader2, CheckCircle2, Clock, DollarSign, Zap, ArrowRight, Wand2, Brain, GitBranch, Cpu, ScanSearch, Users, Wrench, AlertTriangle, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";
import { DocumentUpload } from "@/components/innoflow/DocumentUpload";
import { ProcessFlowDiagram } from "@/components/innoflow/ProcessFlowDiagram";
import { BottleneckDetection } from "@/components/innoflow/BottleneckDetection";
import { OptimizationControls } from "@/components/innoflow/OptimizationControls";
import { ResourceAllocation } from "@/components/innoflow/ResourceAllocation";
import { RiskAssessment } from "@/components/innoflow/RiskAssessment";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { geminiService, type AIGeneratedStrategy, type WorkflowResponse } from "@/services/geminiService";

export const Route = createFileRoute("/dashboard/generate")({
  component: GeneratePage,
});

type OptimizationPriorities = {
  cost: number;
  time: number;
  quality: number;
};

type Strategy = AIGeneratedStrategy & {
  recommended?: boolean;
};

const buildStrategies = (industry: string): Strategy[] => [
  {
    id: "A",
    title: "Low Cost Strategy",
    tagline: "Minimize spend, leverage existing tooling",
    steps: [
      "Map process to existing internal tools",
      "Automate low-risk steps with rules engine",
      `Assign ${industry} owners for manual checkpoints`,
      "Weekly batch processing & review",
      "Quarterly optimization audit",
    ],
    time: "3â€“5 weeks",
    cost: "Low",
    efficiency: 7.4,
    resourceRequirements: {
      teamSize: 3,
      roles: ["Process Analyst", "Automation Engineer", "Business Owner"],
      skills: ["Process Mapping", "Basic Automation", "Industry Knowledge"],
      tools: [
        {
          id: "rules-engine",
          name: "Rules Engine",
          category: "Automation",
          cost: "$300/month",
          learningCurve: "Low" as const,
          integration: "Easy" as const,
          necessity: "Required"
        }
      ],
      estimatedCost: "$15K",
      timeline: "3-5 weeks"
    },
    risks: [
      {
        id: "risk-a1",
        title: "Limited Scalability",
        description: "Low-cost approach may not scale well",
        category: "technical",
        probability: 60,
        impact: 40,
        riskScore: 24,
        mitigation: ["Plan for future upgrades", "Modular design"],
        status: "identified"
      }
    ],
    multiObjectiveScore: 75,
    priorityBreakdown: {
      costScore: 90,
      timeScore: 60,
      qualityScore: 75
    },
    reasoning: "Focuses on cost efficiency while maintaining basic functionality.",
    confidence: 80
  },
  {
    id: "B",
    title: "Fast Execution Strategy",
    tagline: "Maximum velocity with parallel pipelines",
    steps: [
      "Spin up dedicated automation cluster",
      "Parallelize independent steps via event queue",
      `Real-time ${industry} dashboards & alerts`,
      "Auto-escalation for blockers",
      "Daily AI-driven re-prioritization",
    ],
    time: "5â€“8 days",
    cost: "High",
    efficiency: 8.6,
    resourceRequirements: {
      teamSize: 8,
      roles: ["DevOps Engineer", "Automation Specialist", "Data Engineer", "System Architect"],
      skills: ["Cloud Infrastructure", "Event-Driven Architecture", "Real-time Analytics"],
      tools: [
        {
          id: "automation-cluster",
          name: "Automation Cluster",
          category: "Infrastructure",
          cost: "$5000/month",
          learningCurve: "High" as const,
          integration: "Complex" as const,
          necessity: "Required"
        }
      ],
      estimatedCost: "$75K",
      timeline: "5-8 days"
    },
    risks: [
      {
        id: "risk-b1",
        title: "High Complexity",
        description: "Complex architecture may be difficult to maintain",
        category: "technical",
        probability: 45,
        impact: 70,
        riskScore: 32,
        mitigation: ["Expert team", "Comprehensive documentation", "Regular maintenance"],
        status: "identified"
      }
    ],
    multiObjectiveScore: 82,
    priorityBreakdown: {
      costScore: 30,
      timeScore: 95,
      qualityScore: 85
    },
    reasoning: "Maximizes execution speed with advanced automation infrastructure.",
    confidence: 75
  },
  {
    id: "C",
    title: "Balanced Strategy",
    tagline: "Optimal cost/speed/scalability blend",
    steps: [
      "Hybrid automation: critical path automated, edges manual",
      "Tiered SLAs based on impact",
      `${industry}-specific decision rules with AI fallback`,
      "Bi-weekly performance review loop",
      "Auto-scale during peak load",
    ],
    time: "1â€“2 weeks",
    cost: "Medium",
    efficiency: 9.2,
    recommended: true,
    resourceRequirements: {
      teamSize: 5,
      roles: ["Process Engineer", "Automation Specialist", "Business Analyst", "QA Engineer"],
      skills: ["Process Design", "Hybrid Automation", "Performance Monitoring"],
      tools: [
        {
          id: "hybrid-platform",
          name: "Hybrid Automation Platform",
          category: "Platform",
          cost: "$1500/month",
          learningCurve: "Medium" as const,
          integration: "Medium" as const,
          necessity: "Required"
        }
      ],
      estimatedCost: "$35K",
      timeline: "1-2 weeks"
    },
    risks: [
      {
        id: "risk-c1",
        title: "Integration Complexity",
        description: "Hybrid approach may face integration challenges",
        category: "technical",
        probability: 35,
        impact: 50,
        riskScore: 18,
        mitigation: ["Phased integration", "API standardization", "Testing framework"],
        status: "identified"
      }
    ],
    multiObjectiveScore: 88,
    priorityBreakdown: {
      costScore: 70,
      timeScore: 85,
      qualityScore: 95
    },
    reasoning: "Optimal balance of cost, speed, and quality for most use cases.",
    confidence: 90
  },
];

function CostPill({ level }: { level: Strategy["cost"] }) {
  const map = {
    Low: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
    Medium: "bg-amber-500/15 text-amber-300 border-amber-500/30",
    High: "bg-rose-500/15 text-rose-300 border-rose-500/30",
  } as const;
  return <span className={`text-[11px] px-2 py-0.5 rounded-full border ${map[level]}`}>{level} cost</span>;
}

function GeneratePage() {
  const [description, setDescription] = useState("");
  const [industry, setIndustry] = useState("Operations");
  const [loading, setLoading] = useState(false);
  const [strategies, setStrategies] = useState<Strategy[] | null>(null);
  const [workflowResponse, setWorkflowResponse] = useState<WorkflowResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  const [stageIndex, setStageIndex] = useState(0);
  const [typingText, setTypingText] = useState("");
  const [showTyping, setShowTyping] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<any[]>([]);
  const [processSteps, setProcessSteps] = useState<any[]>([]);
  const [bottlenecks, setBottlenecks] = useState<any[]>([]);
  const [optimizations, setOptimizations] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState("manual");
  const [priorities, setPriorities] = useState({ cost: 50, time: 50, quality: 50 });
  const [showOptimization, setShowOptimization] = useState(false);
  const [selectedStrategyForDetails, setSelectedStrategyForDetails] = useState<string | null>(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const timersRef = useRef<number[]>([]);

  const stages = [
    { icon: ScanSearch, label: "Parsing process description" },
    { icon: Brain, label: "Analyzing dependencies & bottlenecks" },
    { icon: GitBranch, label: "Generating candidate strategies" },
    { icon: Cpu, label: "Scoring & selecting recommendation" },
  ];

  useEffect(() => () => { timersRef.current.forEach(clearTimeout); }, []);

  // Multi-objective scoring algorithm
  const calculateMultiObjectiveScore = (strategy: Strategy, priorities: OptimizationPriorities) => {
    const costValue = strategy.cost === "Low" ? 90 : strategy.cost === "Medium" ? 60 : 30;
    const timeValue = strategy.time.includes("days") ? 90 : strategy.time.includes("1-2") ? 70 : 50;
    const qualityValue = strategy.efficiency * 10;

    const costScore = (costValue * priorities.cost) / 100;
    const timeScore = (timeValue * priorities.time) / 100;
    const qualityScore = (qualityValue * priorities.quality) / 100;

    return {
      totalScore: (costScore + timeScore + qualityScore) / 3,
      priorityBreakdown: {
        costScore: costScore,
        timeScore: timeScore,
        qualityScore: qualityScore
      }
    };
  };

  // Generate enhanced strategies with multi-objective optimization
  const buildEnhancedStrategies = (industry: string, priorities: OptimizationPriorities): Strategy[] => {
    const baseStrategies = buildStrategies(industry);
    
    return baseStrategies.map(strategy => {
      const scoring = calculateMultiObjectiveScore(strategy, priorities);
      
      return {
        ...strategy,
        multiObjectiveScore: scoring.totalScore,
        priorityBreakdown: scoring.priorityBreakdown,
        resourceRequirements: {
          teamSize: strategy.id === "A" ? 3 : strategy.id === "B" ? 8 : 5,
          roles: ["Project Manager", "Developer", "Analyst"],
          skills: ["Process Analysis", "Automation", "Stakeholder Management"],
          tools: [
            {
              id: `${strategy.id}-tool-1`,
              name: strategy.id === "A" ? "Basic Automation Tool" : strategy.id === "B" ? "Advanced AI Platform" : "Hybrid Solution",
              category: "Automation",
              cost: strategy.id === "A" ? "$500/month" : strategy.id === "B" ? "$5000/month" : "$2000/month",
              learningCurve: (strategy.id === "A" ? "Low" : strategy.id === "B" ? "High" : "Medium") as "Low" | "Medium" | "High",
              integration: (strategy.id === "A" ? "Easy" : strategy.id === "B" ? "Complex" : "Medium") as "Easy" | "Medium" | "Complex",
              necessity: (strategy.id === "A" ? "Required" : "Recommended") as "Required" | "Recommended" | "Optional"
            }
          ],
          estimatedCost: strategy.id === "A" ? "$15K" : strategy.id === "B" ? "$50K" : "$30K",
          timeline: strategy.time
        },
        risks: [
          {
            id: `${strategy.id}-risk-1`,
            title: strategy.id === "A" ? "Limited Scalability" : strategy.id === "B" ? "High Complexity" : "Integration Challenges",
            description: `Risk associated with ${strategy.title.toLowerCase()}`,
            category: (strategy.id === "A" ? "technical" : strategy.id === "B" ? "resource" : "timeline") as "technical" | "resource" | "timeline" | "budget" | "quality",
            probability: strategy.id === "A" ? 60 : strategy.id === "B" ? 40 : 50,
            impact: strategy.id === "A" ? 30 : strategy.id === "B" ? 70 : 50,
            riskScore: 0,
            mitigation: [
              "Implement monitoring systems",
              "Create contingency plans",
              "Regular progress reviews"
            ],
            status: "identified" as const
          }
        ].map(risk => ({
          ...risk,
          riskScore: (risk.probability * risk.impact) / 100
        }))
      };
    }).sort((a, b) => (b.multiObjectiveScore || 0) - (a.multiObjectiveScore || 0));
  };

  const handleFilesProcessed = (files: any[]) => {
    setUploadedFiles(files);
    
    // Extract process steps from uploaded files
    if (files.length > 0) {
      const extractedSteps = files.flatMap(file => file.extractedSteps || []);
      const uniqueSteps = Array.from(new Set(extractedSteps));
      
      // Create process flow steps
      const flowSteps = uniqueSteps.slice(0, 8).map((step, index) => ({
        id: `step-${index}`,
        title: step,
        description: `Process step ${index + 1} extracted from uploaded documents`,
        type: index === 0 ? "start" : index === uniqueSteps.length - 1 ? "end" : "process",
        duration: `${Math.floor(Math.random() * 30) + 5}-${Math.floor(Math.random() * 60) + 30} min`,
        resources: ["Team Lead", "Analyst", "Stakeholder"],
        bottlenecks: Math.random() > 0.6 ? ["Resource constraint", "Dependency delay"] : [],
        efficiency: Math.floor(Math.random() * 4) + 6,
        position: { x: 50 + (index % 3) * 200, y: 50 + Math.floor(index / 3) * 120 },
        connections: index < uniqueSteps.length - 1 ? [`step-${index + 1}`] : []
      }));
      
      setProcessSteps(flowSteps);
      
      // Generate bottlenecks
      const detectedBottlenecks = flowSteps
        .filter(step => step.bottlenecks && step.bottlenecks.length > 0)
        .map(step => ({
          id: `bottleneck-${step.id}`,
          step: step.title,
          severity: ["low", "medium", "high", "critical"][Math.floor(Math.random() * 4)] as any,
          type: ["time", "resource", "dependency", "quality"][Math.floor(Math.random() * 4)] as any,
          description: `AI analysis detected potential bottleneck in this step`,
          impact: `This step may cause delays and impact overall process efficiency`,
          currentMetric: `${step.efficiency}/10`,
          targetMetric: "9/10",
          suggestions: [
            "Automate repetitive tasks",
            "Increase resource allocation",
            "Optimize decision points"
          ],
          estimatedImprovement: "25-40%"
        }));
      
      setBottlenecks(detectedBottlenecks);
      
      // Generate optimizations
      const aiOptimizations = [
        {
          id: "opt-1",
          title: "Automate Document Processing",
          description: "Implement AI-powered document extraction and classification",
          category: "automation" as const,
          effort: "medium" as const,
          impact: "high" as const,
          timeToImplement: "2-3 weeks",
          costSavings: "$15K/month",
          roi: "320%"
        },
        {
          id: "opt-2",
          title: "Resource Reallocation",
          description: "Rebalance team assignments based on workload analysis",
          category: "resource" as const,
          effort: "low" as const,
          impact: "medium" as const,
          timeToImplement: "1 week",
          costSavings: "$8K/month",
          roi: "180%"
        },
        {
          id: "opt-3",
          title: "Process Redesign",
          description: "Restructure workflow to eliminate redundant steps",
          category: "process" as const,
          effort: "high" as const,
          impact: "high" as const,
          timeToImplement: "4-6 weeks",
          costSavings: "$25K/month",
          roi: "450%"
        }
      ];
      
      setOptimizations(aiOptimizations);
      
      toast.success(`Successfully processed ${files.length} documents and extracted ${uniqueSteps.length} process steps`);
    }
  };

  const handleApplyOptimization = (optimization: any) => {
    toast.success(`Applied optimization: ${optimization.title}`);
    // In a real app, this would trigger the actual optimization
  };

  // Real-time strategy recalculation based on priorities
  const handlePrioritiesChange = async (newPriorities: OptimizationPriorities) => {
    setPriorities(newPriorities);
    
    if (description && geminiService.isApiAvailable()) {
      try {
        // Generate new strategies with updated priorities using AI
        const aiStrategies = await geminiService.generateStrategies({
          description,
          industry,
          priorities: newPriorities
        });
        setStrategies(aiStrategies);
        toast.success("Strategies updated based on new priorities");
      } catch (error) {
        console.error('Real-time AI update failed:', error);
        // Fallback to static recalculation
        if (strategies) {
          const updatedStrategies = buildEnhancedStrategies(industry, newPriorities);
          setStrategies(updatedStrategies);
        }
      }
    } else if (strategies) {
      // Fallback to static recalculation
      const updatedStrategies = buildEnhancedStrategies(industry, newPriorities);
      setStrategies(updatedStrategies);
    }
  };

  // Resource allocation handler
  const handleResourceAllocation = (allocation: any) => {
    toast.success(`Resource allocation applied: ${allocation.team.length} team members, ${allocation.tools.length} tools`);
  };

  // Risk mitigation handler
  const handleMitigateRisk = (riskId: string, mitigation: string) => {
    toast.success(`Risk mitigation applied: ${mitigation}`);
  };

  // Risk acceptance handler
  const handleAcceptRisk = (riskId: string) => {
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

    // Typing effect for "Analyzing your workflow with AI..."
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
    timersRef.current.push(typeInterval as unknown as number);

    // Smoothly animate progress
    const tick = window.setInterval(() => {
      setProgress((p) => {
        const next = p + Math.random() * 6 + 2;
        return next >= 95 ? 95 : next;
      });
    }, 120);
    timersRef.current.push(tick as unknown as number);

    // Advance stages
    stages.forEach((_, i) => {
      const t = window.setTimeout(() => setStageIndex(i), i * 550);
      timersRef.current.push(t as unknown as number);
    });

    // Generate workflow using enhanced Gemini AI service
    const generateWorkflow = async () => {
      console.log('=== GENERATE WORKFLOW START ===');
      try {
        setError(null);
        console.log('Description:', description);
        
        if (!description.trim()) {
          console.log('No description provided, using fallback');
          const fallbackResult = {
            options: [
              {
                name: "Basic Strategy",
                steps: ["Analyze requirements", "Implement solution", "Test and deploy"],
                time: "2-3 weeks",
                cost: "Medium" as const,
                efficiency: 7.5
              }
            ],
            best_option: "Basic Strategy",
            reason: "Default strategy for empty input",
            source: "fallback" as const
          };
          setWorkflowResponse(fallbackResult);
          setShowOptimization(true);
          return;
        }
        
        console.log('Starting workflow generation for description:', description);
        
        // Generate workflow using enhanced AI service
        const result = await geminiService.generateWorkflow(description);
        console.log('Workflow generation result:', result);

        if (!result || !result.options || result.options.length === 0) {
          console.log('Invalid result, using ultimate fallback');
          const ultimateFallback = {
            options: [
              {
                name: "Standard Strategy",
                steps: ["Process analysis", "Implementation", "Review"],
                time: "2-4 weeks",
                cost: "Medium" as const,
                efficiency: 8.0
              }
            ],
            best_option: "Standard Strategy",
            reason: "Ultimate fallback strategy",
            source: "fallback" as const
          };
          setWorkflowResponse(ultimateFallback);
        } else {
          setWorkflowResponse(result);
        }
        
        clearInterval(tick);
        clearInterval(typeInterval);
        setProgress(100);
        setShowOptimization(true);
        window.setTimeout(() => setLoading(false), 250);
      } catch (error) {
        console.error('Workflow Generation Error:', error);
        setError('Failed to generate workflow. Please try again.');
        
        // Even on error, set a fallback
        const errorFallback = {
          options: [
            {
              name: "Fallback Strategy",
              steps: ["Error recovery", "Manual setup", "Basic implementation"],
              time: "1-2 weeks",
              cost: "Low" as const,
              efficiency: 6.5
            }
          ],
          best_option: "Fallback Strategy",
          reason: "Error recovery strategy",
          source: "fallback" as const
        };
        setWorkflowResponse(errorFallback);
        
        clearInterval(tick);
        clearInterval(typeInterval);
        setProgress(100);
        setShowOptimization(true);
        window.setTimeout(() => setLoading(false), 250);
      }
    };

    const done = window.setTimeout(generateWorkflow, 2000);
    timersRef.current.push(done as unknown as number);
  };

  const examples = [
    "Customer onboarding for B2B SaaS clients",
    "Quarterly marketing campaign launch", 
    "Lead-to-close sales pipeline",
    "HR recruitment and hiring process",
    "Finance invoice processing workflow",
    "Operations supply chain management",
  ];

  return (
    <div className="p-4 sm:p-6 lg:p-10 max-w-7xl mx-auto animate-fade-in-up">
      {/* AI Status Indicator */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Wand2 className="h-3.5 w-3.5 text-primary" /> Decision Engine
        </div>
        <div className="flex items-center gap-2 text-xs">
          <div className={`h-2 w-2 rounded-full ${geminiService.isApiAvailable() ? 'bg-green-500 animate-pulse' : 'bg-yellow-500'}`} />
          <span className={geminiService.isApiAvailable() ? 'text-green-600' : 'text-yellow-600'}>
            {geminiService.isApiAvailable() ? 'ðŸ¤– AI Online' : 'ðŸ”§ Demo Mode'}
          </span>
        </div>
      </div>
      <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">Generate a workflow</h1>
      <p className="mt-1 text-muted-foreground">Describe your business process. Innoflow will autonomously generate three strategies and recommend the best one.</p>

      {/* Input Section with Tabs */}
      <div className="mt-6 sm:mt-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="manual">Manual Input</TabsTrigger>
            <TabsTrigger value="document">Process Mining</TabsTrigger>
            <TabsTrigger value="optimization">Multi-Objective</TabsTrigger>
          </TabsList>
          
          <TabsContent value="manual" className="mt-4">
            <div className="glass rounded-2xl p-4 sm:p-6 transition-smooth">
              <div className="grid lg:grid-cols-3 gap-4 sm:gap-5">
                <div className="lg:col-span-2 space-y-2">
                  <Label htmlFor="desc">Process description</Label>
                  <Textarea
                    id="desc"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Try: marketing campaign, sales pipeline, onboarding process"
                    className="min-h-[140px] bg-background/50 resize-none"
                  />
                  <div className="flex flex-wrap gap-2 pt-1">
                    {examples.map((ex) => (
                      <button
                        key={ex}
                        onClick={() => setDescription(ex)}
                        className="text-xs rounded-full border border-border px-3 py-1 text-muted-foreground hover:text-foreground hover:border-primary/60 transition"
                        type="button"
                      >
                        {ex}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Industry</Label>
                  <Select value={industry} onValueChange={setIndustry}>
                    <SelectTrigger className="bg-background/50"><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Marketing">Marketing</SelectItem>
                      <SelectItem value="Sales">Sales</SelectItem>
                      <SelectItem value="Operations">Operations</SelectItem>
                      <SelectItem value="Startup">Startup</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button
                    onClick={generate}
                    disabled={loading}
                    className="w-full mt-2 h-11 bg-gradient-brand hover:opacity-90 text-white border-0 ring-glow transition-smooth"
                  >
                    {loading ? (
                      <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Analyzingâ€¦</>
                    ) : (
                      <><Sparkles className="mr-1.5 h-4 w-4" /> Analyze & Generate</>
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="document" className="mt-4">
            <div className="space-y-6">
              <div className="glass rounded-2xl p-6">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold mb-2">AI Process Mining</h3>
                  <p className="text-sm text-muted-foreground">
                    Upload your business documents and let AI automatically extract and optimize your workflows
                  </p>
                </div>
                <DocumentUpload onFilesProcessed={handleFilesProcessed} />
              </div>
              
              {/* Process Flow Visualization */}
              {processSteps.length > 0 && (
                <ProcessFlowDiagram 
                  steps={processSteps} 
                  onStepClick={(step) => console.log("Step clicked:", step)}
                />
              )}
              
              {/* Bottleneck Detection */}
              {bottlenecks.length > 0 && (
                <BottleneckDetection 
                  bottlenecks={bottlenecks}
                  optimizations={optimizations}
                  onApplyOptimization={handleApplyOptimization}
                />
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="optimization" className="mt-4">
            <div className="space-y-6">
              {/* Optimization Controls */}
              <OptimizationControls
                priorities={priorities}
                onPrioritiesChange={handlePrioritiesChange}
                disabled={loading}
              />
              
              {/* Enhanced Strategy Display */}
              {workflowResponse && showOptimization && (
                <div className="space-y-6 animate-fade-in">
                  {/* Intelligence Header */}
                  <div className="text-center space-y-2">
                    <div className="inline-block">
                      <span className="text-xs px-3 py-1 rounded-full bg-[#E91E63]/20 text-[#E91E63] border border-[#E91E63]/30">
                        Strategies generated using autonomous decision intelligence engine
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Recommendations adapt dynamically based on cost, speed, and quality priorities
                    </p>
                  </div>

                  {/* Header with Source Indicator */}
                  <div className="flex items-center justify-between mb-5">
                    <h2 className="text-lg sm:text-xl font-semibold">Optimized Strategies</h2>
                    <div className="flex items-center gap-2">
                      {workflowResponse.source === 'ai' ? (
                        <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                          <CheckCircle2 className="mr-1 h-3 w-3" /> AI Generated
                        </Badge>
                      ) : (
                        <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">
                          <Shield className="mr-1 h-3 w-3" /> Fallback Mode (Demo Safe)
                        </Badge>
                      )}
                      <span className="text-xs text-muted-foreground">
                        Ranked by multi-objective score based on your priorities
                      </span>
                    </div>
                  </div>

                  {/* Debug Info */}
                  {workflowResponse && (
                    <div className="mb-4 p-3 glass rounded-lg">
                      <p className="text-xs text-muted-foreground">
                        Debug: workflowResponse has {workflowResponse.options?.length || 0} options
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Source: {workflowResponse.source}
                      </p>
                    </div>
                  )}

                  {/* Strategy Cards */}
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                    {workflowResponse?.options.map((option, idx) => (
                      <div
                        key={idx}
                        className={`relative glass rounded-2xl p-5 sm:p-6 transition-all duration-500 hover:scale-[1.03] hover:shadow-xl hover:shadow-primary/10 ${
                          selectedOption === option.name ? "border-[#E91E63] glow-pink ring-2 ring-[#E91E63]/30" : 
                          option.name === workflowResponse.best_option ? "border-primary glow-pink ring-2 ring-primary/30" : ""
                        }`}
                        style={{ animation: "fade-in-up 0.8s ease-out both", animationDelay: `${idx * 150}ms` }}
                      >
                        {option.name === workflowResponse.best_option && (
                          <Badge className="absolute -top-3 left-6 bg-gradient-brand text-white border-0 shadow-lg">
                            <Sparkles className="mr-1 h-3 w-3" /> Recommended by AI
                          </Badge>
                        )}
                        
                        {/* Efficiency Score */}
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-xs text-muted-foreground">Option {String.fromCharCode(65 + idx)}</span>
                          <div className="text-right">
                            <div className="text-lg font-bold text-primary">
                              {option.efficiency.toFixed(1)}
                            </div>
                            <div className="text-xs text-muted-foreground">Efficiency</div>
                          </div>
                        </div>
                        
                        <h3 className="mt-2 text-lg font-semibold">{option.name}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <CostPill level={option.cost} />
                          <span className="text-xs text-muted-foreground">{option.time}</span>
                        </div>

                        {/* Workflow Steps */}
                        <div className="mt-4">
                          <h4 className="text-sm font-medium mb-2 text-muted-foreground">Key Steps</h4>
                          <ul className="space-y-1">
                            {option.steps.slice(0, 3).map((step, stepIdx) => (
                              <li key={stepIdx} className="text-xs text-muted-foreground flex items-start gap-2">
                                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 shrink-0"></span>
                                {step}
                              </li>
                            ))}
                            {option.steps.length > 3 && (
                              <li className="text-xs text-muted-foreground italic">
                                +{option.steps.length - 3} more steps
                              </li>
                            )}
                          </ul>
                        </div>

                        <Button
                          variant={selectedOption === option.name ? "default" : "outline"}
                          className={`mt-5 w-full transition-all duration-200 ${
                            selectedOption === option.name ? "bg-gradient-brand text-white border-0 hover:opacity-90" : "bg-transparent hover:bg-primary/10"
                          }`}
                          onClick={() => {
                            setSelectedOption(option.name);
                            toast.success(`Strategy selected: ${option.name}`);
                          }}
                        >
                          {selectedOption === option.name ? "Selected" : "Select Strategy"} <ArrowRight className="ml-1.5 h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>

                  {/* Fallback if no cards */}
                  {!workflowResponse?.options || workflowResponse.options.length === 0 ? (
                    <div className="text-center py-8">
                      <p className="text-muted-foreground">No strategies available. Please try generating again.</p>
                      <Button onClick={generate} className="mt-4">
                        Try Again
                      </Button>
                    </div>
                  ) : null}
                </div>
              )}
              
              {/* Strategy Details */}
              {selectedStrategyForDetails && strategies && (
                <div className="space-y-6">
                  {(() => {
                    const strategy = strategies.find(s => s.id === selectedStrategyForDetails);
                    if (!strategy) return null;
                    
                    return (
                      <>
                        {/* Resource Allocation */}
                        {strategy.resourceRequirements && (
                          <ResourceAllocation
                            strategyId={strategy.id}
                            requirements={strategy.resourceRequirements}
                            availableTeam={[
                              {
                                id: "member-1",
                                name: "Sarah Chen",
                                role: "Project Manager",
                                skills: ["Process Analysis", "Stakeholder Management"],
                                availability: 90,
                                experience: "5 years",
                                efficiency: 85
                              },
                              {
                                id: "member-2", 
                                name: "Mike Johnson",
                                role: "Senior Developer",
                                skills: ["Automation", "System Integration"],
                                availability: 75,
                                experience: "8 years",
                                efficiency: 90
                              },
                              {
                                id: "member-3",
                                name: "Lisa Wang",
                                role: "Business Analyst",
                                skills: ["Process Analysis", "Data Analysis"],
                                availability: 80,
                                experience: "6 years",
                                efficiency: 88
                              }
                            ]}
                            onApplyAllocation={handleResourceAllocation}
                          />
                        )}
                        
                        {/* Risk Assessment */}
                        {strategy.risks && (
                          <RiskAssessment
                            strategyId={strategy.id}
                            risks={strategy.risks}
                            onMitigateRisk={handleMitigateRisk}
                            onAcceptRisk={handleAcceptRisk}
                          />
                        )}
                      </>
                    );
                  })()}
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Loading state â€” progress + detailed skeletons */}
      {loading && (
        <div className="mt-8 animate-fade-in-up">
          {/* Progress bar */}
          <div className="glass rounded-2xl p-5 sm:p-6">
            <div className="flex items-center justify-between mb-3 gap-3">
              <div className="flex items-center gap-2 min-w-0">
                <Loader2 className="h-4 w-4 text-primary animate-spin shrink-0" />
                <span className="text-sm font-medium truncate">Analyzing your workflow...</span>
              </div>
              <span className="text-xs sm:text-sm text-muted-foreground tabular-nums">{Math.floor(progress)}%</span>
            </div>
            <Progress value={progress} className="h-2" />
            <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-2">
              {stages.map((s, i) => {
                const active = i === stageIndex;
                const done = i < stageIndex || progress >= 100;
                const Icon = s.icon;
                return (
                  <div
                    key={s.label}
                    className={`flex items-center gap-2 rounded-lg border px-3 py-2 text-xs transition-smooth ${
                      done
                        ? "border-primary/40 bg-primary/10 text-foreground"
                        : active
                        ? "border-primary bg-primary/10 text-foreground ring-glow"
                        : "border-border bg-white/[0.02] text-muted-foreground"
                    }`}
                  >
                    {done ? (
                      <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" />
                    ) : active ? (
                      <Loader2 className="h-3.5 w-3.5 text-primary animate-spin shrink-0" />
                    ) : (
                      <Icon className="h-3.5 w-3.5 shrink-0" />
                    )}
                    <span className="truncate">{s.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Typing effect text */}
          {showTyping && (
            <div className="mt-6 text-center animate-fade-in-up">
              <span className="text-sm text-primary/80 font-medium">
                {typingText}
                <span className="inline-block w-0.5 h-4 bg-primary/80 ml-1 animate-pulse"></span>
              </span>
            </div>
          )}

          {/* Detailed skeleton cards */}
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={`relative glass rounded-2xl p-5 sm:p-6 overflow-hidden ${i === 2 ? "border-primary/40" : ""}`}
                style={{ animation: `fade-in-up 0.5s ease-out both`, animationDelay: `${i * 120}ms` }}
              >
                {i === 2 && (
                  <div className="absolute -top-3 left-6 h-5 w-36 rounded-full shimmer" />
                )}
                <div className="flex items-center justify-between">
                  <div className="h-3 w-16 rounded shimmer" />
                  <div className="h-5 w-20 rounded-full shimmer" />
                </div>
                <div className="mt-3 h-5 w-40 rounded shimmer" />
                <div className="mt-2 h-3 w-56 max-w-full rounded shimmer" />

                <div className="mt-6 space-y-3">
                  {[...Array(5)].map((_, j) => (
                    <div key={j} className="flex items-center gap-3">
                      <div className="h-5 w-5 rounded-full shimmer shrink-0" />
                      <div className="h-3 rounded shimmer" style={{ width: `${65 + ((j * 7) % 30)}%` }} />
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-border grid grid-cols-3 gap-2">
                  {[...Array(3)].map((_, k) => (
                    <div key={k} className="flex flex-col items-center gap-1.5">
                      <div className="h-3.5 w-3.5 rounded shimmer" />
                      <div className="h-3 w-12 rounded shimmer" />
                      <div className="h-2 w-8 rounded shimmer" />
                    </div>
                  ))}
                </div>

                <div className="mt-5 h-9 w-full rounded-md shimmer" />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Output */}
      {workflowResponse && (
        <div className="mt-8 sm:mt-10 animate-fade-in-up">
          {/* Header line */}
          <div className="mb-6 text-center">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/30 text-xs font-medium text-primary/90">
              <Sparkles className="h-3 w-3 mr-1.5" />
              3 workflow options generated using autonomous decision engine
            </span>
          </div>
          
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-lg sm:text-xl font-semibold">Generated Workflow Options</h2>
            <span className="text-xs text-muted-foreground">3 options Â· {workflowResponse.source === 'ai' ? 'AI Generated' : 'Intelligent Demo'} Â· {workflowResponse.confidence}% confidence</span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {workflowResponse.options.map((option, idx) => {
              const isRecommended = option.name === workflowResponse.best_option;
              const optionId = String.fromCharCode(65 + idx); // A, B, C
              return (
                <div
                key={option.name}
                className={`relative glass rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:scale-[1.02] hover-lift ${
                  isRecommended ? "border-primary glow-pink" : ""
                }`}
                style={{ animation: "fade-in-up 0.6s ease-out both", animationDelay: `${idx * 120}ms` }}
              >
                {isRecommended && (
                  <Badge className="absolute -top-3 left-6 bg-gradient-brand text-white border-0 shadow-lg">
                    <Sparkles className="mr-1 h-3 w-3" /> Recommended by AI
                  </Badge>
                )}
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">Option {optionId}</span>
                  <CostPill level={option.cost} />
                </div>
                <h3 className="mt-2 text-lg font-semibold">{option.name}</h3>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {isRecommended ? "AI's top recommendation for your needs" : "Alternative approach for different priorities"}
                </p>

                <ol className="mt-5 space-y-2.5">
                  {option.steps.map((step: string, i: number) => (
                    <li key={i} className="flex gap-3 text-sm">
                      <span className="shrink-0 h-5 w-5 rounded-full bg-white/5 border border-border grid place-items-center text-[10px] text-muted-foreground">{i + 1}</span>
                      <span className="text-foreground/90">{step}</span>
                    </li>
                  ))}
                </ol>

                <div className="mt-6 pt-4 border-t border-border grid grid-cols-3 gap-2 text-xs">
                  <div className="flex flex-col items-center">
                    <Clock className="h-3.5 w-3.5 text-primary mb-1" />
                    <span className="font-semibold">{option.time}</span>
                    <span className="text-muted-foreground">Time</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <DollarSign className="h-3.5 w-3.5 text-primary mb-1" />
                    <span className="font-semibold">{option.cost}</span>
                    <span className="text-muted-foreground">Cost</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Zap className="h-3.5 w-3.5 text-primary mb-1" />
                    <span className="font-semibold">{option.efficiency}/10</span>
                    <span className="text-muted-foreground">Efficiency</span>
                  </div>
                </div>

                <Button
                  variant={isRecommended ? "default" : "outline"}
                  className={`mt-5 w-full transition-all duration-200 ${isRecommended ? "bg-gradient-brand text-white border-0 hover:opacity-90" : "bg-transparent hover:bg-primary/10"}`}
                  onClick={() => {
                    setSelectedOption(option.name);
                    console.log("Selected:", option.name);
                  }}
                >
                  {isRecommended ? "Select Recommended" : "Select Strategy"} <ArrowRight className="ml-1.5 h-4 w-4" />
                </Button>
              </div>
            );
            })}
          </div>

          {/* Selected Workflow Display */}
          {selectedOption && (
            <div className="mt-8 glass rounded-2xl p-6 border border-green-500/40 ring-glow-green">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-xl bg-green-500 grid place-items-center shrink-0">
                  <CheckCircle2 className="h-5 w-5 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-green-400">Selected Workflow Strategy</h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                    You have chosen <strong>{selectedOption}</strong> as your workflow strategy. This option will now be implemented for your business process.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-green-500/20 border border-green-500/30 text-[11px] font-medium text-green-300">
                      Ready for Implementation
                    </span>
                    <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-blue-500/20 border border-blue-500/30 text-[11px] font-medium text-blue-300">
                      AI Optimized
                    </span>
                  </div>
                  <div className="mt-4 flex gap-3">
                    <Button className="bg-green-600 hover:bg-green-700 text-white border-0">
                      <ArrowRight className="mr-1.5 h-4 w-4" /> Start Implementation
                    </Button>
                    <Button variant="outline" className="border-green-500/30 text-green-400 hover:bg-green-500/10">
                      Download Workflow Plan
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Why recommended */}
          {workflowResponse && (
            <div className="mt-8 glass rounded-2xl p-6 border border-primary/40 ring-glow">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-xl bg-gradient-brand grid place-items-center shrink-0">
                  <Brain className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">AI Recommendation Reasoning</h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                    {workflowResponse.reason}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {[
                      "Autonomous Analysis",
                      "Multi-Objective",
                      "Real-time Processing",
                      "Confidence: " + workflowResponse.confidence + "%"
                    ].map((t) => (
                      <span key={t} className="inline-flex items-center px-3 py-1.5 rounded-full bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 text-[11px] font-medium text-primary/90 hover:from-primary/20 hover:to-primary/10 transition-all duration-200">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}






