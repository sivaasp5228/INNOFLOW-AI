import { useState, useEffect } from 'react'
import { AuthService } from '@/services/authService'
import type { Profile } from '@/types/database'

interface User {
  id: string
  email?: string
  profile?: Profile
}

export function useAuth() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Get initial session
    const initializeAuth = async () => {
      try {
        const { user: authUser, error } = await AuthService.getCurrentUser()
        
        if (error) {
          setError(error.message)
        } else if (authUser) {
          // Get user profile
          const { data: profile, error: profileError } = await AuthService.getProfile(authUser.id)
          
          if (profileError) {
            console.warn('Profile not found, user may need to complete setup')
          }
          
          setUser({
            id: authUser.id,
            email: authUser.email,
            profile: profile || undefined
          })
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Authentication error')
      } finally {
        setLoading(false)
      }
    }

    initializeAuth()

    // Listen for auth changes
    const { data: { subscription } } = AuthService.onAuthStateChange(async (event, session) => {
      if (session?.user) {
        // Get user profile on sign in
        const { data: profile } = await AuthService.getProfile(session.user.id)
        
        setUser({
          id: session.user.id,
          email: session.user.email,
          profile: profile || undefined
        })
      } else {
        setUser(null)
      }
      setLoading(false)
    })

    return () => subscription.unsubscribe()
  }, [])

  const signIn = async (email: string, password: string) => {
    setLoading(true)
    setError(null)
    
    try {
      const { data, error } = await AuthService.signIn(email, password)
      
      if (error) {
        setError(error.message)
        return { success: false, error: error.message }
      }
      
      return { success: true }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Sign in failed'
      setError(errorMessage)
      return { success: false, error: errorMessage }
    } finally {
      setLoading(false)
    }
  }

  const signUp = async (email: string, password: string, metadata?: { name?: string; company?: string; role?: string }) => {
    setLoading(true)
    setError(null)
    
    try {
      const { data, error } = await AuthService.signUp(email, password, metadata)
      
      if (error) {
        setError(error.message)
        return { success: false, error: error.message }
      }
      
      return { success: true }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Sign up failed'
      setError(errorMessage)
      return { success: false, error: errorMessage }
    } finally {
      setLoading(false)
    }
  }

  const signOut = async () => {
    setLoading(true)
    setError(null)
    
    try {
      const { error } = await AuthService.signOut()
      
      if (error) {
        setError(error.message)
        return { success: false, error: error.message }
      }
      
      setUser(null)
      return { success: true }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Sign out failed'
      setError(errorMessage)
      return { success: false, error: errorMessage }
    } finally {
      setLoading(false)
    }
  }

  const updateProfile = async (updates: Partial<Profile>) => {
    if (!user) return { success: false, error: 'Not authenticated' }
    
    setLoading(true)
    setError(null)
    
    try {
      const { data, error } = await AuthService.updateProfile(user.id, updates)
      
      if (error) {
        setError(error.message)
        return { success: false, error: error.message }
      }
      
      setUser(prev => prev ? { ...prev, profile: data || undefined } : null)
      return { success: true }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Profile update failed'
      setError(errorMessage)
      return { success: false, error: errorMessage }
    } finally {
      setLoading(false)
    }
  }

  const updatePreferences = async (preferences: Record<string, any>) => {
    if (!user || !user.profile) return { success: false, error: 'No profile found' }
    
    setLoading(true)
    setError(null)
    
    try {
      const updatedPreferences = { ...user.profile.preferences, ...preferences }
      const { data, error } = await AuthService.updateProfile(user.id, { 
        preferences: updatedPreferences 
      })
      
      if (error) {
        setError(error.message)
        return { success: false, error: error.message }
      }
      
      setUser(prev => prev ? { 
        ...prev, 
        profile: data ? { ...data, preferences: updatedPreferences } : undefined 
      } : null)
      return { success: true }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Preferences update failed'
      setError(errorMessage)
      return { success: false, error: errorMessage }
    } finally {
      setLoading(false)
    }
  }

  const getPreference = (key: string, defaultValue: any = null) => {
    return user?.profile?.preferences?.[key] ?? defaultValue
  }

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
  }
}
