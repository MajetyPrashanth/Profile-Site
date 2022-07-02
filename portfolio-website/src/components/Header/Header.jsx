import React from 'react'
import './Header.css'
import  CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <section id='header' className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Prashanth Majety</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA/>
        <HeaderSocial/>

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </section>
    </header>
  )
}

export default Header