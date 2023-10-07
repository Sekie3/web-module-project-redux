import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES, TOGGLE_DISPLAY_FAVORITES } from '../actions/favoritesActions.js';

const initialState = {
    favorites: [],
    displayFavorites: false,
}

const favoritesReducer = (state = initialState, action) => {  
    switch(action.type) {
        case ADD_TO_FAVORITES:
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            };
        case REMOVE_FROM_FAVORITES:
            return {
                ...state, 
                favorites: state.favorites.filter(item => action.payload !== item.id)
            };
        case TOGGLE_DISPLAY_FAVORITES:
            return {
                ...state,
                displayFavorites: !state.displayFavorites
            };
        default:
            return state;
    }
}

export default favoritesReducer;
