import './GameCard.css';

function GameCard({ attackType, gameOn, src }) {
  return (
    <div className={ "game-card " + attackType } onClick={ () => gameOn() }>
      <div className="icon-of-attack">
        <img src={ src } alt={ attackType + ' attack' }/>
      </div>
    </div>
  );

}

export default GameCard;