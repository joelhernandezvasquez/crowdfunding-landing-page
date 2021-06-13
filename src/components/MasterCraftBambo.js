import React,{useState} from 'react';
import useScreenResize from './Hooks/useScreenResize';
import masterCraftLogo from '../assets/logo-mastercraft.svg';
import bookmarkIcon from '../assets/icon-bookmark.svg';

const MasterCraftBambo = () => {
    
    const[toogleBookmark,setToogleBookmark] = useState(false);
    const viewport = useScreenResize();
    
    const renderBookmarkIcon = () =>{
        if(viewport < 1440)
        {
            return <img src={bookmarkIcon} alt="bookmark icon"/>
        }

        else{
            return (
                <div className={`bookmark-container ${!toogleBookmark?'bookmark-toogle':null}`}>
                    <div className="circle">
                        
                    </div>
                     <span>Bookmark</span>
                </div>
            )
        }
    }
    return (
        <div className="master-craft-section container box">
           <img id="master-craft-logo" src={masterCraftLogo} alt="master craft logo"/>
           <div id="title-container">
           <h1 className="title"> Mastercraft Bamboo Monitor Riser</h1>
            </div>
           <p className="text">A beautifully handcrafted monitor stand to reduce neck and eye strain.</p>
           <div className="action-btn-container">
               <button className="btn btn-back-project">Back this Project</button>
               {renderBookmarkIcon()}
           </div>
        </div>
    )
}

export default MasterCraftBambo;
