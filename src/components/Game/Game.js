import Picks from '../Picks/Picks';
import GameCard from '../GameCard/GameCard';
import './Game.css';
import { useState } from 'react/cjs/react.development';
import paper from '../../images/icon-paper.svg';
import scissors from '../../images/icon-scissors.svg';
import rock from '../../images/icon-rock.svg';


function Game() {

  const [gameState, setGameState] = useState(false);
  const gameOn = (attackType) => {
    setGameState(!gameState);
  }

  return (
    <>
      { !gameState ? (
      <div className="game">
        <GameCard attackType="paper" gameOn = { gameOn } src={ paper } />
        <GameCard attackType="scissors" gameOn = { gameOn } src={ scissors } />
        <GameCard attackType="rock" gameOn = { gameOn } src={ rock } />
      </div>
      ) : (
      <div className="">
        <Picks title="you picked" />
        <Picks title="the house picked" />
      </div>
      ) }

    </>
  );
}


export default Game;