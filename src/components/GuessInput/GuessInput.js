import { useState, forwardRef } from "react";

const GuessInput = forwardRef(function GuessInput(
  { submitNewGuess, disabled },
  ref
) {
  const [newGuess, setNewGuess] = useState("");

  const updateNewGuess = (event) => {
    const newValue = event.target.value.toUpperCase();
    setNewGuess(newValue);
  };

  const handleSubmitNewGuess = (event) => {
    event.preventDefault();
    submitNewGuess(newGuess);
    setNewGuess("");
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmitNewGuess}>
      <label htmlFor="guess-input">
        {disabled ? "Game Over" : "Enter guess:"}
      </label>
      <input
        ref={ref}
        id="guess-input"
        type="text"
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        value={newGuess}
        onChange={updateNewGuess}
        required
        title="5-letter word"
        disabled={disabled}
        autoFocus
      />
    </form>
  );
});

export default GuessInput;
