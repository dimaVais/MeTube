const initialState = {
    favs: [],
}

export function favReducer(state = initialState, action) {

    switch (action.type) {
        case 'LOAD_FAVS':
            return {
                ...state,
                favs: action.favs
            }
        case 'ADD_FAV':
            return {
                ...state,
                favs: [...state.favs, action.fav]
            }
        case 'REMOVE_FAV':
            return {
                ...state,
                favs: state.favs.filter(fav=>{
                    return (fav._id !== action.favId)
                })
            }
        default:
            return state;
    }
}