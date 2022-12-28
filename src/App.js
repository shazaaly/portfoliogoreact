import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { About } from './components/about/About';
import { Contact } from './components/contact/Contact';
import { Experience } from './components/experience/Experience';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { Nav } from './components/nav/Nav';
import { Portfolio } from './components/portfolio/Portfolio';
import { Services } from './components/services/Services';
import { Testimonials } from './components/testimonials/Testimonials';

function App() {



  return (
    < >
      {/* <Nav /> */}
      {/* 
      <Routes>

        <Route path='/' element={<Header />} />
        <Route path='/about' element={<About />} />
        <Route path='/experience' element={<Experience />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/services' element={<Services />} />
        <Route path='/testimonials' element={<Testimonials />} />

      </Routes> */}
      {/* <About /> */}



      <Nav />
      <Header />
      <About />
      <Experience />
      {/* <Services /> */}
      {/* <Portfolio /> */}
      {/* <Testimonials /> */}
      <Contact />
      <Footer />

    </>
  );
}

export default App;
