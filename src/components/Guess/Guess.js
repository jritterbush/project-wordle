import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Cell({ letter, status }) {
  const classes = status ? `cell ${status}` : "cell";
  return <span className={classes}>{letter}</span>;
}

function Guess({ answer, word, onSuccess }) {
  const checkedWord = word ? checkGuess(word, answer) : [];
  const guessedCorrectly =
    checkedWord.length > 0
      ? checkedWord.every((letter) => letter && letter.status === "correct")
      : false;
  React.useEffect(() => {
    if (guessedCorrectly) {
      onSuccess();
    }
  }, [guessedCorrectly, checkedWord]);
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
