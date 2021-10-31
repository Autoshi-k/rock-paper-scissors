import GameCard from "../GameCard/GameCard";

function Picks({ title, attackType }) {
  return (
    <div className="pick">
        <h3>{ title }</h3>
        { attackType ? <div className="empy-attack-slot"></div> : <GameCard attackType={ attackType }/>}
    </div>
  );
}

export default Picks;