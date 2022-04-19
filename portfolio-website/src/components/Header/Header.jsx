import React from 'react'
import './Header.css'
import  CTA from './CTA'
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I am</h5>
        <h1>Prashanth Majety</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA/>
      </div>
    </header>
  )
}

export default Header