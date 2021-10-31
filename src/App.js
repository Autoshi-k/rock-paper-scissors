import './App.css';
import { useState } from 'react'; 
import Header from './components/Header/Header';
import Game from './components/Game/Game';
import Rules from './components/Rules/Rules';


function App() {
  
  const [displayRules, setDisplayRules] = useState(false);
  const displayRulesWindow = () => {
    setDisplayRules(!displayRules);
  }

  return (
    <div className="App">
      { displayRules && <div className="blur-background"></div> }
      <Header />
      <Game />
      <Rules displayRules={ displayRules } displayRulesWindow={ displayRulesWindow }/>
    </div>
  );
}

export default App;
