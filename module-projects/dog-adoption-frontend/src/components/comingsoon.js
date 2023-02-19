import React, {useState} from 'react';
import Modal from './modal';

const ComingSoon = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    toggleModal();
  };

  return (
    <div id="coming-soon-container">
      <h1 id="coming-soon-header">Subscribe Now</h1>
      <svg height="10" width="220" id="coming-soon-underline">
        <path stroke="#004A44" strokeWidth={10} d="M5 0 2000 0" />
      </svg>
      <h3 id="coming-soon-subtext">
        From lonely to loved. Help the dogs in need anywhere at anytime.
      </h3>
      <form onSubmit={handleSubmit} id="coming-soon-form">
        <input
          required
          type="text"
          name="name"
          placeholder="Enter your email"
          id="coming-soon-input"
        />
        <input type="submit" value="Submit" id="coming-soon-button" />
        <Modal show={isOpen} onClose={toggleModal}/>
      </form>
    </div>
  );
};

export default ComingSoon;
