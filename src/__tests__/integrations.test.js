

import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';

import Root from '../Root';
import App from '../components/App';
import PostList from '../components/PostList';



beforeEach( () => {

    // setup moxios
    moxios.install();

});

afterEach( () => {

    // unmount moxios after each test
    moxios.uninstall();

});

// done argument is used to circumvent jest skipping setTimeout
// allows us to specify when jest considers a test 'done'
it( 'fetches a list of posts and displays them as li', done => {

    // stub requests to our placeholder api
    moxios.stubRequest( 

        // first arg is request to stub
        'https://jsonplaceholder.typicode.com/posts', 

        // second arg is dummy response
        {
            status: 200,
            response: [
                { post: 'one', id: 1, userId: 1 },
                { post: 'two', id: 2, userId: 2 },
                { post: 'three', id: 3, userId: 3 }
            ]
        }
    );

    // render the entire app
    const wrapped = mount( 
        <Root>
            <App>
                <PostList userId="1" />
                <PostList excludeUserId="1" />
            </App>
        </Root>
    );

    // pause briefly for moxios intercept
    moxios.wait( () => {

        // re-render wrapped with posts
        wrapped.update();

        // expect to find a list of posts
        expect( wrapped.find( 'li' ).length ).toEqual( 3 );

        // we are now ready to end test
        done();

        // clean up mounted component
        wrapped.unmount();

    });

});

it( 'shows errors in PostLists when thrown in our action', done => {

    // stub requests to our placeholder api
    moxios.stubRequest( 

        // first arg is request to stub
        'https://jsonplaceholder.typicode.com/posts', 

        // second arg is dummy response
        {
            status: 500
        }
    );

    // render the entire app
    const wrapped = mount( 
        <Root>
            <App>
                <PostList userId="1" />
                <PostList excludeUserId="1" />
            </App>
        </Root>
    );

    // pause briefly for moxios intercept
    moxios.wait( () => {

        // re-render wrapped with posts
        wrapped.update();

        // expect to find a list of posts
        expect( wrapped.find( '[data-test="error"]' ).length ).toEqual( 2 );

        // we are now ready to end test
        done();

        // clean up mounted component
        wrapped.unmount();

    });

    

});



