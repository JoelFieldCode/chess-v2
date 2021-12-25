import { ChessInstance } from "chess.js";
const Chess = require("chess.js");

export const getNextBestMove = async (fen: string): Promise<string> => {
  try {
    const res = await fetch("http://localhost:3001/bestMove", {
      method: "POST",
      body: JSON.stringify({
        fen,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const prediction = await res
      .json()
      .then((payload: { bestmove: string; ponder?: string }) => payload);

    return prediction.bestmove;
  } catch {
    return new Promise((resolve) => {
      setTimeout(() => {
        // do a random valid move
        const chessClient: ChessInstance = Chess(fen);
        const moves = chessClient.moves();
        const move = moves[Math.floor(Math.random() * moves.length)];
        return resolve(move);
      }, 800);
    });
  }
};
