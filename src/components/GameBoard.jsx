import {useState} from 'react';

const initialGameBoard=[
    [null,null,null],
    [null,null,null],
    [null,null,null],
];

export default function GameBoard(){
    const [GameBoard,setGameBoard]=useState(initialGameBoard);

    function handleButtonClick(rowIndex,colIndex){
        setGameBoard((prevGameBoard)=>{
            const updateBoard=[...prevGameBoard.map(innerArray=>[...innerArray])];
            updateBoard[rowIndex][colIndex]='X';
            return updateBoard;
        })
    }

    return (
        <>
        <ol id="game-board">
            {
                GameBoard.map((row,rowIndex)=>(<li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol,colIndex)=>(<li key={colIndex}>
                            <button onClick={()=>handleButtonClick(rowIndex,colIndex)}>{playerSymbol}</button>
                            </li>))}
                    </ol>
                </li>))
            }
        </ol>
        </>
    )
}