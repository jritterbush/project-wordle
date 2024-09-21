import { range } from "../../utils";

function Cell({ letter, status }) {
  const classes = status ? `cell ${status}` : "cell";
  return <span className={classes}>{letter}</span>;
}

function Guess({ word }) {
  return (
    <p className="guess">
      {range(5).map((number) => (
        <Cell
          key={number}
          letter={word ? word[number].letter : undefined}
          status={word ? word[number].status : undefined}
        />
      ))}
    </p>
  );
}

export default Guess;
