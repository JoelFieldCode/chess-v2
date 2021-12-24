export const getNextBestMove = (fen: string): Promise<string> => {
  return new Promise(async (resolve) => {
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

    return resolve(prediction.bestmove);
  });
};
