import React, { useState } from "react";

function GuessInput({ submitNewGuess }) {
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
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        pattern="[A-Z]{5,5}"
        value={newGuess}
        onChange={updateNewGuess}
        required
        aria-label="5-letter word"
      />
    </form>
  );
}

export default GuessInput;
