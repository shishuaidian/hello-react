import React, { Component }from 'react';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
        username: ''
    };

    this.onChange = this.onChange.bind(this);
}

onChange(e) {
    console.log(e)
    this.setState({ [e.target.name]: e.target.value });
}

render() {
    const { username } = this.state;

    return (
        <input type="text" placeholder="Email" className="form-control" name="username" autoComplete="email" value={username} onChange={this.onChange} />
    );
}
}

