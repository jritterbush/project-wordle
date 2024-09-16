import React from "react";

function Guesses({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.length > 0
        ? guesses.map((guess) => {
            // check that guess is unique which will prevent key issue too
            return (
              <p key={guess} className="guess">
                {guess}
              </p>
            );
          })
        : "Enter guesses below"}
    </div>
  );
}

export default Guesses;
