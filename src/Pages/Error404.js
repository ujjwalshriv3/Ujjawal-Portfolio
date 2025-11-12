import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import USLogopng from '../components/Assest_Used/US_LogoTransparent.png';
import './Styles/Error404.css';
import { Helmet } from 'react-helmet';

const Error404 = () => {
  useEffect(() => {
    const toggleMenu = () => {
      $('#menu').toggleClass('fa-times');
      $('.navbar').toggleClass('nav-toggle');
    };

    $('#menu').on('click', toggleMenu);

    window.scrollTo({ top: 0, behavior: 'smooth' });

    const disableDevTools = (e) => {
      if (e.keyCode === 123 || 
          (e.ctrlKey && e.shiftKey && (e.keyCode === 'I'.charCodeAt(0) ||
          e.keyCode === 'C'.charCodeAt(0) || e.keyCode === 'J'.charCodeAt(0))) || 
          (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))) {
        e.preventDefault();
      }
    };

    document.addEventListener('keydown', disableDevTools);

    return () => {
      $('#menu').off('click', toggleMenu);
      document.removeEventListener('keydown', disableDevTools);
    };
  }, []);

  return (
    <>
    <Helmet>
      <title>Error 404 | Portfolio - Ujjawal</title>
    </Helmet>
    <div onContextMenu={(e) => e.preventDefault()}>
      <header>
      <Link to="/" className="logo" style={{ display: 'flex', alignItems: 'center' }}>
        <img src={USLogopng} alt="Logo" style={{ height: '45px', marginleft: '5px' }} />
        Ujjawal Shrivastava
      </Link>
        <div id="menu" className="fas fa-bars"></div>
        <nav className="navbar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/education">Education</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/experience">Experience</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        
      </header>

      <section className="page_404">
        <div className="container">
          <div className="wrapper">
            <h1 className="text-center">Error 404</h1>
          </div>
          <div className="msg">
            <h3>Looks like you're lost</h3>
            <p>Enter the Celestial Realm: Error 404, Lost in Cosmic Beauty</p>
            <div className="backbtn">
              <Link to="/" className="btn">
                <i className="fas fa-arrow-left"></i>
                <span>Back to Home</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="footer">
        <div className="box-container">
          <div className="box">
            <h3 className='MainPort'>Ujjawal Portfolio</h3>
            <p>Thank you for visiting. Let's connect over socials and elevate together. 🚀 <br /> <br /> Keep Rising 🚀<br/>Connect with me over live Meeting!</p>
          </div>
          <div className="box">
            <h3>Quick Links</h3>
            <Link to="/"><i className="fas fa-chevron-circle-right"></i> Home</Link>
            <Link to="/about"><i className="fas fa-chevron-circle-right"></i> About</Link>
            <Link to="/skills"><i className="fas fa-chevron-circle-right"></i> Skills</Link>
            <Link to="/education"><i className="fas fa-chevron-circle-right"></i> Education</Link>
            <Link to="/projects"><i className="fas fa-chevron-circle-right"></i> Project</Link>
            <Link to="/experience"><i className="fas fa-chevron-circle-right"></i> Experience</Link>
          </div>
          <div className="box">
            <h3>Contact Info</h3>
            <p><i className="fas fa-envelope"></i> ujjawalshrivastava698@gmail.com</p>
            <p><i className="fas fa-map-marked-alt"></i> Delhi, India-110059</p>
            <div className="share">
              <a href="https://www.linkedin.com/in/ujjawal-shrivastava-81a384218" className="fab fa-linkedin fa-bounce" target="_blank" rel="noopener noreferrer"></a>
              <a href="https://github.com/ujjwalshriv3" className="fab fa-github fa-bounce" target="_blank" rel="noopener noreferrer"></a>
              <a href="mailto:ujjawalshrivastava698@gmail.com" className="fas fa-envelope  fa-bounce" target="_blank" rel="noopener noreferrer"></a>
              <a href="https://x.com/ujjawal_shri123" className="fab fa-twitter fa-bounce" target="_blank" rel="noopener noreferrer"></a>
              <a href="tel:+8743917011" className="fas fa-phone fa-bounce" target="_blank" rel="noopener noreferrer"></a>
            </div>
          </div>
        </div>
        <h1 className="credit">Designed with <i className="fa fa-heart pulse"></i> by <a href="https://www.linkedin.com/in/ujjawal-shrivastava-81a384218"> Ujjawal Shrivastava</a></h1>
      </section>
    </div>
    </>
  );
};

export default Error404;
