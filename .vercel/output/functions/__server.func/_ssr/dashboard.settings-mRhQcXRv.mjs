import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { B as Button, c as cn } from "./button-Cz8PAkJh.mjs";
import { I as Input } from "./input-DVeAuAgX.mjs";
import { L as Label } from "./label-DOAnQvhy.mjs";
import { R as Root$1, T as Thumb } from "../_libs/radix-ui__react-switch.mjs";
import { B as Badge, C as Card, a as CardHeader, b as CardTitle, c as CardDescription, d as CardContent, S as Slider } from "./badge-CSVD5CH-.mjs";
import { R as Root } from "../_libs/radix-ui__react-separator.mjs";
import { u as useAuth } from "./useAuth-B67bTPb3.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { L as LoaderCircle, U as User, K as Key, d as Brain, X, j as Save } from "../_libs/lucide-react.mjs";
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
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/radix-ui__react-use-previous.mjs";
import "../_libs/radix-ui__react-use-size.mjs";
import "../_libs/radix-ui__react-slider.mjs";
import "../_libs/radix-ui__number.mjs";
import "../_libs/radix-ui__react-direction.mjs";
import "../_libs/radix-ui__react-collection.mjs";
import "../_libs/supabase__supabase-js.mjs";
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "tslib";
import "../_libs/supabase__functions-js.mjs";
const Switch = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Root$1,
  {
    className: cn(
      "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      className
    ),
    ...props,
    ref,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Thumb,
      {
        className: cn(
          "pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
Switch.displayName = Root$1.displayName;
const Separator = reactExports.forwardRef(({ className, orientation = "horizontal", decorative = true, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Root,
  {
    ref,
    decorative,
    orientation,
    className: cn(
      "shrink-0 bg-border",
      orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
      className
    ),
    ...props
  }
));
Separator.displayName = Root.displayName;
function SettingsPage() {
  const {
    user,
    updateProfile,
    updatePreferences,
    loading: authLoading
  } = useAuth();
  const [name, setName] = reactExports.useState("");
  const [email, setEmail] = reactExports.useState("");
  const [currentPassword, setCurrentPassword] = reactExports.useState("");
  const [newPassword, setNewPassword] = reactExports.useState("");
  const [showPasswordChange, setShowPasswordChange] = reactExports.useState(false);
  const [autonomousMode, setAutonomousMode] = reactExports.useState(true);
  const [emailNotifications, setEmailNotifications] = reactExports.useState(true);
  const [confidenceThreshold, setConfidenceThreshold] = reactExports.useState([85]);
  const [hasChanges, setHasChanges] = reactExports.useState(false);
  const [isSaving, setIsSaving] = reactExports.useState(false);
  const [originalValues, setOriginalValues] = reactExports.useState({});
  reactExports.useEffect(() => {
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
  reactExports.useEffect(() => {
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
      if (name !== originalValues.name || email !== originalValues.email) {
        const result = await updateProfile({
          name,
          company: user.profile.company,
          role: user.profile.role
        });
        if (!result.success) {
          toast.error(result.error || "Failed to update profile");
          return;
        }
      }
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
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-6 lg:p-10 max-w-4xl mx-auto flex items-center justify-center min-h-[400px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-8 w-8 animate-spin text-primary" }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 lg:p-10 max-w-4xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-bold tracking-tight", children: "Settings" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-muted-foreground", children: "Manage your workspace and decision-engine preferences." })
      ] }),
      hasChanges && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "text-xs", children: "Unsaved changes" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "h-5 w-5" }),
          "Profile Information"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Update your personal information and account settings." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "name", children: "Name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "name", value: name, onChange: (e) => setName(e.target.value), className: "bg-background/50", placeholder: "Enter your name" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "email", children: "Email" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "email", value: email, onChange: (e) => setEmail(e.target.value), className: "bg-background/50", type: "email", placeholder: "Enter your email" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "font-medium", children: "Change Password" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Update your account password" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", size: "sm", onClick: () => setShowPasswordChange(!showPasswordChange), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Key, { className: "h-4 w-4 mr-2" }),
              showPasswordChange ? "Cancel" : "Change"
            ] })
          ] }),
          showPasswordChange && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4 p-4 bg-muted/50 rounded-lg", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "current-password", children: "Current Password" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "current-password", type: "password", value: currentPassword, onChange: (e) => setCurrentPassword(e.target.value), placeholder: "Enter current password" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "new-password", children: "New Password" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "new-password", type: "password", value: newPassword, onChange: (e) => setNewPassword(e.target.value), placeholder: "Enter new password" })
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Brain, { className: "h-5 w-5" }),
          "Decision Engine Settings"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Configure how the AI generates and optimizes your workflows." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "font-medium", children: "Autonomous Mode" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Auto-select recommended strategy without confirmation" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { checked: autonomousMode, onCheckedChange: setAutonomousMode })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "font-medium", children: "Email Notifications" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Get notified when a new optimization is found" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { checked: emailNotifications, onCheckedChange: setEmailNotifications })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "font-medium", children: "Confidence Threshold" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
              "Minimum confidence level for AI recommendations (",
              confidenceThreshold[0],
              "%)"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Slider, { value: confidenceThreshold, onValueChange: setConfidenceThreshold, max: 95, min: 70, step: 5, className: "w-full" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Conservative (70%)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Balanced (85%)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Aggressive (95%)" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", onClick: handleCancel, disabled: !hasChanges || isSaving, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4 mr-2" }),
        "Cancel"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: handleSave, disabled: !hasChanges || isSaving, className: "bg-gradient-brand text-white border-0 hover:opacity-90", children: isSaving ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 mr-2 animate-spin" }),
        "Saving..."
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "h-4 w-4 mr-2" }),
        "Save Changes"
      ] }) })
    ] })
  ] });
}
export {
  SettingsPage as component
};
