import React, {useState} from "react"
import Square from "./Square"
import "./Board.css"

const Board = () => {

  const [squares, setSquares] = useState(Array(9).fill(null))
  const [isFirstPlayer, setIsFirstPlayer] = useState(true)

  const handleClick = (num) => {
    const newSquares = squares.slice()

    if(calculateWinner(newSquares) || newSquares[num]) {
      return;
    }

    newSquares[num] = isFirstPlayer ? "X" : "O"
    setIsFirstPlayer(prev => !prev)
    setSquares(newSquares)
  }

  const renderSquare = (num) => {
    return (
      // 아래와 같이 리액트에서는 properties를 넘겨줄 수 있다.
      <Square 
        value={squares[num]}
        onClick={() => handleClick(num)}
      />
    )
  }

  const calculateWinner = (squares) => {
    const lines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ]
    for (let i = 0; i < lines.length; i++) {
      const [a,b,c] = lines[i]
      if (squares[a] 
        && squares[a] === squares[b] 
        && squares[a] === squares[c]
      ) {
        return squares[a]
      }
    }
    return null
  }

  const winner = calculateWinner(squares)
  let status;
  if (winner) {
    status = 'winner:' + winner
  } else {
    status = `Next player : ${isFirstPlayer? "X" : "O"}`
  }

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  )
}

export default Board