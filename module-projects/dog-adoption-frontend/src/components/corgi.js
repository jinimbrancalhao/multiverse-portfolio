/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React from 'react';
import {Link, NavLink} from 'react-router-dom';

const Corgi = (props) => {
  return (
    <div className="category-wrapper">
      <span className="font-luckiest-guy"><h1> Corgis </h1></span>
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
        <div className="dog-preview-list-item corgi">
          <img alt= "Chick Pea the corgi" src={require('../images/dog4.jpg')}/>
          <div className="dog-preview-description-wrapper">
            <Link to="/singledog">
              <h3 className='secondaryBtn' onClick= {
                ()=>props.setSingleDogPage('dog4-detail.jpg', 'Chick Pea', '2 Years',
                    'My name is Chick Pea, and I love kids. Look at my short little legs and my tiny little tail. Aren\'t I adorable? Are you ready to take me home today?',
                    'Corgi', 'Courageous')}>Chick Pea </h3>
            </Link>
            <div className="subtitle-wrapper">
              <p className="text-strong">2 Years</p>
              <p> Corgi</p>
            </div>
            <p className="description">
                     My name is Chick Pea, and I love kids. Look at my short little legs and my tiny little tail. Aren't I adorable? Are you ready to take me home today?
            </p>
          </div>
        </div>

        <div className="dog-preview-list-item corgi">
          <img alt= "Hunter the corgi" src={require('../images/dog1.jpg')}/>
          <div className="dog-preview-description-wrapper">
            <Link to="/singledog">
              <h3 className='secondaryBtn' onClick= {
                ()=>props.setSingleDogPage('dog1-detail.jpg', 'Hunter', '3 Months',
                    'My name is Hunter, and I\'m always happy. I\'m also super smart, fun-loving, loyal, and very rarely a little stubborn. I run very fast, that\'s why my name is Hunter!',
                    'Corgi', 'Good Guard Dog')}>Hunter </h3>
            </Link>
            <div className="subtitle-wrapper">
              <p className="text-strong">3 Months</p>
              <p> Corgi</p>
            </div>
            <p className="description">
                        My name is Hunter, and I'm always happy. I'm also super smart, fun-loving, loyal, and very rarely a little stubborn. I run very fast, that's why my name is Hunter!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Corgi;
