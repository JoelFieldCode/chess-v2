import React, { useContext } from "react";
import styled from "styled-components";
import { GameStatusContext } from "../App";
import Square from "./Square";
import SquareType from "../models/Square";

const ChessBoardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: 70px repeat(8, 70px) 40px;
`;

const ChessBoard: React.FC<{}> = () => {
  const { status } = useContext(GameStatusContext);
  return (
    <ChessBoardContainer>
      {status.board.squares.map((square: SquareType) => (
        <Square
          square={square}
          piece={square.piece}
          key={`${square.file}${square.rank}`}
        />
      ))}
    </ChessBoardContainer>
  );
};

export default ChessBoard;
