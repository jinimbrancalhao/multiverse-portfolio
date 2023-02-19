/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React from 'react';
import {Link, NavLink} from 'react-router-dom';

const Alldog = (props) => {
  return (
    <div className="category-wrapper">
      <span className="font-luckiest-guy"><h1> All Dogs </h1></span>
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

        <div className="dog-preview-list-item bulldog">
          <img alt= "Drake the bulldog" src={require('../images/dog3.jpg')}/>
          <div className="dog-preview-description-wrapper">
            <Link to="/singledog">
              <h3 className='secondaryBtn' onClick= {
                ()=>props.setSingleDogPage('dog3-detail.jpg', 'Drake', '1 Year',
                    'My name is Drake, and I love kids. I love to move around, and I\'m great with tricks! I might look ferocious, but I\'m super friendly.',
                    'Bulldog', 'Loyal companion')}>Drake </h3>
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

export default Alldog;
