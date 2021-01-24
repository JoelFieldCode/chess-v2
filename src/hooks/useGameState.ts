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
  const possibleMoves = validMoves
    .find((validMove: any) => {
      return getSquareId(validMove.src) === getSquareId(selectedSquare);
    })
    ?.squares.map((possibleMoveSquare: Square) =>
      getSquareId(possibleMoveSquare)
    );
  const squareIsSelected = getSquareId(selectedSquare) === getSquareId(square);
  const squareEnabled = !selectedSquare
    ? possibleSelection
    : possibleMoves.includes(squareId);

  return {
    squareIsSelected,
    squareEnabled,
  };
};
