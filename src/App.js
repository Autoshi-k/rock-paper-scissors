import './App.css';
import { useState } from 'react'; 
import Header from './components/Header/Header';
import Game from './components/Game/Game';
import Popup from './components/Popup/Popup';

function App() {
  
  const [popupDisplay, setPopupDisplay] = useState(false);
  const togglePopup = () => { setPopupDisplay(!popupDisplay) };

  return (
    <div className="App">
      <Header />
      <Game />
      <button className="show-rules" onClick={ togglePopup }>Rules</button>
      { popupDisplay && <Popup togglePopup={ togglePopup }/> }
    </div>
  );
}

export default App;
