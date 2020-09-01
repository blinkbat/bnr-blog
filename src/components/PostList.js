


import React, { Component } from 'react';
import { connect } from 'react-redux';



class PostList extends Component {

    renderPosts() {

        let filtered = [];

        if( this.props.userId ) {
            const userInt = +this.props.userId;
            filtered = this.props.posts.data.filter( 
                item => item.userId === userInt
            );

        } else {
            const excludeUserInt = +this.props.excludeUserId;
            filtered = this.props.posts.data.filter( 
                item => item.userId !== excludeUserInt
            );

        }

        return filtered.map( post => {

            return (
                <li key={ post.id } style={{ 
                    margin: '3%',
                    padding: '3%',
                    borderRadius: '5px',
                    boxShadow: '-1px 3px 6px rgba(0,0,0, .1)',
                    backgroundColor: 'rgba(255,255,255, .6)'
                }}>

                    <h4 style={{ color: 'slateblue' }}>
                        { post.title }
                    </h4>
                    <p>{ post.body }</p>

                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    
                        <span>
                            <span style={{ fontWeight: '700', }}>
                                By User ID:
                            </span>
                            &nbsp;{ post.userId }
                        </span>

                        <span>
                            <span style={{ fontWeight: '700',  }}>
                                Post ID:
                            </span>
                            &nbsp;{ post.id }
                        </span>

                    </div>

                </li>
            );

        });

    }

    render() {

        return (
            <div>

                <h3 style={{ fontStyle: 'italic' }}>{ this.props.title }</h3>

                <ul style={{ listStyle: 'none', paddingInlineStart: '0' }}>

                    { this.renderPosts() }

                    { this.props.posts.errorMsg ?
                        <span style={{ color: 'red' }} data-test="error">
                            { this.props.posts.errorMsg }
                        </span>
                    : '' }

                    { this.props.posts.loadingMsg ?
                        <span style={{ color: 'slateblue' }} data-test="loading">
                            { this.props.posts.loadingMsg }
                        </span>
                    : '' }

                </ul>

            </div>
        );
    }

}



const mapStateToProps = ( state ) => {
    return { posts: state.posts };
}

export default connect( mapStateToProps )( PostList );