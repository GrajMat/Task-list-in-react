import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Task from './Task';
import AddTask from './AddTask'
import AllTasks from '../pages/AllTasks';
import DoneTasks from '../pages/DoneTasks';
import ToDoTasks from '../pages/ToDoTasks';

import '../style/style.css'





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
            if (a.date > b.date) return 1
            if (a.date < b.date) return -1
            return 0
        })

    }
    //sortowanie alfabetyczne

    // if (active.length >= 2) {
    //     active.sort((a, b) => {
    //         a = a.text.toLowerCase()
    //         b = b.text.toLowerCase()
    //         if (a > b) return 1
    //         if (a < b) return -1
    //         return 0
    //     })
    // }

    const activeTasks = active.map(task => <Task key={task.id} task={task} doneTask={doneTask} showDialog={showDialog} />)
    const doneTasks = done.map(task => <Task key={task.id} task={task} showDialog={showDialog} />)



    return (

        <div className='mainContainer'>

            <AddTask addTask={addTask} />
            <Routes>
                <Route path="/" element={<AllTasks activeTasks={activeTasks} doneTasks={doneTasks} />} />
                <Route path="/to-do-tasks" element={<ToDoTasks activeTasks={activeTasks} />} />
                <Route path="/done-tasks" element={<DoneTasks doneTasks={doneTasks} />} />
            </Routes>

        </div>
    );
}

export default Main;