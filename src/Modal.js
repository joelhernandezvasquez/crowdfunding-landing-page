
import React from 'react';
import ReactDom from 'react-dom';

const Modal = ({onDismiss,styling,content}) =>{

  
  return ReactDom.createPortal(
      <div className={styling} onClick={onDismiss }>
        <div className="modal-content" onClick = {(e) => e.stopPropagation()}>
        {content}
        </div> 
      </div>,
      document.querySelector("#modal")
    )
}

export default Modal;