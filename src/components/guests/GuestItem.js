import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Button} from 'react-bootstrap';

export default class GuestItem extends Component {

    state = {
        edit: false
    }

    displayEditInput = () => {
        this.setState({
            edit: true
        })
    }

    updateGuest = () => {
        // const name = ReactDOM.findDOMNode(this.refs.name).value.trim()
        this.props.editGuest(this.props.guest.id, this.newName.value.trim())
        this.setState({
            edit: false
        })
    }

    render() {
        const display = this.state.edit ? 
                                <div>
                                    <input type="text" ref={name => this.newName = name} defaultValue={this.props.guest.name}/>
                                    <button onClick={this.updateGuest}>CONFIRM</button>
                                </div> : 
                                <span  
                                    onClick={this.displayEditInput}
                                    style={{color: `${this.props.guest.status}`, paddingLeft: '10px'}}
                                >{this.props.guest.name}</span>
        return (
                <li className="test animated slideInLeft">
                        <input 
                            type="checkbox"
                            onClick={() => this.props.confirmedStatus(this.props.guest.id)}
                        />
                            {display}
                                <Button 
                                    onClick={() => this.props.deleteGuest(this.props.guest.id)}
                                    style={{backgroundcolor: `${this.props.guest.status}`}}
                                >X</Button>
                </li>

        );
    }
}