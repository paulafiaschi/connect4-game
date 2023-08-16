import Styles from "../app/Home.module.scss";

export default function WinnerOverlay({ winner, setGameState, initialState }) {
  return (
    <div className={Styles.winnerOverlay}>
      <div
        className={`${Styles.winnerSign} ${
          winner === 1 ? Styles.redPointer : Styles.yellowPointer
        }`}>
        <h2>
          The winner is
          <span>PLAYER {winner}</span>
        </h2>
        <div className={Styles.newGame}>Restart</div>
      </div>
    </div>
  );
}
