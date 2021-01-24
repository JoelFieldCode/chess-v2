import Square from "./Square";

export default interface NotatedMoves {
  [key: string]: {
    dest: Square;
    src: Square;
  };
}
