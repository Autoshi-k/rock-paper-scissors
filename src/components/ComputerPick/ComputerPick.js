import { useEffect, useRef, useState } from 'react';
import GameCard from '../GameCard/GameCard';
import './ComputerPick.css';

function ComputerPick() {

  const [computePick, setComputerPick] = useState(false);
  const [random, setRandom] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      emptySpot.current.remove();
      setRandom(Math.ceil(Math.random() * 3));
      setComputerPick(!computePick);
      }, 2000);
      return () => clearTimeout(timer);
    }, []);


  const emptySpot = useRef(null);

  return(
    <>
      <div className="computer-pick" ref={ emptySpot }></div>
      { computePick && <GameCard attackIndex={ random }/>}
    </>
  );
}

export default ComputerPick;