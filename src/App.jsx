import { useState } from "react";
import GameBoard from "./component/GameBoard";
import Player from "./component/Player";
import Log from "./component/Log";
import { WINNING_COMBINATIONS } from "./winning-combinations";
function deriveActivePlayer(gameTurns){
  let currentPlayer = 'X';
  if(gameTurns.length > 0 && gameTurns[0].player === 'X'){
   currentPlayer = 'O';
  
}
return currentPlayer;
}
function App() {
   const [gameTurns, setGameTurns] = useState([]);
  //const[activePlayer, setActivePlayer]= useState('X');
  const activePlayer = deriveActivePlayer(gameTurns);
  function handleSelectSquare(rowIndx, colIndx){
   // setActivePlayer((curActivePlayer)=> curActivePlayer === 'X'? 'O': 'X');


    setGameTurns((prevTerns) => {
  const currentPlayer = deriveActivePlayer(prevTerns);
      const updatedTurns = [
        { square: {row: rowIndx, col: colIndx}, player: currentPlayer },
         ...prevTerns,
        ];
         return updatedTurns;
    });
  }

  return (
    <main>
  <div id="game-container">
    <ol id="players" className="highlight-player">
   <Player initialName="player 1" Symbol="X" isActive={activePlayer =='X'} />
   <Player initialName="player 2" Symbol="O" isActive={activePlayer =='O'}/>
  
    </ol>
  <GameBoard 
  onSelectSquare={handleSelectSquare} 
  turns={gameTurns}
  />
  
  </div>
  <Log turns={gameTurns}/>
  </main>
  );
}

export default App;
