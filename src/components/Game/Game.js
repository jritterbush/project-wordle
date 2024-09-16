import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import Guesses from "../Guesses/Guesses";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);

  const submitNewGuess = (guess) => {
    const newGuesses = [...guesses, guess];
    setGuesses(newGuesses);
  };

  return (
    <>
      <Guesses guesses={guesses} />
      <GuessInput submitNewGuess={submitNewGuess} />
    </>
  );
}

export default Game;
