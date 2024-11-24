import { useState } from "react";
import GameBoard from "./component/GameBoard";
import Player from "./component/Player";
import Log from "./component/Log";
import { WINNING_COMBINATIONS } from "./winning-combinations";
import GameOver from "./component/GameOver";

const initialGameBoard =[
  [null, null, null],
  [null, null, null],
  [null, null, null],
]


function deriveActivePlayer(gameTurns){
  let currentPlayer = 'X';
  if(gameTurns.length > 0 && gameTurns[0].player === 'X'){
   currentPlayer = 'O';
  
}
return currentPlayer;
}
function App() {

   const [player,setplayer] = useState({
    X: 'Player 1',
    O: 'Player 2',
   });

   const [gameTurns, setGameTurns] = useState([]);

  //const[activePlayer, setActivePlayer]= useState('X');
  const activePlayer = deriveActivePlayer(gameTurns);


  let gameBoard = [...initialGameBoard.map(array => [...array])];
  let winner;
  for(const turn of gameTurns ){
      const { square, player} = turn;
      const { row, col } = square;
        gameBoard[row][col] = player;
  }
  for(const combinations of WINNING_COMBINATIONS){
    const firstSquareSymbol = 
        gameBoard[combinations[0].row][combinations[0].column];
    const secondSquareSymbol= 
    gameBoard[combinations[1].row][combinations[1].column];
    const thirdSquareSymbol= 
    gameBoard[combinations[2].row][combinations[2].column];

    if(
      firstSquareSymbol && 
      firstSquareSymbol ===secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ){
      winner =player[firstSquareSymbol];
    }
  }

   const hasDraw = gameTurns.length === 9 && !winner;

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
  function handleRematch(){
    setGameTurns([]);
  }


  function handlePlayerNameChange(symbol, newName){
    setplayer(prevPlayers =>{
      return{
        ...prevPlayers,
        [symbol]: newName
      };
    });
  }

  return (
    <main>
  <div id="game-container">
    <ol id="players" className="highlight-player">
   <Player initialName="player 1" Symbol="X" isActive={activePlayer =='X'} onChangeName={handlePlayerNameChange} />
   <Player initialName="player 2" Symbol="O" isActive={activePlayer =='O'} onChangeName={handlePlayerNameChange}/>
  
    </ol>
    {(winner || hasDraw) && <GameOver winner={winner} rematch={handleRematch}/>}
  <GameBoard 
  onSelectSquare={handleSelectSquare} 
  turns={gameTurns}
  board={gameBoard}
  />
  
  </div>
  <Log turns={gameTurns}/>
  </main>
  );
}

export default App;
