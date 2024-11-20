import React from 'react';
import 'styles.css';

const Square = ({ player, click }) => {
  return (
    <button className={player} onClick={click}>
      {player}
    </button>
  );
};
