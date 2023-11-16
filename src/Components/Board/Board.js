import React from "react";
import Chambers from "../Chambers/Chambers";


const Board = ({ board, handleSquareClick, WinnerNumbers }) => {

  const renderSquare = (position, className) => {
    return (<Chambers value={board[position]} onClick={() => handleSquareClick(position)} className={className} />)
  }
  const GetWinner = (number) => (WinnerNumbers.filter((state) => state === number)[0])


  return (
    <div className="board">
      <div className="board-row" >
        {renderSquare(0, GetWinner(0) === 0 && 'winningRow')}
        {renderSquare(1, GetWinner(1) === 1 && 'winningRow')}
        {renderSquare(2, GetWinner(2) === 2 && 'winningRow')}
      </div>
      <div className="board-row">
        {renderSquare(3, GetWinner(3) === 3 && 'winningRow')}
        {renderSquare(4, GetWinner(4) === 4 && 'winningRow')}
        {renderSquare(5, GetWinner(5) === 5 && 'winningRow')}
      </div>
      <div className="board-row">
        {renderSquare(6, GetWinner(6) === 6 && 'winningRow')}
        {renderSquare(7, GetWinner(7) === 7 && 'winningRow')}
        {renderSquare(8, GetWinner(8) === 8 && 'winningRow')}
      </div>
    </div>
  );
};

export default Board;
