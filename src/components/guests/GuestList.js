import React, { Component } from 'react';

export default class GuestList extends Component {

    render() {
        return (
            <div>
                <ul> {this.props.guestList.map((guest, index) => 
                    <li key={index}>
                        <input type="checkbox" onClick={this.props.confirmedStatus}/>
                        <span style={{color: `${this.props.status}`}}>{guest.name}</span>
                    </li>)}
                </ul>
            </div>
        );
    }
}