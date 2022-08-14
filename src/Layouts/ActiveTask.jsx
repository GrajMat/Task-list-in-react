import React from 'react';

const ActiveTask = ({ task, doneTask }) => {

    // console.log(text)
    const text = task.text;
    const date = task.date;
    const id = task.id;
    // const important = task.important;


    return (
        <div>

            <li>
                <span>{text}</span>
                <span>{date}</span>
                <button onClick={() => { doneTask(id) }}>Zrobione</button>
            </li>
        </div>

    );
}

export default ActiveTask;