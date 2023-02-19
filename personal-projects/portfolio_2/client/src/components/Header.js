import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="headerNameLink">
        <h3 className="headerName">Jin Im Brancalhao</h3>
      </Link>
      <div className="headerIcon">
        <a className="headerLink" href="https://github.com/jinimbrancalhao">
          <FontAwesomeIcon icon={faGithub} className="icon" />
        </a>
        <a className="headerLink" href="https://www.linkedin.com/in/jinimb/">
          <FontAwesomeIcon icon={faLinkedin} className="icon" />
        </a>
      </div>
    </div>
  )
}

export default Header
