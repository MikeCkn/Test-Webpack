import React, { Component } from 'react';

export default class GuestList extends Component {

    render() {
        return (
            <div>
                <ul> {this.props.guestList.map((guest, index) => 
                    <li className="animated slideInLeft" key={index}>
                        <input 
                            type="checkbox" 
                            onClick={() => this.props.confirmedStatus(guest.id)}
                            className="test"
                        />
                        <span style={{color: `${guest.status}`, paddingLeft: '10px'}}>{guest.name}</span>
                    </li>)}
                </ul>
            </div>
        );
    }
}