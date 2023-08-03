import React from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";


import Backdrop from "./Backdrop";
import './Modal.css';

const ModalOverlay = props => {
  const content = (
    <div className={`modal ${props.className}`} style={props.style}>
        <header className={`modal__header ${props.headerClass}`}>
        <h2>{props.header}</h2>
        </header>
        <form onSubmit={props.onSubmit ? props.onSubmit : event => event.preventDefault()
        }>
      <div className={`modal__content ${props.contentClass}`}>
          {props.children}
      </div>  
      <footer className={`modal__footer ${props.footerClass}`}>
        {props.footer}
      </footer> 
        </form>
    </div>
  );
    return ReactDOM.createPortal(content,document.getElementById('modal-hook'));
};
const Modal= props =>{
   return <React.Fragment>
    {props.show && <Backdrop onClick={props.onCancel} />}
    <CSSTransition
     in={props.show} 
    mountOnEnter
     unmountOnExit
     timeout={200}
      classNames="modal" >
      <ModalOverlay {...props}/>
     </CSSTransition>
   </React.Fragment>
};
export default Modal;

//here modaloverlay component is used by modal componenet it is not exported;
// {..props}->it will forward all the props to modal overlay to set header,footer etc;
//humne modal overlay ko alg isliye rkha hai kyuki jab modal open rhega toh humko backdrop aur csstranisition ka use krna hai isliye alg bnaya hai overlay
//aur isliye hi humne backdrop aur modal ko portals ke form mai bnaya taki hum isko reuse kr skte kahi bhi;
//portal mtlb ek component hai jisko hum kahi bhi render kr skte without writing iss code there itself;