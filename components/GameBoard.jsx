import { useState } from "react";
import Styles from "../app/Home.module.scss";
import GameColumn from "./GameColumn";

export default function GameBoard() {
  let initialBoard = [
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
  ];

  const [gameState, setGameState] = useState(initialBoard);
  const [winner, setWinner] = useState(null);
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [pointerColor, setPointerColor] = useState("redPointer");
  const [openRules, setOpenRules] = useState(false);

  const checkWin = (currentPlayer) => {
    // Check Vertical
    for (let c = 0; c < 7; c++) {
      for (let r = 0; r < 3; r++) {
        if (
          gameState[c][r] != null &&
          gameState[c][r] == gameState[c][r + 1] &&
          gameState[c][r] == gameState[c][r + 2] &&
          gameState[c][r] == gameState[c][r + 3]
        ) {
          return true;
        }
      }
    }

    // Check Vertical
    for (let c = 0; c < 4; c++) {
      for (let r = 0; r < 6; r++) {
        if (
          gameState[c][r] != null &&
          gameState[c][r] == gameState[c + 1][r] &&
          gameState[c][r] == gameState[c + 2][r] &&
          gameState[c][r] == gameState[c + 3][r]
        ) {
          return true;
        }
      }
    }

    // Check Diagonally Right
    for (let c = 0; c < 7; c++) {
      for (let r = 0; r < 6; r++) {
        if (
          gameState[c][r] != null &&
          gameState[c][r] == gameState[c + 1][r + 1] &&
          gameState[c][r] == gameState[c + 2][r + 2] &&
          gameState[c][r] == gameState[c + 3][r + 3]
        ) {
          return true;
        }
      }
    }
    // Check Diagonally Left
    for (let c = 0; c < 7; c++) {
      for (let r = 0; r < 6; r++) {
        if (
          gameState[c][r] != null &&
          gameState[c][r] == gameState[c - 1][r + 1] &&
          gameState[c][r] == gameState[c - 2][r + 2] &&
          gameState[c][r] == gameState[c - 3][r + 3]
        ) {
          return true;
        }
      }
    }
  };

  const addToken = (columnI) => {
    const column = gameState[columnI];

    const tokenPos = column.indexOf(null);

    tokenPos !== -1
      ? ((column[tokenPos] = currentPlayer),
        setCurrentPlayer(currentPlayer === 1 ? 2 : 1),
        currentPlayer === 1
          ? setPointerColor("yellowPointer")
          : setPointerColor("redPointer"))
      : null;

    // Check for win
    if (checkWin()) {
      setWinner(currentPlayer);
    }
  };
  //   if (winner) {
  //     return <div>Winner is {winner}</div>;
  //   }
  return (
    <>
      <main className={Styles.main}>
        <div className={Styles.buttons}>
          <div onClick={() => setOpenRules(true)}>Game Rules</div>
          <div>Restart</div>
        </div>
        <div className={Styles.board}>
          {gameState.map((col, i) => {
            return (
              <GameColumn
                col={col}
                key={`${i}-column`}
                onClick={() => addToken(i)}
                pointerColor={pointerColor}
                idx={i}
              />
            );
          })}
        </div>
        <div className={`${Styles.turn} ${Styles[pointerColor]}`}>
          Player {currentPlayer}'s playing
        </div>
        {openRules === true && (
          <div className={Styles.rulesOverlay}>
            <div className={Styles.rules}>
              <div onClick={() => setOpenRules(false)}>x</div>
              <h2>Rules</h2>
              <h3>Objective</h3>
              <p>
                Be the first player to connect 4 of the same coloured tokens in
                a row (either vertically, horizontally or diagonally)
              </p>
              <h3>How to play</h3>
              <ol>
                <li>Red goes first.</li>
                <li>
                  Players must alternate turns, and only one token can be
                  dropped in each turn.
                </li>
                <li>
                  The game ends when there is 4-in-a-row or the board is full.
                </li>
              </ol>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
