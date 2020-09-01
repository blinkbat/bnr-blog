


import React from 'react';
import ReactDOM from 'react-dom';

import Root from './Root';
import App from './components/App';
import PostList from './components/PostList';



ReactDOM.render( 

    <Root>
        <App>

            <PostList 
                title="Posts from User ID 1"
                userId="1"
            />
            <PostList 
                title="Posts from Other Users"
                excludeUserId="1"
            />
            
        </App>
    </Root>, 
    
    document.querySelector( '#root' ) 

);

