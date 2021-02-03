import NotatedMoves from "../models/NotatedMoves";

export const getNextBestMove = (
  notatedMoves: NotatedMoves
): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const validMoves = Object.keys(notatedMoves).map((key) => ({
        ...notatedMoves[key],
        key,
      }));
      resolve(validMoves[Math.floor(Math.random() * validMoves.length)].key);
    }, 3000);
  });
};
