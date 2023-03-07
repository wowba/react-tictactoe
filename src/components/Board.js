import React from "react"
import Square from "./Square"
import "./Board.css"

// 클래스형 컴포넌트, ES7 익스텐션 설치시 rcc 로 작성 가능 
export default class Board extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      squares: Array(9).fill(null),
    }
  }

  handleClick(num) {
    const squares = this.state.squares.slice()
    squares[num] = "X"
    this.setState({ squares: squares})
  }

  renderSquare(num) {
    return (
      // 아래와 같이 리액트에서는 properties를 넘겨줄 수 있다.
      <Square 
        value={this.state.squares[num]}
        onClick={() => this.handleClick(num)}
      />
    )
  }

  render() {
    return (
      <div>
        <div className="status">Next Player</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    )
  }
}
