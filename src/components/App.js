import React, { Component } from 'react';
import {GuestInput, GuestList} from './guests';

export default class App extends Component {

//STATE
    state = {
        valueInput: '',
        status: 'red',
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
            guestList: [...this.state.guestList, {
                name: this.state.valueInput,
                confirmed: false
            }],
            valueInput: ''
        })
    }

    confirmedStatus = () => {
        const color =  this.state.status;
        color == 'red' ? this.setState({status: 'green'}) : this.setState({status: 'red'})
    }

    render() {
        return (
            <div>
                <GuestInput
                    valueInput={this.state.valueInput} 
                    inputChange={this.inputChange}
                    inputsubmit={this.inputSubmit}/>

                <GuestList 
                    guestList={this.state.guestList}
                    confirmedStatus={this.confirmedStatus}
                    status={this.state.status}/>    
            </div>
        );
    }
}