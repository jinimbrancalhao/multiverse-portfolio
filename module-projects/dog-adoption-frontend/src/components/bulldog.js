/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React from 'react';
import {Link, NavLink} from 'react-router-dom';

const Bulldog = (props) => {
  return (
    <div className="category-wrapper">
      <span className="font-luckiest-guy"><h1> Bulldogs </h1></span>
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
        <div className="dog-preview-list-item bulldog">
          <img alt= "Drake the bulldog" src={require('../images/dog3.jpg')}/>
          <div className="dog-preview-description-wrapper">
            <Link to="/singledog">
              <h3 className='secondaryBtn' onClick= {
                ()=>props.setSingleDogPage('dog3-detail.jpg', 'Drake', '1 Year',
                    'My name is Drake, and I love kids. I love to move around, and I\'m great with tricks! I might look ferocious, but I\'m super friendly.',
                    'Bulldog', 'Loyal companion')}>Drake
              </h3>
            </Link>
            <div className="subtitle-wrapper">
              <p className="text-strong">1 Year</p>
              <p> Bulldog</p>
            </div>
            <p className="description">
                        My name is Drake, and I love kids. I love to move around, and I'm great with tricks! I might look ferocious, but I'm super friendly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bulldog;
