import { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import Guesses from "../Guesses/Guesses";
import Banner from "../Banner/Banner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Keyboard from "../Keyboard";
import { checkGuess } from "../../game-helpers";

function Game() {
  const [guesses, setGuesses] = useState([]);
  const [gameStatus, setGameStatus] = useState("playing"); // playing | won | lost
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [answer, setAnswer] = useState(sample(WORDS));
  console.info({ answer });

  const submitNewGuess = (guess) => {
    const newGuesses = [...guesses, guess];
    setGuesses(newGuesses);

    const newCheckedGuess = checkGuess(guess, answer);
    const newGuessedLetters = [...newCheckedGuess, ...guessedLetters];
    setGuessedLetters(newGuessedLetters);

    if (guess.toUpperCase() === answer) {
      setGameStatus("won");
    } else if (newGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
  };

  function resetGame() {
    setGuesses([]);
    setGuessedLetters([]);
    setGameStatus("playing");
    setAnswer(sample(WORDS));
  }

  function ResetButton() {
    return (
      <button className="reset-button" onClick={resetGame}>
        Play Again >
      </button>
    );
  }

  return (
    <>
      <Guesses answer={answer} guesses={guesses} />
      <GuessInput
        submitNewGuess={submitNewGuess}
        disabled={gameStatus !== "playing"}
      />
      <Keyboard guessedLetters={guessedLetters} />
      {gameStatus !== "playing" && (
        <Banner type={gameStatus === "won" ? "happy" : "sad"}>
          {gameStatus === "won" ? (
            <>
              <p>
                <strong>Congratulations!</strong> Got it in{" "}
                <strong>
                  {guesses.length === 1
                    ? "1 guess"
                    : `${guesses.length} guesses`}
                </strong>
                .
              </p>

              <ResetButton />
            </>
          ) : (
            <>
              <p>
                Sorry, the correct answer is <strong>{answer}</strong>.
              </p>
              <ResetButton />
            </>
          )}
        </Banner>
      )}
    </>
  );
}

export default Game;
