import { useContext, useRef } from 'react';
// import { useState } from 'react/cjs/react.development';
import Attacks from '../../Context/AttackContext';
import GameMoves from '../../Context/GameMoves';
import './GameCard.css';

function GameCard({ attackIndex }) {
  const attacks = useContext(Attacks);
  
  const { gameMoves, setGameMoves } = useContext(GameMoves);
  const thisAttack = attacks[attackIndex - 1];
  
  const card = useRef(null);

  function handleClickCard() {
    if (!gameMoves) {
      // card.className.
      setGameMoves([thisAttack.index]);
    }
  }

  return (
    <div className={ "game-card " + thisAttack.type } onClick={ handleClickCard } ref={ card }>
      <div className="icon-of-attack">
        <img src={ thisAttack.src } alt={ thisAttack + ' attack' }/>
      </div>
    </div>
  );

}

export default GameCard;