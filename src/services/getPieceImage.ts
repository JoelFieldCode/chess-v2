import Piece from "../models/Piece";

export const getPieceImage = (piece: Piece): string => {
  switch (piece.type) {
    case "bishop":
      return piece.side.name === "white"
        ? "https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_bdt45.svg"
        : "https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg";
    case "pawn":
      return piece.side.name === "white"
        ? "https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg"
        : "https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg";
    case "rook":
      return piece.side.name === "white"
        ? "https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg"
        : "https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rlt45.svg";
    case "queen":
      return piece.side.name === "white"
        ? "https://upload.wikimedia.org/wikipedia/commons/4/47/Chess_qdt45.svg"
        : "https://upload.wikimedia.org/wikipedia/commons/1/15/Chess_qlt45.svg";
    case "king":
      return piece.side.name === "white"
        ? "https://upload.wikimedia.org/wikipedia/commons/f/f0/Chess_kdt45.svg"
        : "https://upload.wikimedia.org/wikipedia/commons/f/f0/Chess_kdt45.svg";
    case "knight":
      return piece.side.name === "white"
        ? "https://upload.wikimedia.org/wikipedia/commons/e/ef/Chess_ndt45.svg"
        : "https://upload.wikimedia.org/wikipedia/commons/7/70/Chess_nlt45.svg";
    default:
      return "";
  }
};

/*
    import { Square } from "../models/Square";

const generatedSquares: Square[] = [
  {
    type: "ROOK",
    player_id: 1,
    square_id: 21,
    url: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg",
  },
  {
    type: "KNIGHT",
    url: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Chess_ndt45.svg",
    player_id: 1,
    square_id: 22,
  },
  {
    type: "BISHOP",
    url: "https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_bdt45.svg",
    player_id: 1,
    square_id: 23,
  },
  {
    type: "QUEEN",
    square_id: 24,
    url: "https://upload.wikimedia.org/wikipedia/commons/4/47/Chess_qdt45.svg",
    player_id: 1,
  },
  {
    type: "KING",
    url: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Chess_kdt45.svg",
    player_id: 1,
    square_id: 25,
  },
  {
    type: "BISHOP",
    url: "https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_bdt45.svg",
    player_id: 1,
    square_id: 26,
  },
  {
    type: "KNIGHT",
    url: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Chess_ndt45.svg",
    player_id: 1,
    square_id: 27,
  },
  {
    type: "ROOK",
    player_id: 1,
    square_id: 28,
    url: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg",
  },
  {
    type: "PAWN",
    player_id: 1,
    square_id: 31,
    url: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg",
  },
  {
    type: "PAWN",
    player_id: 1,
    square_id: 32,
    url: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg",
  },
  {
    type: "PAWN",
    player_id: 1,
    square_id: 33,
    url: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg",
  },
  {
    type: "PAWN",
    player_id: 1,
    square_id: 34,
    url: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg",
  },
  {
    type: "PAWN",
    player_id: 1,
    square_id: 35,
    url: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg",
  },
  {
    type: "PAWN",
    player_id: 1,
    square_id: 36,
    url: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg",
  },
  {
    type: "PAWN",
    player_id: 1,
    square_id: 37,
    url: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg",
  },
  {
    type: "PAWN",
    player_id: 1,
    square_id: 38,
    url: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg",
  },

  // PLAYER 2
  {
    type: "ROOK",
    player_id: 2,
    square_id: 91,
    url: "https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rlt45.svg",
  },
  {
    type: "KNIGHT",
    url: "https://upload.wikimedia.org/wikipedia/commons/7/70/Chess_nlt45.svg",
    player_id: 2,
    square_id: 92,
  },
  {
    type: "BISHOP",
    url: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg",
    player_id: 2,
    square_id: 93,
  },
  {
    type: "QUEEN",
    url: "https://upload.wikimedia.org/wikipedia/commons/1/15/Chess_qlt45.svg",
    player_id: 2,
    square_id: 94,
  },
  {
    type: "KING",
    url: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Chess_kdt45.svg",
    player_id: 2,
    square_id: 95,
  },
  {
    type: "BISHOP",
    url: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg",
    player_id: 2,
    square_id: 96,
  },
  {
    type: "KNIGHT",
    url: "https://upload.wikimedia.org/wikipedia/commons/7/70/Chess_nlt45.svg",
    player_id: 2,
    square_id: 97,
  },
  {
    type: "ROOK",
    url: "https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rlt45.svg",
    player_id: 2,
    square_id: 98,
  },
  {
    type: "PAWN",
    square_id: 81,
    player_id: 2,
    url: "https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg",
  },
  {
    type: "PAWN",
    player_id: 2,
    square_id: 82,
    url: "https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg",
  },
  {
    type: "PAWN",
    player_id: 2,
    square_id: 83,
    url: "https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg",
  },
  {
    type: "PAWN",
    player_id: 2,
    square_id: 84,
    url: "https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg",
  },
  {
    type: "PAWN",
    player_id: 2,
    square_id: 85,
    url: "https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg",
  },
  {
    type: "PAWN",
    player_id: 2,
    square_id: 86,
    url: "https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg",
  },
  {
    type: "PAWN",
    player_id: 2,
    square_id: 87,
    url: "https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg",
  },
  {
    type: "PAWN",
    player_id: 2,
    square_id: 88,
    url: "https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg",
  },
];

const squares: any = new Array(120).fill(undefined).map((v, i) => {
  const foundSquare = generatedSquares.find((square) => square.square_id === i);
  if (foundSquare) {
    return foundSquare;
  } else {
    return {
      square_id: i,
    };
  }
});

export default squares;

*/
