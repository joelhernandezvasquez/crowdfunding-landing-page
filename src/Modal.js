
import React from 'react';
import ReactDom from 'react-dom';

const Modal = ({styling,content}) =>{

  
  return ReactDom.createPortal(
      <div className={styling}>
       {content}
      </div>,
      document.querySelector("#modal")
    )
}

export default Modal;