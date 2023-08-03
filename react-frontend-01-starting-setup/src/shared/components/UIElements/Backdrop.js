import React from 'react';
import ReactDOM from 'react-dom';

import './Backdrop.css';

const Backdrop = props => {
  return ReactDOM.createPortal(
    <div className="backdrop" onClick={props.onClick}></div>,
    document.getElementById('backdrop-hook')
  );
};

export default Backdrop;

// agr drawer open hoga aur humne click kiye backside pe toh backdrop will receive a prop named onclicked and then points to closedrawer function;