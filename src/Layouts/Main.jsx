import React from 'react';

import '../style/Main.css'
import ActiveTask from './ActiveTask';
import DoneTasks from './DoneTask';




const Main = ({ tasks, doneTask }) => {

    const active = [...tasks].filter(task => task.active)

    console.log(active)
    const activeTasks = active.map(task => <ActiveTask key={task.id} task={task} doneTask={doneTask} />)




    return (

        <div>
            <div className='tasks'>
                <h2>Do zrobienia:</h2>
                <ul>
                    {activeTasks}

                </ul>
            </div>

            <div className='tasks'>
                <DoneTasks />
            </div>

        </div>
    );
}

export default Main;