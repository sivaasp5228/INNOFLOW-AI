import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  AlertTriangle, 
  Shield, 
  TrendingDown, 
  CheckCircle, 
  XCircle, 
  Info,
  Target,
  Clock,
  DollarSign,
  Users
} from "lucide-react";

interface Risk {
  id: string;
  title: string;
  description: string;
  category: "technical" | "resource" | "timeline" | "budget" | "quality";
  probability: number; // 0-100
  impact: number; // 0-100
  riskScore: number; // probability * impact
  mitigation: string[];
  owner?: string;
  status: "identified" | "mitigating" | "mitigated" | "accepted";
}

interface RiskMatrix {
  low: Risk[];
  medium: Risk[];
  high: Risk[];
  critical: Risk[];
}

interface RiskAssessmentProps {
  strategyId: string;
  risks: Risk[];
  onMitigateRisk: (riskId: string, mitigation: string) => void;
  onAcceptRisk: (riskId: string) => void;
}

export function RiskAssessment({ strategyId, risks, onMitigateRisk, onAcceptRisk }: RiskAssessmentProps) {
  const [selectedRisk, setSelectedRisk] = useState<string | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>("all");

  // Calculate risk matrix
  const riskMatrix: RiskMatrix = {
    low: risks.filter(r => r.riskScore < 25),
    medium: risks.filter(r => r.riskScore >= 25 && r.riskScore < 50),
    high: risks.filter(r => r.riskScore >= 50 && r.riskScore < 75),
    critical: risks.filter(r => r.riskScore >= 75)
  };

  // Filter risks by category
  const filteredRisks = filterCategory === "all" 
    ? risks 
    : risks.filter(r => r.category === filterCategory);

  // Calculate overall risk score
  const overallRiskScore = risks.length > 0 
    ? risks.reduce((sum, r) => sum + r.riskScore, 0) / risks.length 
    : 0;

  // Risk categories for filtering
  const categories = [
    { id: "all", name: "All Risks", icon: AlertTriangle, count: risks.length },
    { id: "technical", name: "Technical", icon: Target, count: risks.filter(r => r.category === "technical").length },
    { id: "resource", name: "Resource", icon: Users, count: risks.filter(r => r.category === "resource").length },
    { id: "timeline", name: "Timeline", icon: Clock, count: risks.filter(r => r.category === "timeline").length },
    { id: "budget", name: "Budget", icon: DollarSign, count: risks.filter(r => r.category === "budget").length },
    { id: "quality", name: "Quality", icon: Shield, count: risks.filter(r => r.category === "quality").length }
  ];

  const getRiskColor = (score: number) => {
    if (score >= 75) return "text-red-500";
    if (score >= 50) return "text-orange-500";
    if (score >= 25) return "text-yellow-500";
    return "text-green-500";
  };

  const getRiskBadgeColor = (score: number) => {
    if (score >= 75) return "bg-red-100 text-red-800";
    if (score >= 50) return "bg-orange-100 text-orange-800";
    if (score >= 25) return "bg-yellow-100 text-yellow-800";
    return "bg-green-100 text-green-800";
  };

  const getRiskLabel = (score: number) => {
    if (score >= 75) return "Critical";
    if (score >= 50) return "High";
    if (score >= 25) return "Medium";
    return "Low";
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "technical": return Target;
      case "resource": return Users;
      case "timeline": return Clock;
      case "budget": return DollarSign;
      case "quality": return Shield;
      default: return AlertTriangle;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "mitigated": return <CheckCircle className="h-4 w-4 text-green-500" />;
      case "mitigating": return <AlertTriangle className="h-4 w-4 text-yellow-500" />;
      case "accepted": return <Info className="h-4 w-4 text-blue-500" />;
      default: return <XCircle className="h-4 w-4 text-red-500" />;
    }
  };

  const handleMitigateRisk = (riskId: string, mitigationIndex: number) => {
    const risk = risks.find(r => r.id === riskId);
    if (risk && risk.mitigation[mitigationIndex]) {
      onMitigateRisk(riskId, risk.mitigation[mitigationIndex]);
    }
  };

  return (
    <div className="space-y-6">
      {/* Overall Risk Assessment */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Risk Assessment Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="text-center">
              <AlertTriangle className={`h-5 w-5 mx-auto mb-1 ${getRiskColor(overallRiskScore)}`} />
              <p className="text-lg font-bold">{overallRiskScore.toFixed(0)}</p>
              <p className="text-xs text-muted-foreground">Overall Risk Score</p>
            </div>
            <div className="text-center">
              <TrendingDown className="h-5 w-5 text-red-500 mx-auto mb-1" />
              <p className="text-lg font-bold">{riskMatrix.critical.length}</p>
              <p className="text-xs text-muted-foreground">Critical Risks</p>
            </div>
            <div className="text-center">
              <AlertTriangle className="h-5 w-5 text-orange-500 mx-auto mb-1" />
              <p className="text-lg font-bold">{riskMatrix.high.length}</p>
              <p className="text-xs text-muted-foreground">High Risks</p>
            </div>
            <div className="text-center">
              <CheckCircle className="h-5 w-5 text-green-500 mx-auto mb-1" />
              <p className="text-lg font-bold">{risks.filter(r => r.status === "mitigated").length}</p>
              <p className="text-xs text-muted-foreground">Mitigated</p>
            </div>
          </div>

          {/* Risk Score Distribution */}
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span>Risk Distribution</span>
              <span>Total: {risks.length} risks</span>
            </div>
            <div className="grid grid-cols-4 gap-2">
              <div className="text-center">
                <div className="h-2 bg-green-500 rounded-full mb-1"></div>
                <span className="text-xs">{riskMatrix.low.length}</span>
              </div>
              <div className="text-center">
                <div className="h-2 bg-yellow-500 rounded-full mb-1"></div>
                <span className="text-xs">{riskMatrix.medium.length}</span>
              </div>
              <div className="text-center">
                <div className="h-2 bg-orange-500 rounded-full mb-1"></div>
                <span className="text-xs">{riskMatrix.high.length}</span>
              </div>
              <div className="text-center">
                <div className="h-2 bg-red-500 rounded-full mb-1"></div>
                <span className="text-xs">{riskMatrix.critical.length}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Category Filter */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = filterCategory === category.id;
              return (
                <Button
                  key={category.id}
                  variant={isActive ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilterCategory(category.id)}
                  className="flex items-center gap-2"
                >
                  <Icon className="h-4 w-4" />
                  {category.name}
                  <Badge variant="secondary" className="text-xs">
                    {category.count}
                  </Badge>
                </Button>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Risk Matrix Visualization */}
      <Card>
        <CardHeader>
          <CardTitle>Risk Matrix</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="font-medium text-green-600">Low Risk</h4>
              <div className="min-h-[60px] bg-green-50 border border-green-200 rounded-lg p-3">
                {riskMatrix.low.length > 0 ? (
                  <div className="space-y-1">
                    {riskMatrix.low.slice(0, 3).map(risk => (
                      <div key={risk.id} className="text-xs text-green-700">
                        • {risk.title}
                      </div>
                    ))}
                    {riskMatrix.low.length > 3 && (
                      <div className="text-xs text-green-600">
                        +{riskMatrix.low.length - 3} more
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-xs text-green-600 text-center">No low risks</div>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium text-yellow-600">Medium Risk</h4>
              <div className="min-h-[60px] bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                {riskMatrix.medium.length > 0 ? (
                  <div className="space-y-1">
                    {riskMatrix.medium.slice(0, 3).map(risk => (
                      <div key={risk.id} className="text-xs text-yellow-700">
                        • {risk.title}
                      </div>
                    ))}
                    {riskMatrix.medium.length > 3 && (
                      <div className="text-xs text-yellow-600">
                        +{riskMatrix.medium.length - 3} more
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-xs text-yellow-600 text-center">No medium risks</div>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium text-orange-600">High Risk</h4>
              <div className="min-h-[60px] bg-orange-50 border border-orange-200 rounded-lg p-3">
                {riskMatrix.high.length > 0 ? (
                  <div className="space-y-1">
                    {riskMatrix.high.slice(0, 3).map(risk => (
                      <div key={risk.id} className="text-xs text-orange-700">
                        • {risk.title}
                      </div>
                    ))}
                    {riskMatrix.high.length > 3 && (
                      <div className="text-xs text-orange-600">
                        +{riskMatrix.high.length - 3} more
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-xs text-orange-600 text-center">No high risks</div>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium text-red-600">Critical Risk</h4>
              <div className="min-h-[60px] bg-red-50 border border-red-200 rounded-lg p-3">
                {riskMatrix.critical.length > 0 ? (
                  <div className="space-y-1">
                    {riskMatrix.critical.slice(0, 3).map(risk => (
                      <div key={risk.id} className="text-xs text-red-700">
                        • {risk.title}
                      </div>
                    ))}
                    {riskMatrix.critical.length > 3 && (
                      <div className="text-xs text-red-600">
                        +{riskMatrix.critical.length - 3} more
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-xs text-red-600 text-center">No critical risks</div>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Detailed Risk List */}
      <Card>
        <CardHeader>
          <CardTitle>Risk Details & Mitigation</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredRisks.map((risk) => {
              const CategoryIcon = getCategoryIcon(risk.category);
              const isSelected = selectedRisk === risk.id;
              
              return (
                <div
                  key={risk.id}
                  className={`p-4 rounded-lg border transition-all cursor-pointer ${
                    isSelected 
                      ? "border-primary bg-primary/5" 
                      : "border-border hover:border-primary/50"
                  }`}
                  onClick={() => setSelectedRisk(isSelected ? null : risk.id)}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <CategoryIcon className="h-4 w-4 text-muted-foreground" />
                      <h4 className="font-medium">{risk.title}</h4>
                      <Badge className={getRiskBadgeColor(risk.riskScore)}>
                        {getRiskLabel(risk.riskScore)}
                      </Badge>
                      {getStatusIcon(risk.status)}
                    </div>
                    <div className="text-right">
                      <div className={`text-sm font-bold ${getRiskColor(risk.riskScore)}`}>
                        {risk.riskScore}
                      </div>
                      <div className="text-xs text-muted-foreground">Risk Score</div>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-3">{risk.description}</p>

                  <div className="grid grid-cols-2 gap-4 text-xs mb-3">
                    <div>
                      <span className="text-muted-foreground">Probability: </span>
                      <span className="font-medium">{risk.probability}%</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Impact: </span>
                      <span className="font-medium">{risk.impact}%</span>
                    </div>
                  </div>

                  {isSelected && (
                    <div className="mt-4 pt-4 border-t border-border">
                      <h5 className="font-medium mb-3">Mitigation Strategies</h5>
                      <div className="space-y-2">
                        {risk.mitigation.map((mitigation, index) => (
                          <div key={index} className="flex items-start gap-2 p-2 bg-muted rounded-lg">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                            <div className="flex-1">
                              <p className="text-sm">{mitigation}</p>
                              <Button
                                size="sm"
                                variant="outline"
                                className="mt-2"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleMitigateRisk(risk.id, index);
                                }}
                              >
                                Apply Mitigation
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-4 flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={(e) => {
                            e.stopPropagation();
                            onAcceptRisk(risk.id);
                          }}
                        >
                          Accept Risk
                        </Button>
                        {risk.owner && (
                          <div className="flex items-center gap-1 text-xs text-muted-foreground ml-auto">
                            <Users className="h-3 w-3" />
                            Owner: {risk.owner}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {filteredRisks.length === 0 && (
            <div className="text-center py-8">
              <Shield className="h-8 w-8 text-green-500 mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">
                No risks identified for this category.
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
