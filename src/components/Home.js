import React, { Component }from 'react';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: props.Age,
      type: 0
    }
    setTimeout(() => {
      this.setState({
        type: 5
      })
    }, 3000)
  }
  numChangeClick() {
    this.setState({
      age: this.state.age + 1
    })
  }
  render() {
    return (
      <div>
        I'm Home! {this.state.type}
        My name is {this.props.user.name}!
        My age is {this.state.age}
        <button onClick={() => {this.numChangeClick()}}>点击加1</button>
      </div>
    );
  }
}

