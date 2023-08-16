import { useState } from "react";
import Styles from "../app/Home.module.scss";

export default function GameColumn({ col, idx, onClick, pointerColor }) {
  return (
    <div className={Styles.column}>
      {col.map((cell, i) => {
        let tokenColor;

        cell === 1
          ? (tokenColor = "redCircle")
          : cell === 2
          ? (tokenColor = "yellowCircle")
          : null;

        return (
          <>
            <span
              className={`${Styles.gameCell} ${Styles[tokenColor]}`}
              key={`cell-${idx}-${i}`}
              onClick={onClick}
              value={cell}></span>
          </>
        );
      })}

      <div
        className={`${Styles.pointer} ${Styles[pointerColor]}`}
        key={`pointer-${idx}`}>
        <span>&nbsp;</span>
      </div>
    </div>
  );
}
