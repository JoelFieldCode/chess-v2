import styled, { css } from "styled-components";
import green from "@material-ui/core/colors/green";
import indigo from "@material-ui/core/colors/indigo";
import orange from "@material-ui/core/colors/orange";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/core";
import { yellow } from "@material-ui/core/colors";
import { Square } from "chess.js";
import { useGameState } from "../hooks/useGameState";

type SquareProps = {
  active?: boolean;
  disabled: boolean;
  isPrevSquare: boolean;
  isCurrentMovedSquare: boolean;
};

const StyledChessSquare = styled.div<SquareProps>`
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
  ${(props) =>
    props.active &&
    css`
      // background: ${green[100]} !important;
    `};
  ${(props) =>
    props.disabled &&
    css`
      pointer-events: none;
    `};

  ${(props) =>
    props.isPrevSquare &&
    css`
      background: ${yellow[500]} !important;
    `};
  ${(props) =>
    props.isCurrentMovedSquare &&
    css`
      background: ${yellow[500]} !important;
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
  square: Square;
}> = ({ square }) => {
  const classes = useStyles();
  const {
    squareIsSelected,
    squareEnabled,
    onSelectSquare,
    isPrevSquare,
    isCurrentMovedSquare,
    pieceImage,
  } = useGameState(square);
  return (
    <StyledChessSquare
      className="square"
      onClick={onSelectSquare}
      // active={props.squareIsSelectable}
      disabled={!squareEnabled}
      isPrevSquare={isPrevSquare}
      isCurrentMovedSquare={isCurrentMovedSquare}
    >
      {squareIsSelected && (
        <StyledCloseButton>
          <CloseIcon />
        </StyledCloseButton>
      )}
      {pieceImage && (
        <Avatar
          src={pieceImage || ""}
          className={squareIsSelected ? classes.greenAvatar : ""}
        />
      )}
    </StyledChessSquare>
  );
};

export default ChessSquare;
