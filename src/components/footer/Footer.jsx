import React from 'react'
import { PopupButton } from "react-calendly";
import { AiOutlineMail } from 'react-icons/ai';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { RiMessengerLine } from 'react-icons/ri';
import { ReactComponent as Sig } from '../../assets/images/signiture.svg';


import './footer.css'

export const Footer = () => {
  return (
    <section id='footer'>

      <div className='container footer_container'>

       
        <div className='slogan'>
          Idea ? Let's talk! 
        </div>
        <div className='contact_me'>
          <p>Consult me for free ? </p>
         


        </div>

        <div className='calendly'>
            <PopupButton 
              url="https://calendly.com/shaza-aly/15min"
              /*
               * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
               * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
               */
              rootElement={document.getElementById("root")}
              text="Click here to schedule!"
            />

          </div>
        <div className='connect'>

          <div className='mailLInk'>


            <a target="_blank" rel="noreferrer" href="mailto:shaza.aly@gmail.com">
              <AiOutlineMail className='about-icon' />
            </a>
          </div>

          <div className='messengerLink'>


            <a target="_blank" rel="noreferrer" href='https://m.me/profile.php?id=100085150987823'>
              <RiMessengerLine className='about-icon' />
            </a>
          </div>

          <div>

            <a className='whatsLink' target="_blank" rel="noreferrer" href='https://wa.me/201062794773'>
              <AiOutlineWhatsApp className='about-icon' />

            </a>
          </div>
       



        </div>
      </div>

    </section>
  )
}
