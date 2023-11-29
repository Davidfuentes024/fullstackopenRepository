import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    const course = 'Half Stack application development'
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14

    return (
        <div>
            <Header course = {course} />
            <Content content = {[part1+ " " +exercises1,
                part2+ " " +exercises2,
                part3+ " " +exercises3,]} />
            <Total total = {exercises1+exercises2+exercises3}/>
        </div>
    )
}

const Header = (props) =>{
    return(
        <div>
            <h1>{props.course}</h1>
        </div>
    );
}

const Part = (props) =>{
    return(
        <p>
            {props.part}
        </p>
    )
}

const Content = (props) =>{
    return(
        <div>
            <Part part = {props.content[0]} />
            <Part part = {props.content[1]} />
            <Part part = {props.content[2]} />
        </div>
    );
}

const Total = (props) =>{
    return(
        <div>
            {props.total}
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))