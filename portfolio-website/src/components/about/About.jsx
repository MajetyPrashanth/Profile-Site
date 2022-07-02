import React from 'react'
import './About.css'
import ME from '../../assets/me-about.jpg'
import {GiTrophy} from 'react-icons/gi'
import {RiComputerFill} from 'react-icons/ri'
import {AiFillCode} from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me !</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
                      {/* CARD 1 */}
            <article className="about__card">
              <GiTrophy className='about__icon'/>
              <h5>Experience</h5>
              <small>6 months+ working</small>
            </article>
                      {/* CARD 2 */}
            <article className="about__card">
              <RiComputerFill className='about__icon'/>
              <h5>Projects</h5>
              <small>5+ Projects</small>
            </article>
                      {/* CARD 3 */}
            <article className="about__card">
              <AiFillCode className='about__icon'/>
              <h5>Languages Known</h5>
              <small>5+ Languages Known</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ratione, 
            ipsum amet alias impedit fugiat. Corporis ipsum consequatur omnis necessitatibus 
            in assumenda pariatur, ex laudantium harum sequi tempore incidunt dicta.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk !</a>
        </div>
      </div>
    </section>
  )
}

export default About