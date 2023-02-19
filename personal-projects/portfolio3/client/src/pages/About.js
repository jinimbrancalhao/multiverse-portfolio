import React from 'react'

const About = () => {
  return (
    <div id="about" className="scroller">
      <h1 id="about-title">About Me!</h1>
      <div id="about-container">
        <div className="tech-experience">
          <h3 id="tech-title">Tech Experience</h3>
          <div className="tech-skills">
            <div className="skill-value">
              <p className="tech-key">Languages:</p>
              <p>HTML | CSS | Java | JavaScript | Python</p>
            </div>
            <div className="skill-value">
              <p className="tech-key">Frameworks:</p>
              <p>Vue | Express | Jest | Spring Boot | JUnit</p>
            </div>
            <div className="skill-value">
              <p className="tech-key">Libraries / Tools:</p>
              <p>
                React | Bootstrap | Sequelize | Mongoose | Hibernate | Karma
              </p>
            </div>
            <div className="skill-value">
              <p className="tech-key">Databases:</p>
              <p>PostgreSQL | SQLite | MongoDB | Oracle</p>
            </div>
          </div>
        </div>
        <div id="about-description">
          <p>
            <span className="span-blue">Hey there!</span> My name is Jin and I
            am a <span className="span-blue">software developer</span>. I began
            my engineering journey by joining a bootcamp with General Assembly.
            It was my first real dive into developing, and I haven't stopped
            since!
          </p>
          <p>
            Besides developing, I have a background in{' '}
            <span className="span-blue">client-facing services </span> and
            <span className="span-blue"> business-ownership </span>. My interest
            in development and problem-solving evolved from creating and running
            my own photography business, where I had to learn how to scale a
            business while maintaining utmost client-satisfaction and quality of
            work.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
