import { cn } from '@/lib/utils';

interface AdPlacementProps {
  position: 'sidebar-top' | 'sidebar-bottom' | 'banner';
  className?: string;
}

export function AdPlacement({ position, className }: AdPlacementProps) {
  const sizes = {
    'sidebar-top': 'w-full h-[250px]',
    'sidebar-bottom': 'w-full h-[250px]',
    'banner': 'w-full h-[90px]',
  };

  const labels = {
    'sidebar-top': '300×250 Ad',
    'sidebar-bottom': '300×250 Ad',
    'banner': '728×90 Leaderboard',
  };

  return (
    <div
      className={cn(
        'bg-background/50 border border-dashed border-gold/30 rounded-lg flex items-center justify-center',
        sizes[position],
        className
      )}
    >
      <div className="text-center">
        <p className="text-muted-foreground text-sm font-medium">
          {labels[position]}
        </p>
        <p className="text-muted-foreground/60 text-xs mt-1">
          Advertisement Space
        </p>
      </div>
    </div>
  );
}
