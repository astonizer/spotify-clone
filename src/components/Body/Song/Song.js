import React from 'react'
import './Song.css';

function Song({ track }) {
    return (
        <div className="song">
            <img className="song_album" src={track.album.images[0].url} alt=""></img>
            <div className="song_info">
                <h1>{track.name}</h1>
                <p>
                    {track.artists.map(artist => artist.name).join(", ")} -{" "}
                    {track.album.name}
                </p>
            </div>
        </div>
    )
}

export default Song
