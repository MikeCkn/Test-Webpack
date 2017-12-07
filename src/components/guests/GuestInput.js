import React, { Component } from 'react';

export default class GuestInput extends Component {

    render() {
        return (
            <div>
                <input 
                    type="text" 
                    placeholder="Add a guest"
                    value={this.props.valueInput} 
                    onChange={this.props.inputChange} 
                />
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
