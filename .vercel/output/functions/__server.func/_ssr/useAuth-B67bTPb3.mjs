import { r as reactExports } from "../_libs/react.mjs";
import { c as createClient } from "../_libs/supabase__supabase-js.mjs";
const supabaseUrl = "https://kqdhlskkjlrxxnezciwz.supabase.co";
const supabaseAnonKey = "sb_publishable_n8zYfXdGlEBxfa3OtHWUzw_Nm03f7yP";
const supabase = createClient(supabaseUrl, supabaseAnonKey);
class AuthService {
  static async signIn(email, password) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });
    return { data, error };
  }
  static async signUp(email, password, metadata) {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: metadata
      }
    });
    return { data, error };
  }
  static async signOut() {
    const { error } = await supabase.auth.signOut();
    return { error };
  }
  static async getCurrentUser() {
    const { data: { user }, error } = await supabase.auth.getUser();
    return { user, error };
  }
  static async getProfile(userId) {
    const { data, error } = await supabase.from("profiles").select("*").eq("id", userId).single();
    return { data, error };
  }
  static async updateProfile(userId, updates) {
    const { data, error } = await supabase.from("profiles").update(updates).eq("id", userId).select().single();
    return { data, error };
  }
  static async createProfile(userId, profile) {
    const { data, error } = await supabase.from("profiles").insert({ ...profile, id: userId }).select().single();
    return { data, error };
  }
  static onAuthStateChange(callback) {
    return supabase.auth.onAuthStateChange(callback);
  }
}
function useAuth() {
  const [user, setUser] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(true);
  const [error, setError] = reactExports.useState(null);
  reactExports.useEffect(() => {
    const initializeAuth = async () => {
      try {
        const { user: authUser, error: error2 } = await AuthService.getCurrentUser();
        if (error2) {
          setError(error2.message);
        } else if (authUser) {
          const { data: profile, error: profileError } = await AuthService.getProfile(authUser.id);
          if (profileError) {
            console.warn("Profile not found, user may need to complete setup");
          }
          setUser({
            id: authUser.id,
            email: authUser.email,
            profile: profile || void 0
          });
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "Authentication error");
      } finally {
        setLoading(false);
      }
    };
    initializeAuth();
    const { data: { subscription } } = AuthService.onAuthStateChange(async (event, session) => {
      if (session?.user) {
        const { data: profile } = await AuthService.getProfile(session.user.id);
        setUser({
          id: session.user.id,
          email: session.user.email,
          profile: profile || void 0
        });
      } else {
        setUser(null);
      }
      setLoading(false);
    });
    return () => subscription.unsubscribe();
  }, []);
  const signIn = async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      const { data, error: error2 } = await AuthService.signIn(email, password);
      if (error2) {
        setError(error2.message);
        return { success: false, error: error2.message };
      }
      return { success: true };
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Sign in failed";
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };
  const signUp = async (email, password, metadata) => {
    setLoading(true);
    setError(null);
    try {
      const { data, error: error2 } = await AuthService.signUp(email, password, metadata);
      if (error2) {
        setError(error2.message);
        return { success: false, error: error2.message };
      }
      return { success: true };
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Sign up failed";
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };
  const signOut = async () => {
    setLoading(true);
    setError(null);
    try {
      const { error: error2 } = await AuthService.signOut();
      if (error2) {
        setError(error2.message);
        return { success: false, error: error2.message };
      }
      setUser(null);
      return { success: true };
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Sign out failed";
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };
  const updateProfile = async (updates) => {
    if (!user) return { success: false, error: "Not authenticated" };
    setLoading(true);
    setError(null);
    try {
      const { data, error: error2 } = await AuthService.updateProfile(user.id, updates);
      if (error2) {
        setError(error2.message);
        return { success: false, error: error2.message };
      }
      setUser((prev) => prev ? { ...prev, profile: data || void 0 } : null);
      return { success: true };
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Profile update failed";
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };
  const updatePreferences = async (preferences) => {
    if (!user || !user.profile) return { success: false, error: "No profile found" };
    setLoading(true);
    setError(null);
    try {
      const updatedPreferences = { ...user.profile.preferences, ...preferences };
      const { data, error: error2 } = await AuthService.updateProfile(user.id, {
        preferences: updatedPreferences
      });
      if (error2) {
        setError(error2.message);
        return { success: false, error: error2.message };
      }
      setUser((prev) => prev ? {
        ...prev,
        profile: data ? { ...data, preferences: updatedPreferences } : void 0
      } : null);
      return { success: true };
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Preferences update failed";
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };
  const getPreference = (key, defaultValue = null) => {
    return user?.profile?.preferences?.[key] ?? defaultValue;
  };
  return {
    user,
    loading,
    error,
    signIn,
    signUp,
    signOut,
    updateProfile,
    updatePreferences,
    getPreference,
    isAuthenticated: !!user
  };
}
export {
  supabase as s,
  useAuth as u
};
