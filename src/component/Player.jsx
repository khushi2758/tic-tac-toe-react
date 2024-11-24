import { useState } from "react";
export default function Player({initialName,Symbol, isActive,onChangeName}){
    const [isEdeting, setIsEdeting]= useState(false);
    const[playerName,setPlayerName] = useState(initialName);
   function handleEditClick(){
    setIsEdeting((edeting)=> !edeting);
    if (isEdeting){
    onChangeName(Symbol,playerName);
    }
   }
   function handleChange(event){
    setPlayerName(event.target.value);
   }
   let editablePlayerName = <span className="player-name">{playerName}</span>;
   let buttonCaption = 'Edit';
   if(isEdeting){
    editablePlayerName= <input type="text" required defaultValue={playerName} onChange={handleChange}/>
    buttonCaption="Save"
   }
    return (
        <li className={isActive ? 'active': undefined}>
         <span className="player">
            {editablePlayerName}
    <span className="player-symbol">{Symbol}</span>
    </span>
    <button onClick={handleEditClick}>{buttonCaption}</button>
    </li>
    );

}
