import Player from "./components/Player"
import GameBoard from "./components/GameBoard";
import { useState } from "react";

function App() {
  const [activePlayer,setActivePLayer]=useState('X');

  function handleSelectSquare(){
    setActivePLayer(currActivePlayer=> currActivePlayer === 'X' ? 'O':'X' );
  }

  return (
    <>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X'}></Player>
          <Player initialName="Player 2" symbol="O" isActive={activePlayer==='O'}></Player>
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer}></GameBoard>
      </div>
    </>
  )
}

export default App
