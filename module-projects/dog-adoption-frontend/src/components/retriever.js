/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React from 'react';
import {Link, NavLink} from 'react-router-dom';

const Retriever = (props) => {
  return (
    <div className="category-wrapper">
      <span className="font-luckiest-guy"><h1> Retrievers </h1></span>
      <svg height="10" width="220">
        <path stroke="#004A44" strokeWidth={10} d="M5 0 2000 0" />
      </svg>
      <h2>Want To Know The Newest Updates On Your Favorite Dog?</h2>
      <button>
        <a>
          <NavLink to="/comingsoon" className="primaryBtn">Subscribe</NavLink>
        </a>
      </button>

      <div className="dog-preview-list">
        <div className="dog-preview-list-item lab-retriever">
          <img alt= "Champ the lab-retriever" src={require('../images/dog2.jpg')}/>
          <div className="dog-preview-description-wrapper">
            <Link to="/singledog">
              <h3 className='secondaryBtn' onClick= {
                ()=>props.setSingleDogPage('dog2-detail.jpg', 'Champ', '5 Months',
                    'My name is Champ. I\'m super smart, and my caretakers often trusted me with kids. I \'m very patience and will be a great family member of yours.',
                    'Lab Retriever', 'Good family pet')}>Champ </h3>
            </Link>
            <div className="subtitle-wrapper">
              <p className="text-strong">5 Months</p>
              <p> Lab Retriever</p>
            </div>
            <p className="description">
                        My name is Champ. I'm super smart, and my caretakers often trusted me with kids. I 'm very patience and will be a great family member of yours.
            </p>
          </div>
        </div>

        <div className="dog-preview-list-item golden-retriever">
          <img alt= "Butters the golden retriever" src={require('../images/dog5.jpg')}/>
          <div className="dog-preview-description-wrapper">
            <Link to="/singledog">
              <h3 className='secondaryBtn' onClick= {
                ()=>props.setSingleDogPage('dog5-detail.jpg', 'Butters', '4 Months',
                    'My name is Butters, and I love playing with kids. My caretakers said I\'m the most even-tempered, intelligent and affectionate dog here.',
                    'Golden Retriever', 'Loyal companion')}>Butters </h3>
            </Link>
            <div className="subtitle-wrapper">
              <p className="text-strong">4 Months</p>
              <p> Golden Retriever</p>
            </div>
            <p className="description">
                        My name is Butters, and I love playing with kids. My caretakers said I'm the most even-tempered, intelligent and affectionate dog here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Retriever;
