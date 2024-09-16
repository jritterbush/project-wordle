import React from "react";

function Guess({ word = "" }) {
  const letterArray = word ? word.split("") : [];
  return (
    <p className="guess">
      {letterArray.length > 0
        ? letterArray.map((letter, index) => (
            <span key={index} className="cell">
              {letter}
            </span>
          ))
        : Array.from({ length: 5 }).map((letter, index) => (
            <span key={index} className="cell"></span>
          ))}
    </p>
  );
}

export default Guess;
