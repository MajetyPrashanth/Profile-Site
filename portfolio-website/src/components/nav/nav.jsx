import React from 'react'
import './nav.css'
import {BiHomeSmile} from 'react-icons/bi'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
// import {RiServiceLine} from 'react-icons/ri'
import {MdContacts} from 'react-icons/md'

const nav = () => {
  return (
    <nav>
      <a href="#header"><BiHomeSmile/></a>
      <a href="#about"><AiOutlineUser/></a>
      <a href="#experience"><BiBook/></a>
      {/* <a href="#services"><RiServiceLine/></a> */}
      <a href="#contact"><MdContacts/></a>
    </nav>
  )
}

export default nav