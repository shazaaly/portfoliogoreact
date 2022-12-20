import React from 'react'
import cv from '../../assets/pdf/ShazaAli_Nov_2022.pdf'
import './cv.css'

export const Cv = () => {
    return (
        <div className='cvArea'>

            <a className='btn cvLink' href={cv} download><span>Download CV</span></a>
            {/* id section contact inside a to direct  */}
            <a className='btn btn-primary' href='#contact'>Ask me</a>
        </div>
    )
}
