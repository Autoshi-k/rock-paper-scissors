import './App.css';
import { useState } from 'react'; 
import Header from './components/Header/Header';
import Game from './components/Game/Game';
import Popup from './components/Popup/Popup';
import Result from './Context/Result';
// import Test from './test/test';

function App() {
  
  const [popupDisplay, setPopupDisplay] = useState(false);
  const togglePopup = () => { setPopupDisplay(!popupDisplay) };

  const [result, setResult] = useState(1);

  console.log(result);

  return (
    <div className="App">
      <Result.Provider value={ {result, setResult} }>
        <Header />
        <Game />
      </Result.Provider>
      <button className="show-rules" onClick={ togglePopup }>Rules</button>
      { popupDisplay && <Popup togglePopup={ togglePopup }/> }
    </div>
  );
}

export default App;