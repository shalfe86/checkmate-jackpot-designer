import { Square } from 'chess.js';
import { cn } from '@/lib/utils';

interface ChessBoardProps {
  fen: string;
  selectedSquare: Square | null;
  legalMoves: Square[];
  lastMove: { from: Square; to: Square } | null;
  onSquareClick: (square: Square) => void;
  isPlayerTurn: boolean;
  disabled?: boolean;
}

const PIECE_UNICODE: Record<string, string> = {
  wk: '♔',
  wq: '♕',
  wr: '♖',
  wb: '♗',
  wn: '♘',
  wp: '♙',
  bk: '♚',
  bq: '♛',
  br: '♜',
  bb: '♝',
  bn: '♞',
  bp: '♟',
};

const FILES = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const RANKS = ['8', '7', '6', '5', '4', '3', '2', '1'];

function parseFen(fen: string): Record<string, { type: string; color: string }> {
  const pieces: Record<string, { type: string; color: string }> = {};
  const rows = fen.split(' ')[0].split('/');

  for (let rankIdx = 0; rankIdx < 8; rankIdx++) {
    let fileIdx = 0;
    for (const char of rows[rankIdx]) {
      if (isNaN(parseInt(char))) {
        const color = char === char.toUpperCase() ? 'w' : 'b';
        const type = char.toLowerCase();
        const square = FILES[fileIdx] + RANKS[rankIdx];
        pieces[square] = { type, color };
        fileIdx++;
      } else {
        fileIdx += parseInt(char);
      }
    }
  }

  return pieces;
}

export function ChessBoard({
  fen,
  selectedSquare,
  legalMoves,
  lastMove,
  onSquareClick,
  isPlayerTurn,
  disabled,
}: ChessBoardProps) {
  const pieces = parseFen(fen);

  return (
    <div className="relative">
      {/* Board */}
      <div className="grid grid-cols-8 border-4 border-gold/50 rounded-lg overflow-hidden shadow-2xl">
        {RANKS.map((rank, rankIdx) =>
          FILES.map((file, fileIdx) => {
            const square = (file + rank) as Square;
            const isLight = (rankIdx + fileIdx) % 2 === 0;
            const piece = pieces[square];
            const isSelected = selectedSquare === square;
            const isLegalMove = legalMoves.includes(square);
            const isLastMoveSquare =
              lastMove && (lastMove.from === square || lastMove.to === square);
            const hasPiece = !!piece;

            return (
              <button
                key={square}
                onClick={() => onSquareClick(square)}
                disabled={disabled}
                className={cn(
                  'aspect-square flex items-center justify-center text-3xl sm:text-4xl md:text-5xl transition-all duration-150 relative',
                  isLight ? 'bg-amber-100' : 'bg-amber-800',
                  isSelected && 'ring-4 ring-inset ring-gold',
                  isLastMoveSquare && 'bg-gold/30',
                  isPlayerTurn && !disabled && hasPiece && piece.color === 'w' && 'cursor-pointer hover:brightness-110',
                  isPlayerTurn && !disabled && isLegalMove && 'cursor-pointer',
                  disabled && 'cursor-not-allowed'
                )}
              >
                {/* Legal move indicator */}
                {isLegalMove && !hasPiece && (
                  <div className="absolute w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-gold/50" />
                )}
                {isLegalMove && hasPiece && (
                  <div className="absolute inset-0 ring-4 ring-inset ring-gold/50 rounded-sm" />
                )}

                {/* Piece */}
                {piece && (
                  <span
                    className={cn(
                      'select-none drop-shadow-md',
                      piece.color === 'w' ? 'text-white' : 'text-gray-900',
                      piece.color === 'w' && '[text-shadow:_1px_1px_2px_rgb(0_0_0_/_50%)]',
                      piece.color === 'b' && '[text-shadow:_1px_1px_2px_rgb(255_255_255_/_30%)]'
                    )}
                  >
                    {PIECE_UNICODE[piece.color + piece.type]}
                  </span>
                )}

                {/* Coordinates */}
                {fileIdx === 0 && (
                  <span
                    className={cn(
                      'absolute top-0.5 left-1 text-xs font-bold',
                      isLight ? 'text-amber-800' : 'text-amber-100'
                    )}
                  >
                    {rank}
                  </span>
                )}
                {rankIdx === 7 && (
                  <span
                    className={cn(
                      'absolute bottom-0.5 right-1 text-xs font-bold',
                      isLight ? 'text-amber-800' : 'text-amber-100'
                    )}
                  >
                    {file}
                  </span>
                )}
              </button>
            );
          })
        )}
      </div>
    </div>
  );
}
