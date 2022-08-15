import React from 'react';

import Task from './Task';
import AddTask from './AddTask'

import '../style/Main.css'





const Main = ({ tasks, doneTask, deleteTask, addTask }) => {

    const active = [...tasks].filter(task => task.active)
    const activeTasks = active.map(task => <Task key={task.id} task={task} doneTask={doneTask} deleteTask={deleteTask} />)

    const done = [...tasks].filter(task => task.active === false)
    const doneTasks = done.map(task => <Task key={task.id} task={task} deleteTask={deleteTask} />)



    return (

        <div>
            <div>
                <AddTask addTask={addTask} />
            </div>
            <div className='tasks'>
                <h2>To do:</h2>
                <ul>
                    {activeTasks}
                </ul>
            </div>

            <div className='tasks'>
                <h2>Done:</h2>
                <ul>
                    {doneTasks}
                </ul>
            </div>

        </div>
    );
}

export default Main;