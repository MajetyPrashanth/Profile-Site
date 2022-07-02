import React from 'react'
import './Experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I have ?</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Front-end Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsFillPatchCheckFill className='green-text experience__details-icon'/>
              <div>
                <h4 className='green-text'>HTML 5</h4>
                <small className='green-text'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className='green-text experience__details-icon'/>
              <div>
                <h4 className='green-text'>CSS</h4>
                <small className='green-text'>Experienced</small>
              </div>
            </article>
            
            <article className='experience__details'>
              <BsFillPatchCheckFill className='green-text experience__details-icon'/>
              <div>
                <h4 className='green-text'>Bootstrap</h4>
                <small className='green-text'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className='yellow-text experience__details-icon'/>
              <div>
                <h4 className='yellow-text'>Angular JS</h4>
                <small className='yellow-text'>Beginner</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className='yellow-text experience__details-icon'/>
              <div>
                <h4 className='yellow-text'>React</h4>
                <small className='yellow-text'>Beginner</small>
              </div>
            </article>
          </div>
        </div>
        
        <div className="experience__backend">
          <h3>Back-end Development</h3>
          <div className="experience__content">
          <article className='experience__details'>
              <BsFillPatchCheckFill className='green-text experience__details-icon'/>
              <div>
                <h4 className='green-text'>MySQL</h4>
                <small className='green-text'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className='yellow-text experience__details-icon'/>
              <div>
                <h4 className='yellow-text'>Node JS</h4>
                <small className='yellow-text'>Beginner</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className='green-text experience__details-icon'/>
              <div>
                <h4 className='green-text'>Python</h4>
                <small className='green-text'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>     
    </section>
  )
}

export default Experience