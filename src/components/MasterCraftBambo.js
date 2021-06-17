import React,{useState} from 'react';
import useScreenResize from './Hooks/useScreenResize';
import Modal from '../Modal';
import PledgeCard from './PledgeCard';
import masterCraftLogo from '../assets/logo-mastercraft.svg';
import regularBookmarkIcon from '../assets/Path2.svg';
import bookmarIconToogle from '../assets/Path2-toogle.svg';
import iconClose from '../assets/icon-close-modal.svg';
import PledgeCompleted from './PledgeCompleted';

const MasterCraftBambo = () => {
    
    const[toogleBookmark,setToogleBookmark] = useState(false);
    const [isModalOpen,setModal] = useState(false);
    const[isSelectionPledgeCompleted,setPledgeCompleted] = useState(false);
    const viewport = useScreenResize();
    
    const renderBookmarkIcon = () =>{
        if(viewport < 1440)
        {
           return(
               <div  className={`circle ${!toogleBookmark?'bg-black': 'bg-modern-cyan'}`} onClick={(e)=> setToogleBookmark(!toogleBookmark)}>
                    <img src ={!toogleBookmark? regularBookmarkIcon: bookmarIconToogle}   alt ="icon bookmark"/>
               </div>
           )
        }

        else{
            return (
                <div className={`bookmark-container ${toogleBookmark?'bookmark-toogle':null}`} onClick={(e)=> setToogleBookmark(!toogleBookmark)}>
                    <div className={`circle circleDesktopMode ${!toogleBookmark? 'bg-brown': 'bg-modern-cyan'}`}>
                        <img src ={!toogleBookmark? regularBookmarkIcon: bookmarIconToogle}   alt ="icon bookmark"/>
                    </div>
                     <span className={`${toogleBookmark? 'bookMarkedText':null}`}>{!toogleBookmark?'Bookmark': 'Bookmarked'}</span>
                </div>
            )
        }
    }
  const closeModal = () =>{
      setModal(!isModalOpen);
      setPledgeCompleted(true);
     
  }

  const closePledgeCompleted = () =>{
    setPledgeCompleted(false);
  }
    const renderModal = () =>{
        return (
            <div className="modal-pledge-content container">
               <div className="header">
                 <h2 >Back this project</h2>
                 <img className="icon-close" 
                 src={iconClose} alt="close icon" 
                 onClick = {()=>setModal(!isModalOpen) }
                 
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

    return (
        <div className="master-craft-section container box">
           <img id="master-craft-logo" src={masterCraftLogo} alt="master craft logo"/>
           <div id="title-container">
           <h1 className="title"> Mastercraft Bamboo Monitor Riser</h1>
            </div>
           <p className="text">A beautifully handcrafted monitor stand to reduce neck and eye strain.</p>
           <div className="action-btn-container">
               <button className="btn btn-back-project" onClick = {() => setModal(!isModalOpen)}>Back this Project</button>
               {renderBookmarkIcon()}
               {isModalOpen? <Modal onDismiss = {() =>(setModal(!isModalOpen))} styling="defaultModal" content = {renderModal()}/>: null}
               {isSelectionPledgeCompleted? <Modal onDismiss = {() =>(setPledgeCompleted(!isSelectionPledgeCompleted))} styling="defaultModal" content = {<PledgeCompleted close = {closePledgeCompleted}/>} />: null }
           </div>
        </div>
    )
}

export default MasterCraftBambo;
