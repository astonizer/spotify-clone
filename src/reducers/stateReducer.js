export const initialState = {
    user: null,
    playlists: [],
    isPlaying: false,
    item: null,
    token: "BQDoZfPkJkOAhIwsUvk9m12QCxraECwX-sJyiPCmU59cELSUTRu0wCRoAHsir-HQq5LV7fETYCKf5VEkckIhGBF9URzTFH3cR_mqq5QmGC8GydHqZTRqgPYWAOVvGCJXBiSwIXl13AsA3qEGRsNVxUOIVxtMa9BbMth53MTQUvtw8dS3"
};

const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            };
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            };
        default:
            return state;
    }
}

export default reducer;