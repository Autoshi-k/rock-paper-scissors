import { useContext, useState } from 'react';
import MovesContext from '../../Context/MovesContext';
import Attacks from '../../Context/AttackContext';
import './GameResult.css';
import Result from '../../Context/Result';
import { useEffect } from 'react/cjs/react.development';

function GameResult() {
  const { Moves, setMoves } = useContext(MovesContext);
  const attacks = useContext(Attacks); 
  const { result, setResult } = useContext(Result);

  // console.log(player);
  const [msgResult, setMsgResult] = useState('');
  const player = attacks.find(attack => attack.index === Moves.player);
  const pc = attacks.find(attack => attack.index === Moves.pc);
  
  useEffect(() => {
    console.log(player);
    console.log(pc);
    if (!pc) {
      if (player.index === pc.index) {
        setMsgResult('it is a tie');
      } else if (player.win === pc.type) {
        setMsgResult('you win');
        setResult(result + 1);
      } else {
        setMsgResult('you win');
        if (!result) setResult(result - 1);
      }
    }
  }, [pc]);
  
  // const msgResult = player.index === pc.index ? 'tie' : player.win === pc.type ? 'you win' : 'you lose';
  
  const playAgain = () => {
    setMoves({
      ...Moves,
      player: null,
      pc: null,
      winner: null
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