import NotatedMoves from "../models/NotatedMoves";

export const getNextBestMove = (
  notatedMoves: NotatedMoves
): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        Object.keys(notatedMoves).map((key) => ({
          ...notatedMoves[key],
          key,
        }))[0].key
      );
    }, 800);
  });
};
