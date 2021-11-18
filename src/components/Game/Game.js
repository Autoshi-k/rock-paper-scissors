import Picks from '../Picks/Picks';
import GameCard from '../GameCard/GameCard';
import './Game.css';
import { useEffect, useState } from 'react/cjs/react.development';
import GameResult from '../GameResult/GameResult';
import MovesContext from '../../Context/MovesContext';
// import { useContext } from 'react';



function Game() {

  const [Moves, setMoves] = useState({
    player: 0,
    pc: 0
  });
  const [result, setResult] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setResult(!result);
    }, 3000);
    // setResult(!result);
    return () => clearTimeout(timer);
  }, [Moves.player])

  // function showGameResult() {
  //   const timer = setTimeout(() => <GameResult />, 1000);
  //   return () => clearTimeout(timer); 
  // }

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
          <Picks title="you picked" index={ Moves.player }/>
          { Moves.pc && <GameResult /> }
          <Picks title="the house picked" index={ 0 } />
        </div>
        ) }
      </MovesContext.Provider>
    </>
  );
}


export default Game;