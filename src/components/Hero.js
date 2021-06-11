import React from 'react';
import NavBar from './NavBar';
import '../sass/main.scss';
import heroImgMobile from '../assets/image-hero-mobile.jpg';

const Hero = () => {
    return (
        <section className="hero-section">
          
          <div className="hero-img-container">
                {/* image version will render based of the screen size */}
              <img  src={heroImgMobile} alt="hero image"/>
          </div>
          <NavBar/>
        </section>
    )
}

export default Hero;
