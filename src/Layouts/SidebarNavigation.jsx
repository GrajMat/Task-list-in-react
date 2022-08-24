import React from 'react';
import { NavLink } from 'react-router-dom';


const SidebarNavigation = ({ task, task2 }) => {

    const list = [
        { name: "All Tasks", path: "/" },
        { name: "To Do Tasks", path: "/to-do-tasks" },
        { name: "Done Tasks", path: "/done-tasks" },
    ]
    const navigation = [...list].map((unit, id) => (
        <li className='sidebarNav' key={id} >
            <span>
                <span style={{ marginRight: '5px' }} className="fa fa-folder" aria-hidden="true"></span>
                <NavLink to={unit.path}>{unit.name}...</NavLink>
            </span>
            {task2 ? <span>{task.length + task2.length}</span> : <span>{task.length}</span>}

        </li>))

    return (

        <>
            {navigation}
        </>
    );
}

export default SidebarNavigation;