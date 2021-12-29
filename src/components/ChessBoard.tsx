import { Square } from "chess.js";
import styled from "styled-components";
import SquareBox from "./Square";

const ChessBoardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: 70px repeat(8, 70px) 40px;
`;

const ChessBoard = ({ squares }: { squares: Square[] }) => (
  <ChessBoardContainer>
    {squares.map((square) => (
      <SquareBox square={square} key={square} />
    ))}
  </ChessBoardContainer>
);

export default ChessBoard;
