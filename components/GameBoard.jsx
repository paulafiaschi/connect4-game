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
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [pointerColor, setPointerColor] = useState("redPointer");

  const addToken = (columnI) => {
    const column = gameState[columnI];
    const tokenPos = column.indexOf(null);

    tokenPos !== -1
      ? ((column[tokenPos] = currentPlayer),
        setCurrentPlayer(currentPlayer === 1 ? 2 : 1))
      : null;

    currentPlayer === 2
      ? setPointerColor("redPointer")
      : setPointerColor("yellowPointer");
  };

  return (
    <main className={Styles.main}>
      <div className={Styles.board}>
        {gameState.map((col, i) => {
          return (
            <GameColumn
              col={col}
              key={i}
              onClick={() => addToken(i)}
              pointerColor={pointerColor}
            />
          );
        })}
      </div>
    </main>
  );
}
