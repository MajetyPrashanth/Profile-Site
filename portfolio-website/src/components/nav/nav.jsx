import React from 'react'
import './nav.css'
import {BiHomeSmile} from 'react-icons/bi'
import {BsInfoCircleFill} from 'react-icons/bs'
import {BiBook} from 'react-icons/bi'
import {FaUserCircle} from 'react-icons/fa'
// import {RiServiceLine} from 'react-icons/ri'
import {MdContacts} from 'react-icons/md'

const nav = () => {
  return (
    <nav>
      <a href="#header"><BiHomeSmile/></a>
      <a href="#about"><BsInfoCircleFill/></a>
      <a href="#experience"><BiBook/></a>
      <a href="#testimonials"><FaUserCircle/></a>
      {/* <a href="#services"><RiServiceLine/></a> */}
      <a href="#contact"><MdContacts/></a>
    </nav>
  )
}

export default nav