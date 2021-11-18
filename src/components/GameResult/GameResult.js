import { useContext } from 'react';
import MovesContext from '../../Context/MovesContext';
import Attacks from '../../Context/AttackContext';
import './GameResult.css';

function GameResult() {
  const { Moves, setMoves } = useContext(MovesContext);
  const attacks = useContext(Attacks); 

  const player = attacks.find(attack => attack.index === Moves.player);
  const pc = attacks.find(attack => attack.index === Moves.pc);

  const msgResult = player.index === pc.index ? 'tie' : player.win === pc.type ? 'you win' : 'you lose';
  // const hadleMatchResults = (player, pc) => {
  // }

  const playAgain = () => {
    setMoves({
      player: 0,
      pc: 0
    })
  }

  return (
    <div className="game-result"> 
      <h1>{ msgResult }</h1>
      <button onClick={ playAgain }>play again</button>
    </div>
  );
}

export default GameResult;