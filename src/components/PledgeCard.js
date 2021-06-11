import React from 'react';

const PledgeCard = ({title,price,content,amountLeft}) => {
    
    return (
        
      /*   The overlay will render if the amount left is equal to zero and will disable the pledge card based on the state
            the style of the button as well as the text will render depends of the amount state. */
   
        <div className="pledge-card box">
           <div className="header-container">
               <h3>{title}</h3>
               <p>{price}</p>
           </div>
           <p className="text content">{content}</p>
           <div className="footer-container">
            <h1 className="amount-left">{amountLeft}<span>Left</span></h1>
            <button className="btn btn-reward">Select Reward</button>
           </div>
        </div>
    )
}

export default PledgeCard;
