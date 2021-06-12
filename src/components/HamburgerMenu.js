import React,{useState} from 'react';
import Modal from './Modal';
import iconHamburger from '../assets/icon-hamburger.svg';
import iconCloseMenu from '../assets/icon-close-menu.svg';
import BacketStats from './BacketStats';



const HamburgerMenu = () => {
   
    const [isMenuOpen,setMenu] =useState(false);
    
    const renderMenu = () =>{
        return(
            <div className = "menu-hamburger container">

            </div>
        )
    }
    const renderModal = () =>{
        if(isMenuOpen)
           return <Modal backgroundColor="linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0.0001) 100%)" opacity={0.6} component = {renderMenu()}/>
    }
    return (
        <>
           <img src={!isMenuOpen? iconHamburger: iconCloseMenu} onClick ={()=>setMenu(!isMenuOpen) } alt="icon hamburger"/>
            {renderModal()}
        </>
    )
}

export default HamburgerMenu;
