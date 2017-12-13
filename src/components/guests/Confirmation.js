import React, { Component } from 'react';

export default class Confirmation extends Component {

    render() {
    const confirmedOne = this.props.guestList.filter(guest => guest.confirmed)
        return (
            <div>
                <div><p className="titleConfirmation">Confirmed Guests</p></div>
                <ul> {confirmedOne.map((guest, index) => 
                    <li key={index} className="animated slideInRight">
                        <span className="guestNameConfirmed">
                            {guest.name}
                        </span>
                    </li>)}
                </ul>
            </div>
        );
    }
}
