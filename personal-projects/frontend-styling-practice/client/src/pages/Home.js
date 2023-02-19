import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faToolbox,
  faAddressBook,
  faCloud
} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <section className="container">
      <div className="fader"></div>
      <div className="homeContent">
        <div className="welcome">
          <h1>
            <span id="one">He</span>
            <br />
            <span id="two">llo</span>
            <span id="three">.</span>
          </h1>
        </div>
        <div className="buttonDiv">
          <Link to="/projects" className="homeLink">
            <FontAwesomeIcon
              icon={faToolbox}
              className="button"
            ></FontAwesomeIcon>
          </Link>

          <Link to="/contact" className="homeLink">
            <FontAwesomeIcon icon={faAddressBook} className="button" />
          </Link>

          <Link to="/about" className="homeLink">
            <FontAwesomeIcon icon={faCloud} className="button" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Home
