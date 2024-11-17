import { useState } from "react";
import GameBoard from "./component/GameBoard";
import Player from "./component/Player";
function App() {
  const[activePlayer, setActivePlayer]= useState('X');
  function handleSelectSquare(){
    setActivePlayer((curActivePlayer)=> curActivePlayer === 'X'? 'O': 'X');
  }

  return (
  <div id="game-container">
    <ol id="players" className="highlight-player">
   <Player initialName="player 1" Symbol="X" isActive={activePlayer === 'X'}/>
   <Player initialName="player 2" Symbol="O"isActive={activePlayer === 'O'}/>
  
    </ol>
  <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymlol={activePlayer}/>
  </div>
  )
}

export default App
