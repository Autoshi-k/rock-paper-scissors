import Picks from '../Picks/Picks';
import GameCard from '../GameCard/GameCard';
import './Game.css';
import { useEffect, useState } from 'react/cjs/react.development';
import GameResult from '../GameResult/GameResult';
// import { useContext } from 'react';
import GameMoves from '../../Context/GameMoves';



function Game() {


  const [gameState, setGameState] = useState(false);
  // const gameOn = (userAttackType) => {
  //   setGameState([userAttackType]); // saving in gameState user's attack 
  // }

  const [gameMoves, setGameMoves] = useState(0);
  console.log(gameMoves);
  const [result, setResult] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setResult(!result);
      }, 4000);
      return () => clearTimeout(timer);
  }, [])

  return (
    <>
      <GameMoves.Provider value={{ gameMoves, setGameMoves }}>
        { !gameMoves ? (
        <div className="game">
          <GameCard attackIndex={ 1 } />
          <GameCard attackIndex={ 2 } />
          <GameCard attackIndex={ 3 } />
        </div>
        ) : (
        <div className="game-stage">
          <Picks title="you picked" index={ gameMoves[0] }/>
          { result && <GameResult /> }
          <Picks title="the house picked" index={ 0 } />
        </div>
        ) }
      </GameMoves.Provider>
    </>
  );
}


export default Game;