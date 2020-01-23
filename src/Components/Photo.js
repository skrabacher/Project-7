//stateless class component that displays the li and img elements.

import React, { Component } from 'react';

class Photo extends Component {
    render () {
        return (
            <li>
                <img src={ this.props.url } alt='' />
            </li>
        )
    }
};
export default Photo;
