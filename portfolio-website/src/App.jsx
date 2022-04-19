import React from 'react'
import Header from './components/Header/Header.jsx'
import Nav from './components/nav/nav'
import Experience from './components/Experience/Experience'
import About from './components/about/About'
import Services from './components/Services/Services'
import Portfolio from './components/Portfolio/Portfolio'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
const app = () => {
  return (
  <>
    <Header/>
    <Nav/>
    <About/>
    <Experience/>
    <Services/>
    <Portfolio/>
    <Testimonials/>
    <Contact/>
    <Footer/>
  </>
  )
}

export default app