import Picks from '../Picks/Picks';
import GameCard from '../GameCard/GameCard';
import './Game.css';
import { useState } from 'react/cjs/react.development';
// import { useContext } from 'react';
// import Attacks from '../../AttackContext';


function Game() {

  // const attacks = useContext(Attacks);

  const [gameState, setGameState] = useState(false);
  const gameOn = (userAttackType) => {
    setGameState(userAttackType); // saving in gameState user's attack 
  }

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
        <Picks title="the house picked" index={ 0 } />
      </div>
      ) }

    </>
  );
}


export default Game;