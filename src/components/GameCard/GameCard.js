import { useContext } from 'react';
// import { useState } from 'react/cjs/react.development';
import Attacks from '../../Context/AttackContext';
import MovesContext from '../../Context/MovesContext';
import './GameCard.css';

function GameCard({ attackIndex }) {
  const attacks = useContext(Attacks);
  const thisAttack = attacks.find(attack => attack.index === attackIndex);
  
  const { Moves, setMoves } = useContext(MovesContext);
  
  return (
    <div className={ `game-card  ${thisAttack.type}` } onClick={ !Moves.player ? () => setMoves({...Moves, player: thisAttack.index}) : undefined } style={ {cursor: Moves.player ? 'default' : 'pointer'} }>
      <div className="icon-of-attack">
        <img src={ thisAttack.src } alt={ thisAttack + ' attack' }/>
      </div>
    </div>
  );

}

export default GameCard;