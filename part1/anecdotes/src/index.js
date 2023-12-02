import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {

    const [selected, setSelected] = useState(0);
    const initialPoints = [0, 0, 0, 0, 0, 0];
    const [points, setPoints] = useState([...initialPoints]);
    const [maxVotesIndex, setMaxVotesIndex] = useState(0);

    const handleRandomSelection = () => {

        let random = Math.floor(Math.random() * anecdotes.length)
        setSelected(random);

    }

    const handleVote = () => {
        const newPoints = [...points];
        newPoints[selected] += 1;
        setPoints(prevPoints => {
            const newPoints = [...prevPoints];
            newPoints[selected] += 1;

            if (newPoints[selected] > newPoints[maxVotesIndex]) {
                setMaxVotesIndex(selected);
            }

            return newPoints;
        });
    }

    return (
        <div>
            <button onClick={handleRandomSelection}>Random Anecdote</button>
            <button onClick={handleVote}>Vote</button>
            <br />
            <p>{props.anecdotes[selected]}</p>
            <p>Points: {points[selected]}</p>
            <h2>Top Voted Anecdote</h2>
            <p>{props.anecdotes[maxVotesIndex]}</p>
            <p>Points: {points[maxVotesIndex]}</p>
        </div>
    )
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)