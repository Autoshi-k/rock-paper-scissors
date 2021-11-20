import { useEffect, useRef, useState, useContext } from 'react';
import MovesContext from '../../Context/MovesContext';
import GameCard from '../GameCard/GameCard';
import './ComputerPick.css';

function ComputerPick({ postResult }) {

  const { Moves, setMoves } = useContext(MovesContext);
  const [randomPcAttack, setRandomPcAttack] = useState(Math.ceil(Math.random() * 3));
  const emptySpot = useRef(null);
  
  // console.log(postResult);

  useEffect(() => {
    const timer = setTimeout(() => {
      emptySpot.current.remove();
      setMoves({...Moves, pc: randomPcAttack});
      Moves.declareWinner();
      }, 2000);
      return () => clearTimeout(timer);
    }, []);



  return(
    <>
      <div className="computer-pick" ref={ emptySpot }></div>
      { Moves.pc && <GameCard attackIndex={ randomPcAttack }/>}
    </>
  );
}

export default ComputerPick;