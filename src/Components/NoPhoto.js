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


