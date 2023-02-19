import React from 'react'

const Home = () => {
  return (
    <div id="home" className="scroller">
      <div className="home-div">
        <h2 className="homeElements homeIntro">
          Hi I'm <span className="homeName">Jin,</span>
        </h2>
        <h1 className="homeElements ">
          <span className="homeBold">Software Developer.</span>
        </h1>
        <h4 className="homeParagraph">
          I enjoy learning new things and solving puzzles!
        </h4>
      </div>
    </div>
  )
}

export default Home
