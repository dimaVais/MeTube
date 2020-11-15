import {
    favService
} from "../../services/fav-service.js"

export function loadFavs() {
    return async dispatch => {
        const favs = await favService.loadFavs();
        console.log('loadedFavs',favs);
        dispatch({
            type: 'LOAD_FAVS',
            favs
        });
    }
}

export function addFav(favToAdd) {
    return async dispatch => {
        const fav = await favService.addFav(favToAdd);
        dispatch({
            type: 'ADD_FAV',
            fav
        });
    }
}

export function removeFav(favId) {
    return async dispatch => {
        await favService.removeFav(favId);
        dispatch({
            type: 'REMOVE_FAV',
            favId
        });
    }
}