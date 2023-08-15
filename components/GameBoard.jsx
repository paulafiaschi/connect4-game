import { useState } from "react";
import Styles from "../app/Home.module.css";
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

  return (
    <main className={Styles.main}>
      <div className={Styles.board}>
        {gameState.map((col, i) => {
          return <GameColumn col={col} key={i} onClick={() => addToken()} />;
        })}
      </div>
    </main>
  );
}
