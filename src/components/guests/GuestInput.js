import React, { Component } from 'react';

export default class GuestInput extends Component {

    render() {
        return (
            <div>
                <input 
                    type="text" 
                    onChange={this.props.inputChange} 
                    value={this.props.valueInput} 
                    placeholder="New guest..."
                    className="addGuestInput animated slideInDown"
                />
                <button 
                    onClick={this.props.inputsubmit}
                    className="buttonGuestAdd animated slideInDown"
                >ADD</button>
            </div>
        );
    }
}