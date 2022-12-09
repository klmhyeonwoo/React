import React, { Component } from 'react'

export default class ClassComponent extends Component {
    constructor(props) {
        super(props);
        console.log("constructor");
        this.state = { date: new Date()};
        // 다른 메서드에서 this.state에 접근을 하려면 해당 메서드에 바인딩을 해줘야 사용이 가능하다.
        this.handleClick = this.handleClick.bind(this);
    }

    // 생성될 때
    componentDidMount() {
        console.log("componentDidMount");
        this.timerID = setInterval(() => this.tick(), 5000);
    }
    
    // 수정될 때
    componentDidUpdate() {
        console.log("componentDidUpdate");
    }

    // 소멸 및 제거될 때 
    componentWillUnmount() {
        console.log("componentWillUnmount");
        clearInterval(this.timerID);
    }

    tick() {
        console.log('thik');
        this.setState({date: new Date()});
    }

    // handleClick() {
    //     alert(this.state.date);
    // }

    // arrow function을 사용하면, 바깥과의 컨텍스트를 쉐어해서 binding을 할 필요가 없다.
    handleClick = () => {
        alert(this.state.date);
    }

  render() {
      console.log("render");
    return (
      <div>
          <button onClick={this.handleClick}>TEST</button>
          <h2></h2>ClassComponent(2-6), {this.state.date.toLocaleTimeString()}<h2/>
          </div>
    )
  }
}
