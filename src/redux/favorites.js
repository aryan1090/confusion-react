import * as ActionTypes from './ActionTypes';

export const favorites = (state = {
        isLoading: true,
        errMess: null,
        favorites: null
    }, action) => {
    switch(action.type) {
        case ActionTypes.ADD_FAVORITES:
            return {...state, isLoading: false, errMess: null, favorites: action.payload};

        case ActionTypes.FAVORITES_LOADING:
            return {...state, isLoading: true, errMess: null,favorites:null};

        case ActionTypes.FAVORITES_FAILED:
            if(action.payload==='Unexpected token e in JSON at position 0')
            return {...state, isLoading: false, errMess: null,favorites:null};
            else
            return {...state, isLoading: false, errMess: action.payload,favorites:null};

        default:
            return state;
    }
}