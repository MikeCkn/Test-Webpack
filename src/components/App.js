import React, { Component } from 'react';
import {ComponentOne} from './componentsTry';

export default class App extends Component {

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
                <ComponentOne
                    valueInput={this.state.valueInput} 
                    inputChange={this.inputChange}
                    inputsubmit={this.inputSubmit}/>

                <ul>
                    {this.state.guestList.map((guest, index) => 
                    <li key={index}>
                        <input type="checkbox"/>
                        {guest.name}
                    </li>)}
                </ul>
            </div>
        );
    }
}