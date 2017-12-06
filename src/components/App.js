import React, { Component } from 'react';
import {InputGuest, GuestList} from './guests';

export default class App extends Component {

//STATE
    state = {
        valueInput: '',
        guestList: [{
            name: 'Bob',
            confirmed: false
        }, {
            name: 'Albert',
            confirmed: false
        }],
    }

//FUNCTIONS
    inputChange = (e) => {
        this.setState({
            valueInput: e.target.value
        })
    }

    inputSubmit = (e) => {
        e.preventDefault()
        this.setState({   
           guestList: [...this.state.guestList, {name: this.state.valueInput, confirmed: false}],
           valueInput: ''
        })
    }         

    render() {
        return (
            <div>
                <InputGuest
                    valueInput={this.state.valueInput} 
                    inputChange={this.inputChange}
                    inputsubmit={this.inputSubmit}/>

                <GuestList 
                    guestList={this.state.guestList}/>    
            </div>
        );
    }
}