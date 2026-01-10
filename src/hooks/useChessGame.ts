import { useState, useCallback, useEffect, useRef } from 'react';
import { Chess, Square } from 'chess.js';
import { getBestMove } from '@/lib/chessAI';

interface UseChessGameOptions {
  startTime: number;
  maxTime: number;
  timeIncrement: number;
}

interface GameState {
  fen: string;
  turn: 'w' | 'b';
  isGameOver: boolean;
  isCheck: boolean;
  isCheckmate: boolean;
  isDraw: boolean;
  winner: 'player' | 'ai' | null;
  playerTime: number;
  aiThinking: boolean;
  moveHistory: string[];
  selectedSquare: Square | null;
  legalMoves: Square[];
  lastMove: { from: Square; to: Square } | null;
}

export function useChessGame(options: UseChessGameOptions) {
  const { startTime, maxTime, timeIncrement } = options;
  const gameRef = useRef(new Chess());
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const [gameState, setGameState] = useState<GameState>({
    fen: gameRef.current.fen(),
    turn: 'w',
    isGameOver: false,
    isCheck: false,
    isCheckmate: false,
    isDraw: false,
    winner: null,
    playerTime: startTime,
    aiThinking: false,
    moveHistory: [],
    selectedSquare: null,
    legalMoves: [],
    lastMove: null,
  });

  const [gameStarted, setGameStarted] = useState(false);
  const [timerStarted, setTimerStarted] = useState(false);

  const updateGameState = useCallback(() => {
    const game = gameRef.current;
    setGameState((prev) => ({
      ...prev,
      fen: game.fen(),
      turn: game.turn(),
      isGameOver: game.isGameOver(),
      isCheck: game.isCheck(),
      isCheckmate: game.isCheckmate(),
      isDraw: game.isDraw(),
      winner: game.isCheckmate()
        ? game.turn() === 'w'
          ? 'ai'
          : 'player'
        : null,
      moveHistory: game.history(),
    }));
  }, []);

  // Timer logic - only runs after first move
  useEffect(() => {
    if (!timerStarted || gameState.isGameOver || gameState.turn !== 'w') {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
      return;
    }

    timerRef.current = setInterval(() => {
      setGameState((prev) => {
        const newTime = prev.playerTime - 1;
        if (newTime <= 0) {
          // Player ran out of time
          return {
            ...prev,
            playerTime: 0,
            isGameOver: true,
            winner: 'ai',
          };
        }
        return { ...prev, playerTime: newTime };
      });
    }, 1000);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [timerStarted, gameState.isGameOver, gameState.turn]);

  // AI move logic - only runs after player has made first move
  useEffect(() => {
    const game = gameRef.current;
    const isBlackTurn = game.turn() === 'b';

    if (!timerStarted || gameState.isGameOver || !isBlackTurn || gameState.aiThinking) {
      return;
    }

    // IMPORTANT: do not include `gameState.aiThinking` in the dependency array.
    // If we do, setting aiThinking=true would immediately re-run the effect and clear the timeout,
    // causing the AI to get stuck thinking forever.
    setGameState((prev) => (prev.aiThinking ? prev : { ...prev, aiThinking: true }));

    // Add slight delay for natural feel
    const timeout = setTimeout(() => {
      const bestMove = getBestMove(game, 2); // Look 2 moves ahead

      if (bestMove) {
        const move = game.move(bestMove);
        if (move) {
          setGameState((prev) => ({
            ...prev,
            aiThinking: false,
            lastMove: { from: move.from as Square, to: move.to as Square },
          }));
          updateGameState();
          return;
        }
      }

      // Fallback: stop thinking even if no move was made
      setGameState((prev) => ({ ...prev, aiThinking: false }));
    }, 500 + Math.random() * 500); // 500-1000ms delay

    return () => clearTimeout(timeout);
  }, [timerStarted, gameState.fen, gameState.isGameOver, updateGameState]);

  const selectSquare = useCallback(
    (square: Square) => {
      if (gameState.isGameOver || gameState.turn !== 'w' || gameState.aiThinking) {
        return;
      }

      const game = gameRef.current;
      const piece = game.get(square);

      // If clicking on own piece, select it
      if (piece && piece.color === 'w') {
        const moves = game.moves({ square, verbose: true });
        setGameState((prev) => ({
          ...prev,
          selectedSquare: square,
          legalMoves: moves.map((m) => m.to as Square),
        }));
        return;
      }

      // If a piece is selected and clicking on a legal move, make the move
      if (gameState.selectedSquare && gameState.legalMoves.includes(square)) {
        const move = game.move({
          from: gameState.selectedSquare,
          to: square,
          promotion: 'q', // Auto-promote to queen
        });

        if (move) {
          // Start timer on first move
          if (!timerStarted) {
            setTimerStarted(true);
          }
          
          // Add time increment (only after first move when timer is running)
          const newTime = timerStarted 
            ? Math.min(gameState.playerTime + timeIncrement, maxTime)
            : gameState.playerTime;
            
          setGameState((prev) => ({
            ...prev,
            selectedSquare: null,
            legalMoves: [],
            playerTime: newTime,
            lastMove: { from: move.from as Square, to: move.to as Square },
          }));
          updateGameState();
        }
      } else {
        // Clear selection
        setGameState((prev) => ({
          ...prev,
          selectedSquare: null,
          legalMoves: [],
        }));
      }
    },
    [gameState, maxTime, timeIncrement, timerStarted, updateGameState]
  );

  const startGame = useCallback(() => {
    gameRef.current = new Chess();
    setTimerStarted(false);
    setGameState({
      fen: gameRef.current.fen(),
      turn: 'w',
      isGameOver: false,
      isCheck: false,
      isCheckmate: false,
      isDraw: false,
      winner: null,
      playerTime: startTime,
      aiThinking: false,
      moveHistory: [],
      selectedSquare: null,
      legalMoves: [],
      lastMove: null,
    });
    setGameStarted(true);
  }, [startTime]);

  const resetGame = useCallback(() => {
    setGameStarted(false);
    setTimerStarted(false);
    gameRef.current = new Chess();
    setGameState({
      fen: gameRef.current.fen(),
      turn: 'w',
      isGameOver: false,
      isCheck: false,
      isCheckmate: false,
      isDraw: false,
      winner: null,
      playerTime: startTime,
      aiThinking: false,
      moveHistory: [],
      selectedSquare: null,
      legalMoves: [],
      lastMove: null,
    });
  }, [startTime]);

  return {
    gameState,
    gameStarted,
    selectSquare,
    startGame,
    resetGame,
  };
}
