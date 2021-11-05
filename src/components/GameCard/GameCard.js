import { useContext } from 'react';
import Attacks from '../../Context/AttackContext';
import './GameCard.css';

function GameCard({ attackIndex, gameOn }) {
  const attacks = useContext(Attacks);
  const thisAttack = attacks[attackIndex-1];
  // console.log(attackIndex);
  // console.log(thisAttack);
  
  return (
    <div className={ "game-card " + thisAttack.type } onClick={ () => gameOn(thisAttack.index) }>
      <div className="icon-of-attack">
        <img src={ thisAttack.src } alt={ thisAttack + ' attack' }/>
      </div>
    </div>
  );

}

export default GameCard;