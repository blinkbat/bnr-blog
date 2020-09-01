


import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';

import { fetchPosts } from '../index';

const middlewares = [ thunk ]
const mockStore = configureMockStore( middlewares )

beforeEach( () => {
    
    moxios.install();

});

afterEach( () => {

  // unmount moxios after each test
  moxios.uninstall();

});

describe('async actions', () => {

  it('creates FETCH_POSTS_SUCCESS with payload on success', done => {

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

    const store = mockStore( {} )

    return store.dispatch( fetchPosts() ).then( () => {
      // return of async actions

      moxios.wait( () => {

        const [testAction] = store.getActions()
          .filter( action => action.type === 'fetch_posts_success' ) 
        
        expect( testAction.payload.data.length ).toBe( 3 );

        done();

      });

    })
  })

  it('creates FETCH_POSTS_ERROR on failure', done => {

    moxios.stubRequest( 

        'https://jsonplaceholder.typicode.com/posts', 

        {
            status: 500
        }
    );

    const store = mockStore( {} )

    return store.dispatch( fetchPosts() ).then( () => {
      // return of async actions

      moxios.wait( () => {

        const testAction = store.getActions()
          .filter( action => action.type === 'fetch_posts_error' ) 
        
        expect( testAction.length ).toBe( 1 );

        done();

      });

    })
  })

  it('always creates LOADING', done => {

    moxios.stubRequest( 
        'https://jsonplaceholder.typicode.com/posts', 
        { status: 200 }
    );

    const store = mockStore( {} )

    return store.dispatch( fetchPosts() ).then( () => {

      moxios.wait( () => {

        const testAction = store.getActions()
          .filter( action => action.type === 'fetch_posts_loading' ) 
        
        expect( testAction.length ).toBe( 1 );
        done();

      });

    })
  })

  it('always creates LOADED', done => {

    moxios.stubRequest( 
        'https://jsonplaceholder.typicode.com/posts', 
        { status: 200 }
    );

    const store = mockStore( {} )

    return store.dispatch( fetchPosts() ).then( () => {

      moxios.wait( () => {

        const testAction = store.getActions()
          .filter( action => action.type === 'fetch_posts_loaded' ) 
        
        expect( testAction.length ).toBe( 1 );
        done();

      });

    })
  })

  it('always creates ERROR_CLEAR', done => {

    moxios.stubRequest( 
        'https://jsonplaceholder.typicode.com/posts', 
        { status: 200 }
    );

    const store = mockStore( {} )

    return store.dispatch( fetchPosts() ).then( () => {

      moxios.wait( () => {

        const testAction = store.getActions()
          .filter( action => action.type === 'fetch_posts_error_clear' ) 
        
        expect( testAction.length ).toBe( 1 );
        done();

      });

    })
  })

})
