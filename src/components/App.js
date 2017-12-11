import React, { Component } from 'react';

import {generateId} from '../helpers/guestHelpers'
import {GuestInput, GuestList, Confirmation} from './guests';

import '../styles/index.css';
// import 'bootstrap';
import 'animate.css';
import {Button} from 'react-bootstrap';

export default class App extends Component {

//STATE
    state = {
        guestList: [{
            id: generateId(),
            name: 'Emily',
            status: '#FFF',
            confirmed: false
        }, {
            id: generateId(),
            name: 'Ryan',
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
        const chosenOne = this.state.guestList.filter(guest => guest.id === guestId)[0]
        const changed = {...chosenOne,
            confirmed: !chosenOne.confirmed,
            status: chosenOne.status === '#FFF' ? '#419BF9' : '#FFF'
        }
        const index = this.state.guestList.findIndex(guest => guest.id === guestId)
        // this.state.guestList.splice(index, 1, changed)
        // this.forceUpdate();
        this.setState({
            guestList: [...this.state.guestList.slice(0, index), changed, ...this.state.guestList.slice(index+1)]
        })
    }

    editGuest= (guestId, newName) => {
        const index = this.state.guestList.findIndex(guest => guest.id === guestId)
        const updatedName = {...this.state.guestList[index], name: newName}
        this.setState({
            guestList: [...this.state.guestList.slice(0, index), updatedName, ...this.state.guestList.slice(index+1)]
        })
    }

    deleteGuest = (guestId) => {
        const index = this.state.guestList.findIndex(guest => guest.id === guestId)
        this.state.guestList.splice(index, 1)
        this.forceUpdate();
    }


    render() {
        return (
            <div className="App">
                
                    <GuestInput
                        valueInput={this.state.valueInput} 
                        inputChange={this.inputChange}
                        inputsubmit={this.inputSubmit}
                    />
                    <GuestList 
                        guestList={this.state.guestList}
                        confirmedStatus={this.confirmedStatus}
                        editGuest={this.editGuest}
                        deleteGuest={this.deleteGuest}
                    />
            
              
                    <Confirmation
                        guestList={this.state.guestList}
                    />
           
            </div>
        );
    }
}