import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Cell({ letter, status }) {
  const classes = status ? `cell ${status}` : "cell";
  return <span className={classes}>{letter}</span>;
}

function Guess({ answer, word }) {
  const checkedWord = word ? checkGuess(word, answer) : [];
  return (
    <p className="guess">
      {range(5).map((number) => (
        <Cell
          key={number}
          letter={checkedWord[number] ? checkedWord[number].letter : undefined}
          status={checkedWord[number] ? checkedWord[number].status : undefined}
        />
      ))}
    </p>
  );
}

export default Guess;
