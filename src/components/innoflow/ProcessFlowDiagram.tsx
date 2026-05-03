import { useState } from "react";
import { ArrowRight, Circle, Square, Diamond, Clock, AlertTriangle, CheckCircle, Zap, Users, FileText } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ProcessStep {
  id: string;
  title: string;
  description: string;
  type: "start" | "process" | "decision" | "end";
  duration?: string;
  resources?: string[];
  bottlenecks?: string[];
  efficiency?: number;
  position: { x: number; y: number };
  connections: string[];
}

interface ProcessFlowDiagramProps {
  steps: ProcessStep[];
  onStepClick?: (step: ProcessStep) => void;
  interactive?: boolean;
}

const stepTypes = {
  start: { icon: Circle, color: "bg-green-500", borderColor: "border-green-500" },
  process: { icon: Square, color: "bg-blue-500", borderColor: "border-blue-500" },
  decision: { icon: Diamond, color: "bg-orange-500", borderColor: "border-orange-500" },
  end: { icon: Circle, color: "bg-red-500", borderColor: "border-red-500" }
};

export function ProcessFlowDiagram({ steps, onStepClick, interactive = true }: ProcessFlowDiagramProps) {
  const [selectedStep, setSelectedStep] = useState<string | null>(null);
  const [hoveredStep, setHoveredStep] = useState<string | null>(null);

  const handleStepClick = (step: ProcessStep) => {
    if (interactive) {
      setSelectedStep(step.id);
      onStepClick?.(step);
    }
  };

  const renderConnection = (fromStep: ProcessStep, toStepId: string) => {
    const toStep = steps.find(s => s.id === toStepId);
    if (!toStep) return null;

    const fromX = fromStep.position.x + 80;
    const fromY = fromStep.position.y + 40;
    const toX = toStep.position.x;
    const toY = toStep.position.y + 40;

    const isHorizontal = Math.abs(toX - fromX) > Math.abs(toY - fromY);
    const pathClass = isHorizontal ? "horizontal" : "vertical";

    return (
      <svg
        key={`${fromStep.id}-${toStepId}`}
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 1 }}
      >
        <defs>
          <marker
            id="arrowhead"
            markerWidth="10"
            markerHeight="7"
            refX="9"
            refY="3.5"
            orient="auto"
          >
            <polygon
              points="0 0, 10 3.5, 0 7"
              fill="#6366f1"
              className="opacity-60"
            />
          </marker>
        </defs>
        <path
          d={`M ${fromX} ${fromY} L ${toX - 5} ${toY}`}
          stroke="#6366f1"
          strokeWidth="2"
          fill="none"
          markerEnd="url(#arrowhead)"
          className="opacity-60"
        />
      </svg>
    );
  };

  const getStepIcon = (type: ProcessStep['type']) => {
    const Icon = stepTypes[type].icon;
    return <Icon className="h-4 w-4 text-white" />;
  };

  const getEfficiencyColor = (efficiency?: number) => {
    if (!efficiency) return "text-gray-500";
    if (efficiency >= 8) return "text-green-500";
    if (efficiency >= 6) return "text-yellow-500";
    return "text-red-500";
  };

  return (
    <div className="space-y-6">
      {/* Process Flow Visualization */}
      <Card className="p-6 bg-gradient-to-br from-background to-background/50">
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Interactive Process Flow</h3>
          <p className="text-sm text-muted-foreground">
            Click on any step to view detailed information and optimization suggestions
          </p>
        </div>

        <div className="relative bg-background/30 rounded-lg border border-border overflow-hidden" style={{ height: "500px" }}>
          {/* Render Connections */}
          {steps.map(step => 
            step.connections.map(connectionId => renderConnection(step, connectionId))
          )}

          {/* Render Steps */}
          {steps.map((step) => {
            const isSelected = selectedStep === step.id;
            const isHovered = hoveredStep === step.id;
            const stepConfig = stepTypes[step.type];

            return (
              <div
                key={step.id}
                className={`absolute cursor-pointer transition-all duration-200 ${
                  isSelected ? "z-20 scale-110" : isHovered ? "z-10 scale-105" : "z-0"
                }`}
                style={{
                  left: `${step.position.x}px`,
                  top: `${step.position.y}px`,
                  width: "160px"
                }}
                onClick={() => handleStepClick(step)}
                onMouseEnter={() => setHoveredStep(step.id)}
                onMouseLeave={() => setHoveredStep(null)}
              >
                {/* Step Node */}
                <div
                  className={`
                    relative p-4 rounded-lg border-2 transition-all duration-200
                    ${stepConfig.borderColor} 
                    ${isSelected ? "ring-2 ring-primary ring-offset-2 ring-offset-background" : ""}
                    ${isHovered ? "shadow-lg" : "shadow-sm"}
                    bg-background
                  `}
                >
                  {/* Step Type Icon */}
                  <div className={`absolute -top-3 -right-3 w-6 h-6 ${stepConfig.color} rounded-full flex items-center justify-center`}>
                    {getStepIcon(step.type)}
                  </div>

                  {/* Step Content */}
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm leading-tight">{step.title}</h4>
                    <p className="text-xs text-muted-foreground line-clamp-2">{step.description}</p>

                    {/* Duration */}
                    {step.duration && (
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">{step.duration}</span>
                      </div>
                    )}

                    {/* Efficiency Score */}
                    {step.efficiency && (
                      <div className="flex items-center gap-1">
                        <Zap className={`h-3 w-3 ${getEfficiencyColor(step.efficiency)}`} />
                        <span className={`text-xs font-medium ${getEfficiencyColor(step.efficiency)}`}>
                          {step.efficiency}/10
                        </span>
                      </div>
                    )}

                    {/* Bottleneck Warning */}
                    {step.bottlenecks && step.bottlenecks.length > 0 && (
                      <div className="flex items-center gap-1">
                        <AlertTriangle className="h-3 w-3 text-orange-500" />
                        <span className="text-xs text-orange-500">
                          {step.bottlenecks.length} bottleneck{step.bottlenecks.length > 1 ? 's' : ''}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Legend */}
        <div className="mt-4 flex flex-wrap gap-4 text-xs">
          <div className="flex items-center gap-2">
            <Circle className="h-3 w-3 text-green-500" />
            <span className="text-muted-foreground">Start/End</span>
          </div>
          <div className="flex items-center gap-2">
            <Square className="h-3 w-3 text-blue-500" />
            <span className="text-muted-foreground">Process</span>
          </div>
          <div className="flex items-center gap-2">
            <Diamond className="h-3 w-3 text-orange-500" />
            <span className="text-muted-foreground">Decision</span>
          </div>
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-3 w-3 text-orange-500" />
            <span className="text-muted-foreground">Bottleneck</span>
          </div>
        </div>
      </Card>

      {/* Step Details Panel */}
      {selectedStep && (
        <Card className="p-6 border-primary/20">
          <div className="space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold">{steps.find(s => s.id === selectedStep)?.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {steps.find(s => s.id === selectedStep)?.description}
                </p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSelectedStep(null)}
              >
                ×
              </Button>
            </div>

            {(() => {
              const step = steps.find(s => s.id === selectedStep);
              if (!step) return null;

              return (
                <>
                  {/* Metrics */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {step.duration && (
                      <div className="text-center">
                        <Clock className="h-5 w-5 text-primary mx-auto mb-1" />
                        <p className="text-sm font-medium">{step.duration}</p>
                        <p className="text-xs text-muted-foreground">Duration</p>
                      </div>
                    )}
                    {step.efficiency && (
                      <div className="text-center">
                        <Zap className={`h-5 w-5 ${getEfficiencyColor(step.efficiency)} mx-auto mb-1`} />
                        <p className={`text-sm font-medium ${getEfficiencyColor(step.efficiency)}`}>
                          {step.efficiency}/10
                        </p>
                        <p className="text-xs text-muted-foreground">Efficiency</p>
                      </div>
                    )}
                    {step.resources && (
                      <div className="text-center">
                        <Users className="h-5 w-5 text-primary mx-auto mb-1" />
                        <p className="text-sm font-medium">{step.resources.length}</p>
                        <p className="text-xs text-muted-foreground">Resources</p>
                      </div>
                    )}
                    {step.bottlenecks && (
                      <div className="text-center">
                        <AlertTriangle className="h-5 w-5 text-orange-500 mx-auto mb-1" />
                        <p className="text-sm font-medium">{step.bottlenecks.length}</p>
                        <p className="text-xs text-muted-foreground">Bottlenecks</p>
                      </div>
                    )}
                  </div>

                  {/* Resources */}
                  {step.resources && step.resources.length > 0 && (
                    <div>
                      <h4 className="text-sm font-medium mb-2">Required Resources</h4>
                      <div className="flex flex-wrap gap-2">
                        {step.resources.map((resource, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {resource}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Bottlenecks */}
                  {step.bottlenecks && step.bottlenecks.length > 0 && (
                    <div>
                      <h4 className="text-sm font-medium mb-2 text-orange-500">Identified Bottlenecks</h4>
                      <div className="space-y-2">
                        {step.bottlenecks.map((bottleneck, index) => (
                          <div key={index} className="flex items-start gap-2 p-2 bg-orange-500/10 rounded-lg border border-orange-500/20">
                            <AlertTriangle className="h-4 w-4 text-orange-500 mt-0.5 shrink-0" />
                            <p className="text-sm text-orange-700">{bottleneck}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              );
            })()}
          </div>
        </Card>
      )}
    </div>
  );
}
