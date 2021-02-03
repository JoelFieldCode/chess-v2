import { useContext } from "react";
import { GameStatusContext } from "../App";
import Square from "../models/Square";
import { getSquareId } from "../utils/getSquareId";

export const useGameState = (
  square: Square
): {
  squareIsSelected: boolean;
  squareEnabled: boolean;
  onSelectSquare: () => void;
  isPrevSquare: boolean;
  isCurrentMovedSquare: boolean;
} => {
  const { status, selectedSquare, selectSquare, move, lastMove } = useContext(
    GameStatusContext
  );
  const validMoves = Object.keys(status.notatedMoves).map((key) => ({
    ...status.notatedMoves[key],
    key,
  }));
  const currentSquareId = getSquareId(square);
  const squareIsSelected = getSquareId(selectedSquare) === currentSquareId;
  const possibleSelection = validMoves.find((validMove) => {
    return (
      getSquareId(validMove.src) === currentSquareId &&
      validMove.src.piece?.side.name !== "white"
    );
  });
  const availableMove = validMoves.find((validMove) => {
    return (
      getSquareId(validMove.dest) === currentSquareId &&
      getSquareId(validMove.src) === getSquareId(selectedSquare)
    );
  });
  const squareEnabled =
    getSquareId(selectedSquare) === currentSquareId
      ? true
      : !selectedSquare
      ? !!possibleSelection
      : !!availableMove;

  return {
    squareIsSelected,
    squareEnabled,
    isPrevSquare:
      `${lastMove?.prevFile}${lastMove?.prevRank}` === currentSquareId,
    isCurrentMovedSquare:
      `${lastMove?.postFile}${lastMove?.postRank}` === currentSquareId,
    onSelectSquare: () => {
      if (getSquareId(selectedSquare) === currentSquareId) {
        selectSquare(null);
      } else if (!selectedSquare) {
        selectSquare(square);
      } else if (availableMove) {
        move(availableMove.key);
      } else {
        // TODO
      }
    },
  };
};
