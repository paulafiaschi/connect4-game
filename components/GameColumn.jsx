import Styles from "../app/Home.module.css";

export default function GameColumn({ col, i, onClick }) {
  return (
    <div className={Styles.column}>
      {col.map((cell, i) => {
        let color = "whiteCircle";

        if (cell === 1) {
          color = "redCircle";
        } else if (cell === 2) {
          color = "yellowCircle";
        }
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
