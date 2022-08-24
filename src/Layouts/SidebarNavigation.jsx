import React from 'react';
import { NavLink } from 'react-router-dom';


const SidebarNavigation = ({ activeTasks, doneTasks }) => {

    const list = [
        { name: "All Tasks", path: "/" },
        { name: "To Do Tasks", path: "/to-do-tasks" },
        { name: "Done Tasks", path: "/done-tasks" },
    ]



    const navigation = [...list].map((unit, id) => (
        // console.log(list[id])
        <li className='sidebarNav' key={id} >
            <NavLink to={unit.path}>
                <span>
                    <span style={{ marginRight: '5px' }} className="fa fa-folder" aria-hidden="true"></span>
                    {unit.name}...
                </span>

                {unit.path === '/' ? <span>{activeTasks.length + doneTasks.length}</span> : null}
                {unit.path === '/to-do-tasks' ? <span>{activeTasks.length}</span> : null}
                {unit.path === '/done-tasks' ? <span>{doneTasks.length}</span> : null}


            </NavLink>
        </li>))



    return (
        <>
            {navigation}
        </>
    );
}

export default SidebarNavigation;