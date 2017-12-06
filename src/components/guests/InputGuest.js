import React, { Component } from 'react';

export default class InputGuest extends Component {

    render() {
        return (
            <div>
                <input 
                type="text" 
                onChange={this.props.inputChange} 
                value={this.props.valueInput} 
                placeholder="Add a guest"/>
                <button onClick={this.props.inputsubmit}>ADD</button>
            </div>
        );
    }
}



    // getValue = (e) => {
    //     e.preventDefault();
    //     const vInput = this.vInput.value
    //     console.log(vInput)
    //     this.props.inputChange(vInput)
    //     this.vForm.reset();

    // }

    //         <form
    //             onSubmit={(e) => this.getValue(e)}
    //             ref={l=>this.vForm=l}>
    //             <input 
    //             type="text"  
    //             placeholder="Add a guest"
    //             ref={l=>this.vInput=l}/>
    //             <button>ADD</button>
    //         </form>
