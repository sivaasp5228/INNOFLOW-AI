import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "sonner";
import { Loader2, Save, X, Key, User, Bell, Brain } from "lucide-react";

export const Route = createFileRoute("/dashboard/settings")({
  component: SettingsPage,
});

function SettingsPage() {
  const { user, updateProfile, updatePreferences, getPreference, loading: authLoading } = useAuth();
  
  // Profile state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [showPasswordChange, setShowPasswordChange] = useState(false);
  
  // Preferences state
  const [autonomousMode, setAutonomousMode] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [confidenceThreshold, setConfidenceThreshold] = useState([85]);
  
  // Form state
  const [hasChanges, setHasChanges] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [originalValues, setOriginalValues] = useState<any>({});

  // Initialize form with user data
  useEffect(() => {
    if (user?.profile) {
      const profileData = {
        name: user.profile.name || "",
        email: user.email || "",
        autonomousMode: user.profile.preferences?.autonomous_mode ?? true,
        emailNotifications: user.profile.preferences?.email_notifications ?? true,
        confidenceThreshold: user.profile.preferences?.confidence_threshold ?? 85
      };
      
      setName(profileData.name);
      setEmail(profileData.email);
      setAutonomousMode(profileData.autonomousMode);
      setEmailNotifications(profileData.emailNotifications);
      setConfidenceThreshold([profileData.confidenceThreshold]);
      setOriginalValues(profileData);
    }
  }, [user]);

  // Track changes
  useEffect(() => {
    if (!user?.profile) return;
    
    const currentData = {
      name,
      email,
      autonomousMode,
      emailNotifications,
      confidenceThreshold: confidenceThreshold[0]
    };
    
    const changed = JSON.stringify(currentData) !== JSON.stringify(originalValues);
    setHasChanges(changed);
  }, [name, email, autonomousMode, emailNotifications, confidenceThreshold, originalValues]);

  const handleSave = async () => {
    if (!user?.profile) return;
    
    setIsSaving(true);
    
    try {
      // Update profile fields
      if (name !== originalValues.name || email !== originalValues.email) {
        const result = await updateProfile({ name, company: user.profile.company, role: user.profile.role });
        if (!result.success) {
          toast.error(result.error || "Failed to update profile");
          return;
        }
      }
      
      // Update preferences
      const preferences = {
        autonomous_mode: autonomousMode,
        email_notifications: emailNotifications,
        confidence_threshold: confidenceThreshold[0]
      };
      
      const prefResult = await updatePreferences(preferences);
      if (!prefResult.success) {
        toast.error(prefResult.error || "Failed to update preferences");
        return;
      }
      
      // Reset original values
      setOriginalValues({
        name,
        email,
        autonomousMode,
        emailNotifications,
        confidenceThreshold: confidenceThreshold[0]
      });
      
      toast.success("Settings saved successfully!");
      setHasChanges(false);
    } catch (error) {
      toast.error("An unexpected error occurred");
    } finally {
      setIsSaving(false);
    }
  };

  const handleCancel = () => {
    if (user?.profile) {
      setName(originalValues.name);
      setEmail(originalValues.email);
      setAutonomousMode(originalValues.autonomousMode);
      setEmailNotifications(originalValues.emailNotifications);
      setConfidenceThreshold([originalValues.confidenceThreshold]);
      setHasChanges(false);
    }
  };

  if (authLoading) {
    return (
      <div className="p-6 lg:p-10 max-w-4xl mx-auto flex items-center justify-center min-h-[400px]">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="p-6 lg:p-10 max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
          <p className="mt-1 text-muted-foreground">Manage your workspace and decision-engine preferences.</p>
        </div>
        {hasChanges && (
          <Badge variant="secondary" className="text-xs">
            Unsaved changes
          </Badge>
        )}
      </div>

      {/* Profile Section */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="h-5 w-5" />
            Profile Information
          </CardTitle>
          <CardDescription>
            Update your personal information and account settings.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input 
                id="name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                className="bg-background/50"
                placeholder="Enter your name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                className="bg-background/50"
                type="email"
                placeholder="Enter your email"
              />
            </div>
          </div>
          
          <Separator />
          
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <Label className="font-medium">Change Password</Label>
                <p className="text-xs text-muted-foreground">Update your account password</p>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowPasswordChange(!showPasswordChange)}
              >
                <Key className="h-4 w-4 mr-2" />
                {showPasswordChange ? "Cancel" : "Change"}
              </Button>
            </div>
            
            {showPasswordChange && (
              <div className="grid sm:grid-cols-2 gap-4 p-4 bg-muted/50 rounded-lg">
                <div className="space-y-2">
                  <Label htmlFor="current-password">Current Password</Label>
                  <Input
                    id="current-password"
                    type="password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    placeholder="Enter current password"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="new-password">New Password</Label>
                  <Input
                    id="new-password"
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="Enter new password"
                  />
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Decision Engine Section */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-5 w-5" />
            Decision Engine Settings
          </CardTitle>
          <CardDescription>
            Configure how the AI generates and optimizes your workflows.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <Label className="font-medium">Autonomous Mode</Label>
              <p className="text-xs text-muted-foreground">
                Auto-select recommended strategy without confirmation
              </p>
            </div>
            <Switch 
              checked={autonomousMode} 
              onCheckedChange={setAutonomousMode}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <Label className="font-medium">Email Notifications</Label>
              <p className="text-xs text-muted-foreground">
                Get notified when a new optimization is found
              </p>
            </div>
            <Switch 
              checked={emailNotifications} 
              onCheckedChange={setEmailNotifications}
            />
          </div>
          
          <div className="space-y-3">
            <div className="space-y-1">
              <Label className="font-medium">Confidence Threshold</Label>
              <p className="text-xs text-muted-foreground">
                Minimum confidence level for AI recommendations ({confidenceThreshold[0]}%)
              </p>
            </div>
            <Slider
              value={confidenceThreshold}
              onValueChange={setConfidenceThreshold}
              max={95}
              min={70}
              step={5}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Conservative (70%)</span>
              <span>Balanced (85%)</span>
              <span>Aggressive (95%)</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex justify-end gap-3">
        <Button 
          variant="outline" 
          onClick={handleCancel}
          disabled={!hasChanges || isSaving}
        >
          <X className="h-4 w-4 mr-2" />
          Cancel
        </Button>
        <Button 
          onClick={handleSave}
          disabled={!hasChanges || isSaving}
          className="bg-gradient-brand text-white border-0 hover:opacity-90"
        >
          {isSaving ? (
            <>
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              Saving...
            </>
          ) : (
            <>
              <Save className="h-4 w-4 mr-2" />
              Save Changes
            </>
          )}
        </Button>
      </div>
    </div>
  );
}