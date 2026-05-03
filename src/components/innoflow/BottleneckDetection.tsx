import { useState } from "react";
import { AlertTriangle, TrendingUp, Clock, Users, DollarSign, Zap, CheckCircle, Lightbulb, Target, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

interface Bottleneck {
  id: string;
  step: string;
  severity: "low" | "medium" | "high" | "critical";
  type: "time" | "resource" | "dependency" | "quality";
  description: string;
  impact: string;
  currentMetric: string;
  targetMetric: string;
  suggestions: string[];
  estimatedImprovement: string;
}

interface Optimization {
  id: string;
  title: string;
  description: string;
  category: "automation" | "resource" | "process" | "technology";
  effort: "low" | "medium" | "high";
  impact: "low" | "medium" | "high";
  timeToImplement: string;
  costSavings: string;
  roi: string;
}

interface BottleneckDetectionProps {
  bottlenecks: Bottleneck[];
  optimizations: Optimization[];
  onApplyOptimization?: (optimization: Optimization) => void;
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
  dependency: AlertTriangle,
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

export function BottleneckDetection({ bottlenecks, optimizations, onApplyOptimization }: BottleneckDetectionProps) {
  const [selectedBottleneck, setSelectedBottleneck] = useState<string | null>(null);
  const [selectedOptimization, setSelectedOptimization] = useState<string | null>(null);

  const getSeverityIcon = (severity: Bottleneck['severity']) => {
    switch (severity) {
      case "critical": return <AlertTriangle className="h-4 w-4 text-red-500" />;
      case "high": return <AlertTriangle className="h-4 w-4 text-orange-500" />;
      case "medium": return <AlertTriangle className="h-4 w-4 text-yellow-500" />;
      case "low": return <AlertTriangle className="h-4 w-4 text-green-500" />;
    }
  };

  const getOverallHealthScore = () => {
    const severityWeights = { critical: 4, high: 3, medium: 2, low: 1 };
    const totalWeight = bottlenecks.reduce((sum, b) => sum + severityWeights[b.severity], 0);
    const maxWeight = bottlenecks.length * 4;
    return Math.max(0, 100 - (totalWeight / maxWeight) * 100);
  };

  const healthScore = getOverallHealthScore();

  return (
    <div className="space-y-6">
      {/* Overall Health Score */}
      <Card className="p-6 bg-gradient-to-r from-background to-background/50">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold mb-1">Process Health Analysis</h3>
            <p className="text-sm text-muted-foreground">
              AI-powered bottleneck detection and optimization recommendations
            </p>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold">{healthScore.toFixed(0)}%</span>
              {healthScore >= 80 ? (
                <CheckCircle className="h-6 w-6 text-green-500" />
              ) : healthScore >= 60 ? (
                <AlertTriangle className="h-6 w-6 text-yellow-500" />
              ) : (
                <AlertTriangle className="h-6 w-6 text-red-500" />
              )}
            </div>
            <p className="text-xs text-muted-foreground">Health Score</p>
          </div>
        </div>
        <Progress value={healthScore} className="h-2" />
        <div className="mt-2 flex justify-between text-xs text-muted-foreground">
          <span>Critical Issues: {bottlenecks.filter(b => b.severity === "critical").length}</span>
          <span>Total Bottlenecks: {bottlenecks.length}</span>
        </div>
      </Card>

      {/* Bottlenecks List */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-orange-500" />
            Detected Bottlenecks
            <Badge variant="outline">{bottlenecks.length}</Badge>
          </h3>
          
          <div className="space-y-3">
            {bottlenecks.map((bottleneck) => {
              const Icon = typeIcons[bottleneck.type];
              return (
                <Card
                  key={bottleneck.id}
                  className={`p-4 cursor-pointer transition-all duration-200 ${
                    selectedBottleneck === bottleneck.id
                      ? "border-primary ring-2 ring-primary/20"
                      : "hover:border-primary/50"
                  }`}
                  onClick={() => setSelectedBottleneck(bottleneck.id)}
                >
                  <div className="flex items-start gap-3">
                    <div className="flex flex-col gap-1">
                      {getSeverityIcon(bottleneck.severity)}
                      <Icon className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-medium text-sm">{bottleneck.step}</h4>
                        <Badge className={`text-xs ${severityColors[bottleneck.severity]}`}>
                          {bottleneck.severity}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground mb-2">{bottleneck.description}</p>
                      
                      <div className="flex items-center gap-4 text-xs">
                        <div className="flex items-center gap-1">
                          <span className="text-red-500">{bottleneck.currentMetric}</span>
                          <ArrowRight className="h-3 w-3 text-muted-foreground" />
                          <span className="text-green-500">{bottleneck.targetMetric}</span>
                        </div>
                        <span className="text-muted-foreground">+{bottleneck.estimatedImprovement}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Selected Bottleneck Details */}
        {selectedBottleneck && (
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-primary" />
              Optimization Suggestions
            </h3>
            
            {(() => {
              const bottleneck = bottlenecks.find(b => b.id === selectedBottleneck);
              if (!bottleneck) return null;

              return (
                <Card className="p-4 border-primary/20">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">{bottleneck.step}</h4>
                      <p className="text-sm text-muted-foreground mb-3">{bottleneck.impact}</p>
                      
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">Current:</span>
                          <p className="font-medium text-red-500">{bottleneck.currentMetric}</p>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Target:</span>
                          <p className="font-medium text-green-500">{bottleneck.targetMetric}</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h5 className="font-medium mb-2">AI Recommendations:</h5>
                      <div className="space-y-2">
                        {bottleneck.suggestions.map((suggestion, index) => (
                          <div key={index} className="flex items-start gap-2 p-2 bg-primary/5 rounded-lg">
                            <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                            <p className="text-sm">{suggestion}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2">
                      <Button 
                        className="w-full"
                        onClick={() => {
                          // Apply first optimization suggestion
                          if (optimizations.length > 0) {
                            onApplyOptimization?.(optimizations[0]);
                          }
                        }}
                      >
                        <TrendingUp className="mr-2 h-4 w-4" />
                        Apply Optimization
                      </Button>
                    </div>
                  </div>
                </Card>
              );
            })()}
          </div>
        )}
      </div>

      {/* Optimization Opportunities */}
      <div>
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Zap className="h-5 w-5 text-primary" />
          AI-Generated Optimizations
          <Badge variant="outline">{optimizations.length}</Badge>
        </h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {optimizations.map((optimization) => (
            <Card
              key={optimization.id}
              className={`p-4 cursor-pointer transition-all duration-200 ${
                selectedOptimization === optimization.id
                  ? "border-primary ring-2 ring-primary/20"
                  : "hover:border-primary/50 hover:shadow-md"
              }`}
              onClick={() => setSelectedOptimization(optimization.id)}
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <h4 className="font-medium text-sm leading-tight">{optimization.title}</h4>
                  <Badge className={`text-xs ${effortColors[optimization.effort]}`}>
                    {optimization.effort} effort
                  </Badge>
                </div>
                
                <p className="text-xs text-muted-foreground line-clamp-2">
                  {optimization.description}
                </p>

                <div className="flex items-center gap-2 text-xs">
                  <Badge className={impactColors[optimization.impact]}>
                    {optimization.impact} impact
                  </Badge>
                  <span className="text-muted-foreground">{optimization.category}</span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3 text-muted-foreground" />
                    <span>{optimization.timeToImplement}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <DollarSign className="h-3 w-3 text-green-500" />
                    <span className="text-green-600">{optimization.costSavings}</span>
                  </div>
                </div>

                <Button
                  size="sm"
                  className="w-full"
                  onClick={(e) => {
                    e.stopPropagation();
                    onApplyOptimization?.(optimization);
                  }}
                >
                  Apply Optimization
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
