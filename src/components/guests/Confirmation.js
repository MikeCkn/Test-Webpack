import React, { Component } from 'react';

export default class Confirmation extends Component {

    render() {
    const confirmedOne = this.props.guestList.filter(guest => guest.confirmed === true)
        return (
            <div>
                <h1 className="titleConfirmation">Confirmed Guests</h1>
                <ul> {confirmedOne.map((guest, index) => 
                    <li className="animated slideInRight" key={index}>
                        <span style={{color: 'red'}}>{guest.name}</span>
                    </li>)}
                </ul>
            </div>
        );
    }
}
