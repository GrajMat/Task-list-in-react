import React from 'react';

const SidebarNavLine = ({ name, task, task2 }) => {

    return (
        <li className='sidebarNav'>

            <span>
                <span style={{ marginRight: '5px' }} className="fa fa-folder" aria-hidden="true"></span>
                {name + '...'}
            </span>
            {task2 ? <span>{task.length + task2.length}</span> : <span>{task.length}</span>}
        </li>
    );
}

export default SidebarNavLine;