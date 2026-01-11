import { Chessboard } from 'react-chessboard';
import type { Square as ChessSquare } from 'chess.js';

interface ChessBoardProps {
  fen: string;
  lastMove: { from: ChessSquare; to: ChessSquare } | null;
  onPieceDrop: (sourceSquare: ChessSquare, targetSquare: ChessSquare) => boolean;
  isPlayerTurn: boolean;
  disabled?: boolean;
}

export function ChessBoard({
  fen,
  lastMove,
  onPieceDrop,
  isPlayerTurn,
  disabled,
}: ChessBoardProps) {
  // Custom square styles for last move highlight
  const customSquareStyles: Record<string, React.CSSProperties> = {};
  
  if (lastMove) {
    customSquareStyles[lastMove.from] = {
      backgroundColor: 'rgba(255, 193, 7, 0.4)',
    };
    customSquareStyles[lastMove.to] = {
      backgroundColor: 'rgba(255, 193, 7, 0.4)',
    };
  }

  return (
    <div className="w-full rounded-lg overflow-hidden border-4 border-gold/50 shadow-2xl">
      <Chessboard
        options={{
          id: 'chess-board',
          position: fen,
          onPieceDrop: ({ sourceSquare, targetSquare }) => 
            onPieceDrop(sourceSquare as ChessSquare, targetSquare as ChessSquare),
          boardOrientation: 'white',
          allowDragging: isPlayerTurn && !disabled,
          boardStyle: {
            borderRadius: '0.5rem',
          },
          darkSquareStyle: {
            backgroundColor: '#92400e', // amber-800
          },
          lightSquareStyle: {
            backgroundColor: '#fef3c7', // amber-100
          },
          squareStyles: customSquareStyles,
          animationDurationInMs: 200,
          showNotation: true,
        }}
      />
    </div>
  );
}
