import React from 'react';

const DoneTasks = ({ doneTasks }) => {
    return (
        <>
            <div className='tasks' id="activeTask">
                <div className='taskHeader'>
                    <h2 style={{ backgroundColor: '#FFA2A2' }}>To do</h2>
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