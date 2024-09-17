import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import Guesses from "../Guesses/Guesses";
import Banner from "../Banner/Banner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);
  const [didGuessCorrectly, setDidGuessCorrectly] = useState(false);

  const isGuessLimitHit = guesses.length >= NUM_OF_GUESSES_ALLOWED;

  const isGameOver = isGuessLimitHit || didGuessCorrectly;

  const submitNewGuess = (guess) => {
    const newGuesses = [...guesses, guess];
    setGuesses(newGuesses);
  };

  const handleSuccess = () => {
    setDidGuessCorrectly(true);
  };

  return (
    <>
      <Guesses answer={answer} guesses={guesses} onSuccess={handleSuccess} />
      <GuessInput submitNewGuess={submitNewGuess} disabled={isGameOver} />
      {isGameOver && (
        <Banner
          status={didGuessCorrectly ? "success" : "fail"}
          answer={answer}
          numGuesses={guesses.length}
        />
      )}
    </>
  );
}

export default Game;
