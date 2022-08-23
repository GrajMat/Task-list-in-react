import React, { useState } from 'react';

import '../style/style.css';


const AddTask = ({ addTask }) => {

    const [state, setState] = useState({
        text: '',
        isPriority: false,
        date: new Date().toISOString().slice(0, 10),
    })

    const handleOnChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        if (name === "text") setState({ ...state, text: value })
        else if (name === "date") setState({ ...state, date: value })
        else if (name === "checkbox") setState({ ...state, isPriority: !state.isPriority })

    }

    const createTask = (e) => {
        if (state.text.length > 0) {
            const { text, isPriority, date } = state
            addTask(text, isPriority, date);

            setState({
                text: "",
                isPriority: false,
                date: new Date().toISOString().slice(0, 10)
            })
        } else {
            const text = document.getElementById('inputText');
            text.focus()
        }

    }

    return (

        <div className='addTask'>
            <h3>Add task:</h3>

            <label>
                <input id="inputText" onChange={handleOnChange} type="text" name="text" value={state.text} placeholder="Task" />
            </label>


            <label>Important
                <input className='checkbox' onChange={handleOnChange} type="checkbox" name="checkbox" checked={state.isPriority} />
            </label>
            <label>Deadline
                <input onChange={handleOnChange} type="date" name="date" value={state.date} />
            </label>
            <button onClick={createTask}>Add</button>
        </div>
    );
}

export default AddTask;