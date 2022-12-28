import React from 'react'
import '../contact/contact.css'
import { AiOutlineMail } from 'react-icons/ai'
import { BsWhatsapp } from 'react-icons/bs'
import { RiMessengerLine } from 'react-icons/ri'
import { ReactComponent as Sig } from '../../assets/images/signiture.svg';

import './contact.css'

export const Contact = () => {
    return (
        <section id='contact'>

            <h5>Get in touch  </h5>
            <h2>Contact Me </h2>
            <div className='container contact_container'>


                <div className='contact_ways'>
                    <article className='card email'>
                        <AiOutlineMail className='about-icon' />
                        <h4>Email</h4>
                        <h5>shaza.aly@gmail.com</h5>
                        <a target="_blank" rel="noreferrer" href="mailto:shaza.aly@gmail.com">Send a message</a>

                    </article>

                    <article className='card messenger'>
                        <RiMessengerLine className='about-icon' />
                        <h4>Messenger</h4>
                        <h5>Shaza AlyOthman</h5>
                        <a target="_blank" rel="noreferrer" href='https://m.me/profile.php?id=100085150987823'> Send a message </a>

                    </article>
                    <article className='card whats'>
                        <BsWhatsapp className='about-icon' />
                        <h4>Whats app</h4>
                        <h5>+201062794773</h5>
                        <a target="_blank" rel="noreferrer" href='https://wa.me/201062794773'>Send a message</a>

                    </article>

                </div>

                <div className='form_container'>
                    <form >
                        <input name='name' type='text' placeholder=' name ...' required />
                        <input name='email' type='email' placeholder=' email ...' required />
                        <textarea name='message' cols='30' rows='10'
                            placeholder='message...' required ></textarea>

                        <button className='btn btn-primary' type='submit'>Send Message</button>


                    </form>


                </div>

                <div className='svgSig'>
                    <Sig />


                </div>

            </div>



        </section>
    )
}
