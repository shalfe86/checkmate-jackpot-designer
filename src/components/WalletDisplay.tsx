import { Wallet } from 'lucide-react';
import { cn } from '@/lib/utils';

interface WalletDisplayProps {
  balance: number;
  currency?: string;
  className?: string;
}

const WalletDisplay = ({ balance, currency = 'USD', className }: WalletDisplayProps) => {
  const formattedBalance = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(balance);

  return (
    <div
      className={cn(
        'flex items-center gap-2 px-3 py-1.5 rounded-lg bg-secondary/50 border border-border',
        className
      )}
    >
      <Wallet className="w-4 h-4 text-primary" />
      <span className="text-sm font-medium text-foreground">{formattedBalance}</span>
    </div>
  );
};

export default WalletDisplay;
