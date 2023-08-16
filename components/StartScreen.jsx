import Styles from "../app/Home.module.scss";

export default function StartScreen({ setStartScreen }) {
  return (
    <div className={Styles.rulesOverlay}>
      <div className={Styles.rules}>
        <div
          className={Styles.closeButton}
          onClick={() => setStartScreen(false)}>
          x
        </div>
        <h1>Connect 4</h1>

        <h3>Objective</h3>
        <p>
          Be the first player to connect 4 of the same coloured tokens in a row
          (either vertically, horizontally or diagonally)
        </p>
        <div
          className={`${Styles.button} ${Styles.startButton}`}
          onClick={() => setStartScreen(false)}>
          Start
        </div>
      </div>
    </div>
  );
}
