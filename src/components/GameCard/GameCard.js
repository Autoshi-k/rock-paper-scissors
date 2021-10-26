import './GameCard.css';
import paper from '../../images/icon-paper.svg';
import scissors from '../../images/icon-scissors.svg';
import rock from '../../images/icon-rock.svg';


function GameCard({ attackType }) {
  return (
    <div className={ "game-card " + attackType }>
      <div className="icon-of-attack">
        <img src={ attackType === 'paper' ? paper : attackType === 'rock' ? rock : scissors } alt={ attackType + 'attack' }/>
      </div>
    </div>
  );

}

export default GameCard;