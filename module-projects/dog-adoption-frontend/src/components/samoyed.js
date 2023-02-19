/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React from 'react';
import {Link, NavLink} from 'react-router-dom';

const Samoyed = (props) => {
  return (
    <div className="category-wrapper">
      <span className="font-luckiest-guy"><h1> Samoyeds </h1></span>
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
        <div className="dog-preview-list-item samoyed">
          <img alt= "Lilo the samoyed" src={require('../images/dog6.jpg')}/>
          <div className="dog-preview-description-wrapper">
            <Link to="/singledog">
              <h3 className='secondaryBtn' onClick= {
                ()=>props.setSingleDogPage('dog6-detail.jpg', 'Lilo', '7 Years',
                    'My name is Lilo, and I love attention. I\'m super smart, and I\'m never tired. I\'m also super fluffy! I\'ll be your best cuddling company.',
                    'Samoyed', 'Good guard dog')}>Lilo </h3>
            </Link>
            <div className="subtitle-wrapper">
              <p className="text-strong">7 years</p>
              <p> Samoyed</p>
            </div>
            <p className="description">
                     My name is Lilo, and I love attention. I'm super smart, and I'm never tired. I'm also super fluffy! I'll be your best cuddling company.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Samoyed;
