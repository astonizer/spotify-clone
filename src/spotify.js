// endpoint for directing users for login
export const authEndpoint = "https://accounts.spotify.com/authorize";

// redirect url of web app after login
const redirectUri = "http://localhost:3000/";
const clientId = "681202ab1c4344fa8153cfe6ef26e338";

// access permissions for following properties
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state"
];

// extract token from the url after redirect
export const getTokenFromUrl = () => {
    return window.location.hash.substring(1).split('&').reduce((initial, item) => {
        let parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1]);

        return initial;
    }, {});
};

// authorization url at which the request has to be made
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20")}&response_type=token&show_dialog=true`;