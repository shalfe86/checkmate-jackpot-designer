import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft, RotateCcw, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ChessBoard } from '@/components/ChessBoard';
import { GameInfo } from '@/components/GameInfo';
import { AdPlacement } from '@/components/AdPlacement';
import { useChessGame } from '@/hooks/useChessGame';

// Street Hustle tier settings
const GAME_CONFIG = {
  startTime: 40,
  maxTime: 50,
  timeIncrement: 2,
};

const PlayFree = () => {
  const { gameState, gameStarted, selectSquare, startGame, resetGame } = useChessGame(GAME_CONFIG);

  return (
    <>
      <Helmet>
        <title>Street Hustle - Free Chess | Checkmate Jackpot</title>
        <meta
          name="description"
          content="Play free chess against our AI. Perfect for practicing your skills before entering the paid tournaments."
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="border-b border-gold/20 bg-card/50 backdrop-blur-sm sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link to="/" className="flex items-center gap-2 text-gold hover:text-gold-light transition-colors">
                <ArrowLeft className="w-5 h-5" />
                <span className="font-semibold">Back to Home</span>
              </Link>
              <div className="text-center">
                <h1 className="text-xl font-bold text-gold">Street Hustle</h1>
                <p className="text-xs text-muted-foreground">Free Tier • Practice Mode</p>
              </div>
              <div className="w-24" /> {/* Spacer for centering */}
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-6">
          {/* Top Banner Ad */}
          <AdPlacement position="banner" className="mb-6 max-w-3xl mx-auto" />

          <div className="grid lg:grid-cols-[300px_1fr_300px] gap-6 max-w-7xl mx-auto">
            {/* Left Sidebar - Ad */}
            <aside className="hidden lg:block space-y-4">
              <AdPlacement position="sidebar-top" />
              
              {/* Quick Tips */}
              <div className="bg-card border border-gold/20 rounded-xl p-4">
                <h3 className="font-semibold text-gold mb-3">Quick Tips</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Control the center early</li>
                  <li>• Develop your pieces quickly</li>
                  <li>• Castle to protect your king</li>
                  <li>• Think before you move!</li>
                </ul>
              </div>
            </aside>

            {/* Center - Chess Board */}
            <div className="flex flex-col items-center">
              {!gameStarted ? (
                <div className="w-full max-w-[500px] aspect-square bg-card border border-gold/20 rounded-xl flex flex-col items-center justify-center gap-6 p-8">
                  <div className="text-center">
                    <h2 className="text-2xl font-bold text-gold mb-2">Ready to Play?</h2>
                    <p className="text-muted-foreground">
                      Challenge our beginner AI and test your skills!
                    </p>
                  </div>
                  
                  <div className="space-y-2 text-center text-sm text-muted-foreground">
                    <p>⏱️ 40 seconds to start, 50 max</p>
                    <p>⚡ +2 seconds per move</p>
                    <p>🎯 AI looks 2 moves ahead</p>
                  </div>

                  <Button onClick={startGame} size="lg" className="gap-2">
                    <Play className="w-5 h-5" />
                    Start Game
                  </Button>
                </div>
              ) : (
                <>
                  <div className="w-full max-w-[500px]">
                    <ChessBoard
                      fen={gameState.fen}
                      selectedSquare={gameState.selectedSquare}
                      legalMoves={gameState.legalMoves}
                      lastMove={gameState.lastMove}
                      onSquareClick={selectSquare}
                      isPlayerTurn={gameState.turn === 'w'}
                      disabled={gameState.isGameOver || gameState.aiThinking}
                    />
                  </div>

                  {/* Mobile Game Info */}
                  <div className="lg:hidden w-full max-w-[500px] mt-4">
                    <GameInfo
                      playerTime={gameState.playerTime}
                      turn={gameState.turn}
                      aiThinking={gameState.aiThinking}
                      moveHistory={gameState.moveHistory}
                      isGameOver={gameState.isGameOver}
                      winner={gameState.winner}
                      isCheck={gameState.isCheck}
                    />
                  </div>

                  {/* Game Over Actions */}
                  {gameState.isGameOver && (
                    <div className="mt-6 flex gap-4">
                      <Button onClick={resetGame} variant="outline" className="gap-2">
                        <RotateCcw className="w-4 h-4" />
                        Play Again
                      </Button>
                      <Link to="/">
                        <Button variant="secondary">Back to Home</Button>
                      </Link>
                    </div>
                  )}

                  {!gameState.isGameOver && (
                    <Button
                      onClick={resetGame}
                      variant="ghost"
                      size="sm"
                      className="mt-4 text-muted-foreground"
                    >
                      <RotateCcw className="w-4 h-4 mr-2" />
                      Restart Game
                    </Button>
                  )}
                </>
              )}
            </div>

            {/* Right Sidebar - Game Info & Ad */}
            <aside className="hidden lg:block space-y-4">
              {gameStarted && (
                <GameInfo
                  playerTime={gameState.playerTime}
                  turn={gameState.turn}
                  aiThinking={gameState.aiThinking}
                  moveHistory={gameState.moveHistory}
                  isGameOver={gameState.isGameOver}
                  winner={gameState.winner}
                  isCheck={gameState.isCheck}
                />
              )}
              <AdPlacement position="sidebar-bottom" />
            </aside>
          </div>
        </main>
      </div>
    </>
  );
};

export default PlayFree;
