import React, { useCallback, useEffect, useState } from "react";
import GlobalStyle from "./styles/global";
// @ts-ignore
import chess from "chess";
import ChessBoard from "./components/ChessBoard";
import Square from "./models/Square";
import NotatedMoves from "./models/NotatedMoves";
import { getNextBestMove } from "./services/getNextBestMove";

const gameClient = chess.create({ PGN: true });

interface Status {
  board: {
    squares: Square[];
  };
  notatedMoves: NotatedMoves;
}

export const GameStatusContext = React.createContext<{
  status: Status;
  move: (to: string) => void;
  selectedSquare: Square | null;
  selectSquare: (square: Square | null) => void;
}>({
  status: gameClient.getStatus(),
  move: () => true,
  selectedSquare: null,
  selectSquare: () => true,
});

const App: React.FC<{}> = () => {
  const [selectedSquare, setSelectedSquare] = useState<Square | null>(null);
  const [gameMeta, setGameMeta] = useState<{
    status: Status;
  }>({ status: gameClient.getStatus() });

  const makeAIMove = useCallback(async (notatedMoves) => {
    const nextBestMove = await getNextBestMove(notatedMoves);
    gameClient.move(nextBestMove);
    setGameMeta({
      status: gameClient.getStatus(),
    });
    setSelectedSquare(null);
  }, []);

  useEffect(() => {
    makeAIMove(gameMeta.status.notatedMoves);
  }, [makeAIMove]);

  return (
    <>
      <GlobalStyle />
      <div className="App">
        <div className="App-content">
          <GameStatusContext.Provider
            value={{
              status: gameMeta.status,
              move: (to: string) => {
                gameClient.move(to);
                const status = gameClient.getStatus();
                setGameMeta({
                  status,
                });
                setSelectedSquare(null);
                makeAIMove(status.notatedMoves);
              },
              selectedSquare,
              selectSquare: (square) => setSelectedSquare(square),
            }}
          >
            <ChessBoard />
          </GameStatusContext.Provider>
        </div>
      </div>
    </>
  );
};

export default App;
