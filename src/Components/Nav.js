//Stateless nav component for the apps navigation links.
import React from 'react';
import { Link } from 'react-router-dom';

const Nav = (props) => {
        return (
            <nav className="main-nav">
                <ul>
                    <li><a href='#'>Lego</a></li>
                    <li><a href='#'>Playmobil</a></li>
                    <li><a href='#'>K'nex</a></li>
                </ul>
            </nav>
        );
}

export default Nav;





//Modeled After:
        // const Nav = (props) => {
        //     return (
        //     <div className="counter">
        //         <button className="counter-action decrement"> - </button>
        //         <span className="counter-score"> { props.score } </span>
        //         <button className="counter-action increment"> + </button>
        //     </div>
        //     );
        // }

        // export default Nav;