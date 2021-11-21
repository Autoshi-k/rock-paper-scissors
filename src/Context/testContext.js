import React, { createContext, useState } from "react";

export const TestContext = createContext();

function GameDetail({ childen }) {
  const [gameState, setGameState] = useState({
    Moves: {
      player: 0,
      pc: 0,
    },
    score: 0,
    displayResult: false,
    test: 'hhjbjhbjh'
  })
  return <TestContext.Provider value={ {gameState, setGameState} }>{ childen }</TestContext.Provider>
}

export default GameDetail;