import { useState } from "react";

export default function Player({name, symbol}) {
    const [isEditing,setIsEditing]=useState(false);

    function editPlayer(){
        setIsEditing(true);
    }
  return (
    <>
      
          <li>
            <span className="Player">
            {!isEditing && <span className="player-name">{name}</span>}
            {isEditing && <input type="text" />}
            <span className="player-symbol">{symbol}</span>
            </span>
          </li>
       <button onClick={editPlayer}>Edit</button>
    </>
  );
}
