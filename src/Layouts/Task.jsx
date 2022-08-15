import React from 'react';

const Task = ({ task, doneTask, deleteTask }) => {

    // console.log(text)
    const text = task.text;
    const date = task.date;
    const id = task.id;
    const active = task.active;
    // const important = task.important;


    return (
        <div>

            <li>
                <span>{text}</span>
                <span>{date}</span>
                {active ? <button onClick={() => { doneTask(id) }}>Done</button> : null}
                {/* <button onClick={() => { doneTask(id) }}>Done</button> */}
                <button onClick={() => { deleteTask(id) }}>Delete</button>
            </li>
        </div>

    );
}

export default Task;