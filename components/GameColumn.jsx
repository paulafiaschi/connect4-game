import Styles from "../app/Home.module.css";

export default function GameColumn({ col, i, onClick }) {
  return (
    <div className={Styles.column}>
      {col.map((cell, i) => {
        return <span className={Styles.gameCell} key={`cell-${i}`}></span>;
      })}
    </div>
  );
}
