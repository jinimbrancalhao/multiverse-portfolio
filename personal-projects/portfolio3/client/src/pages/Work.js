import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Work = () => {
  return (
    <div id="work" className="scroller">
      <h1 className="sectionHeading">Some fun projects...</h1>
      <div className="projects">
        <div className="projectCard" id="p1">
          <div className="card-title">
            <h2 className="projectName">GameStart</h2>
            <a href="https://github.com/sbassong/GameStart">
              <FontAwesomeIcon icon={faGithub} className="projectIcon" />
            </a>
          </div>
          <p className="projectDescription">
            GameStart is a full-stack application in which users can browse
            games, sell/trade their game inventory, and add various games to
            their cart.
          </p>
          <p className="projectTechs">PostgreSQL Express React Node</p>
        </div>
        <div className="projectCard" id="p2">
          <div className="card-title">
            <h2 className="projectName">Whac-A-Mole</h2>
            <a href="https://github.com/jinimbrancalhao/Whac-A-Mole">
              <FontAwesomeIcon icon={faGithub} className="projectIcon" />
            </a>
          </div>
          <p className="projectDescription">
            Users have one minute to click as many of the randomly-generating
            moles as possible. How many moles can you click??
          </p>
          <p className="projectTechs">Vanilla JavaScript</p>
        </div>
        <div className="projectCard" id="p3">
          <div className="card-title">
            <h2 className="projectName">Balance</h2>
            <a href="https://github.com/jinimbrancalhao/Balance-App">
              <FontAwesomeIcon icon={faGithub} className="projectIcon" />
            </a>
          </div>
          <p className="projectDescription">
            A journaling app in which users can write private and public
            reflections and goals.
          </p>
          <p className="projectTechs">MongoDB Express React Node</p>
        </div>
        <div className="projectCard" id="p4">
          <div className="card-title">
            <h2 className="projectName">Tic-Tac-Toe</h2>
            <a href="https://github.com/jinimbrancalhao/tic-tac-toe">
              <FontAwesomeIcon icon={faGithub} className="projectIcon" />
            </a>
          </div>
          <p className="projectDescription">
            This app is a 3x3 grid in which users alternate turns in an attempt
            to complete a row, column, or diagonal using either 3 X's or three
            O's.
          </p>
          <p className="projectTechs">Vanilla JavaScript</p>
        </div>
      </div>
    </div>
  )
}

export default Work
