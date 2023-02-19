import React, { useState } from 'react'

const Hamburger = () => {
  const [navOverlay, setNavOverlay] = useState(false)

  function setHamburgerCondition() {
    if (navOverlay === false) {
      setNavOverlay(true)
    } else {
      setNavOverlay(false)
    }
    console.log('clicked')
    console.log(navOverlay)
  }

  return (
    <div className="hamburger">
      <div onClick={setHamburgerCondition} id="hamburger-container">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      <div
        onClick={setHamburgerCondition}
        className={`hamburger-gone ${!navOverlay ? 'link-close-nav' : ''}`}
      >
        <a href="#home">Home</a>

        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <a
          href="https://docs.google.com/document/d/1_ASOagLmIxkFbsHeftVhTc_kGGTRE8djKKo6B7-SGsQ/edit?usp=sharing"
          id="resume"
        >
          Resume
        </a>
      </div>
    </div>
  )
}

export default Hamburger
