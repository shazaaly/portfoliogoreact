import React from 'react'
import '../contact/contact.css'
import { AiOutlineMail } from 'react-icons/ai'
import { BsWhatsapp } from 'react-icons/bs'
import { RiMessengerLine } from 'react-icons/ri'

import './contact.css'

export const Contact = () => {
    return (
        <section id='contact'>

            <h5>Get in touch  </h5>
            <h2>Contact Me </h2>
            <div className='container contact_container'>


                <div className='contact_ways'>
                    <article className='card'>
                        <AiOutlineMail className='about-icon' />
                        <h4>Email</h4>
                        <h5>shaza.aly@gmail.com</h5>
                        <a href=''>Send a message</a>

                    </article>

                    <article className='card'>
                        <RiMessengerLine className='about-icon' />
                        <h4>Messenger</h4>
                        <h5>shaza.aly@gmail.com</h5>
                        <a href=''>Send a message</a>

                    </article>
                    <article className='card'>
                        <BsWhatsapp className='about-icon' />
                        <h4>Whats app</h4>
                        <h5>+201062794773</h5>
                        <a href='https://wa.me/201062794773'>Send a message</a>

                    </article>

                </div>

                <div className='form_container'>
                    <form>
                        <input type='text' placeholder=' name ...' />
                        <input type='email' placeholder=' email ...' />
                        <textarea cols='30' rows='10'
                            placeholder='message...' ></textarea>


                    </form>


                </div>

            </div>



        </section>
    )
}
