import React from "react";
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <nav className='navbar navbar-dark navbar-expand bg-primary'>
            <div className="navbar-brand">Note App</div>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" to='/home'>Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to='/'>About</NavLink>
                    </li>
                </ul>
            </div>

        </nav>
    )
}
export default NavBar;
