import React from 'react';
import masterCraftLogo from '../assets/logo-mastercraft.svg';
import bookmarkIcon from '../assets/icon-bookmark.svg';

const MasterCraftBambo = () => {
    return (
        <div className="master-craft-section container box">
           <img id="master-craft-logo" src={masterCraftLogo} alt="master craft logo"/>
           <div id="title-container">
           <h1 className="title"> Mastercraft Bamboo Monitor Riser</h1>
            </div>
           <p className="text">A beautifully handcrafted monitor stand to reduce neck and eye strain.</p>
           <div className="action-btn-container">
               <button className="btn btn-back-project">Back this Project</button>
               <img src={bookmarkIcon} alt="bookmark icon"/>
           </div>
        </div>
    )
}

export default MasterCraftBambo;
