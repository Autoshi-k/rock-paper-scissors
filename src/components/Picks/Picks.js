import ComputerPick from "../ComputerPick/ComputerPick";
import GameCard from "../GameCard/GameCard";
import './Picks.css';

function Picks({ title, index }) {

  return (
    <div className={ "pick " + index}>
        <h3>{ title }</h3>
        { (!index) ? <ComputerPick /> : <GameCard attackIndex={ index } />}
    </div>
  );
}

export default Picks;