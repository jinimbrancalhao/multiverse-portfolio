import {Link} from 'react-router-dom';
import React, {useState} from 'react';

const Navbar = () => {
  const [hamburgerState, setHamburgerState] = useState(false);

  const openHamburger = function() {
    if (hamburgerState === false) {
      setHamburgerState(true);
    } else {
      setHamburgerState(false);
    }
  };

  return (
    <nav className="navbar-wrapper">
      <ul className="menu">
        <li className="logo-wrapper">
          <a className="logo">
            <Link to="/dog-adoption-frontend">
              <img alt="logo" src={require('../images/dog-logo.jpg')}></img>
            </Link>
          </a>
        </li>
        <li className="hamburger">
          <a className="list-icon">
            <img
              onClick={openHamburger}
              alt="list-icon"
              src={require('../images/List.jpg')}
            ></img>
          </a>
          <div
            className={`hamburger-list ${
              !hamburgerState ? 'hamburger-closed' : 'hamburger-opened'
            }`}
          >
            <ul>
              <li>
                <a href="/alldogs">All Dogs</a>
              </li>
              <li>
                <a href="/retrievers">Retriever</a>
              </li>
              <li>
                <a href="/bulldogs">Bulldog</a>
              </li>
              <li>
                <a href="/corgis">Corgi</a>
              </li>
              <li>
                <a href="/samoyeds">Samoyed</a>
              </li>
            </ul>
          </div>
        </li>
      </ul>

      <ul className="dropdown">
        <li className="search-icon">
          <a>
            <Link to="/comingsoon">
              <img
                alt="search-icon"
                src={require('../images/MagnifyingGlass.jpg')}
              ></img>
            </Link>
          </a>
        </li>
        <li className="nav-link">
          <a>
            <Link to="/alldogs">All dogs</Link>
          </a>
        </li>
        <li className="nav-link">
          <a>
            <Link to="/retrievers">Retriever</Link>
          </a>
        </li>
        <li className="nav-link">
          <a>
            <Link to="/bulldogs">Bulldog</Link>
          </a>
        </li>
        <li className="nav-link">
          <a>
            <Link to="/corgis">Corgi</Link>
          </a>
        </li>
        <li className="nav-link">
          <a>
            <Link to="/samoyeds">Samoyed</Link>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
