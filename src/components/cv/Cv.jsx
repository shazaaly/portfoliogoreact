import React from 'react'
import cv from '../../assets/pdf/ShazaAli_Nov_2022.pdf'

export const Cv = () => {
    return (
        <div className='cv'>
            <a className='btn' href={cv} download>Download CV</a>
            {/* id section contact inside a to direct  */}
            <a className='btn btn-primary' href='#contact'>Ask me</a>
        </div>
    )
}
