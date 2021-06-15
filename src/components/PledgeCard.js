import React,{useRef} from 'react';

const PledgeCard = ({title,price,content,amountLeft,modalVersion}) => {

   const pledgeCardRef = useRef(null);
   const radioButtonRef  = useRef(null);
   
    const handleActiveRadio = () =>{
    const activeRadio = document.querySelector(".active");
 
    if(!activeRadio)
    {
      radioButtonRef.current.classList.add("active");
    }
    else{
        activeRadio.classList.remove("active");
      radioButtonRef.current.classList.add("active");
    } 
   }
   
    
  const onChangePledgeCard = () =>{
    
   const current  = document.querySelector(".current-pledge");

    if(!pledgeCardRef.current.classList.contains('current-pledge'))
   { 
        handleActiveRadio();
       if(!current)
          pledgeCardRef.current.classList.add('current-pledge');

          else{
            current.classList.toggle("current-pledge");
            pledgeCardRef.current.classList.add('current-pledge');
          }
      }
         
   }
    
    const renderPledgeCardModalVersion = () =>{
        
        return (
            <div ref= {pledgeCardRef} className = {`pledge-card box`} >
               <div className="custom-header-pledge">
               <div className="custom-radio-button" onClick = {(e) => onChangePledgeCard(e)}> 
                  <div ref={radioButtonRef} className={`inner-radio-button`}></div>
               </div>
               
               <div className="header-container">
               <h3>{title}</h3>
                 {price && (<p>{price}</p>)}
              
               </div>
               </div>

               <p className="text content">{content}</p>
               <div className="footer-container">
               
               {amountLeft &&( 
               <h1 className="amount-left-modal">
                   {amountLeft}<span>Left</span>
              </h1>
              )}
           </div>
            </div>
        )
    }

    const renderPledgeCard = () =>{
        return (
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
    
    return (
       
      /*   The overlay will render if the amount left is equal to zero and will disable the pledge card based on the state
            the style of the button as well as the text will render depends of the amount state. */
            <>
        {!modalVersion?renderPledgeCard():renderPledgeCardModalVersion()}
        </>
    )
}

export default PledgeCard;
