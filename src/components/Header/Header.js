import React, { useContext } from 'react';
import logo from '../../images/logo.svg';
import './Header.css';
import Result from '../../Context/Result';

function Header() {

  const { result } = useContext(Result);
  
  return (
    <header>
      <img src={ logo } alt="page-logo"/>
      <div className="score-display">
        score
        <div className="score">{ `${result.score}` }</div>
      </div>
    </header>
  )
}

export default Header;