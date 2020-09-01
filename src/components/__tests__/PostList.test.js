

import React from 'react';
import { mount } from 'enzyme';

import Root from '../../Root';
import PostList from '../PostList';
import App from '../App';


let wrapped;

beforeEach( () => {

    wrapped = mount( 
        <Root>
            <App>
                <PostList /> 
                <PostList /> 
            </App>
        </Root>
    );

});

// afterEach to clean up and unmount wrapped
afterEach( () => wrapped.unmount() );



it( 'has a ul element for each PostList', () => {

    expect( 
        // .find returns an arr so we call .length
        wrapped.find( 'ul' ).length 
    ).toEqual( 2 );

});


