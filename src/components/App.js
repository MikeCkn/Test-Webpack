import React, { Component } from 'react';
import {generateId} from '../helpers/guestHelpers'
import {GuestInput, GuestList} from './guests';
import '../styles/index.css';

export default class App extends Component {

//STATE
    state = {
        guestList: [{
            id: generateId(),
            name: 'Mike',
            status: '#D82D2D',
            confirmed: false
        }, {
            id: generateId(),
            name: 'Bryan',
            status: '#D82D2D',
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
                status: '#D82D2D',
                confirmed: false
            }],
            valueInput: ''
        })
    }

    confirmedStatus = (guestId) => {
        const chosenOne = this.state.guestList.filter(guest => guest.id === guestId)
        const changed = {...chosenOne[0],
            confirmed: !chosenOne[0].confirmed,
            status: chosenOne[0].status === '#D82D2D' ? '#1AAAAD' : '#D82D2D'
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