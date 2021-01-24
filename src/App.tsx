import React, { useState } from "react";
import GlobalStyle from "./styles/global";
// @ts-ignore
import chess from "chess";
import ChessBoard from "./components/ChessBoard";
import Piece from "./models/Piece";
import Square from "./models/Square";

// declare var chess: any;

const gameClient = chess.create();
// const status = gameClient.getStatus();

// console.log(JSON.stringify(status));
// @ts-ignore
// console.log(status);
// @ts-ignore
// console.log(status.board.squares);

export const GameStatusContext = React.createContext<{
  status: any;
  move: (to: string, from: string) => void;
  selectedSquare: Square | null;
  selectSquare: (square: Square | null) => void;
}>({
  status: gameClient.getStatus(),
  move: (to: string, from: string) => true,
  selectedSquare: null,
  selectSquare: (piece) => true,
});

function App() {
  const gameStatus = gameClient.getStatus();
  const [selectedSquare, setSelectedSquare] = useState<Square | null>(null);
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <div className="App-content">
          <GameStatusContext.Provider
            value={{
              status: gameStatus,
              move: (to: string, from: string) => false,
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
}

export default App;
