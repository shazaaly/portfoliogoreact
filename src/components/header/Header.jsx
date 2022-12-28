import React, { useEffect, useState } from 'react'
import { CvData } from '../cv/CvData'
import me from '../../assets/images/self1.jpeg'

import './header.css'
export const Header = () => {
    const [animation, setAnimation] = useState(0);

    useEffect(() => {
        setAnimation(1);

    })

    return (
        /* Header semantic tags */
        <header className='header'>

            <div className='container header-container'>


                <div className='intro'>

                    <h3>Hello, I'm </h3>

                </div>

                <div animation={animation}>
                    <h1 className='text-light'>Shaza Aly</h1>

                </div>

                <div animation={animation} className='job' >
                    <h3 className='text-dark'>Fullstack JavaScript developer </h3>
                </div>


                <div className='cv'>
                    <CvData />


                </div>

                <div className='me' >
                    <img className='my-image' src={me} alt='web-dev-img' />
                </div>



                <a href='#contact' className='scroll-down'>Scroll Down</a>

            </div>


           


        </header>
    )
}
