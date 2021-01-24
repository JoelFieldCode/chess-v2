import Piece from "./Piece";

export default interface Square {
  file: string;
  rank: number;
  piece?: Piece;
}
