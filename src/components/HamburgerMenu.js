import React,{useState} from 'react';
import Modal from '../Modal';
import iconHamburger from '../assets/icon-hamburger.svg';
import iconCloseMenu from '../assets/icon-close-menu.svg';
import BacketStats from './BacketStats';



const HamburgerMenu = () => {
   
    const [isMenuOpen,setMenu] =useState(false);
    
    const renderMenu = () =>{
        return(
            <div className = "menu-hamburger container">
               <ul >
                   <li className="item-list">
                       <a href="#">About</a>
                  </li>

                  <li className="item-list">
                       <a href="#">Discover</a>
                  </li>

                  <li className="item-list">
                       <a href="#">Get Started</a>
                  </li>
               </ul>
            </div>
        )
    }
    const renderModal = () =>{
        if(isMenuOpen)
           return <Modal styling={'modal'}  content ={renderMenu()} />
    }
    return (
        <>
           <img src={!isMenuOpen? iconHamburger: iconCloseMenu} onClick ={()=>setMenu(!isMenuOpen) } alt="icon hamburger"/>
            {renderModal()}
        </>
    )
}

export default HamburgerMenu;
