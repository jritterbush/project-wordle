import { useState } from "react";

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
  const [gameStatus, setGameStatus] = useState("playing"); // playing | won | lost

  const submitNewGuess = (guess) => {
    const newGuesses = [...guesses, guess];
    setGuesses(newGuesses);

    if (guess.toUpperCase() === answer) {
      setGameStatus("won");
    } else if (newGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
  };

  return (
    <>
      <Guesses answer={answer} guesses={guesses} />
      <GuessInput
        submitNewGuess={submitNewGuess}
        disabled={gameStatus !== "playing"}
      />
      {gameStatus !== "playing" && (
        <Banner type={gameStatus === "won" ? "happy" : "sad"}>
          {gameStatus === "won" ? (
            <p>
              <strong>Congratulations!</strong> Got it in{" "}
              <strong>
                {guesses.length === 1 ? "1 guess" : `${guesses.length} guesses`}
              </strong>
              .
            </p>
          ) : (
            <p>
              Sorry, the correct answer is <strong>{answer}</strong>.
            </p>
          )}
        </Banner>
      )}
    </>
  );
}

export default Game;
