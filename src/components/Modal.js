
import React from 'react';
import ReactDom from 'react-dom';

const Modal = ({backgroundColor,opacity,component}) =>{

  const getStyle = () =>{
    return {
      background:`${backgroundColor}`,
      opacity:opacity
    }
  }
  
  return ReactDom.createPortal(
      <div className="modal" style = {getStyle()}>
       {component}
      </div>,
      document.querySelector("#modal")
    )
}

export default Modal;