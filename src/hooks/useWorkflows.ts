import { useState, useEffect } from 'react'
import { SupabaseService } from '@/services/supabaseService'
import type { Workflow } from '@/types/database'

export function useWorkflows(userId?: string) {
  const [workflows, setWorkflows] = useState<Workflow[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!userId) {
      setWorkflows([])
      setLoading(false)
      return
    }

    const fetchWorkflows = async () => {
      setLoading(true)
      setError(null)
      
      try {
        const { data, error } = await SupabaseService.getWorkflows(userId)
        
        if (error) {
          setError(error.message)
        } else {
          setWorkflows(data || [])
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch workflows')
      } finally {
        setLoading(false)
      }
    }

    fetchWorkflows()
  }, [userId])

  const createWorkflow = async (workflowData: Omit<Workflow, 'id' | 'created_at' | 'updated_at'>) => {
    if (!userId) return { success: false, error: 'Not authenticated' }
    
    try {
      const { data, error } = await SupabaseService.createWorkflow({
        ...workflowData,
        user_id: userId
      })
      
      if (error) {
        setError(error.message)
        return { success: false, error: error.message }
      }
      
      setWorkflows(prev => [data!, ...prev])
      return { success: true, data: data }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to create workflow'
      setError(errorMessage)
      return { success: false, error: errorMessage }
    }
  }

  const updateWorkflow = async (id: string, updates: Partial<Workflow>) => {
    try {
      const { data, error } = await SupabaseService.updateWorkflow(id, updates)
      
      if (error) {
        setError(error.message)
        return { success: false, error: error.message }
      }
      
      setWorkflows(prev => 
        prev.map(w => w.id === id ? { ...w, ...data } : w)
      )
      return { success: true, data: data }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to update workflow'
      setError(errorMessage)
      return { success: false, error: errorMessage }
    }
  }

  const deleteWorkflow = async (id: string) => {
    try {
      const { error } = await SupabaseService.deleteWorkflow(id)
      
      if (error) {
        setError(error.message)
        return { success: false, error: error.message }
      }
      
      setWorkflows(prev => prev.filter(w => w.id !== id))
      return { success: true }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to delete workflow'
      setError(errorMessage)
      return { success: false, error: errorMessage }
    }
  }

  const refreshWorkflows = async () => {
    if (!userId) return
    
    setLoading(true)
    setError(null)
    
    try {
      const { data, error } = await SupabaseService.getWorkflows(userId)
      
      if (error) {
        setError(error.message)
      } else {
        setWorkflows(data || [])
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to refresh workflows')
    } finally {
      setLoading(false)
    }
  }

  return {
    workflows,
    loading,
    error,
    createWorkflow,
    updateWorkflow,
    deleteWorkflow,
    refreshWorkflows
  }
}

export function useRecentWorkflows(userId?: string, limit: number = 5) {
  const [recentWorkflows, setRecentWorkflows] = useState<Workflow[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!userId) {
      setRecentWorkflows([])
      setLoading(false)
      return
    }

    const fetchRecentWorkflows = async () => {
      setLoading(true)
      setError(null)
      
      try {
        const { data, error } = await SupabaseService.getRecentWorkflows(userId, limit)
        
        if (error) {
          setError(error.message)
        } else {
          setRecentWorkflows(data || [])
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch recent workflows')
      } finally {
        setLoading(false)
      }
    }

    fetchRecentWorkflows()
  }, [userId, limit])

  return {
    recentWorkflows,
    loading,
    error
  }
}

export function useWorkflowStats(userId?: string) {
  const [stats, setStats] = useState({
    totalWorkflows: 0,
    avgConfidence: 0
  })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!userId) {
      setStats({ totalWorkflows: 0, avgConfidence: 0 })
      setLoading(false)
      return
    }

    const fetchStats = async () => {
      setLoading(true)
      setError(null)
      
      try {
        const { totalWorkflows, avgConfidence, error } = await SupabaseService.getWorkflowStats(userId)
        
        if (error) {
          setError(error.message)
        } else {
          setStats({ totalWorkflows, avgConfidence })
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch stats')
      } finally {
        setLoading(false)
      }
    }

    fetchStats()
  }, [userId])

  return {
    stats,
    loading,
    error
  }
}
