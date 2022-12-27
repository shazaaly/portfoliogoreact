import { BsBook, BsGithub, BsLinkedin } from 'react-icons/bs';
import { AiFillHome, AiOutlineBorderOuter, } from 'react-icons/ai'
import { IoIosContact } from 'react-icons/io'
import { MdOutlineMiscellaneousServices } from 'react-icons/md'

import './nav.css'
import { NavLink } from 'react-router-dom';

export const Nav = () => {


  return (
    <div className='nav'>

      <div className='socials'>
        <a href='https://www.linkedin.com/in/shazaali/' rel="noreferrer" target='_blank'
          style={{ marginRight: '1rem' }}
        ><BsLinkedin /></a>
        <a href='https://github.com/shazaaly' rel="noreferrer" target='_blank'><BsGithub /></a>
      </div>

      <div className='icons'>
        <NavLink to="/" ><AiFillHome /> </NavLink>
        <NavLink to="/about" ><AiOutlineBorderOuter /> </NavLink>
        <NavLink to="/experience" ><BsBook /> </NavLink>
        <NavLink to="/contact" ><IoIosContact /> </NavLink>
        <NavLink to="/services" ><MdOutlineMiscellaneousServices /> </NavLink>


        {/* <a className='active' href='#home'><AiFillHome /></a>
        <a href='#about'><AiOutlineBorderOuter /></a>
        <a href='#experience'> <BsBook /></a>
        <a href='#contact'><IoIosContact /></a>
        <a href='#services'><MdOutlineMiscellaneousServices /></a> */}
      </div>

      <div className='internal-sections'>
{/* 
        <a href='#home'>Home</a>
        <a href='#about'>About</a>
        <a href='#experience'>Experience</a>
        <a href='#portfolio'>Portfolio</a>
        <a href='#services'>Services</a>
        <a href='#testimonials'>Testimonials</a> */}

        <NavLink to="/" >Home </NavLink>
        <NavLink to="/about" >About </NavLink>
        <NavLink to="/experience" >Experience </NavLink>
        <NavLink to="/contact" >Portfolio </NavLink>
        <NavLink to="/services" >Services </NavLink>

      </div>

    </div>
  )
}
