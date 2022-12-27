import React from 'react'
import { Link } from 'react-router-dom'
import './cv.css'

export const CvData = () => {
    return (
        <div className='cvArea'>

            <a className='btn cvLink'
                rel="noreferrer" href='https://drive.google.com/file/d/1OYKSK6RO9VWmPLVC9sjd8HaeKFbG7gKW/view?usp=sharing'
                target="_blank">Download CV</a>


            <Link className='btn btn-primary' to='/contact'>Ask me</Link>

        </div >
    )
}
