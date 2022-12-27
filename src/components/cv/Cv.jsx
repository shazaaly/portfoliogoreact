import React from 'react'
import { Link } from 'react-router-dom'
import './cv.css'

export const Cv = () => {
    return (
        <div className='cvArea'>
            <a className='btn cvLink'
                rel="noreferrer" href={require('../../assets/pdf/ShazaAli_Nov_2022.pdf')}
                target="_blank">Download CV</a>

            {/* <Link className='btn cvLink'
                to='../../assets/pdf/ShazaAli_Nov_2022.pdf' download>Download CV
            </Link> */}
            <Link className='btn btn-primary' to='/contact'>Ask me</Link>

        </div >
    )
}
