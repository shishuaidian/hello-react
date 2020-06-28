import React, { Component }from 'react';
import '../css/index.css';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '时帅典',
            isName: true,
            name: this.props.name,
            isColor: false
        };
    }
    changeNameClick() {
        console.log(this.props)
        this.setState({
            isName: !this.state.isName
        })
        if (this.state.isName) {
            this.setState({
                username: 'shishuaidian'
            })
        } else {
            this.setState({
                username: '时帅典'
            })
        }
        
    }
    changeColorClick() {
        this.setState({
            isColor: !this.state.isColor
        })
    }

    render() {
        const { username } = this.state;
        return (
            <div>
                <div className={this.state.isColor ? 'box-color2' : 'box-color'} onClick={() => {this.changeColorClick()}}>{this.state.name}</div>
                <button onClick={() => {this.changeNameClick()}}>{username}</button>
            </div>
        );
    }
}
