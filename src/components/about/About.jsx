import React from 'react'
import './about.css'
import { BsAward } from 'react-icons/bs'
import { FiUsers } from 'react-icons/fi'
import { AiOutlineFolderOpen } from 'react-icons/ai'



export const About = () => {
  return (
    <section id='about'>

      <h5>Get to know  </h5>
      <h2>About me</h2>
      <div className='container about_container'>


        <div className='about-bio'>
          My shifting to programming was built through Cairo University
          where I learned software engineering not just coding,
          this granted me a robust technical background
          that helped me a lot in structuring web platforms
          from being an idea into a full software product..
        </div>
        <div className='about-content'>
          <div className='cards'>
            <article className='card'>
              <BsAward className='about-icon' />
              <h5>Work Experience</h5>
              <small>4+ Years Working</small>
            </article>

            <article className='card'>
              <FiUsers className='about-icon' />
              <h5>Education</h5>
              <small>4+ Years Working</small>
            </article>

            <article className='card'>
              <AiOutlineFolderOpen className='about-icon' />
              <h5>Projects</h5>
              <small>66+ Complete Projects</small>
            </article>

          </div>

        </div>

      </div>
    </section>
  )
}
