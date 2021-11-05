import React from "react";
import paper from '../images/icon-paper.svg';
import scissors from '../images/icon-scissors.svg';
import rock from '../images/icon-rock.svg';

const Attacks = React.createContext([
  {
    index: 1,
    type: 'paper',
    win: 'rock',
    src: paper
  }, {
    index: 2,
    type: 'scissors',
    win: 'paper',
    src: scissors
  }, {
    index: 3,
    type: 'rock',
    win: 'scissors',
    src: rock
  }
]);

export default Attacks;