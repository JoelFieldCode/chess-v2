import Piece from "../models/Piece";

export const getPieceImage = (piece: Piece): string => {
  switch (piece.type) {
    case "bishop":
      return piece.side.name === "black"
        ? "https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_bdt45.svg"
        : "https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg";
    case "pawn":
      return piece.side.name === "black"
        ? "https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg"
        : "https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg";
    case "rook":
      return piece.side.name === "black"
        ? "https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg"
        : "https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rlt45.svg";
    case "queen":
      return piece.side.name === "black"
        ? "https://upload.wikimedia.org/wikipedia/commons/4/47/Chess_qdt45.svg"
        : "https://upload.wikimedia.org/wikipedia/commons/1/15/Chess_qlt45.svg";
    case "king":
      return piece.side.name === "black"
        ? "https://upload.wikimedia.org/wikipedia/commons/f/f0/Chess_kdt45.svg"
        : "https://upload.wikimedia.org/wikipedia/commons/f/f0/Chess_kdt45.svg";
    case "knight":
      return piece.side.name === "black"
        ? "https://upload.wikimedia.org/wikipedia/commons/e/ef/Chess_ndt45.svg"
        : "https://upload.wikimedia.org/wikipedia/commons/7/70/Chess_nlt45.svg";
    default:
      return "";
  }
};
