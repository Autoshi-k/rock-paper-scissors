import GameCard from '../GameCard/GameCard';
import './Game.css';

function Game() {
  return (
    <div className="game">
      <GameCard attackType="paper" />
      <GameCard attackType="scissors" />
      <GameCard attackType="rock" />
    </div>
  );
}


export default Game;