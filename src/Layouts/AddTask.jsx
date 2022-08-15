import React, { useState } from 'react';


const AddTask = ({ addTask }) => {

    const [state, setState] = useState({
        text: "",
        isPriority: false,
        date: new Date().toISOString().slice(0, 10),
        message: ""
    })

    const handleOnChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        if (name === "text") setState({ text: value })
        else if (name === "date") setState({ date: value })
        else if (name === "checkbox") setState({ isPriority: !state.isPriority })

    }

    return (
        <div>
            <label>Task
                <input onChange={handleOnChange} type="text" name="text" value={state.text} />
            </label>
            <label>Priority
                <input onChange={handleOnChange} type="checkbox" name="checkbox" checked={state.isPriority} />
            </label>
            <label>Deadline
                <input onChange={handleOnChange} type="date" name="date" value={state.date} />
            </label>
            <button onClick={addTask}>Add</button>
        </div>
    );
}

export default AddTask;