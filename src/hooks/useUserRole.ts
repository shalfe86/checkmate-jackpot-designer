import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { UserRole, UserRoleRecord } from '@/types/database';

interface UseUserRoleResult {
  roles: UserRole[];
  loading: boolean;
  error: Error | null;
  hasRole: (role: UserRole) => boolean;
  isAdmin: boolean;
  isModerator: boolean;
  refetch: () => Promise<void>;
}

export const useUserRole = (userId: string | undefined): UseUserRoleResult => {
  const [roles, setRoles] = useState<UserRole[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchRoles = useCallback(async () => {
    if (!userId) {
      setRoles([]);
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      // Using 'any' to bypass type checking for external Supabase tables
      const { data, error: fetchError } = await (supabase as any)
        .from('user_roles')
        .select('*')
        .eq('user_id', userId);

      if (fetchError) {
        throw fetchError;
      }

      const userRoles = (data as UserRoleRecord[]).map((record) => record.role);
      setRoles(userRoles);
      setError(null);
    } catch (err) {
      setError(err as Error);
      setRoles([]);
    } finally {
      setLoading(false);
    }
  }, [userId]);

  useEffect(() => {
    fetchRoles();
  }, [fetchRoles]);

  const hasRole = (role: UserRole): boolean => {
    return roles.includes(role);
  };

  return {
    roles,
    loading,
    error,
    hasRole,
    isAdmin: roles.includes('admin'),
    isModerator: roles.includes('moderator'),
    refetch: fetchRoles,
  };
};
