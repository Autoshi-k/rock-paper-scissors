import React from 'react';
import logo from '../../images/logo.svg';
import { useState } from 'react';
import './Header.css';

function Header() {
  
  const [score, setScore] = useState(0);
  
  return (
    <header>
      <img src={ logo }/>
      <div className="score-display">
        score
        <div className="score">{ score }</div>
      </div>
    </header>
  )
}

export default Header;