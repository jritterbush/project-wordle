import { useState, useRef, useEffect } from "react";

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
  const [isResetting, setIsResetting] = useState(false);
  const guessInputRef = useRef();
  const [answer, setAnswer] = useState(sample(WORDS));
  console.info({ answer });

  useEffect(() => {
    if (isResetting && gameStatus === "playing") {
      guessInputRef.current.focus();
      setIsResetting(false);
    }
  }, [gameStatus]);

  const validatedGuesses = guesses.map((guess) => checkGuess(guess, answer));

  const submitNewGuess = (guess) => {
    const newGuesses = [...guesses, guess];
    setGuesses(newGuesses);

    if (guess.toUpperCase() === answer) {
      setGameStatus("won");
    } else if (newGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
  };

  function handleResetGame() {
    setIsResetting(true);
    setGuesses([]);
    setGameStatus("playing");
    setAnswer(sample(WORDS));
  }

  return (
    <>
      <Guesses validatedGuesses={validatedGuesses} />
      <GuessInput
        ref={guessInputRef}
        submitNewGuess={submitNewGuess}
        disabled={gameStatus !== "playing"}
      />
      <Keyboard validatedGuesses={validatedGuesses} />
      {gameStatus !== "playing" && (
        <Banner
          type={gameStatus === "won" ? "happy" : "sad"}
          action={handleResetGame}
          actionText="Play Again >"
        >
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
            </>
          ) : (
            <>
              <p>
                Sorry, the correct answer is <strong>{answer}</strong>.
              </p>
            </>
          )}
        </Banner>
      )}
    </>
  );
}

export default Game;
