import React, { Component } from 'react';
import {generateId} from '../helpers/guestHelpers'
import {GuestInput, GuestList} from './guests';
import '../styles/index.css';
import 'animate.css';

export default class App extends Component {

//STATE
    state = {
        guestList: [{
            id: generateId(),
            name: 'Mike',
            status: '#FFF',
            confirmed: false
        }, {
            id: generateId(),
            name: 'Bryan',
            status: '#FFF',
            confirmed: false
        }],
        valueInput: ''
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
                id: generateId(),
                name: this.state.valueInput,
                status: '#FFF',
                confirmed: false
            }],
            valueInput: ''
        })
    }

    confirmedStatus = (guestId) => {
        const chosenOne = this.state.guestList.filter(guest => guest.id === guestId)
        const changed = {...chosenOne[0],
            confirmed: !chosenOne[0].confirmed,
            status: chosenOne[0].status === '#FFF' ? '#1AAAAD' : '#FFF'
        }
        const index = this.state.guestList.findIndex(guest => guest.id === guestId)
        this.state.guestList.splice(index, 1, changed)
        this.forceUpdate();
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