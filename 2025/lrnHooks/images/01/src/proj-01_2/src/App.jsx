import React from 'react'

export class App extends React.Component {
    /* here you define a constructor method -- where you will init the state object--at this time will be
     * an empty string object
     * you need to make sure to call super(props) as to insure/let the React.Component Constructor know about
     * the props object */

    constructor(props) {
        super(props)
        this.state = { name: '' }
    }
    /* oakely, doakely, you define a method to set the name var by using
     * the this.setState method -- which will be used to handle input from the txt input field
     */
    handleChange(evt) {
        this.setState({ name: evt.target.value })
    }
    // groovy!
    render() {
        const name = this.state.name
        return (
            <div>
                <h1>Hola! Enter your name : {name}</h1>
                <input type='text' value={name} onChange={this.handleCange} />
            </div> // you still won't be able to enter anything into the field
        )
    }
}
