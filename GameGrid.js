import React from 'react';
import Square from './Square';
import './styles.css';

const GameGrid = ({ moves, click }) => {
  return (
    <div className="grid">
      {moves.map((player, index) => (
        <Square 
          key={index} 
          player={player} 
          click={() => click(index)}
        />
      ))}
    </div>
  );
};
export default GameGrid;
