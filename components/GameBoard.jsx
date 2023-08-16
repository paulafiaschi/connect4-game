import { useState } from "react";
import Styles from "../app/Home.module.scss";
import GameColumn from "./GameColumn";
import Rules from "./Rules";
import WinnerOverlay from "./WinnerOverlay";
import StartScreen from "./StartScreen";

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
  const [openWinner, setOpenWinner] = useState(false);
  const [startScreen, setStartScreen] = useState(true);

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

    // Check Horizontal
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
    for (let c = 0; c < 5; c++) {
      for (let r = 0; r < 3; r++) {
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
    for (let c = 3; c < 7; c++) {
      for (let r = 0; r < 3; r++) {
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

    // Check for win and restart game
    if (checkWin()) {
      setWinner(currentPlayer);
      setGameState(initialBoard);
      setOpenWinner(true);
      setCurrentPlayer(1);
      setPointerColor("redPointer");
    }
  };

  return (
    <>
      <main className={Styles.main}>
        <div className={Styles.buttons}>
          <div className={Styles.button} onClick={() => setOpenRules(true)}>
            Game Rules
          </div>
          <div
            className={Styles.button}
            onClick={() => {
              setGameState(initialBoard);
              setCurrentPlayer(1);
              setPointerColor("redPointer");
            }}>
            Restart
          </div>
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
        {openRules && <Rules setOpenRules={setOpenRules} />}
        {openWinner && (
          <WinnerOverlay setOpenWinner={setOpenWinner} winner={winner} />
        )}
        {startScreen && <StartScreen setStartScreen={setStartScreen} />}
      </main>
    </>
  );
}
