import { useState } from "react";
import GameBoard from "./component/GameBoard";
import Player from "./component/Player";
import Log from "./component/Log";
function App() {
  
  

  const [gameTurns, setGameTurns] = useState([]);
  //const[activePlayer, setActivePlayer]= useState('X');

  function handleSelectSquare(rowIndx, colIndx){
   // setActivePlayer((curActivePlayer)=> curActivePlayer === 'X'? 'O': 'X');
   let currentPlayer = 'X';
   if(gameTurns.length > 0 && gameTurns[0].player === 'X'){
    currentPlayer = 'O';
  }


    setGameTurns((prevTern) => {
      let currentPlayer = 'X';

      if(prevTern.length > 0 && prevTern[0].player === 'X'){
        currentPlayer = 'O';
      }
      const udatedTurns = [
        { square: {row: rowIndx, col: colIndx}, player: currentPlayer },
         ...prevTern,
        ];
         return udatedTurns;
    });
  }

  return (
    <main>
  <div id="game-container">
    <ol id="players" className="highlight-player">
   <Player initialName="player 1" Symbol="X" isActive={activePlayer === 'X'}/>
   <Player initialName="player 2" Symbol="O"isActive={activePlayer === 'O'}/>
  
    </ol>
  <GameBoard 
  onSelectSquare={handleSelectSquare} 
  turns={gameTurns}
  />
  
  </div>
  <Log turns={gameTurns}/>
  </main>
  )
}

export default App
