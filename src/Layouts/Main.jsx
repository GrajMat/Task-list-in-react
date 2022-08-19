import React from 'react';

import Task from './Task';
import AddTask from './AddTask'

import '../style/Main.css'





const Main = ({ tasks, doneTask, showDialog, addTask }) => {

    const active = [...tasks].filter(task => task.active)
    const done = [...tasks].filter(task => task.active === false)

    if (done.length >= 2) {
        done.sort((a, b) => {
            if (a.finishDate > b.finishDate) return -1
            if (a.finishDate < b.finishDate) return 1
            return 0
        })

    }

    if (active.length >= 2) {
        active.sort((a, b) => {
            a = a.text.toLowerCase()
            b = b.text.toLowerCase()
            if (a > b) return 1
            if (a < b) return -1
            return 0
        })
    }

    const activeTasks = active.map(task => <Task key={task.id} task={task} doneTask={doneTask} showDialog={showDialog} />)
    const doneTasks = done.map(task => <Task key={task.id} task={task} showDialog={showDialog} />)



    return (

        <div>

            <AddTask addTask={addTask} />

            <div className='tasks'>
                <div>
                    <h2 style={{ backgroundColor: '#FFA2A2' }}>To do</h2>
                </div>
                <ul>
                    {activeTasks}
                </ul>
            </div>

            <div className='tasks'>
                <div>
                    <h2 style={{ backgroundColor: '#A7E6FF' }}>Done</h2>
                </div>
                <ul>
                    {doneTasks}
                </ul>
            </div>

        </div>
    );
}

export default Main;