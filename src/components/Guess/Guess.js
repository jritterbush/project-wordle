import React from "react";
import { range } from "../../utils";

function Guess({ word }) {
  return (
    <p className="guess">
      {range(5).map((number) => (
        <span key={number} className="cell">
          {word ? word[number] : undefined}
        </span>
      ))}

      {/* My original pass, more complex */}
      {/*letterArray.length > 0
        ? letterArray.map((letter, index) => (
            <span key={index} className="cell">
              {letter}
            </span>
          ))
        : Array.from({ length: 5 }).map((letter, index) => (
          ))*/}
    </p>
  );
}

export default Guess;
