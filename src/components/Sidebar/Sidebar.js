import React from 'react'
import { SidebarOption } from '../';
import './Sidebar.css';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useStateValue } from '../../contexts/StateContext';

function Sidebar() {
    const [{ playlists }, dispatch] = useStateValue();

    return (
        <div className="sidebar">
            <img classname="sidebar_logo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt=""></img>
            <SidebarOption title="Home" Icon={HomeIcon} />
            <SidebarOption title="Search" Icon={SearchIcon} />
            <SidebarOption title="Your Library" Icon={LibraryMusicIcon} />
            <br />
            <strong className="sidebar_title">PLAYLISTS</strong>
            <hr />
            {playlists?.items?.map(playlist => (
                <SidebarOption title={playlist.name} />
            ))}
        </div>
    )
}

export default Sidebar
