import { useState } from "react";
import Board from "./Components/Board/Board";
import './style/root.scss'
import { CalculateWinner } from "./Helper/WinnerCalculate";


function App() {
  const { setboard, board, isWinner, setIsWinner, WinnerNumbers, setWinnerNumbers } = CalculateWinner()
  const [isXNext, setIsXNext] = useState(false)
  const handleSquareClick = (position) => {
    if (isWinner) {
      return
    }

    if (board[position]) {
      return
    }
    setboard((prev) => {
      return prev.map((square, pos, i) => {
        if (pos === position) {
          return isXNext ? 'X' : "O"
        }
        return square
      })
    })
    setIsXNext((prev) => (!prev))
  }




  return (
    <div className="app">
      <h1>Tic-Tac-To</h1>
      <h2>{isWinner}</h2>
      {!isWinner && <h3 style={{ color: "Purple" }}>{isXNext ? 'Player X Turn' : "Player O Turn"}</h3>}
      {isWinner && <button
        className="button"
        onClick={() => {
          setboard(Array(9).fill(null))
          setIsWinner(null)
          setWinnerNumbers([])
        }}>NEW GAME</button>}
      <Board handleSquareClick={handleSquareClick} board={board} WinnerNumbers={WinnerNumbers}
        isWinner={isWinner} />
    </div>
  );
}

export default App;
