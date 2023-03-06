import React from "react"
import "./Square.css"

export default class Square extends React.Component {
  constructor(props) {
    // 클래스형 컴포넌트에서는 super(props)를 생성자에서 선언해야 this 키워드 사용 가능.
    // 즉 super 키워드를 통해 부모 클래스의 메서드를 불러오는 것.
    // 리액트 컴포넌트에서 제공하는 기능을 사용하기 위해선 super 키워드를 최상단에서 선언해야 한다.
    // 또한 props 속성을 초기화 하기 위해 부모 컴포넌트에 전달한다.
    super(props)
    this.state = {
      value: null
    }
    // 아래와 같이 생성자 내부에서 props를 사용하기 위해 super키워드에 props를 추가한다.
    console.log(this.props)
  }

  render() {
      return (
        <button className="square" onClick={() => {this.setState({value: 'X'})}}>
          {/* 넘겨받은 property를 아래처럼 받을 수 있다. */}
          {this.state.value}
        </button>
      )
  }
}