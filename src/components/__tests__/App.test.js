

import React from 'react';
import { mount } from 'enzyme';

import App from '../App';
import PostList from '../PostList';
import Root from '../../Root';



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



it( 'shows exactly two PostLists', () => {

    expect( 
        // .find returns an arr so we call .length
        wrapped.find( PostList ).length 

    ).toEqual( 2 );

});

it( 'shows one footer', () => {

    expect( wrapped.find( 'footer' ).length ).toEqual( 1 );

});

it( 'shows one h1', () => {

    expect( wrapped.find( 'h1' ).length ).toEqual( 1 );

});


