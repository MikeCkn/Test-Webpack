import React, { Component } from 'react';
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
                                        <div className="divEditInput ">
                                            <input 
                                                className="guestCheckbox animated fadeInDown"
                                                type="checkbox"
                                                onClick={() => this.props.confirmedStatus(this.props.guest.id)}
                                            />                                        
                                            <input 
                                                className="editInput animated flipInX"
                                                type="text" 
                                                ref={input => this.newName = input} 
                                                defaultValue={this.props.guest.name}
                                            />
                                            <i 
                                                onClick={this.updateGuest} 
                                                className="fa fa-check" 
                                                aria-hidden="true">
                                            </i>
                                        </div> 
                                        : 
                                        <div className="alignGuestElements">
                                            <input 
                                                className="guestCheckbox animated fadeInDown"
                                                type="checkbox"
                                                onClick={() => this.props.confirmedStatus(this.props.guest.id)}
                                            />
                                            <span  
                                                className="guestName animated flipInX"
                                                onClick={this.displayEditInput}
                                                style={{color: `${this.props.guest.status}`}}
                                            >
                                                {this.props.guest.name}
                                            </span>
                                            <a 
                                                className="animated fadeInUp iconDeleteGuest"
                                                href="#"
                                                onClick={() => this.props.deleteGuest(this.props.guest.id)}
                                            >
                                                <i className="fa fa-ban" aria-hidden="true"></i>
                                            </a>
                                        </div>

        return (
                <li>{display}</li>
            );
        }
    }