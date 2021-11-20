import Picks from '../Picks/Picks';
import GameCard from '../GameCard/GameCard';
import './Game.css';
import { useEffect, useState } from 'react/cjs/react.development';
import GameResult from '../GameResult/GameResult';
import MovesContext from '../../Context/MovesContext';
// import { useContext } from 'react';



function Game() {

  const [Moves, setMoves] = useState({
    player: null,
    pc: null,
    winner: null,
    declareWinner: () => {
      const timer = setTimeout(() => {
        console.log('test');
        setResult(!result);
      }, 3000);
      return () => clearTimeout(timer);
    }
  });
  const [result, setResult] = useState(false);

  return (
    <>
      <MovesContext.Provider value={{ Moves, setMoves }}>
        { !Moves.player ? (
        <div className="game">
          <GameCard attackIndex={ 1 } />
          <GameCard attackIndex={ 2 } />
          <GameCard attackIndex={ 3 } />
        </div>
        ) : (
        <div className="game-stage">
          <Picks title="you picked" index={ Moves.player } />
          { result && <GameResult /> }
          <Picks title="the house picked" index={ 0 } />
        </div>
        ) }
      </MovesContext.Provider>
    </>
  );
}


export default Game;