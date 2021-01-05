import React from 'react'
import './Player.css';
import { Sidebar, Body, Footer } from '../';

function Player({ spotify }) {
    return (
        <div className="player">
            <div className="player_body">
                <Sidebar />
                <Body />
            </div>
            <Footer />
        </div>
    )
}

export default Player
