import React, { Component } from 'react';
import {GuestInput, GuestList} from './guests';

export default class App extends Component {

//STATE
    state = {
        valueInput: '',
        // status: 'red',
        guestList: [{
            id: 1,
            name: 'Bob',
            status: 'red',
            confirmed: false
        }, {
            id: 2,
            name: 'Albert',
            status: 'red',
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
        const generateId = () => Math.floor(Math.random()*10000);
        this.setState({
            guestList: [...this.state.guestList, {
                id : generateId(),
                name: this.state.valueInput,
                status: 'red',
                confirmed: false
            }],
            valueInput: ''
        })
    }

    confirmedStatus = () => {
        // const color =  this.state.status;
        // color == 'red' ? this.setState({status: 'green'}) : this.setState({status: 'red'})
        // const toggleTodo = (todo) => ({...todo, isComplete: !todo.isComplete})
        this.setState({
           guestList: {...guestList, confirmed: true, status: 'green'}
        })
    }

    render() {
        return (
            <div>
                <GuestInput
                    valueInput={this.state.valueInput} 
                    inputChange={this.inputChange}
                    inputsubmit={this.inputSubmit}
                />

                <GuestList 
                    guestList={this.state.guestList}
                    confirmedStatus={this.confirmedStatus}
                />    
            </div>
        );
    }
}