import React, {useState} from "react"
import Square from "./Square"
import "./Board.css"

const Board = (props) => {

  const renderSquare = (num) => {
    return (
      // 아래와 같이 리액트에서는 properties를 넘겨줄 수 있다.
      <Square 
        value={props.squares[num]}
        onClick={() => props.onClick(num)}
      />
    )
  }

  return (
    <div className="board-wrapper">
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