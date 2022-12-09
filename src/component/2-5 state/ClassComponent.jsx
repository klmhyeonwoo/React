import React, { Component } from 'react'

export default class ClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
      }
    
    //   이 컴포넌트가 그려지자마자 호출되는 컴포넌트
      componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
      }
    
    //   이 컴퍼넌트가 사라지기 직전에 호출되는 컴포넌트
      componentWillUnmount() {
        clearInterval(this.timerID);
      }
    
      tick() {
        this.setState({
          date: new Date()
        });
      }
    
      render() {
        return (
          <div>
            <h2>It is ClassComonent, {this.state.date.toLocaleTimeString()}.</h2>
          </div>
        );
      }
}
