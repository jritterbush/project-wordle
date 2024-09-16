import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Guess from "../Guess/Guess";

function Guesses({ answer, guesses }) {
  // create an array of numbers to loop over
  const availableGuesses = range(NUM_OF_GUESSES_ALLOWED);
  return (
    <div className="guess-results">
      {availableGuesses.map((number) => {
        return <Guess key={number} answer={answer} word={guesses[number]} />;
      })}
    </div>
  );
}

export default Guesses;
