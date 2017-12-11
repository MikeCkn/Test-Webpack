import React, { Component } from 'react';

import GuestItem from './GuestItem';

export default class GuestList extends Component {

    render() {
        return (
            <div>
                <ul> {this.props.guestList.map((guest, index) => 
                    <GuestItem 
                        key={index} 
                        guest={guest}
                        confirmedStatus={this.props.confirmedStatus}
                        editGuest={this.props.editGuest}
                        deleteGuest={this.props.deleteGuest}
                    />)}
                </ul>
            </div>
        );
    }
}