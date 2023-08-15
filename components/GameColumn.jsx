import Styles from "../app/Home.module.scss";

export default function GameColumn({ col, i, onClick }) {
  return (
    <div className={Styles.column}>
      {col.map((cell, i) => {
        let color;
        cell === 1
          ? (color = "redCircle")
          : cell === 2
          ? (color = "yellowCircle")
          : null;

        return (
          <span
            className={`${Styles.gameCell} ${Styles[color]}`}
            key={`cell-${i}`}
            onClick={onClick}
            value={cell}></span>
        );
      })}
    </div>
  );
}
