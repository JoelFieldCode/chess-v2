import { Square } from "chess.js";
import { useCallback, useContext } from "react";
import { GameStatusContext } from "../App";
import { getPieceImage } from "../services/getPieceImage";

export const useGameState = (
  square: Square
): {
  squareIsSelected: boolean;
  squareEnabled: boolean;
  onSelectSquare: () => void;
  isPrevSquare: boolean;
  isCurrentMovedSquare: boolean;
  pieceImage?: string | null;
} => {
  const { selectedSquare, selectSquare, move, lastMove, pieceMap, validMoves } =
    useContext(GameStatusContext);

  const piece = pieceMap?.[square];
  const pieceImage = piece && getPieceImage(piece);
  const squareIsSelected = selectedSquare === square;
  const possibleSelection = validMoves.find((validMove) => {
    return validMove.from === square && validMove.color === "w";
  });
  const availableMove = validMoves.find((validMove) => {
    return validMove.to === square && validMove.from === selectedSquare;
  });
  const squareEnabled =
    square === selectedSquare
      ? true
      : !selectedSquare
      ? !!possibleSelection
      : !!availableMove;

  const onSelectSquare = useCallback(() => {
    if (selectedSquare === square) {
      selectSquare(null);
    } else if (!selectedSquare) {
      selectSquare(square);
    } else if (availableMove) {
      move(availableMove);
    } else {
      // TODO
    }
  }, [selectedSquare, square, availableMove, selectSquare, move]);

  return {
    squareIsSelected,
    squareEnabled,
    isPrevSquare: lastMove?.from === square,
    isCurrentMovedSquare: lastMove?.to === square,
    pieceImage,
    onSelectSquare,
  };
};
