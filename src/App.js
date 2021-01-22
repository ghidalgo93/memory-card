import React, { useState, useEffect } from "react";
import "./styles/App.css";
import Scoreboard from "./components/Scoreboard";
import uniqid from "uniqid";
import { shuffle } from "./helpers";

const App = () => {
  const [numberOfCards, setNumberOfCards] = useState(3);
  const [highScore, setHighScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [shownCards, setShownCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [gameover, setGameover] = useState(false);
  const gameCards = [
    { name: 1, id: uniqid() },
    { name: 2, id: uniqid() },
    { name: 3, id: uniqid() },
    { name: 4, id: uniqid() },
    { name: 5, id: uniqid() },
  ];

  const fetchRandomCards = (cards, numCards) => {
    const randomCards = shuffle(cards).slice(0, numCards);
    setShownCards(randomCards);
  };

  const cardSelectHandler = (e) => {
    const cardId = e.target.id;
    // if the clicked card is in the selected card list
    // set game over to true
    // else
    // setSelectedCards[..selectedCards, current card]
    // up current score
    // if current score >= highScore
    // set highscore to current score
    // fetchRandomCards
  };

  useEffect(() => {
    fetchRandomCards(gameCards, numberOfCards);
  }, []);

  let content = (
    <div className={"column App"}>
      <Scoreboard currentScore={currentScore} highScore={highScore} />
      <div>
        {shownCards.map((card) => (
          <button onClick={cardSelectHandler} id={card.id} key={card.id}>
            {card.name}
          </button>
        ))}
      </div>
    </div>
  );

  if (gameover) {
    content = <h1>Game Over</h1>;
  }

  return content;
};

export default App;
