import React, { Component } from 'react';

export default class GuestInput extends Component {

    render() {
        return (
            <div>
                <input 
                    type="text" 
                    value={this.props.valueInput} 
                    placeholder="Mike"
                    onChange={this.props.inputChange} 
                    className="addGuestInput animated slideInDown"
                />
                <button 
                    onClick={this.props.inputsubmit}
                    className="buttonGuestAdd animated slideInDown"
                    >ADD
                </button>
            </div>
        );
    }
}