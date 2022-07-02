import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const headerSocials = () => {
  return (
    <div className='header__socials'>
        <span href='' class='socials__text'>SOCIALS</span>
        <a href="https://www.linkedin.com/in/prashanth-majety/"><BsLinkedin/></a>
        <a href="http://github.com/MajetyPrashanth"><BsGithub/></a>
    </div>
  )
}

export default headerSocials