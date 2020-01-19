//stateless function component that displays the li and img elements.

import React from 'react';

const Photo = props => (
            <li>
                <img src={ props.url } key={ props.key } />
            </li>
);

export default Photo;

//MODELED AFTER: 
        // import React from 'react';

        // const Photo = props => (
        // <li className="photo-wrap">
        //     <img src={props.url} alt=""/>
        // </li>
        // );

        // export default Photo;