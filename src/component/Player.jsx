import { useState } from "react";
export default function Player({name,Symbol}){
    const [isEdeting, setIsEdeting]= useState(false);
   function handleEditClick(){
    setIsEdeting(!isEdeting);
   }
   let playerName = <span className="player-name">{name}</span>;
   let buttonCaption = 'Edit';
   if(isEdeting){
    playerName= <input type="text" required defaultValue={name}/>
    buttonCaption="Save"
   }
    return (
        <li>
         <span className="player">
            {playerName}
    <span className="player-symbol">{Symbol}</span>
    </span>
    <button onClick={handleEditClick}>{buttonCaption}</button>
    </li>
    );

}
