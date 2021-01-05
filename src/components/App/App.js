import React, { useEffect, useState } from 'react'
import './App.css';
import { Login, Player } from '../'
import { getTokenFromUrl } from '../../spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import { useStateValue } from '../../contexts/StateContext'

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useStateValue();

  useEffect(() => {
    // fetch the token from url and clear it for security reasons
    const hashedToken = getTokenFromUrl();
    window.location.hash = "";
    const _token = hashedToken.access_token;

    // store the token
    if(_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token
      });

      spotify.setAccessToken(_token);

      spotify.getMe()
        .then(user => {
          dispatch({
            type: "SET_USER",
            user
          });
        })
        .catch(err => console.log(err));
    }
  }, []);

  return (
    <div className="App">
      { token ? (
        <Player spotify={spotify}/>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
