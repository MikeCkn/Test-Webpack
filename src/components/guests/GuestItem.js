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
                                        <div>
                                            <input 
                                                className="test1"
                                                type="text" 
                                                ref={input => this.newName = input} 
                                                defaultValue={this.props.guest.name}
                                            />
                                            <i 
                                                onClick={this.updateGuest} 
                                                class="fa fa-check" 
                                                aria-hidden="true">
                                            </i>
                                        </div> 
                                        : 
                                        <span  
                                            onClick={this.displayEditInput}
                                            style={{color: `${this.props.guest.status}`}}
                                        >
                                            {this.props.guest.name}
                                        </span>
        return (
                <li className="alignGuestElements">
                    <input 
                        className="guestCheckbox animated fadeInDown"
                        type="checkbox"
                        onClick={() => this.props.confirmedStatus(this.props.guest.id)}
                    />
                    <span className="guestName animated bounceInLeft">
                        {display}
                    </span>
                    <a 
                        className="animated fadeInUp"
                        href="#"
                        onClick={() => this.props.deleteGuest(this.props.guest.id)}
                    >
                        <i class="fa fa-ban" aria-hidden="true"></i>
                    </a>

                </li>
            );
        }
    }