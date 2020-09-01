


import postsReducer from '../posts';
import * as types from '../../actions/types';



it( 'handles actions of type FETCH_POSTS_SUCCESS', () => {

    const action = {
        type: types.FETCH_POSTS_SUCCESS,
        payload: { data: [ 1, 2, 3 ] }
    };

    const newState = postsReducer( {}, action );

    expect( newState ).toEqual( { data: [ 1, 2, 3 ] } );

});

it( 'handles actions of type FETCH_POSTS_ERROR', () => {

    const action = {
        type: types.FETCH_POSTS_ERROR,
        payload: 'Error!'
    };

    const newState = postsReducer( {}, action );

    expect( newState ).toEqual( { errorMsg: 'Error!' } );

});

it( 'handles actions of type FETCH_POSTS_LOADING', () => {

    const action = {
        type: types.FETCH_POSTS_LOADING,
        payload: 'Loading...'
    };

    const newState = postsReducer( {}, action );

    expect( newState ).toEqual( { loadingMsg: 'Loading...' } );

});

it( 'handles an unknown action type', () => {;

    const newState = postsReducer( {}, { type: 'UNRECOGNIZED_TYPE_AHHH' } );

    expect( newState ).toEqual( {} );

});


 