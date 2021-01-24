import React, { useContext } from "react";
import styled from "styled-components";
import { GameStatusContext } from "../App";
import Square from "./Square";
import { getSquareId } from "../utils/getSquareId";

const ChessBoardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: 70px repeat(8, 70px) 40px;
`;

const ChessBoard: React.FC<{}> = () => {
  const { status } = useContext(GameStatusContext);
  return (
    <ChessBoardContainer>
      {status.board.squares.map((square) => (
        <Square square={square} key={getSquareId(square)} />
      ))}
    </ChessBoardContainer>
  );
};

export default ChessBoard;
