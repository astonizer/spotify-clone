import React from 'react'
import { SidebarOption } from '../';
import './Sidebar.css';

function Sidebar() {
    return (
        <div className="sidebar">
            <img classname="sidebar_logo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt=""></img>
            <SidebarOption title="Home"/>
            <SidebarOption title="Search"/>
            <SidebarOption title="Your Library"/>
        </div>
    )
}

export default Sidebar
