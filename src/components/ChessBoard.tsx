import styled from "styled-components";

const ChessBoardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: 70px repeat(8, 70px) 40px;
`;

export default ChessBoardContainer;
