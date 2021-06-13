import React from 'react';
import PledgeCard from './PledgeCard';

function AboutProject() {

    return (
        <section className="about-section container box top-spacing">
            <h2>About this project</h2>
            <p className="text top-spacing">The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand.</p>
            <p className="text top-spacing">Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand.</p>
             
             <PledgeCard 
             title="Bamboo Stand"
             price = "Pledge $25 or More"
             content= "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list"
             amountLeft = {101}
             />

           <PledgeCard 
             title="Black Edition Stand"
             price = "Pledge $75 or more"
             content = "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
             amountLeft = {64}
             /> 

             <PledgeCard 
             title="Mahogany Special Edition"
             price = "Pledge $200 or more"
            content = "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
             amountLeft = {2}
             />
        </section>
    )
}

export default AboutProject