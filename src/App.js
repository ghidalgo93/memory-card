import React, { useState, useEffect } from "react";
import "./styles/App.css";
import Scoreboard from "./components/Scoreboard";
import { shuffle, randomColor } from "./helpers";
import gameCards from "./gameCards";

const App = () => {
  const [numberOfCards, setNumberOfCards] = useState(3);
  const [highScore, setHighScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [shownCards, setShownCards] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);
  const [gameover, setGameover] = useState(false);

  const fetchRandomCards = (cards, numCards) => {
    const randomCards = shuffle(cards).slice(0, numCards);
    setShownCards(randomCards);
  };

  useEffect(() => {
    fetchRandomCards(gameCards, numberOfCards);
  }, [selectedIds, numberOfCards]);

  const cardSelectHandler = (e) => {
    const selectedId = e.target.id;
    if (selectedIds.includes(selectedId)) {
      setGameover(true);
    } else {
      setSelectedIds([...selectedIds, selectedId]);
      setCurrentScore(currentScore + 1);
    }
  };

  useEffect(() => {
    if (currentScore > highScore) setHighScore(currentScore);
  }, [currentScore, highScore]);

  const resetHandler = () => {
    setCurrentScore(0);
    setSelectedIds([0]);
    setGameover(false);
  };

  let content = (
    <div className={"column App"}>
      <h1>Memory Dawg</h1>
      <Scoreboard currentScore={currentScore} highScore={highScore} />
      <div>
        {shownCards.map((card) => (
          <button
            onClick={cardSelectHandler}
            id={card.id}
            key={card.id}
            style={{ backgroundColor: `#${randomColor()}` }}
          >
            {card.name}
          </button>
        ))}
      </div>
    </div>
  );

  if (gameover) {
    content = (
      <div className={"App"}>
        <h1>Game Over</h1>
        <button onClick={resetHandler}>restart</button>
      </div>
    );
  }

  return content;
};

export default App;
