import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Wallet } from '@/types/database';

interface UseWalletResult {
  wallet: Wallet | null;
  loading: boolean;
  error: Error | null;
  refetch: () => Promise<void>;
}

export const useWallet = (userId: string | undefined): UseWalletResult => {
  const [wallet, setWallet] = useState<Wallet | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchWallet = useCallback(async () => {
    if (!userId) {
      setWallet(null);
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      // Using 'any' to bypass type checking for external Supabase tables
      const { data, error: fetchError } = await (supabase as any)
        .from('wallets')
        .select('*')
        .eq('user_id', userId)
        .single();

      if (fetchError) {
        throw fetchError;
      }

      setWallet(data as Wallet);
      setError(null);
    } catch (err) {
      setError(err as Error);
      setWallet(null);
    } finally {
      setLoading(false);
    }
  }, [userId]);

  useEffect(() => {
    fetchWallet();
  }, [fetchWallet]);

  // Set up realtime subscription for wallet updates
  useEffect(() => {
    if (!userId) return;

    const channel = supabase
      .channel(`wallet-${userId}`)
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'wallets',
          filter: `user_id=eq.${userId}`,
        },
        (payload) => {
          if (payload.new) {
            setWallet(payload.new as Wallet);
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [userId]);

  return {
    wallet,
    loading,
    error,
    refetch: fetchWallet,
  };
};
