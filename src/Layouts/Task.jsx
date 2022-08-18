import React from 'react';

import '../style/Task.css';
import "../fonts/font-awesome-4.7.0/css/font-awesome.css";

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

    const icon = () => {
        if (important && active) return <span style={{ color: 'red' }} class="fa fa-exclamation-circle" aria-hidden="true"></span>
        else if (active) return <span class="fa fa-exclamation-circle" aria-hidden="true"></span>
        else return <span class="fa fa-check-circle-o" aria-hidden="true"></span>
    }


    // console.log(finishDate)
    return (

        <li>
            {/* {important && active ? <span style={{ color: 'red' }} class="fa fa-exclamation-circle" aria-hidden="true"></span> : <span class="fa fa-check-circle-o" aria-hidden="true"></span>}
            {active ? <span class="fa fa-exclamation-circle" aria-hidden="true"></span> : <span class="fa fa-check-circle-o" aria-hidden="true"></span>} */}
            {icon()}

            <span className='text'>{text}</span>
            {active ? <span className='date'>{date}</span> : null}
            {finishDate ? <span>Finish date: {newDate} {hours}:{minutes}</span> : null}
            {active ? <button className='doneBtn' onClick={() => { doneTask(id) }}>Done</button> : null}
            <button className='deleteBtn' onClick={() => { showDialog(id) }}>Delete</button>
        </li>

    );
}

export default Task;