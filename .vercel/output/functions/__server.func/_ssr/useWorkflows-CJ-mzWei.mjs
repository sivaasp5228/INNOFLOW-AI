import { r as reactExports } from "../_libs/react.mjs";
import { s as supabase } from "./useAuth-B67bTPb3.mjs";
class SupabaseService {
  // Profile operations
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
  // Workflow operations
  static async getWorkflows(userId, limit) {
    let query = supabase.from("workflows").select("*").eq("user_id", userId).order("created_at", { ascending: false });
    if (limit) {
      query = query.limit(limit);
    }
    const { data, error } = await query;
    return { data, error };
  }
  static async getWorkflow(id) {
    const { data, error } = await supabase.from("workflows").select("*").eq("id", id).single();
    return { data, error };
  }
  static async createWorkflow(workflow) {
    const { data, error } = await supabase.from("workflows").insert(workflow).select().single();
    return { data, error };
  }
  static async updateWorkflow(id, updates) {
    const { data, error } = await supabase.from("workflows").update(updates).eq("id", id).select().single();
    return { data, error };
  }
  static async deleteWorkflow(id) {
    const { error } = await supabase.from("workflows").delete().eq("id", id);
    return { error };
  }
  static async getRecentWorkflows(userId, limit = 5) {
    const { data, error } = await supabase.from("workflows").select("*").eq("user_id", userId).order("created_at", { ascending: false }).limit(limit);
    return { data, error };
  }
  static async getWorkflowStats(userId) {
    const { data, error } = await supabase.from("workflows").select("id, confidence, created_at").eq("user_id", userId);
    if (error || !data) {
      return {
        totalWorkflows: 0,
        avgConfidence: 0,
        error
      };
    }
    const totalWorkflows = data.length;
    const avgConfidence = data.reduce((sum, w) => sum + (w.confidence || 0), 0) / totalWorkflows;
    return {
      totalWorkflows,
      avgConfidence: avgConfidence || 0,
      error: null
    };
  }
  // Organization operations
  static async getOrganizations(userId) {
    const { data, error } = await supabase.from("organizations").select("*").or(`owner_id.eq.${userId},members.cs.{${userId}}}`);
    return { data, error };
  }
  static async createOrganization(organization) {
    const { data, error } = await supabase.from("organizations").insert(organization).select().single();
    return { data, error };
  }
  // Template operations
  static async getWorkflowTemplates(category) {
    let query = supabase.from("workflows").select("*").eq("is_template", true);
    if (category) {
      query = query.eq("template_category", category);
    }
    const { data, error } = await query.order("title");
    return { data, error };
  }
}
function useWorkflows(userId) {
  const [workflows, setWorkflows] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [error, setError] = reactExports.useState(null);
  reactExports.useEffect(() => {
    if (!userId) {
      setWorkflows([]);
      setLoading(false);
      return;
    }
    const fetchWorkflows = async () => {
      setLoading(true);
      setError(null);
      try {
        const { data, error: error2 } = await SupabaseService.getWorkflows(userId);
        if (error2) {
          setError(error2.message);
        } else {
          setWorkflows(data || []);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch workflows");
      } finally {
        setLoading(false);
      }
    };
    fetchWorkflows();
  }, [userId]);
  const createWorkflow = async (workflowData) => {
    if (!userId) return { success: false, error: "Not authenticated" };
    try {
      const { data, error: error2 } = await SupabaseService.createWorkflow({
        ...workflowData,
        user_id: userId
      });
      if (error2) {
        setError(error2.message);
        return { success: false, error: error2.message };
      }
      setWorkflows((prev) => [data, ...prev]);
      return { success: true, data };
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Failed to create workflow";
      setError(errorMessage);
      return { success: false, error: errorMessage };
    }
  };
  const updateWorkflow = async (id, updates) => {
    try {
      const { data, error: error2 } = await SupabaseService.updateWorkflow(id, updates);
      if (error2) {
        setError(error2.message);
        return { success: false, error: error2.message };
      }
      setWorkflows(
        (prev) => prev.map((w) => w.id === id ? { ...w, ...data } : w)
      );
      return { success: true, data };
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Failed to update workflow";
      setError(errorMessage);
      return { success: false, error: errorMessage };
    }
  };
  const deleteWorkflow = async (id) => {
    try {
      const { error: error2 } = await SupabaseService.deleteWorkflow(id);
      if (error2) {
        setError(error2.message);
        return { success: false, error: error2.message };
      }
      setWorkflows((prev) => prev.filter((w) => w.id !== id));
      return { success: true };
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Failed to delete workflow";
      setError(errorMessage);
      return { success: false, error: errorMessage };
    }
  };
  const refreshWorkflows = async () => {
    if (!userId) return;
    setLoading(true);
    setError(null);
    try {
      const { data, error: error2 } = await SupabaseService.getWorkflows(userId);
      if (error2) {
        setError(error2.message);
      } else {
        setWorkflows(data || []);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to refresh workflows");
    } finally {
      setLoading(false);
    }
  };
  return {
    workflows,
    loading,
    error,
    createWorkflow,
    updateWorkflow,
    deleteWorkflow,
    refreshWorkflows
  };
}
function useRecentWorkflows(userId, limit = 5) {
  const [recentWorkflows, setRecentWorkflows] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [error, setError] = reactExports.useState(null);
  reactExports.useEffect(() => {
    if (!userId) {
      setRecentWorkflows([]);
      setLoading(false);
      return;
    }
    const fetchRecentWorkflows = async () => {
      setLoading(true);
      setError(null);
      try {
        const { data, error: error2 } = await SupabaseService.getRecentWorkflows(userId, limit);
        if (error2) {
          setError(error2.message);
        } else {
          setRecentWorkflows(data || []);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch recent workflows");
      } finally {
        setLoading(false);
      }
    };
    fetchRecentWorkflows();
  }, [userId, limit]);
  return {
    recentWorkflows,
    loading,
    error
  };
}
function useWorkflowStats(userId) {
  const [stats, setStats] = reactExports.useState({
    totalWorkflows: 0,
    avgConfidence: 0
  });
  const [loading, setLoading] = reactExports.useState(true);
  const [error, setError] = reactExports.useState(null);
  reactExports.useEffect(() => {
    if (!userId) {
      setStats({ totalWorkflows: 0, avgConfidence: 0 });
      setLoading(false);
      return;
    }
    const fetchStats = async () => {
      setLoading(true);
      setError(null);
      try {
        const { totalWorkflows, avgConfidence, error: error2 } = await SupabaseService.getWorkflowStats(userId);
        if (error2) {
          setError(error2.message);
        } else {
          setStats({ totalWorkflows, avgConfidence });
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch stats");
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, [userId]);
  return {
    stats,
    loading,
    error
  };
}
export {
  useWorkflowStats as a,
  useWorkflows as b,
  useRecentWorkflows as u
};
