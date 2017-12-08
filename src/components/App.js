import React, { Component } from 'react';
import {generateId} from '../helpers/guestHelpers'
import {GuestInput, GuestList} from './guests';

export default class App extends Component {

//STATE
    state = {
        guestList: [{
            id: generateId(),
            name: 'Bob',
            status: 'red',
            confirmed: false
        }, {
            id: generateId(),
            name: 'Albert',
            status: 'red',
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
                status: 'red',
                confirmed: false
            }],
            valueInput: ''
        })
    }

    confirmedStatus = (guestId) => {
        const chosenOne = this.state.guestList.filter(guest => guest.id === guestId)
        console.log(chosenOne)
        const changed = {...chosenOne[0],
            confirmed: !chosenOne[0].confirmed,
            status: chosenOne[0].status === 'red' ? 'green' : 'red'
        }
        const index = this.state.guestList.findIndex(guest => guest.id === guestId)
        this.state.guestList.splice(index, 1, changed)
        console.log(changed)
        this.forceUpdate();
    }

    // confirmedStatus = (index) => {
    //     const changed = {...this.state.guestList[index],
    //         confirmed: !this.state.guestList[index].confirmed
    //     }
    //     this.state.guestList.splice(index, 1, changed)
    //     console.log(index, changed)
    //     this.setState({
    //         guestList: [...this.state.guestList]
    //     })
    // }

    // confirmedStatus(e, guestId) {
    //     const {guestList} = this.state.guestList;
    //     const updatedStatus = guestList.map(guest => {
    //         if (guestList.id === guestId) {
    //             return {
    //                 ...guest,
    //                 confirmed: !guest.confirmed
    //             }
    //         }
    //        return guest;
    //     })
    //     this.setState({
    //         guestList: updatedStatus
    //     })
    // }


    // confirmedStatus = (id) => {
    //     const findById = (id, list) => list.find(item => item.id === id)
    //     const toggleGuest = (guest) => ({...guest,
    //         confirmed: !guest.confirmed
    //     })

    //     const updateGuest = (list, updated) => {
    //         const updatedIndex = list.findIndex(item => item.id === updated.id)
    //         return [
    //             ...list.slice(0, updatedIndex),
    //             updated,
    //             ...list.slice(updatedIndex + 1)
    //         ]
    //     }
    //     const guest = findById(id, this.state.GuestList)
    //     const toggled = toggleGuest(guest)
    //     const updatedGuests = updateGuest(this.state.guestList, toggled)
    //     this.setState({
    //         guestList: updatedGuests
    //     })
    // }


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