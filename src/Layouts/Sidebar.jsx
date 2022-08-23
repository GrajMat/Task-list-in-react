import React, { useState } from 'react';

import SidebarNavLine from './SidebarNavLine';

import '../style/style.css'
import "../fonts/font-awesome-4.7.0/css/font-awesome.css";



const Sidebar = ({ active, done }) => {

    const [sidebarVisibility, setSidebarVisibility] = useState(true);

    const toggleSidebarVisibility = () => {
        setSidebarVisibility(!sidebarVisibility)
    }

    const sidebar = () => {
        if (sidebarVisibility) {
            return (
                <div className='sidebar visible'>
                    <button className="fa fa-angle-left fa-2x" aria-hidden="true" onClick={toggleSidebarVisibility}></button>
                    <ul className='sidebarBtnContainer'>
                        <SidebarNavLine task={active} task2={done} name={'All Tasks'} />
                        <SidebarNavLine task={active} name={'Active Tasks'} />
                        <SidebarNavLine task={done} name={'Done Tasks'} />
                    </ul>

                </div >)
        } else {
            return (
                <div className='sidebar hidden'>
                    <button className="fa fa-angle-right fa-2x" aria-hidden="true" onClick={toggleSidebarVisibility}></button>
                </div>
            )

        }
    }



    return (
        <>
            {sidebar()}
        </>
    );
}

export default Sidebar;