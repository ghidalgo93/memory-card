import React from "react";

const Scoreboard = (props) => {
  let content = (
    <div className={"row score-board"}>
      <div>
        <p>Current Score</p>
        <p>{props.currentScore}</p>
      </div>
      <div>
        <p>High Score</p>
        <p>{props.highScore}</p>
      </div>
    </div>
  );

  return content;
};

export default Scoreboard;
