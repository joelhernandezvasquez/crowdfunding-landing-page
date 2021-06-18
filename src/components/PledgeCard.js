
import React,{useRef,useEffect,useState,useContext} from 'react';
import Modal from '../Modal';
import iconClose from '../assets/icon-close-modal.svg';
import BackedStatsContext from '../ContextApi/Backed/BackedStatsContext';


const PledgeCard = ({title,price,content,amountLeft,modalVersion,onDismiss}) => {

   const pledgeCardRef = useRef(null);
   const radioButtonRef  = useRef(null);
   const selectPledgeBoxRef = useRef(null);
   const[pledgeCardWidth,setPledgeCardWith] = useState(null);
   const[boxPledge,setBoxPledge] = useState(null);
   const [isModalOpen,setModalOpen] = useState(false);
   const context = useContext(BackedStatsContext);

   useEffect(() => {
    
      window.addEventListener("resize",()=>{
       if(pledgeCardRef.current && selectPledgeBoxRef.current)
       {
         setPledgeCardWith(pledgeCardRef.current.getBoundingClientRect().width);
         setBoxPledge(selectPledgeBoxRef.current.getBoundingClientRect().top);
       }    
    })
   }, [])
    
   useEffect(() => {
      
      
      if(pledgeCardRef.current && selectPledgeBoxRef.current)
       {

         setPledgeCardWith(pledgeCardRef.current.getBoundingClientRect().width);
         setBoxPledge(selectPledgeBoxRef.current.getBoundingClientRect().top);
         
       }
   },[pledgeCardWidth,boxPledge])
    
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

   const closeModal = () =>{
      setModalOpen(!isModalOpen); 
  }
  const onSubmitPledge = () =>{
     context.addMoney(20);
     onDismiss();
  }

   const renderModal = () =>{
      return (
          <div className="modal-pledge-content container">
             <div className="header">
               <h2 >Back this project</h2>
               <img className="icon-close" 
               src={iconClose} alt="close icon" 
               onClick = {()=>setModalOpen(!isModalOpen) }
               
               />
             </div>
             <p className="text"> Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world? </p>
             <PledgeCard 
             title="Pledge with no reward"
             price={0}
             content = "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email."
             modalVersion = {true}
             onDismiss = {closeModal}
            />
            
            <PledgeCard
              title = "Bamboo Stand"
              price = {25}
              content = "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list."
              amountLeft= {101}
              modalVersion = {true}
              onDismiss = {closeModal}
            />

           <PledgeCard
              title = "Black Edition Stand"
              price = {75}
              content = "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
              amountLeft= {64}
              modalVersion = {true}
              onDismiss = {closeModal}
            />

          <PledgeCard
              title = "Mahogany Special Edition"
              price = {200}
              content = "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
              amountLeft= {1}
              modalVersion = {true}
              onDismiss = {closeModal}
            />
             

          
          </div>
      )
  }
   

   const handleShowPlegdeSelection = () =>{
    
      const current = document.querySelector(".show");
       
      
      
      if(!selectPledgeBoxRef.current.classList.contains("show"))
      {
         if(!current)
           selectPledgeBoxRef.current.classList.add("show");

         else{
            current.classList.toggle("show");
            selectPledgeBoxRef.current.classList.add("show");
         }
      }
   
  


   }
    
  const onChangePledgeCard = () =>{
    
   const current  = document.querySelector(".current-pledge");

    if(!pledgeCardRef.current.classList.contains('current-pledge'))
   { 
        
      handleActiveRadio();
       handleShowPlegdeSelection();

       if(!current)
          pledgeCardRef.current.classList.add('current-pledge');

          else{
            current.classList.toggle("current-pledge");
            pledgeCardRef.current.classList.add('current-pledge');
          }
      }
         
   }

   const getLine = () =>{
   
     return{
       
        width:`${pledgeCardWidth}px`,
        height:'1px',
        background:'rgba(0,0,0,0.15)',
        position:'absolute',
        top:`${boxPledge}}px`,
        left:'0',
       
      
      }
   }
    
  
    const renderPledgeCardModalVersion = () =>{
        
        return (
            <div ref= {pledgeCardRef} className = {`pledge-card box`} >
               <div className="grid-2">
               <div className="custom-header-pledge">
               <div className="custom-radio-button" onClick = {(e) => onChangePledgeCard(e)}> 
                  <div ref={radioButtonRef} className={`inner-radio-button`}></div>
               </div>
               
               <div className="header-container">
               <h3>{title}</h3>
                 {price!==0 && (<p>{`Pledge $${price} or more`}</p>)}
              
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
               
                 <div ref={selectPledgeBoxRef} className="select-pledge-box top-spacing">
                    <div style={getLine()}></div>
                    <p className="text">Enter your Pledge</p>
                    <div class="pledge-input-container">
                       <div><span>$</span>{price}</div>
                       <button className="btn" onClick={() => onSubmitPledge()}> Continue</button>
                    </div>
                 </div>
               
            </div>
            </div>
        )
    }

    const renderPledgeCard = () =>{
        return (
        <>
        <div className="pledge-card box">
           <div className="header-container">
               <h3>{title}</h3>
               <p>{`Pledge  $${price} or more`}</p>
           </div>
           <p className="text content">{content}</p>
           <div className="footer-container">
            <h1 className="amount-left">{amountLeft}<span>Left</span></h1>
            <button className="btn btn-reward" onClick = {() => setModalOpen(!isModalOpen)}>Select Reward</button>
           </div>
        </div>
        {isModalOpen? <Modal styling="defaultModal" content={renderModal()}/>: null}
        </>
        
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
