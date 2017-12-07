import React, { Component } from 'react';

export default class GuestList extends Component {

    render() {
        return (
            <div>
                <ul> {this.props.guestList.map(guest => 
                    <li key={guest.id}>
                        <input type="checkbox" onClick={this.props.confirmedStatus} checked={guest.confirmed}/>
                        <span style={{color: `${guest.status}`}}>{guest.name}</span>
                    </li>)}
                </ul>
            </div>
        );
    }
}