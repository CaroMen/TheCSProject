import React from 'react';
import { NavLink } from 'react-router-dom';

import './navbar.css';

const NavBar = () => {
    return (
        <div className="nav-outer">
            <h3 className="logo">The CS Project</h3>
            <NavLink className="nav-link" to="/bubble-sort">Bubble Sort Visualizer</NavLink>
        </div>
    )
}

export default NavBar;
