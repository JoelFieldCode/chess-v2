import { useContext } from "react";
import { GameStatusContext } from "../App";
import Square from "../models/Square";
import { getSquareId } from "../utils/getSquareId";

export const useGameState = (
  square: Square
): {
  squareIsSelected: boolean;
  squareEnabled: boolean;
} => {
  const { status, validMoves, selectedSquare } = useContext(GameStatusContext);
  const squareId = getSquareId(square);
  const possibleSelection = validMoves.find((validMove: any) => {
    return getSquareId(validMove.src) === squareId;
  });
  const squareIsSelected = getSquareId(selectedSquare) === getSquareId(square);
  const possibleMove = status.notatedMoves[squareId];
  const squareEnabled = !selectedSquare
    ? possibleSelection
    : getSquareId(possibleMove?.dest) === squareId &&
      getSquareId(selectedSquare) === getSquareId(possibleMove.src);

  return {
    squareIsSelected,
    squareEnabled,
  };
};
