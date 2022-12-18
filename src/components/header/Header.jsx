import React from 'react'
import { Cv } from '../cv/Cv'

import './header.css'
export const Header = () => {
    return (
        /* Header semantic tags */
        <header>
            <div className='container header-container'>

                <h3>Hello, I'm </h3>
                <h1 className='text-light'>Shaza Ali</h1>
                <h3 className='text-dark'>Fullstack Js developer </h3>
            </div>
            <Cv/>
        </header>
    )
}
