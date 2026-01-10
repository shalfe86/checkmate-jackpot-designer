import { Clock, Zap, Brain, Trophy } from 'lucide-react';
import { cn } from '@/lib/utils';

interface GameInfoProps {
  playerTime: number;
  turn: 'w' | 'b';
  aiThinking: boolean;
  moveHistory: string[];
  isGameOver: boolean;
  winner: 'player' | 'ai' | null;
  isCheck: boolean;
}

function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

export function GameInfo({
  playerTime,
  turn,
  aiThinking,
  moveHistory,
  isGameOver,
  winner,
  isCheck,
}: GameInfoProps) {
  const isLowTime = playerTime <= 10;

  return (
    <div className="space-y-4">
      {/* Timer */}
      <div className="bg-card border border-gold/20 rounded-xl p-4">
        <div className="flex items-center gap-2 mb-3">
          <Clock className="w-5 h-5 text-gold" />
          <span className="font-semibold text-gold">Your Time</span>
        </div>
        <div
          className={cn(
            'text-4xl font-mono font-bold text-center py-3 rounded-lg',
            isLowTime ? 'bg-destructive/20 text-destructive animate-pulse' : 'bg-gold/10 text-gold'
          )}
        >
          {formatTime(playerTime)}
        </div>
        <p className="text-xs text-muted-foreground text-center mt-2">
          +2 seconds per move • 50 sec max
        </p>
      </div>

      {/* Game Status */}
      <div className="bg-card border border-gold/20 rounded-xl p-4">
        <div className="flex items-center gap-2 mb-3">
          <Zap className="w-5 h-5 text-gold" />
          <span className="font-semibold text-gold">Game Status</span>
        </div>

        {isGameOver ? (
          <div className="text-center py-3">
            <Trophy
              className={cn(
                'w-8 h-8 mx-auto mb-2',
                winner === 'player' ? 'text-gold' : 'text-muted-foreground'
              )}
            />
            <p
              className={cn(
                'font-bold text-lg',
                winner === 'player' ? 'text-gold' : 'text-destructive'
              )}
            >
              {winner === 'player' ? 'You Win!' : 'AI Wins!'}
            </p>
          </div>
        ) : (
          <div className="space-y-2">
            <div className="flex items-center justify-between p-2 rounded-lg bg-background/50">
              <span className="text-sm">Turn</span>
              <span className={cn('font-semibold', turn === 'w' ? 'text-gold' : 'text-muted-foreground')}>
                {turn === 'w' ? 'Your Move' : 'AI Thinking...'}
              </span>
            </div>

            {isCheck && (
              <div className="p-2 rounded-lg bg-destructive/20 text-destructive text-center font-semibold text-sm">
                ⚠️ CHECK!
              </div>
            )}

            {aiThinking && (
              <div className="flex items-center justify-center gap-2 p-2 rounded-lg bg-gold/10">
                <Brain className="w-4 h-4 text-gold animate-pulse" />
                <span className="text-sm text-gold">AI is thinking...</span>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Move History */}
      <div className="bg-card border border-gold/20 rounded-xl p-4">
        <div className="flex items-center gap-2 mb-3">
          <span className="font-semibold text-gold">Move History</span>
        </div>
        <div className="h-32 overflow-y-auto bg-background/50 rounded-lg p-2">
          {moveHistory.length === 0 ? (
            <p className="text-muted-foreground text-sm text-center py-4">
              No moves yet
            </p>
          ) : (
            <div className="grid grid-cols-2 gap-1 text-sm">
              {moveHistory.map((move, idx) => (
                <span
                  key={idx}
                  className={cn(
                    'px-2 py-1 rounded',
                    idx % 2 === 0 ? 'bg-gold/10 text-gold' : 'bg-muted text-muted-foreground'
                  )}
                >
                  {Math.floor(idx / 2) + 1}.{idx % 2 === 0 ? '' : '..'} {move}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
