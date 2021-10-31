import './Rules.css';
import rulesImg from '../../images/image-rules.svg';

function Rules({ displayRules , displayRulesWindow}) {

  
  return (
    <>
    <button className="rules" onClick={ displayRulesWindow }>Rules</button>
    { displayRules && (
      <div className="display-rules">
        <h3>Rules</h3>
        <img className="rules-image" src={ rulesImg } />
        <div className="close-display" onClick={ displayRulesWindow }>X</div>
      </div>)}
    </>
  );
}

export default Rules;