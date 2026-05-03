export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          name: string | null
          company: string | null
          role: string | null
          avatar_url: string | null
          preferences: any | null
          created_at: string
          updated_at: string
        }
        Insert: Omit<Database['public']['Tables']['profiles']['Row'], 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Database['public']['Tables']['profiles']['Insert']>
      }
      workflows: {
        Row: {
          id: string
          user_id: string
          organization_id: string | null
          title: string
          description: string | null
          industry: string | null
          status: string
          input_data: any
          ai_response: any
          confidence: number | null
          source: string
          is_template: boolean
          template_category: string | null
          created_at: string
          updated_at: string
        }
        Insert: Omit<Database['public']['Tables']['workflows']['Row'], 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Database['public']['Tables']['workflows']['Insert']>
      }
      organizations: {
        Row: {
          id: string
          name: string
          slug: string
          owner_id: string
          settings: any | null
          created_at: string
          updated_at: string
        }
        Insert: Omit<Database['public']['Tables']['organizations']['Row'], 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Database['public']['Tables']['organizations']['Insert']>
      }
    }
  }
}

export type Profile = Database['public']['Tables']['profiles']['Row']
export type Workflow = Database['public']['Tables']['workflows']['Row']
export type Organization = Database['public']['Tables']['organizations']['Row']
