import {
    songService
} from "../../services/song-service.js"

export function loadSongs(search) {
    return async dispatch => {
        const songs = await songService.loadSongs(search);
        dispatch({
            type: 'LOAD_SONGS',
            songs
        });
    }
}

export function setSearch(search) {
    return async dispatch => {
        dispatch({
            type: 'SET_SEARCH',
            search
        });
    }
}