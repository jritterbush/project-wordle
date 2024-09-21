import React from "react";

const QWERTY_KEYS = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Z", "X", "C", "V", "B", "N", "M"],
];

function createLetterStatusMap(guesses) {
  const statusMap = {};
  const allLetters = guesses.flat();

  allLetters.forEach(({ letter, status }) => {
    const currentStatus = statusMap[letter];

    if (currentStatus === undefined) {
      statusMap[letter] = status;
      return;
    }

    // ranks for the statuses so that once correct always correct
    const STATUS_RANKS = {
      correct: 1,
      misplaced: 2,
      incorrect: 3,
    };

    const currentRank = STATUS_RANKS[currentStatus];
    const newRank = STATUS_RANKS[status];
    if (currentRank > newRank) {
      statusMap[letter] = status;
    }
  });

  return statusMap;
}

function Key({ letter, status }) {
  const classes = status ? `key ${status}` : "key";
  return <div className={classes}>{letter}</div>;
}

function Keyboard({ validatedGuesses }) {
  const guessedLetters = createLetterStatusMap(validatedGuesses);
  return (
    <div className="keyboard">
      {QWERTY_KEYS.map((keyRow, index) => (
        <div key={index} className="keyboard-row">
          {keyRow.map((letter) => (
            <Key key={letter} letter={letter} status={guessedLetters[letter]} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
