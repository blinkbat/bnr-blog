


import axios from 'axios';

import { 
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_ERROR,
    FETCH_POSTS_LOADING,
    FETCH_POSTS_LOADED,
    FETCH_POSTS_ERROR_CLEAR
} from './types';



export const fetchPosts = () => {

    return async dispatch => {

        try {

            // clear error state
            dispatch({ type: FETCH_POSTS_ERROR_CLEAR });

            // init loading state
            dispatch({ type: FETCH_POSTS_LOADING, payload: 'Loading posts...' });

            const response = await axios.get( 
                'https://jsonplaceholder.typicode.com/posts' 
            );

            // init success state
            dispatch({ type: FETCH_POSTS_SUCCESS, payload: response });
            
            // clear loading state
            dispatch({ type: FETCH_POSTS_LOADED });

        } catch( err ) { 

            // clear loading state
            dispatch({ type: FETCH_POSTS_LOADED });

            // init error state
            dispatch({ 
                type: FETCH_POSTS_ERROR, 
                payload: 'Error with JSON Placeholder API'
            });

        }

    };
    
};