import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ answer, word }) {
  const checkedWord = word ? checkGuess(word, answer) : [];
  return (
    <p className="guess">
      {checkedWord.length > 0
        ? checkedWord.map(({ letter, status }, index) => (
            <span key={index} className={`cell ${status}`}>
              {letter}
            </span>
          ))
        : range(5).map((number) => <span key={number} className="cell"></span>)}
    </p>
  );
}

export default Guess;
