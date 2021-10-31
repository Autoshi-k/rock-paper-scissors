// import './Popup.css';
import rulesImg from '../../images/image-rules.svg';

function Popup({ togglePopup }) {
  return (
    <>
      <div className="blur-background"></div>
      <div className="popup">
        <h3>Rules</h3>
        <img className="popup-image" src={ rulesImg } />
        <div className="close-popup" onClick={ togglePopup }>X</div>
      </div>
    </>
  );
}

export default Popup;