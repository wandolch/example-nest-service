import * as React from 'react';
import './call-button.style.scss';

const CallButton = ({onClick}) => {
  return (
    <button onClick={onClick} type="button" className="call-btn">Call Us</button>
  );
};


export default CallButton;
