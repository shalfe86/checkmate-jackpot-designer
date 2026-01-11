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

  const handlePieceDrop = (sourceSquare: string, targetSquare: string): boolean => {
    return onPieceDrop(sourceSquare as ChessSquare, targetSquare as ChessSquare);
  };

  return (
    <div className="w-full rounded-lg overflow-hidden border-4 border-gold/50 shadow-2xl">
      <Chessboard
        id="chess-board"
        position={fen}
        onPieceDrop={handlePieceDrop}
        boardOrientation="white"
        arePiecesDraggable={isPlayerTurn && !disabled}
        customBoardStyle={{
          borderRadius: '0.5rem',
        }}
        customDarkSquareStyle={{
          backgroundColor: '#92400e',
        }}
        customLightSquareStyle={{
          backgroundColor: '#fef3c7',
        }}
        customSquareStyles={customSquareStyles}
        animationDuration={200}
      />
    </div>
  );
}
