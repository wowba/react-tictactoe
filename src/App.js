import "./App.css"
import React, {useState} from "react"
import Board from "./components/Board";

function App() {

  const [history, setHistory] = useState([{squares: Array(9).fill(null)}])
  const [isFirstPlayer, setIsFirstPlayer] = useState(true)

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

  const current = history[history.length - 1]
  const winner = calculateWinner(current.squares)

  let status;
  if (winner) {
    status = 'winner:' + winner
  } else {
    status = `Next player : ${isFirstPlayer? "X" : "O"}`
  }

  const handleClick = (num) => {
    const newSquares = current.squares.slice();

    if(calculateWinner(newSquares) || newSquares[num]) {
      return;
    }

    newSquares[num] = isFirstPlayer ? "X" : "O"
    setHistory([...history, {squares: newSquares}])
    setIsFirstPlayer(prev => !prev)
  }

  const moves = history.map((step, move) => {
    const desc = move ?
    'Go to move #' + move :
    'Go to game Start'
    return (
      <li key={move}>
        <button>{desc}</button>
      </li>
    )
  })

  return (
    <div className="game">
      <div className="game-board">
        <Board 
          squares={current.squares}
          onClick={(num) => {handleClick(num)}}
        />
      </div>
      <div className="game-info">
        {status}
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

export default App;
