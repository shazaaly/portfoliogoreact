import React from 'react'
import './experience.css'
import img from '../../assets/images/uber.png'
import foodAppImg from '../../assets/images/Food-Menu-React-App.png'
import mealsImg from '../../assets/images/meals.png'
import ecomImg from '../../assets/images/ecommerce.png'
import resumeImg from '../../assets/images/resume.png'
import moviesImg from '../../assets/images/React-Movies.png'


export const Experience = () => {
  return (
    <section id='experience'>

      <h5>Work Samples </h5>
      <h2>Featured Projects</h2>

      <div className='container exp_container'>
        <div className='exp_cards'>
          <article className='card'>
            <h3>Restaurant RTL</h3>

            <div className='img'>
              <img src={foodAppImg} alt='restaurant' />

            </div>
            <p>HTML SCSS ReactJs</p>
            <div className='buttons'>
              <a target='_blank' rel="noreferrer" className='btn' href='https://github.com/shazaaly/restaurant'>Github Link</a>
              <a target='_blank' rel="noreferrer" className='btn btn-primary' href='https://restaurant-olive-alpha.vercel.app/'>Live Demo</a>
            </div>

          </article>

          <article className='card'>
            <div className='img'></div>
            <h3>Delivery App</h3>
            <div className='img'>
              <img src={img} alt='uber project clone' />

            </div>
            <p> HTML SCSS Next Js</p>

            <a target='_blank' rel="noreferrer" className='btn' href='https://github.com/shazaaly/uberDemo2'>Github Link</a>
            <a target='_blank' rel="noreferrer" className='btn btn-primary' href='https://uber-demo-2a.vercel.app/'>Live Demo</a>

          </article>

          <article className='card'>
            <div className='img'></div>
            <h3>Online Restaurant</h3>
            <div className='img'>
              <img src={mealsImg} alt='meals app' />

            </div>
            <p> HTML SCSS React Js</p>

            <a target='_blank' rel="noreferrer" className='btn' href='https://food-app-2825d.web.app/'>Github Link</a>
            <a target='_blank' rel="noreferrer" className='btn btn-primary' href='https://food-app-2825d.web.app/'>Live Demo</a>

          </article>
          <article className='card'>
            <div className='img'></div>
            <h3>Online Store</h3>
            <div className='img'>

              <img src={ecomImg} alt='ecommerce' />
            </div>
            <p> HTML React-Bootstrap </p>
            <a target='_blank' rel="noreferrer" className='btn' href='https://github.com/shazaaly/ecommercereact'>Github Link</a>
            <a target='_blank' rel="noreferrer" className='btn btn-primary' href='https://ecommercereact-ruddy.vercel.app/'>Live Demo</a>

          </article>
          <article className='card'>
            <div className='img'></div>
            <h3>Resumes</h3>
            <div className='img'>

              <img src={resumeImg} alt='resume design' />
            </div>
            <p> HTML CSS</p>
            <a target='_blank' rel="noreferrer" className='btn' href='https://github.com/shazaaly/myHtmlCssResume'>Github Link</a>
            <a target='_blank' rel="noreferrer" className='btn btn-primary' href='https://shazaaly.netlify.app/'>Live Demo</a>

          </article>
          <article className='card'>
            <div className='img'></div>
            <h3>Movie Night</h3>
            <div className='img'>

              <img src={moviesImg} alt='movies' />
            </div>
            <p> HTML Scss React Js</p>
            <a target='_blank' rel="noreferrer" className='btn' href='https://github.com/shazaaly/redux-thunk-gomycode'>Github Link</a>
            <a target='_blank' rel="noreferrer" className='btn btn-primary' href='https://redux-thunk-movies-i2kv0v3e5-shazaaly.vercel.app/'>Live Demo</a>

          </article>


        </div>

      </div>
    </section>
  )
}
