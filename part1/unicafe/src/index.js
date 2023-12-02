import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const setGoodClick = () => {
        return (
            setGood(good + 1)
        )
    }

    const setNeutraklClick = () => {
        setNeutral(neutral + 1)
    }

    const setBadClick = () => {
        setBad(bad + 1)
    }

    const all = () => bad + neutral + good

    const positive = () => good / all() * 100
    const average = () => (bad * -1 + neutral * 0 + good * 1) / (bad + neutral + good)

    return (
        <div>
            <h1>give feedback</h1>
            <Button onClick={setGoodClick} text="Goog"/>
            {good}
            <Button onClick={setNeutraklClick} text="Neutral"/>
            {neutral}
            <Button onClick={setBadClick} text="Bad "/>
            {bad}
            <Statistics average={average()} all={all()} positive={positive()}/>
        </div>
    )
}

const Statistics = ({average, all, positive}) => {
    if (all != 0) {
        return (
            <div>
                <h3>Statistics</h3>
                <table>
                    <tbody>
                        <StatisticLine text={"average"} value={average}/>
                        <StatisticLine text={"all"} value={all}/>
                        <StatisticLine text={"positive"} value={positive}/>
                    </tbody>
                </table>
            </div>
        )
    }
    return (
        <div>
            <h3>No feedback given</h3>
        </div>
    )
}

const StatisticLine = ({text, value}) => {
    if (text === "positive") {
        return (
            <tr>
                <td>{text} {value}%</td>
            </tr>
        )
    }
    return (
        <tr>
            <td>{text} {value}</td>
        </tr>
    )
}

const Button = ({onClick, text}) => (
    <div>
        <button onClick={onClick}>
            {text}
        </button>
        <br/>
    </div>
)

ReactDOM.render(<App/>,
    document.getElementById('root')
)