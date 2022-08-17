import React from 'react';

import '../style/Task.css'

const Task = ({ task, doneTask, showDialog }) => {

    const text = task.text;
    const date = task.date;
    const id = task.id;
    const active = task.active;
    const important = task.important;
    const finishDate = task.finishDate


    const newDate = new Date(finishDate).toISOString().slice(0, 10);
    const hours = new Date(finishDate).getHours();
    const minutes = new Date(finishDate).getMinutes();
    // const seconds = new Date(finishDate).getSeconds();



    // console.log(finishDate)
    return (
        <div>

            <li>
                <span>{text}</span>
                {active ? <span>{date}</span> : null}
                {finishDate ? <span>Finish date: {newDate} {hours}:{minutes}</span> : null}
                {important && active ? <span className='priority'>Priority</span> : null}
                {active ? <button onClick={() => { doneTask(id) }}>Done</button> : null}
                <button onClick={() => { showDialog(id) }}>Delete</button>
            </li>
        </div>

    );
}

export default Task;