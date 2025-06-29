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
}
