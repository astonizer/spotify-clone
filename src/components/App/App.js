import React, { useEffect, useState } from 'react'
import './App.css';
import { Login, Player } from '../'
import { getTokenFromUrl } from '../../spotify';
import SpotifyWebApi from 'spotify-web-api-js';

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    // fetch the token from url and clear it for security reasons
    const hashedToken = getTokenFromUrl();
    window.location.hash = "";
    const _token = hashedToken.access_token;

    // store the token
    if(_token) {
      setToken(_token);

      spotify.setAccessToken(_token);

      spotify.getMe()
        .then(user => console.log(user))
        .catch(err => console.log(err));
    }
  }, []);
  
  return (
    <div className="App">
      { token ? (
        <Player />
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
