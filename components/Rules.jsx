import Styles from "../app/Home.module.scss";

export default function Rules({ setOpenRules }) {
  return (
    <div className={Styles.rulesOverlay}>
      <div className={Styles.rules}>
        <div className={Styles.closeButton} onClick={() => setOpenRules(false)}>
          x
        </div>
        <h1>Rules</h1>

        <h3>Objective</h3>
        <p>
          Be the first player to connect 4 of the same coloured tokens in a row
          (either vertically, horizontally or diagonally)
        </p>
        <h3>How to play</h3>
        <ol>
          <li>Red goes first.</li>
          <li>
            Players must alternate turns, and only one token can be dropped in
            each turn.
          </li>
          <li>The game ends when there is 4-in-a-row or the board is full.</li>
        </ol>
      </div>
    </div>
  );
}
