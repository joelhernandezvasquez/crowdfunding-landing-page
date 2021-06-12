import React from 'react';
import HamburgerMenu from './HamburgerMenu';
import MenuLinks from './MenuLinks';
import useScreenResize from './Hooks/useScreenResize';
import logo from '../assets/logo.svg';

const NavBar = () => {
    
    const screenSize = useScreenResize();

    const renderMenu = () =>{
      return screenSize < 1440? <HamburgerMenu/>: <MenuLinks/>
    }
    return (
        <div className="nav-bar">
            <div className="menu-bar">
               <img src={logo} alt="logo"/>
                 {/* Menu version will change based on the screen size for either hamburger menu icon or menu links*/}
                {renderMenu()}
                
             </div>
        </div>
    )
}

export default NavBar;
