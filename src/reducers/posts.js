


import {
    FETCH_POSTS_ERROR,
    FETCH_POSTS_LOADING,
    FETCH_POSTS_LOADED,
    FETCH_POSTS_ERROR_CLEAR,
    FETCH_POSTS_SUCCESS
} from '../actions/types';



const DEFAULT_STATE = { 
    data: [], 
    errorMsg: null, 
    loadingMsg: null 
};

export default ( state = DEFAULT_STATE, action ) => {

    switch ( action.type ) {

        case FETCH_POSTS_SUCCESS:
            const posts = action.payload.data;
            return( posts ? { ...state, data: [ ...posts ] } : { ...state } ); 

        case FETCH_POSTS_ERROR:
            return { ...state, errorMsg: action.payload };

        case FETCH_POSTS_LOADING:
            return { ...state, loadingMsg: action.payload };

        case FETCH_POSTS_LOADED:
            return { ...state, loadingMsg: null };

        case FETCH_POSTS_ERROR_CLEAR:
            return { ...state, errorMsg: null };

        default:
            return state;

    }

}