import React from 'react';

const DoneTasks = ({ doneTasks }) => {
    return (
        <>
            <div className='tasks' id="activeTask">
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

export default DoneTasks;