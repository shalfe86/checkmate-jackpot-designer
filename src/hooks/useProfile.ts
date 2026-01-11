import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Profile } from '@/types/database';

interface UseProfileResult {
  profile: Profile | null;
  loading: boolean;
  error: Error | null;
  updateProfile: (updates: Partial<Profile>) => Promise<{ error: Error | null }>;
  refetch: () => Promise<void>;
}

export const useProfile = (userId: string | undefined): UseProfileResult => {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchProfile = useCallback(async () => {
    if (!userId) {
      setProfile(null);
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      // Using 'any' to bypass type checking for external Supabase tables
      const { data, error: fetchError } = await (supabase as any)
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single();

      if (fetchError) {
        throw fetchError;
      }

      setProfile(data as Profile);
      setError(null);
    } catch (err) {
      setError(err as Error);
      setProfile(null);
    } finally {
      setLoading(false);
    }
  }, [userId]);

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  const updateProfile = async (updates: Partial<Profile>): Promise<{ error: Error | null }> => {
    if (!userId) {
      return { error: new Error('No user ID provided') };
    }

    try {
      // Using 'any' to bypass type checking for external Supabase tables
      const { error: updateError } = await (supabase as any)
        .from('profiles')
        .update({ ...updates, updated_at: new Date().toISOString() })
        .eq('id', userId);

      if (updateError) {
        throw updateError;
      }

      await fetchProfile();
      return { error: null };
    } catch (err) {
      return { error: err as Error };
    }
  };

  return {
    profile,
    loading,
    error,
    updateProfile,
    refetch: fetchProfile,
  };
};
