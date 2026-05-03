import { useState, useCallback } from "react";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DollarSign, Clock, Target, Zap, Settings, TrendingUp } from "lucide-react";

interface OptimizationPriorities {
  cost: number;
  time: number;
  quality: number;
}

interface PresetProfile {
  id: string;
  name: string;
  description: string;
  icon: React.ElementType;
  priorities: OptimizationPriorities;
}

interface OptimizationControlsProps {
  priorities: OptimizationPriorities;
  onPrioritiesChange: (priorities: OptimizationPriorities) => void;
  disabled?: boolean;
}

const presetProfiles: PresetProfile[] = [
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

export function OptimizationControls({ priorities, onPrioritiesChange, disabled = false }: OptimizationControlsProps) {
  const [activePreset, setActivePreset] = useState<string | null>(null);

  const handleSliderChange = useCallback((key: keyof OptimizationPriorities, value: number[]) => {
    const newPriorities = { ...priorities, [key]: value[0] };
    onPrioritiesChange(newPriorities);
    setActivePreset(null); // Clear preset when manually adjusted
  }, [priorities, onPrioritiesChange]);

  const applyPreset = useCallback((preset: PresetProfile) => {
    onPrioritiesChange(preset.priorities);
    setActivePreset(preset.id);
  }, [onPrioritiesChange]);

  const getPriorityLabel = (key: keyof OptimizationPriorities, value: number) => {
    if (value >= 70) return "High Priority";
    if (value >= 40) return "Medium Priority";
    return "Low Priority";
  };

  const getPriorityColor = (value: number) => {
    if (value >= 70) return "text-red-500";
    if (value >= 40) return "text-yellow-500";
    return "text-green-500";
  };

  const getSliderColor = (value: number) => {
    if (value >= 70) return "bg-red-500";
    if (value >= 40) return "bg-yellow-500";
    return "bg-green-500";
  };

  const totalPriority = priorities.cost + priorities.time + priorities.quality;
  const normalizedPriorities = {
    cost: (priorities.cost / totalPriority) * 100,
    time: (priorities.time / totalPriority) * 100,
    quality: (priorities.quality / totalPriority) * 100
  };

  return (
    <div className="space-y-6">
      {/* Preset Profiles */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5" />
            Quick Presets
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {presetProfiles.map((preset) => {
              const Icon = preset.icon;
              const isActive = activePreset === preset.id;
              return (
                <Button
                  key={preset.id}
                  variant={isActive ? "default" : "outline"}
                  className={`p-3 h-auto flex flex-col items-center gap-2 transition-all duration-200 ${
                    isActive ? "ring-2 ring-primary ring-offset-2" : "hover:border-primary/50"
                  }`}
                  onClick={() => applyPreset(preset)}
                  disabled={disabled}
                >
                  <Icon className="h-4 w-4" />
                  <span className="text-xs font-medium">{preset.name}</span>
                </Button>
              );
            })}
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            Select a preset to quickly configure optimization priorities
          </p>
        </CardContent>
      </Card>

      {/* Priority Sliders */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Optimization Priorities
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Cost Priority */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <DollarSign className="h-4 w-4 text-muted-foreground" />
                <span className="font-medium">Cost Efficiency</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className={getPriorityColor(priorities.cost)}>
                  {getPriorityLabel("cost", priorities.cost)}
                </Badge>
                <span className="text-sm font-medium w-12 text-right">{priorities.cost}</span>
              </div>
            </div>
            <Slider
              value={[priorities.cost]}
              onValueChange={(value) => handleSliderChange("cost", value)}
              max={100}
              step={5}
              disabled={disabled}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Minimize Cost</span>
              <span>Balanced</span>
              <span>Maximize Value</span>
            </div>
          </div>

          {/* Time Priority */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span className="font-medium">Execution Speed</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className={getPriorityColor(priorities.time)}>
                  {getPriorityLabel("time", priorities.time)}
                </Badge>
                <span className="text-sm font-medium w-12 text-right">{priorities.time}</span>
              </div>
            </div>
            <Slider
              value={[priorities.time]}
              onValueChange={(value) => handleSliderChange("time", value)}
              max={100}
              step={5}
              disabled={disabled}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Extended Timeline</span>
              <span>Balanced</span>
              <span>Fast Delivery</span>
            </div>
          </div>

          {/* Quality Priority */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Target className="h-4 w-4 text-muted-foreground" />
                <span className="font-medium">Quality Excellence</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className={getPriorityColor(priorities.quality)}>
                  {getPriorityLabel("quality", priorities.quality)}
                </Badge>
                <span className="text-sm font-medium w-12 text-right">{priorities.quality}</span>
              </div>
            </div>
            <Slider
              value={[priorities.quality]}
              onValueChange={(value) => handleSliderChange("quality", value)}
              max={100}
              step={5}
              disabled={disabled}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Basic Quality</span>
              <span>Balanced</span>
              <span>Premium Quality</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Priority Distribution */}
      <Card>
        <CardHeader>
          <CardTitle>Priority Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <DollarSign className="h-4 w-4" />
              <span className="text-sm">Cost</span>
              <div className="flex-1 bg-background rounded-full h-2 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-300"
                  style={{ width: `${normalizedPriorities.cost}%` }}
                />
              </div>
              <span className="text-sm font-medium w-12 text-right">
                {normalizedPriorities.cost.toFixed(0)}%
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span className="text-sm">Time</span>
              <div className="flex-1 bg-background rounded-full h-2 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-green-500 to-green-600 transition-all duration-300"
                  style={{ width: `${normalizedPriorities.time}%` }}
                />
              </div>
              <span className="text-sm font-medium w-12 text-right">
                {normalizedPriorities.time.toFixed(0)}%
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Target className="h-4 w-4" />
              <span className="text-sm">Quality</span>
              <div className="flex-1 bg-background rounded-full h-2 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-purple-500 to-purple-600 transition-all duration-300"
                  style={{ width: `${normalizedPriorities.quality}%` }}
                />
              </div>
              <span className="text-sm font-medium w-12 text-right">
                {normalizedPriorities.quality.toFixed(0)}%
              </span>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4">
            Strategy recommendations will be optimized based on these priority weights
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
