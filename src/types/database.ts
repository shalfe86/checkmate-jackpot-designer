// Database types matching external Supabase schema

export type UserRole = 'admin' | 'moderator' | 'user';

export type GameStatus = 'waiting' | 'active' | 'completed' | 'cancelled';

export type LedgerEntryType = 'deposit' | 'withdrawal' | 'wager' | 'payout' | 'refund';

export type LedgerStatus = 'pending' | 'completed' | 'failed';

export interface Profile {
  id: string;
  username: string | null;
  country_code: string | null;
  avatar_url: string | null;
  created_at: string;
  updated_at: string;
}

export interface Wallet {
  user_id: string;
  balance: number;
  currency: string;
  updated_at: string;
}

export interface LedgerEntry {
  id: string;
  user_id: string;
  amount: number;
  entry_type: LedgerEntryType;
  status: LedgerStatus;
  reference_id: string | null;
  created_at: string;
}

export interface Game {
  id: string;
  white_player_id: string | null;
  black_player_id: string | null;
  status: GameStatus;
  fen: string | null;
  pgn: string | null;
  winner_id: string | null;
  wager_amount: number;
  is_server_game: boolean;
  created_at: string;
  updated_at: string;
}

export interface UserRoleRecord {
  id: string;
  user_id: string;
  role: UserRole;
}

export interface CountryAllowlist {
  country_code: string;
  is_enabled: boolean;
  created_at: string;
}
