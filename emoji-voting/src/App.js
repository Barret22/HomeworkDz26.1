import React, { useState } from 'react';
import './App.css';
import EmojiList from './Components/EmojiList/EmojiList.js';
import Results from './Components/Results/Results.js';

const App = () => {
  const initialVotes = JSON.parse(localStorage.getItem('votes')) || {
    '😀': 0,
    '😊': 0,
    '😎': 0,
    '🤩': 0,
    '😍': 0,
  };

  const [votes, setVotes] = useState(initialVotes);
  const [winner, setWinner] = useState(null);

  const handleVote = (emoji) => {
    const newVotes = { ...votes, [emoji]: votes[emoji] + 1 };
    setVotes(newVotes);
    localStorage.setItem('votes', JSON.stringify(newVotes));
  };

  const handleShowResults = () => {
    const winnerEmoji = Object.keys(votes).reduce((a, b) => (votes[a] > votes[b] ? a : b));
    setWinner(winnerEmoji);
  };

  const handleReset = () => {
    const resetVotes = {
      '😀': 0,
      '😊': 0,
      '😎': 0,
      '🤩': 0,
      '😍': 0,
    };
    setVotes(resetVotes);
    setWinner(null);
    localStorage.removeItem('votes');
  };

  return (
      <div className="container text-center mt-5">
        <h1>Голосування за найкращий смайлик</h1>
        <EmojiList emojis={Object.keys(votes)} votes={votes} onVote={handleVote} />
        <button onClick={handleShowResults} className="btn btn-success mt-3">
          Підрахунок голосів
        </button>
        <Results winner={winner} votes={votes} onReset={handleReset} />
      </div>
  );
};

export default App;
