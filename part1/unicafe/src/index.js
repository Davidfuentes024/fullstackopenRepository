import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const setGoodClick = () =>{
        return(
            setGood(good + 1)
        )
    }

    const setNeutraklClick = () =>{
        setNeutral(neutral + 1)
    }

    const setBadClick = () =>{
        setBad(bad + 1)
    }

    return (
        <div>
            <Button onClick={setGoodClick} text="Goog"/>
            {good}
            <Button onClick={setNeutraklClick} text="Neutral"/>
            {neutral}
            <Button onClick={setBadClick} text="Bad "/>
            {bad}
        </div>
    )
}


const Button = ({ onClick, text }) => (
    <div>
        <button onClick={onClick}>
            {text}
        </button>
        <br/>
    </div>
)

ReactDOM.render(<App />,
    document.getElementById('root')
)