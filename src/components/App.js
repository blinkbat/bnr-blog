

import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';



class App extends Component {

    componentDidMount() { this.props.fetchPosts(); }

    render() {

        const year = new Date().getFullYear();

        const logo = require( '../images/Hat_History.png' );

        return(
        
            <div className="container" style={{ color: '#999', }}>

                <h1 style={{ 
                    padding: '3%', 
                    color: 'slateblue',  
                }}>
                    <img 
                        src={ logo } 
                        style={{ maxWidth: '90px', paddingRight: '10px' }} 
                        alt="Big Nerd Ranch logo"
                    />
                    <span style={{ display: 'inline-block' }}>
                    Big Nerd Ranch Blog
                    </span>
                </h1>

                <div className="row" style={{ 
                    padding: '3%',
                    borderRadius: '5px',
                    boxShadow: '-1px 3px 6px rgba(0,0,0, .3)',
                    backgroundColor: 'rgba(255,255,255, .5)',
                    margin: '10px'
                }}>

                    { this.props.children.map( ( child, index ) =>

                        <div 
                            className="col" 
                            style={{ borderLeft: '1px dashed lightgray'  }}
                            key={ index }
                        >

                            { child }

                        </div>

                    ) }

                </div>

                <footer style={{ 
                    padding: '20px', 
                    textAlign: 'right', 
                    color: 'slateblue',
                    fontWeight: '700'
                }}>
                    &copy; { year } David Bennett 
                </footer>

            </div>
        
        );
    }

}



const mapStateToProps = ( state ) => { 
    return { posts: state.posts }
};

export default connect( mapStateToProps, actions )( App );


