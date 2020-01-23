//Stateless nav component for the apps navigation links.
import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
        return (
            <nav className="main-nav">
                <ul>
                    <li><NavLink to={`/lego`}>Lego</NavLink></li>
                    <li><NavLink to={`/playmobil`}>Playmobil</NavLink></li>
                    <li><NavLink to={`/knex`}>K'nex</NavLink></li>
                </ul>
            </nav>
        );
}

export default Nav;
