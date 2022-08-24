import React from 'react';

const ToDoTasks = ({ activeTasks }) => {
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
        </>
    );
}

export default ToDoTasks;