import { useState } from 'react'

export function App() {
    /*
     * remember hooks are just js functions -- meaning you can use hooks from function components
     * like any other JS function
     * you can use hooks in any function component
     *
     * useState is a hook that allows you to add state to your function components
     * useState returns an array with two elements:
     * 1. the current state value
     * 2. a function to update the state value
     */
    // to use sate via Hooks  -- call useState with the initial state value - it will teurn an array with two elements

    const [name, setName] = useState('')

    function handleChange(evt) {
        setName(evt.target.value)
    }

    return (
        <div>
            <h1>Hola! what is your name: {name}</h1>
            <input type='text' value={name} onChange={handleChange} />
        </div>
    )
}
