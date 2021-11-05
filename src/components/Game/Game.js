import Picks from '../Picks/Picks';
import GameCard from '../GameCard/GameCard';
import './Game.css';
import { useEffect, useState } from 'react/cjs/react.development';
import GameResult from '../GameResult/GameResult';



function Game() {


  const [gameState, setGameState] = useState(false);
  const gameOn = (userAttackType) => {
    setGameState([userAttackType]); // saving in gameState user's attack 
  }

  const [result, setResult] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setResult(!result);
      }, 4000);
      return () => clearTimeout(timer);
  }, [])

  return (
    <>
      { !gameState ? (
      <div className="game">
        <GameCard attackIndex={ 1 } gameOn = { gameOn } />
        <GameCard attackIndex={ 2 } gameOn = { gameOn } />
        <GameCard attackIndex={ 3 } gameOn = { gameOn } />
      </div>
      ) : (
      <div className="game-stage">
        <Picks title="you picked" index={ gameState }/>
        { result && <GameResult /> }
        <Picks title="the house picked" index={ 0 } />
      </div>
      ) }

    </>
  );
}


export default Game;