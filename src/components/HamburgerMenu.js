import React from 'react';
import iconHamburger from '../assets/icon-hamburger.svg';
import iconCloseMenu from '../assets/icon-close-menu.svg';


const HamburgerMenu = () => {
    return (
        <>
          {/* Icon will render depends on the state open or close  */}
           <img src={iconHamburger} onClick ={(e)=> console.log('hello') } alt="icon hamburger"/>
        </>
    )
}

export default HamburgerMenu;
