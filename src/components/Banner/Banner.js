import React from "react";

function Banner({ status, numGuesses, answer }) {
  const isSuccess = status === "success";
  const statusClasses = isSuccess ? "banner happy" : "banner sad";
  return (
    <div className={statusClasses}>
      {isSuccess ? (
        <p>
          <strong>Congratulations!</strong> Got it in{" "}
          <strong>{numGuesses} guesses</strong>.
        </p>
      ) : (
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      )}
    </div>
  );
}

export default Banner;
