import React from 'react';
import HamburgerMenu from './HamburgerMenu';
import logo from '../assets/logo.svg';

const NavBar = () => {
    return (
        <div className="nav-bar">
            <div className="menu-bar">
               <img src={logo} alt="logo"/>
                 {/* Menu version will change based on the screen size for either hamburger menu icon or menu links*/}
                
                <HamburgerMenu/>
             </div>
        </div>
    )
}

export default NavBar;
