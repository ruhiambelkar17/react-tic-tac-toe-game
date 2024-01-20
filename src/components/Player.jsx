import { useState } from "react";


export default function Player({name, symbol}) {
    const [isEditing,setIsEditing]=useState(false);
    const [playerName,setPlayerName]=useState(name);

    function editPlayer(){
        setIsEditing(!isEditing);
    }

    function handleChange(event){
        setPlayerName(event.target.value);
    }
  return (
    <>
      
          <li>
            <span className="Player">
            {!isEditing && <span className="player-name">{playerName}</span>}
            {isEditing && <input type="text" required value={playerName} onChange={handleChange}/>}
            <span className="player-symbol">{symbol}</span>
            </span>
          </li>
       <button onClick={editPlayer}>{ isEditing ? "Save":"Edit"}</button>
       
    </>
  );
}
