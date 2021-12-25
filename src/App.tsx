import React, { useCallback, useState } from "react";
import GlobalStyle from "./styles/global";
import { ChessInstance, Move, Piece, Square } from "chess.js";
import ChessBoard from "./components/ChessBoard";
import { getNextBestMove } from "./services/getNextBestMove";
import SquareBox from "./components/Square";

const Chess = require("chess.js");
const chessClient: ChessInstance = Chess();

type PieceMap = Partial<Record<Square, Piece | null>>;

const getPieceMap = (chessInstance: ChessInstance) =>
  chessInstance.SQUARES.reduce<PieceMap>((acc, square) => {
    acc[square] = chessInstance.get(square);
    return acc;
  }, {});

export const GameStatusContext = React.createContext<{
  move: (to: Move) => void;
  selectedSquare: Square | null;
  selectSquare: (square: Square | null) => void;
  lastMove: Move | null;
  pieceMap: PieceMap | null;
  validMoves: Move[];
}>({
  move: () => true,
  selectedSquare: null,
  selectSquare: () => true,
  lastMove: null,
  validMoves: chessClient.moves({ verbose: true }),
  pieceMap: null,
});

const App: React.FC<{}> = () => {
  const [selectedSquare, setSelectedSquare] = useState<Square | null>(null);
  const [pieceMap, setPieceMap] = useState<PieceMap | null>(
    getPieceMap(chessClient)
  );
  const [validMoves, setValidMoves] = useState<Move[]>(
    chessClient.moves({ verbose: true })
  );
  const [lastMove, setLastMove] = useState<Move | null>(null);

  const recordHistory = useCallback(() => {
    const history = chessClient.history({ verbose: true });
    setLastMove(history[history.length - 1]);
  }, [setLastMove]);

  const makeAIMove = useCallback(async () => {
    const fen = chessClient.fen();
    const nextBestMove = await getNextBestMove(fen);
    chessClient.move(nextBestMove, { sloppy: true });
    setValidMoves(chessClient.moves({ verbose: true }));
    setPieceMap(getPieceMap(chessClient));
    recordHistory();
  }, [setValidMoves, setPieceMap, recordHistory]);

  const onPlayerMove = useCallback(
    (to: Move) => {
      chessClient.move(to);
      setSelectedSquare(null);
      setValidMoves(chessClient.moves({ verbose: true }));
      setPieceMap(getPieceMap(chessClient));
      recordHistory();
      makeAIMove();
    },
    [setSelectedSquare, makeAIMove, setValidMoves, setPieceMap, recordHistory]
  );

  return (
    <>
      <GlobalStyle />
      <div className="App">
        <div className="App-content">
          <GameStatusContext.Provider
            value={{
              pieceMap,
              validMoves,
              lastMove,
              move: onPlayerMove,
              selectedSquare,
              selectSquare: (square) => setSelectedSquare(square),
            }}
          >
            <ChessBoard>
              {chessClient.SQUARES.map((square) => (
                <SquareBox square={square} key={square} />
              ))}
            </ChessBoard>
          </GameStatusContext.Provider>
        </div>
      </div>
    </>
  );
};

export default App;
