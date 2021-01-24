import styled, { css } from "styled-components";
import green from "@material-ui/core/colors/green";
import indigo from "@material-ui/core/colors/indigo";
import orange from "@material-ui/core/colors/orange";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Piece from "../models/Piece";
import { getPieceImage } from "../services/getPieceImage";
import { useContext } from "react";
import { GameStatusContext } from "../App";
import SquareType from "../models/Square";
import { makeStyles } from "@material-ui/core";

const StyledChessSquare = styled.div<any>`
  height: 70px;
  width: 70px;
  display: flex;
  color: red;
  font-size: 14px;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
  &:hover {
    background: ${indigo[500]} !important;
  }
  ${(props: any) =>
    props.active &&
    css`
      // background: ${green[100]} !important;
    `};
  ${(props: any) =>
    props.disabled &&
    css`
      pointer-events: none;
    `};
`;

const StyledCloseButton = styled(IconButton)`
  position: absolute !important;
  top: 0px;
  right: 0px;
  padding: 0 !important;
  color: ${orange[500]} !important;
`;

const useStyles = makeStyles({
  greenAvatar: {
    color: "#fff",
    fontSize: 10,
    backgroundColor: green[500],
  },
});

const ChessSquare: React.FC<{
  piece?: Piece;
  square: SquareType;
}> = ({ piece, square }) => {
  //   console.log(piece);
  const pieceImage = piece ? getPieceImage(piece) : null;
  const classes = useStyles();
  const { status, selectSquare, selectedSquare } = useContext(
    GameStatusContext
  );
  const squareIsDisabled = !piece;
  const squareIsSelected =
    selectedSquare?.file === square.file &&
    selectedSquare?.rank === square.rank;
  return (
    <StyledChessSquare
      className="square"
      onClick={() => selectSquare(square)}
      // {...extraChessSquareProps}
      // active={props.squareIsSelectable}
      disabled={squareIsDisabled === true}
    >
      {/* {props.isSelectedPiece && (
          <StyledCloseButton>
            <CloseIcon />
          </StyledCloseButton>
        )} */}

      {/* <p>
        {square.file} {square.rank}
      </p> */}
      {piece && (
        <Avatar
          src={pieceImage || ""}
          className={squareIsSelected ? classes.greenAvatar : ""}
        />
      )}
    </StyledChessSquare>
  );
};

export default ChessSquare;
