import React from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import './nav.css'

export const Nav = () => {
  return (
    <div className='nav'>

      <div className='socials'>
        <a href='https://www.linkedin.com/in/shazaali/' rel="noreferrer" target='_blank'
          style={{ marginRight: '1rem' }}
        ><BsLinkedin /></a>
        <a href='https://github.com/shazaaly' rel="noreferrer" target='_blank'><BsGithub /></a>
      </div>

      <div className='internal-sections'>
        <a href='#about'>About</a>
        <a href='#experience'>Experience</a>
        <a href='#portfolio'>Portfolio</a>
        <a href='#services'>Services</a>
        <a href='#testimonials'>Testimonials</a>

      </div>
    </div>
  )
}
