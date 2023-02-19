/* eslint-disable react/prop-types */
import React from 'react';

const Modal = (props) => {
  if (!props.show) {
    return null;
  }

  return (
    <div className='modal-overlay'>
      <div className='modal'>
        <div className='modal-content'>
          <div className='modal-close'>
            <h2 onClick={props.onClose} >X</h2>
          </div>
          <div className='modal-header'>
            <h3 className='modal-title'>Subscribe</h3>
          </div>
          <p className='modal-body'>
              You are allowing us to access to your email address you provided
              by clicking the acknowlege botton below.
          </p>
          <div className='modal-footer'>
            <button className='modal-button'
              onClick={props.onClose} >Got it!</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
