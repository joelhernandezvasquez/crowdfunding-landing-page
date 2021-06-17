import React from 'react';
import checkedIcon from '../assets/icon-check.svg';

const pledgeCompleted = ({close}) => {
    return (
        <div className="pledge-completed box container">
           <img src={checkedIcon} alt="checked icon"/>
           <h2 className="title top-spacing">Thanks for your support!</h2>
           <p className="text top-spacing">Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed.</p>
           <button className="btn" onClick={close}> Got it!</button>
        </div>
    )
}

export default pledgeCompleted;
