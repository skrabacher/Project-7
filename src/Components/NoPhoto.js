//A NotFound stateless component for displaying a user friendly message when the search return no results

import React from 'react';

const NoPhoto = (props) => {
    return (
        <div className="photo-container">
            <h2>Results</h2>
            <ul>
                <li className="not-found">
                    <h3>No Results Found</h3>
                    <p>You search did not return any results. Please try again.</p>
                </li>
            </ul>
        </div>
    );
}

export default NoPhoto;


//MODELED AFTER:
        // const NoPhoto = (props) => {
        //     return (
        //     <div className="counter">
        //         <button className="counter-action decrement"> - </button>
        //         <span className="counter-score"> { props.score } </span>
        //         <button className="counter-action increment"> + </button>
        //     </div>
        //     );
        // }

        // export default NoPhoto;

