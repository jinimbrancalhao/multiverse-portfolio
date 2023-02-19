import React from 'react'

const header = () => {
  return (
    <div className="nav">
      <div className="navName">
        <a href="#home">Jin Im Brancalhao</a>
      </div>
      <div className="navLinks">
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

export default header
