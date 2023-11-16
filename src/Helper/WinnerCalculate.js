import { useEffect, useState } from "react"


export const CalculateWinner = () => {
    const [board, setboard] = useState(Array(9).fill(null))
    const [WinnerNumbers, setWinnerNumbers] = useState([])
    const [isWinner, setIsWinner] = useState(null)



    useEffect(() => {
        // Column 1 to 3        
        if ((board.slice(0, 3).join(" ")) === "O O O") {
            setIsWinner('PLAYER O IS WINNER');
            setWinnerNumbers([0, 1, 2])
        }
        if ((board.slice(0, 3).join(" ")) === "X X X") {
            setIsWinner('PLAYER X IS WINNER');
            setWinnerNumbers([0, 1, 2])
        }

        // Column 3 to 6
        if ((board.slice(3, 6).join(" ")) === "O O O") {
            setIsWinner('PLAYER O IS WINNER')
                ; setWinnerNumbers([3, 4, 5])
        }
        if ((board.slice(3, 6).join(" ")) === "X X X") {
            setIsWinner('PLAYER X IS WINNER');
            setWinnerNumbers([3, 4, 5])
        }

        // Column 6 to 8
        if ((board.slice(6, 9).join(" ")) === "O O O") {
            setIsWinner('PLAYER O IS WINNER');
            setWinnerNumbers([6, 7, 8])
        }
        if ((board.slice(6, 9).join(" ")) === "X X X") {
            setIsWinner('PLAYER X IS WINNER');
            setWinnerNumbers([6, 7, 8])
        }

        // Row 1       
        if ((board[0] === "X") && (board[3] === "X") && (board[6] === "X")) {
            setIsWinner('PLAYER X IS WINNER')
            setWinnerNumbers([0, 3, 6])
        }

        if ((board[0] === "O") && (board[3] === "O") && (board[6] === "O")) {
            setIsWinner('PLAYER O IS WINNER')
            setWinnerNumbers([0, 3, 6])
        }

        // Row 2      
        if ((board[1] === "X") && (board[4] === "X") && (board[7] === "X")) {
            setIsWinner('PLAYER X IS WINNER')
            setWinnerNumbers([1, 4, 7])
        }

        if ((board[1] === "O") && (board[4] === "O") && (board[7] === "O")) {
            setIsWinner('PLAYER O IS WINNER')
            setWinnerNumbers([1, 4, 7])
        }

        // Row 3     
        if ((board[2] === "X") && (board[5] === "X") && (board[8] === "X")) {
            setIsWinner('PLAYER X IS WINNER')
            setWinnerNumbers([2, 5, 8])
        }

        if ((board[2] === "O") && (board[5] === "O") && (board[8] === "O")) {
            setIsWinner('PLAYER O IS WINNER')
            setWinnerNumbers([0, 5, 8])
        }

        // Dignoal 1 to 8
        if ((board[0] === "X") && (board[4] === "X") && (board[8] === "X")) {
            setIsWinner('PLAYER X IS WINNER')
            setWinnerNumbers([0, 4, 8])
        }
        if ((board[0] === "O") && (board[4] === "O") && (board[8] === "O")) {
            setIsWinner('PLAYER O IS WINNER')
            setWinnerNumbers([0, 4, 8])
        }

        // Dignoal 1 to 8
        if ((board[2] === "X") && (board[4] === "X") && (board[6] === "X")) {
            setIsWinner('PLAYER X IS WINNER')
            setWinnerNumbers([2, 4, 6])
        }
        if ((board[2] === "O") && (board[4] === "O") && (board[6] === "O")) {
            setIsWinner('PLAYER O IS WINNER')
            setWinnerNumbers([2, 4, 6])
        }

        if (!isWinner && board.every(element => element !== null)) {
            setIsWinner('DRAW')
        }
    }, [board, isWinner])


    return { setboard, board, isWinner, setIsWinner, WinnerNumbers, setWinnerNumbers }

}