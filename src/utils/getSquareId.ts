import Square from "../models/Square";

export const getSquareId = (square: Square | null): string => {
  return `${square?.file}${square?.rank}`;
};
