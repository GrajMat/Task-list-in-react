import React from 'react';

const AllTasks = ({ doneTasks, activeTasks }) => {
    return (
        <>
            <div className='tasks' id="activeTask">
                <div className='taskHeader'>
                    <h2 style={{ backgroundColor: '#FFA2A2' }}>To do</h2>
                    <span>{activeTasks.length}</span>
                </div>
                <ul>
                    {activeTasks}
                </ul>
            </div>

            <div className='tasks' id="doneTask">
                <div className='taskHeader'>
                    <h2 style={{ backgroundColor: '#A7E6FF' }}>Done</h2>
                    <span>{doneTasks.length}</span>
                </div>
                <ul>
                    {doneTasks}
                </ul>
            </div>
        </>

    );
}

export default AllTasks;