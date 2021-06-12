import React from 'react';
import NavBar from './NavBar';
import useScreenResize from './Hooks/useScreenResize';
import '../sass/main.scss';
import heroImgMobile from '../assets/image-hero-mobile.jpg';
import heroImgDesktop from '../assets/image-hero-desktop.jpg';

const Hero = () => {
   
  const screenSize = useScreenResize();
  return (
       
       <section className="hero-section">
          
          <div className="hero-img-container">
                {/* image version will render based of the screen size */}
              <img src={screenSize < 1440? heroImgMobile: heroImgDesktop} alt="hero image"/>
          </div>
          <NavBar/>
        </section>
    )
}

export default Hero;
