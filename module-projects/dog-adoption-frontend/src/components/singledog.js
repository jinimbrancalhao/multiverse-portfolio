import React from 'react';
import {NavLink} from 'react-router-dom';

const singledog = (props) => {
  return (
    <div className="category-wrapper">
      <span className="font-luckiest-guy">
        <h1> {props.singledog.breed} </h1>
      </span>
      <svg height="10" width="360">
        <path stroke="#004A44" strokeWidth={10} d="M5 0 2000 0" />
      </svg>
      <h2>Want To Know The Newest Updates On Your Favorite Dog?</h2>
      <button>
        <a>
          <NavLink to="/comingsoon" className="primaryBtn">
            Subscribe
          </NavLink>
        </a>
      </button>

      <div className="single-dog-detail-wrapper">
        <div className="single-dog-detail-bg">
          <div className="single-dog-detail-content">
            <h2 className="single-dog-detail-description">
              {props.singledog.name}
            </h2>
            <p className="single-dog-detail-description age">
              {props.singledog.age}
            </p>
            <p className="characteristics">{props.singledog.characteristics}</p>
            <p className="description single-dog-description">
              {props.singledog.description}
            </p>
            <div>
              <a href='/adoptnow'>
                <button>
                  Adopt Now
                </button>
              </a>

              <a className="navlink">
                <NavLink to="/">View Other Dogs</NavLink>
              </a>
            </div>
          </div>
        </div>

        <div className="single-dog-detail-image">
          <img
            alt="individual dog"
            src={require(`../images/${props.singledog.image}`)}
          />
        </div>
      </div>
    </div>
  );
};

export default singledog;
