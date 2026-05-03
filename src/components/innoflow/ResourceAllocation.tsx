import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Users, Wrench, BookOpen, TrendingUp, AlertTriangle, CheckCircle, Star, UserPlus } from "lucide-react";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  skills: string[];
  availability: number;
  experience: string;
  efficiency: number;
}

interface ToolRequirement {
  id: string;
  name: string;
  category: string;
  cost: string;
  learningCurve: "Low" | "Medium" | "High";
  integration: "Easy" | "Medium" | "Complex";
  necessity: "Required" | "Recommended" | "Optional";
}

interface ResourceRequirement {
  teamSize: number;
  roles: string[];
  skills: string[];
  tools: ToolRequirement[];
  estimatedCost: string;
  timeline: string;
}

interface ResourceAllocationProps {
  strategyId: string;
  requirements: ResourceRequirement;
  availableTeam: TeamMember[];
  onApplyAllocation: (allocation: any) => void;
}

export function ResourceAllocation({ strategyId, requirements, availableTeam, onApplyAllocation }: ResourceAllocationProps) {
  const [selectedTeam, setSelectedTeam] = useState<string[]>([]);
  const [selectedTools, setSelectedTools] = useState<string[]>([]);

  // AI-powered team recommendations
  const recommendedTeam = availableTeam
    .filter(member => 
      member.skills.some(skill => requirements.skills.includes(skill)) &&
      member.availability >= 50
    )
    .sort((a, b) => {
      const aMatch = a.skills.filter(skill => requirements.skills.includes(skill)).length;
      const bMatch = b.skills.filter(skill => requirements.skills.includes(skill)).length;
      return bMatch - aMatch;
    })
    .slice(0, requirements.teamSize);

  // Calculate team efficiency score
  const calculateTeamEfficiency = (teamIds: string[]) => {
    const team = availableTeam.filter(m => teamIds.includes(m.id));
    if (team.length === 0) return 0;
    
    const skillCoverage = requirements.skills.filter(skill =>
      team.some(member => member.skills.includes(skill))
    ).length / requirements.skills.length;
    
    const avgEfficiency = team.reduce((sum, m) => sum + m.efficiency, 0) / team.length;
    const avgAvailability = team.reduce((sum, m) => sum + m.availability, 0) / team.length;
    
    return (skillCoverage * 0.4 + avgEfficiency * 0.4 + avgAvailability * 0.2) * 100;
  };

  const teamEfficiency = calculateTeamEfficiency(selectedTeam.length > 0 ? selectedTeam : recommendedTeam.map(m => m.id));

  // Tool categorization
  const requiredTools = requirements.tools.filter(t => t.necessity === "Required");
  const recommendedTools = requirements.tools.filter(t => t.necessity === "Recommended");
  const optionalTools = requirements.tools.filter(t => t.necessity === "Optional");

  const getSkillMatchColor = (member: TeamMember) => {
    const matchCount = member.skills.filter(skill => requirements.skills.includes(skill)).length;
    const percentage = (matchCount / requirements.skills.length) * 100;
    if (percentage >= 80) return "text-green-500";
    if (percentage >= 50) return "text-yellow-500";
    return "text-red-500";
  };

  const getSkillMatchBadge = (member: TeamMember) => {
    const matchCount = member.skills.filter(skill => requirements.skills.includes(skill)).length;
    const percentage = (matchCount / requirements.skills.length) * 100;
    if (percentage >= 80) return { text: "Excellent Match", color: "bg-green-100 text-green-800" };
    if (percentage >= 50) return { text: "Good Match", color: "bg-yellow-100 text-yellow-800" };
    return { text: "Partial Match", color: "bg-red-100 text-red-800" };
  };

  const handleApplyRecommendedTeam = () => {
    setSelectedTeam(recommendedTeam.map(m => m.id));
  };

  const handleApplyRecommendedTools = () => {
    setSelectedTools([...requiredTools.map(t => t.id), ...recommendedTools.map(t => t.id)]);
  };

  const handleApplyAllocation = () => {
    const allocation = {
      team: availableTeam.filter(m => selectedTeam.includes(m.id)),
      tools: requirements.tools.filter(t => selectedTools.includes(t.id)),
      efficiency: teamEfficiency,
      estimatedCost: calculateTotalCost()
    };
    onApplyAllocation(allocation);
  };

  const calculateTotalCost = () => {
    const toolCosts = requirements.tools
      .filter(t => selectedTools.includes(t.id))
      .reduce((sum, tool) => {
        const cost = parseInt(tool.cost.replace(/[^0-9]/g, ""));
        return sum + cost;
      }, 0);
    
    const teamCost = selectedTeam.length * 5000; // $5k per team member
    return `$${(toolCosts + teamCost).toLocaleString()}`;
  };

  return (
    <div className="space-y-6">
      {/* Resource Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            Resource Requirements
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <Users className="h-5 w-5 text-primary mx-auto mb-1" />
              <p className="text-sm font-medium">{requirements.teamSize}</p>
              <p className="text-xs text-muted-foreground">Team Size</p>
            </div>
            <div className="text-center">
              <Wrench className="h-5 w-5 text-primary mx-auto mb-1" />
              <p className="text-sm font-medium">{requirements.tools.length}</p>
              <p className="text-xs text-muted-foreground">Tools Required</p>
            </div>
            <div className="text-center">
              <TrendingUp className="h-5 w-5 text-primary mx-auto mb-1" />
              <p className="text-sm font-medium">{teamEfficiency.toFixed(0)}%</p>
              <p className="text-xs text-muted-foreground">Team Efficiency</p>
            </div>
            <div className="text-center">
              <Star className="h-5 w-5 text-primary mx-auto mb-1" />
              <p className="text-sm font-medium">{calculateTotalCost()}</p>
              <p className="text-xs text-muted-foreground">Est. Cost</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* AI Team Recommendations */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              AI Team Recommendations
            </CardTitle>
            <Button size="sm" onClick={handleApplyRecommendedTeam}>
              <UserPlus className="mr-2 h-4 w-4" />
              Apply Recommended Team
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recommendedTeam.map((member) => {
              const isSelected = selectedTeam.includes(member.id);
              const skillMatch = getSkillMatchBadge(member);
              return (
                <div
                  key={member.id}
                  className={`p-4 rounded-lg border transition-all cursor-pointer ${
                    isSelected 
                      ? "border-primary bg-primary/5" 
                      : "border-border hover:border-primary/50"
                  }`}
                  onClick={() => {
                    setSelectedTeam(prev => 
                      isSelected 
                        ? prev.filter(id => id !== member.id)
                        : [...prev, member.id]
                    );
                  }}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-medium">{member.name}</h4>
                        <Badge variant="outline" className={skillMatch.color}>
                          {skillMatch.text}
                        </Badge>
                        <Badge variant="outline">{member.role}</Badge>
                      </div>
                      
                      <div className="flex flex-wrap gap-1 mb-2">
                        {member.skills.map((skill, index) => (
                          <span
                            key={index}
                            className={`text-xs px-2 py-1 rounded-full ${
                              requirements.skills.includes(skill)
                                ? "bg-primary/10 text-primary border border-primary/20"
                                : "bg-muted text-muted-foreground"
                            }`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                      
                      <div className="grid grid-cols-3 gap-4 text-xs">
                        <div>
                          <span className="text-muted-foreground">Experience: </span>
                          <span className="font-medium">{member.experience}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Availability: </span>
                          <span className="font-medium">{member.availability}%</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Efficiency: </span>
                          <span className={`font-medium ${getSkillMatchColor(member)}`}>
                            {member.efficiency}%
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="ml-4">
                      {isSelected ? (
                        <CheckCircle className="h-5 w-5 text-primary" />
                      ) : (
                        <div className="h-5 w-5 rounded border-2 border-dashed border-muted-foreground" />
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {recommendedTeam.length === 0 && (
            <div className="text-center py-8">
              <AlertTriangle className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">
                No team members match the required skills. Consider training or hiring.
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Tool Requirements */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Wrench className="h-5 w-5" />
              Tool Requirements
            </CardTitle>
            <Button size="sm" onClick={handleApplyRecommendedTools}>
              <Wrench className="mr-2 h-4 w-4" />
              Apply Recommended Tools
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Required Tools */}
          {requiredTools.length > 0 && (
            <div>
              <h4 className="font-medium mb-3 flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-red-500" />
                Required Tools
              </h4>
              <div className="space-y-2">
                {requiredTools.map((tool) => (
                  <ToolCard
                    key={tool.id}
                    tool={tool}
                    isSelected={selectedTools.includes(tool.id)}
                    onToggle={(id) => {
                      setSelectedTools(prev => 
                        prev.includes(id) 
                          ? prev.filter(t => t !== id)
                          : [...prev, id]
                      );
                    }}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Recommended Tools */}
          {recommendedTools.length > 0 && (
            <div>
              <h4 className="font-medium mb-3 flex items-center gap-2">
                <Star className="h-4 w-4 text-yellow-500" />
                Recommended Tools
              </h4>
              <div className="space-y-2">
                {recommendedTools.map((tool) => (
                  <ToolCard
                    key={tool.id}
                    tool={tool}
                    isSelected={selectedTools.includes(tool.id)}
                    onToggle={(id) => {
                      setSelectedTools(prev => 
                        prev.includes(id) 
                          ? prev.filter(t => t !== id)
                          : [...prev, id]
                      );
                    }}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Optional Tools */}
          {optionalTools.length > 0 && (
            <div>
              <h4 className="font-medium mb-3 flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-blue-500" />
                Optional Tools
              </h4>
              <div className="space-y-2">
                {optionalTools.map((tool) => (
                  <ToolCard
                    key={tool.id}
                    tool={tool}
                    isSelected={selectedTools.includes(tool.id)}
                    onToggle={(id) => {
                      setSelectedTools(prev => 
                        prev.includes(id) 
                          ? prev.filter(t => t !== id)
                          : [...prev, id]
                      );
                    }}
                  />
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Apply Allocation */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Resource Allocation Summary</h4>
              <p className="text-sm text-muted-foreground">
                {selectedTeam.length} team members, {selectedTools.length} tools selected
              </p>
            </div>
            <Button onClick={handleApplyAllocation} disabled={selectedTeam.length === 0}>
              Apply Resource Allocation
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function ToolCard({ tool, isSelected, onToggle }: {
  tool: ToolRequirement;
  isSelected: boolean;
  onToggle: (id: string) => void;
}) {
  const getNecessityColor = (necessity: string) => {
    switch (necessity) {
      case "Required": return "bg-red-100 text-red-800";
      case "Recommended": return "bg-yellow-100 text-yellow-800";
      case "Optional": return "bg-blue-100 text-blue-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getLearningCurveColor = (curve: string) => {
    switch (curve) {
      case "Low": return "text-green-500";
      case "Medium": return "text-yellow-500";
      case "High": return "text-red-500";
      default: return "text-gray-500";
    }
  };

  const getIntegrationColor = (integration: string) => {
    switch (integration) {
      case "Easy": return "text-green-500";
      case "Medium": return "text-yellow-500";
      case "Complex": return "text-red-500";
      default: return "text-gray-500";
    }
  };

  return (
    <div
      className={`p-3 rounded-lg border transition-all cursor-pointer ${
        isSelected 
          ? "border-primary bg-primary/5" 
          : "border-border hover:border-primary/50"
      }`}
      onClick={() => onToggle(tool.id)}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h5 className="font-medium">{tool.name}</h5>
            <Badge className={getNecessityColor(tool.necessity)}>
              {tool.necessity}
            </Badge>
            <Badge variant="outline">{tool.category}</Badge>
          </div>
          
          <div className="grid grid-cols-3 gap-4 text-xs">
            <div>
              <span className="text-muted-foreground">Cost: </span>
              <span className="font-medium">{tool.cost}</span>
            </div>
            <div>
              <span className="text-muted-foreground">Learning: </span>
              <span className={`font-medium ${getLearningCurveColor(tool.learningCurve)}`}>
                {tool.learningCurve}
              </span>
            </div>
            <div>
              <span className="text-muted-foreground">Integration: </span>
              <span className={`font-medium ${getIntegrationColor(tool.integration)}`}>
                {tool.integration}
              </span>
            </div>
          </div>
        </div>
        
        <div className="ml-4">
          {isSelected ? (
            <CheckCircle className="h-5 w-5 text-primary" />
          ) : (
            <div className="h-5 w-5 rounded border-2 border-dashed border-muted-foreground" />
          )}
        </div>
      </div>
    </div>
  );
}
