import React, { useEffect, useState } from 'react';


import SidebarNavigation from './SidebarNavigation';


import '../style/style.css'
import "../fonts/font-awesome-4.7.0/css/font-awesome.css";



const Sidebar = ({ active, done }) => {

    const [sidebarVisibility, setSidebarVisibility] = useState(false);

    // console.log(typeof (width));
    useEffect(() => {
        const width = window.innerWidth;

        if (width > 766) {
            setSidebarVisibility(true)
        }
    }, []);

    const toggleSidebarVisibility = () => {

        setSidebarVisibility(!sidebarVisibility)
    }


    const sidebar = () => {
        if (sidebarVisibility) {
            return (
                <div className='sidebar  visible'>
                    <button
                        className="fa fa-angle-left fa-2x"
                        aria-hidden="true"
                        onClick={toggleSidebarVisibility}>
                    </button>
                    <nav>
                        <ul>
                            <SidebarNavigation activeTasks={active} doneTasks={done} />
                        </ul>
                    </nav>

                </div >
            )
        } else {
            return (
                <div className='sidebar  hidden'>
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