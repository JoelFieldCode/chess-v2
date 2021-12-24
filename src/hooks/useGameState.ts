import { Square } from "chess.js";
import { useContext } from "react";
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

  return {
    squareIsSelected,
    squareEnabled,
    isPrevSquare: false,
    isCurrentMovedSquare: false,
    // isPrevSquare:
    //   `${lastMove?.prevFile}${lastMove?.prevRank}` === currentSquareId,
    // isCurrentMovedSquare:
    //   `${lastMove?.postFile}${lastMove?.postRank}` === currentSquareId,
    pieceImage,
    onSelectSquare: () => {
      if (selectedSquare === square) {
        selectSquare(null);
      } else if (!selectedSquare) {
        selectSquare(square);
      } else if (availableMove) {
        move(availableMove);
      } else {
        // TODO
      }
    },
  };
};
