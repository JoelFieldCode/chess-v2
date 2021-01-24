export default interface Piece {
  notation: string;
  type: "pawn" | "rook" | "knight" | "queen" | "king" | "bishop";
  side: {
    name: "white" | "black";
  };
}
