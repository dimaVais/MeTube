const initialState = {
    songs: [],
    search: 'disturbed'
}

export function songReducer(state = initialState, action) {

    switch (action.type) {
        case 'LOAD_SONGS':
            return {
                ...state,
                songs: action.songs
            }
        case 'CURR_PLAYING':
            return {
                ...state,
                currPlaying: {
                    ...state.currPlaying
                }
            }
        case 'SET_SEARCH':
            return {
                ...state,
                search: action.search
            }
        default:
            return state;
    }
}