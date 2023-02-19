/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React from 'react';
import {Link, NavLink} from 'react-router-dom';

const Homepage = (props) => {
  return (
    <div className="landing-page">
      <div className="banner">
        <div className="banner-content">
          <div className="banner-left-side">
            <h1>
              Human,
              <span className="font-luckiest-guy">HOME ?</span>
            </h1>
            <h1>will you take me</h1>
            <button>
              <a>
                <NavLink to="/comingsoon" className="primaryBtn">
                  Subscribe
                </NavLink>
              </a>
            </button>
          </div>
          <div className="banner-right-side">
            <img alt="Dog" src={require('../images/landing-page-img.jpg')} />
          </div>
        </div>
        <div className="banner-bottom">
          <h2>Find Your Next Loyal Best Friend</h2>
          <img alt="arrow-down" src={require('../images/arrow-down.png')} />
        </div>
      </div>

      <div className="category-wrapper">
        <div className="dog-preview-list">
          <div className="dog-preview-list-item corgi">
            <img alt="Hunter the corgi" src={require('../images/dog1.jpg')} />
            <div className="dog-preview-description-wrapper">
              <Link to="/singledog">
                <h3
                  className="secondaryBtn"
                  onClick={() =>
                    props.setSingleDogPage(
                        'dog1.jpg',
                        'Hunter',
                        '3 Months',
                        'My name is Hunter, and I\'m always happy. I\'m also super smart, fun-loving, loyal, and very rarely a little stubborn. I run very fast, that\'s why my name is Hunter!',
                        'Corgi',
                        'Good Guard Dog',
                    )
                  }
                >
                  Hunter{' '}
                </h3>
              </Link>
              <div className="subtitle-wrapper">
                <p className="text-strong">3 Months</p>
                <p> Corgi</p>
              </div>
              <p className="description">
                My name is Hunter, and I'm always happy. I'm also super smart,
                fun-loving, loyal, and very rarely a little stubborn. I run very
                fast, that's why my name is Hunter!
              </p>
            </div>
          </div>

          <div className="dog-preview-list-item lab-retriever">
            <img
              alt="Champ the lab-retriever"
              src={require('../images/dog2.jpg')}
            />
            <div className="dog-preview-description-wrapper">
              <Link to="/singledog">
                <h3
                  className="secondaryBtn"
                  onClick={() =>
                    props.setSingleDogPage(
                        'dog2.jpg',
                        'Champ',
                        '5 Months',
                        'My name is Champ. I\'m super smart, and my caretakers often trusted me with kids. I \'m very patience and will be a great family member of yours.',
                        'Lab Retriever',
                        'Good family pet',
                    )
                  }
                >
                  Champ{' '}
                </h3>
              </Link>
              <div className="subtitle-wrapper">
                <p className="text-strong">5 Months</p>
                <p> Lab Retriever</p>
              </div>
              <p className="description">
                My name is Champ. I'm super smart, and my caretakers often
                trusted me with kids. I 'm very patience and will be a great
                family member of yours.
              </p>
            </div>
          </div>

          <div className="dog-preview-list-item bulldog">
            <img alt="Drake the bulldog" src={require('../images/dog3.jpg')} />
            <div className="dog-preview-description-wrapper">
              <Link to="/singledog">
                <h3
                  className="secondaryBtn"
                  onClick={() =>
                    props.setSingleDogPage(
                        'dog3.jpg',
                        'Drake',
                        '1 Year',
                        '',
                        'Bulldog',
                        'Loyal companion',
                    )
                  }
                >
                  Drake{' '}
                </h3>
              </Link>
              <div className="subtitle-wrapper">
                <p className="text-strong">1 Year</p>
                <p> Bulldog</p>
              </div>
              <p className="description">
                My name is Drake, and I love kids. I love to move around, and
                I'm great with tricks! I might look ferocious, but I'm super
                friendly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
