import React, { useState } from 'react';
import GameGrid from './GameGrid';
import './styles.css';

const Game = () => {
  const [moves, setMoves] = useState(Array(9).fill(""));
  const [turn, setTurn] = useState("X");

  const gridClick = (whichSquare) => {
    if (moves[whichSquare] === "") {
      const movesCopy = [...moves];
      movesCopy[whichSquare] = turn;
      setMoves(movesCopy);
      setTurn(turn === "X" ? "O" : "X");
    }
  };

  const newGame = () => {
    setMoves(Array(9).fill(""));
    setTurn("X");
  };

  return (
    <div className="game">
      <h1>Tic-Tac-Toe</h1>
      <GameGrid moves={moves} click={gridClick} />
      <p>Turn: {turn}</p>
      <button onClick={newGame}>New Game</button>
    </div>
  );
};

export default Game;