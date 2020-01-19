//stateless class component that displays the li and img elements.

import React, { Component } from 'react';

class Photo extends Component {
    render () {
        return (
            <li>
                <img src={ this.props.url } />
            </li>
        )
    }
};
export default Photo;

//MODELED AFTER: 
        // import React from 'react';

        // const Photo = props => (
        // <li className="photo-wrap">
        //     <img src={props.url} alt=""/>
        // </li>
        // );

        // export default Photo;