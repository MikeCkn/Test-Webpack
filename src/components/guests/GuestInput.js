import React, { Component } from 'react';

export default class GuestInput extends Component {

    render() {
        return (
            <div>
                <input 
                    type="text" 
                    onChange={this.props.inputChange} 
                    value={this.props.valueInput} 
                    placeholder="Add a guest"
                    className="addGuestInput"
                />
                <button onClick={this.props.inputsubmit}>ADD</button>
            </div>
        );
    }
}