import { supabase } from '@/lib/supabase'
import type { Profile, Workflow, Organization } from '@/types/database'

export class SupabaseService {
  // Profile operations
  static async getProfile(userId: string) {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single()
    
    return { data, error }
  }

  static async updateProfile(userId: string, updates: Partial<Profile>) {
    const { data, error } = await supabase
      .from('profiles')
      .update(updates)
      .eq('id', userId)
      .select()
      .single()
    
    return { data, error }
  }

  static async createProfile(userId: string, profile: Omit<Profile, 'id' | 'created_at' | 'updated_at'>) {
    const { data, error } = await supabase
      .from('profiles')
      .insert({ ...profile, id: userId })
      .select()
      .single()
    
    return { data, error }
  }

  // Workflow operations
  static async getWorkflows(userId: string, limit?: number) {
    let query = supabase
      .from('workflows')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false })
    
    if (limit) {
      query = query.limit(limit)
    }
    
    const { data, error } = await query
    return { data, error }
  }

  static async getWorkflow(id: string) {
    const { data, error } = await supabase
      .from('workflows')
      .select('*')
      .eq('id', id)
      .single()
    
    return { data, error }
  }

  static async createWorkflow(workflow: Omit<Workflow, 'id' | 'created_at' | 'updated_at'>) {
    const { data, error } = await supabase
      .from('workflows')
      .insert(workflow)
      .select()
      .single()
    
    return { data, error }
  }

  static async updateWorkflow(id: string, updates: Partial<Workflow>) {
    const { data, error } = await supabase
      .from('workflows')
      .update(updates)
      .eq('id', id)
      .select()
      .single()
    
    return { data, error }
  }

  static async deleteWorkflow(id: string) {
    const { error } = await supabase
      .from('workflows')
      .delete()
      .eq('id', id)
    
    return { error }
  }

  static async getRecentWorkflows(userId: string, limit: number = 5) {
    const { data, error } = await supabase
      .from('workflows')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false })
      .limit(limit)
    
    return { data, error }
  }

  static async getWorkflowStats(userId: string) {
    const { data, error } = await supabase
      .from('workflows')
      .select('id, confidence, created_at')
      .eq('user_id', userId)
    
    if (error || !data) {
      return { 
        totalWorkflows: 0, 
        avgConfidence: 0, 
        error 
      }
    }

    const totalWorkflows = data.length
    const avgConfidence = data.reduce((sum, w) => sum + (w.confidence || 0), 0) / totalWorkflows

    return { 
      totalWorkflows, 
      avgConfidence: avgConfidence || 0, 
      error: null 
    }
  }

  // Organization operations
  static async getOrganizations(userId: string) {
    const { data, error } = await supabase
      .from('organizations')
      .select('*')
      .or(`owner_id.eq.${userId},members.cs.{${userId}}}`)
    
    return { data, error }
  }

  static async createOrganization(organization: Omit<Organization, 'id' | 'created_at' | 'updated_at'>) {
    const { data, error } = await supabase
      .from('organizations')
      .insert(organization)
      .select()
      .single()
    
    return { data, error }
  }

  // Template operations
  static async getWorkflowTemplates(category?: string) {
    let query = supabase
      .from('workflows')
      .select('*')
      .eq('is_template', true)
    
    if (category) {
      query = query.eq('template_category', category)
    }
    
    const { data, error } = await query.order('title')
    return { data, error }
  }
}
