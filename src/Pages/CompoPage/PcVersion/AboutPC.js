import React, { useEffect } from 'react'; 
import { motion } from "framer-motion";
import bgref from '../../../components/Assest_Used/textures/Bg_Shades/CubeBgAbout.png';
import Img2 from '../AssetPic/img.png';
import '../../Styles/AboutPC.css';


const textVariant = (delay) => ({
  hidden: { y: -50, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", duration: 1.25, delay: delay },
  },
});

const spaceboardsFont = `
  @font-face {
    font-family: 'Spaceboards';
    src: url('/fonts/Spaceboards.otf') format('opentype');
  }
`;

const aboutMeStyle = `
  .about-me {
    font-family: 'Spaceboards', sans-serif;
    font-size: 5rem;
    font-weight: bold;
    background: linear-gradient(90deg, #0cffc5, #a939ff, #0cffc5, #a939ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 
      0 0 3px rgba(0, 255, 197, 0.7), 
      0 0 5px rgba(0, 255, 197, 0.7), 
      0 0 7px rgba(169, 57, 255, 0.7), 
      0 0 9px rgba(169, 57, 255, 0.7), 
      0 0 12px rgba(0, 255, 197, 0.5), 
      0 0 15px rgba(169, 57, 255, 0.5);
    margin-left: 4rem;
    animation: gradient 1.8s infinite, glow 1.5s infinite alternate;
    letter-spacing: 0.1rem;
    background-size: 200% 200%;
  }

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @keyframes glow {
    0% {
      text-shadow: 
        0 0 0 rgba(0, 255, 197, 0.7), 
        0 0 0 rgba(0, 255, 197, 0.7), 
        0 0 0 rgba(169, 57, 255, 0.7), 
        0 0 0 rgba(169, 57, 255, 0.7), 
        0 0 0 rgba(0, 255, 197, 0.5), 
        0 0 0 rgba(169, 57, 255, 0.5);
    }
    100% {
      text-shadow: 
        0 0 1px rgba(0, 255, 197, 1), 
        0 0 2px rgba(0, 255, 197, 1), 
        0 0 5px rgba(169, 57, 255, 1), 
        0 0 8px rgba(169, 57, 255, 1), 
        0 0 12px rgba(0, 255, 197, 0.7), 
        0 0 15px rgba(169, 57, 255, 0.7);
    }
  }
  
  .about-me{
    font-size: 6.2rem;
  }
`;

const ParticlularImageStyle = {
  width: '40rem',
  height: '46.5rem',
  marginLeft: '3rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  borderRadius: '20px',
  boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
};

const About = () => {
  useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.innerHTML = spaceboardsFont + aboutMeStyle;
    document.head.appendChild(styleElement);
    
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  return (
    <section className="aboutPC" style={{
      position: 'relative',
      padding: '35px 10px',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      color: '#e2e8f0',
      overflow: 'hidden',
      marginTop: '-0.1rem',
      zIndex: '10',
      backgroundImage: `url(${bgref})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      transition: 'all 0.3s ease',
    }} 
    id="aboutPC">
      
      <div style={{ marginTop: '4rem' }}></div>

      <div style={{
        backdropFilter: 'blur(1px)',
        borderRadius: '30px',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        padding: '20px',
        maxWidth: '1380px',
        minHeight: '720px',
        width: '100%',
        margin: '5px auto',
        display: 'flex',
        flexDirection: 'column',
        Top: '5%',
        gap: '5px',
        zIndex: '1',
        pointerEvents: 'none',
      }}>
      <motion.div
        variants={textVariant(0.2)}
        initial="hidden"
        animate="show"
      >
      <div className="about-me" style={{ textAlign: 'left', marginRight: '3.4rem', marginLeft: '4rem', marginBottom: '-2rem'}}>
        About Me
      </div>
      </motion.div>
      <div className="row">
        <motion.div 
          style={ParticlularImageStyle}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img 
            src={Img2} 
            alt="Profile"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.3s ease',
              ':hover': {
                transform: 'scale(1.05)'
              }
            }}
          />
        </motion.div>
        <div className="content">
        <motion.div
            variants={textVariant(0.6)}
            initial="hidden"
            animate="show"
        >
          <h3 style={{fontFamily: "'Great Vibes', cursive", color: '#ffffff', fontSize: '4.6rem'}}>I'm Ujjawal Shrivastava</h3>
          <span style={{
              fontSize: '2.2rem', color: '#ff00ff', fontWeight: 600, fontFamily: "'Vidaloka', serif", marginTop: '1rem',
          }}>
            Full Stack Developer | AI Enthusiast </span>
          </motion.div>
          <motion.div
            variants={textVariant(0.9)}
            initial="hidden"
            animate="show"
        >
          <p style={{
                fontSize: '1.5rem',
                color: '#ffffff',
                marginTop: '1.5rem',
                fontFamily: "'Open Sans', sans-serif",
                fontStyle: 'italic',
                fontWeight: 400,
                lineHeight: 1.5,
              }}>
                I am Ujjawal, an CSE Engineering student passionate about computers and aiming to kickstart a career in Software Development and Web Development. Currently based in Delhi, India, I am completed my undergraduate studies in Computer Science and Engineering at MERI-CET. My enthusiasm lies in enhancing my coding abilities and crafting applications and websites. As Well-organised & collaborative individual.<br/> I thrive in team environemnts and enjoy bringing inovative solutions to table.<br/> Awesome!! Let's Build the Next Big Thing...
          </p>
          </motion.div>
          
          <div className="box-container">
            <div className="box">
              <motion.div variants={textVariant(1.4)} initial="hidden" animate="show">
              <p><i className="bi bi-person-badge-fill" style={{ fontSize: '1.7rem', color: '#ff00ff', marginRight: '0.5rem' }}></i>
              <span style={{color: '#ff00ff', fontFamily: "'Vidaloka', serif", fontWeight: 500, marginTop: '1rem'}}> Age : </span> 22</p>
              </motion.div>
              <motion.div variants={textVariant(1.8)} initial="hidden" animate="show">
              <p><i className="bi bi-telephone-fill" style={{ fontSize: '1.7rem', color: '#ff00ff', marginRight: '0.5rem' }}></i>
              <span  style={{color: '#ff00ff', fontFamily: "'Vidaloka', serif", fontWeight: 500, marginTop: '1rem'}}> Phone : </span>
              <a href="tel:+8743917011" target="_blank" rel="noopener noreferrer" style={{ color: '#fcfcfc' }}>+91 8743917011</a></p>
              </motion.div>
              <motion.div variants={textVariant(2.2)} initial="hidden" animate="show">
              <p><i className="bi bi-cake-fill" style={{ fontSize: '1.7rem', color: '#ff00ff', marginRight: '0.5rem' }}></i>
              <span  style={{color: '#ff00ff', fontFamily: "'Vidaloka', serif", fontWeight: 500, marginTop: '1rem'}}> Birthday : </span> 12th october</p>
              </motion.div>
            </div>
            <div className="box">
              <motion.div variants={textVariant(2.6)} initial="hidden" animate="show">
              <p><i className="bi bi-globe" style={{ fontSize: '1.7rem', color: '#ff00ff', marginRight: '0.5rem' }}></i>
              <span style={{color: '#ff00ff', fontFamily: "'Vidaloka', serif", fontWeight: 500, marginTop: '1rem'}}> Nationality : </span> Indian</p>
              </motion.div>
              <motion.div variants={textVariant(3)} initial="hidden" animate="show">
              <p><i className="bi bi-mortarboard-fill" style={{ fontSize: '1.7rem', color: '#ff00ff', marginRight: '0.5rem' }}></i>
              <span  style={{color: '#ff00ff', fontFamily: "'Vidaloka', serif", fontWeight: 500, marginTop: '1rem'}}> Degree : </span> BTech- CSE'25</p>
              </motion.div>
              <motion.div variants={textVariant(3.4)} initial="hidden" animate="show">
              <p><i className="bi bi-bank2" style={{ fontSize: '1.7rem', color: '#ff00ff', marginRight: '0.5rem' }}></i>
              <span  style={{color: '#ff00ff', fontFamily: "'Vidaloka', serif", fontWeight: 500, marginTop: '1rem'}}> University : </span> MDU</p>
              </motion.div>
            </div>
            <div className="box">
              <motion.div variants={textVariant(3.8)} initial="hidden" animate="show">
              <p><i className="bi bi-envelope-at-fill" style={{ fontSize: '1.7rem', color: '#ff00ff', marginRight: '0.5rem' }}></i>
              <span  style={{color: '#ff00ff', fontFamily: "'Vidaloka', serif", fontWeight: 500, marginTop: '1rem'}}> Email : </span>
              <a href="mailto:Ujjawalshrivastava698@gmail.com" target="_blank" rel="noopener noreferrer" style={{ color: '#fcfcfc' }}>Ujjawalshrivastava698@gmail.com</a></p>
              </motion.div>
              <motion.div variants={textVariant(4.2)} initial="hidden" animate="show">
              <p><i className="bi bi-geo-alt-fill" style={{ fontSize: '1.7rem', color: '#ff00ff', marginRight: '0.5rem' }}></i>
              <span  style={{color: '#ff00ff', fontFamily: "'Vidaloka', serif", fontWeight: 500, marginTop: '1rem'}}> Place : </span> Delhi, India - 110059</p>
              </motion.div>
              <motion.div variants={textVariant(4.5)} initial="hidden" animate="show">
              <p><i className="bi bi-translate" style={{ fontSize: '1.7rem', color: '#ff00ff', marginRight: '0.5rem' }}></i>
              <span  style={{color: '#ff00ff', fontFamily: "'Vidaloka', serif", fontWeight: 500, marginTop: '1rem'}}> Language Known : </span> English, Hindi</p>
              </motion.div>
            </div>
            <div className="box">
              <motion.div variants={textVariant(4.9)} initial="hidden" animate="show">
              <p><i className="bi bi-star-fill" style={{ fontSize: '1.7rem', color: '#ff00ff', marginRight: '0.5rem' }}></i>
              <span  style={{color: '#ff00ff', fontFamily: "'Vidaloka', serif", fontWeight: 500, marginTop: '1rem'}}> Hobbies : </span> Cricket, Writing, Try to Learn New Skills, Travelling, Listenig Music</p>
              </motion.div>
              <motion.div variants={textVariant(5.2)} initial="hidden" animate="show">
              <p>
                <i className="bi bi-linkedin" style={{ fontSize: '1.7rem', color: '#ff00ff', marginRight: '0.5rem' }}></i>
                <span  style={{color: '#ff00ff', fontFamily: "'Vidaloka', serif", fontWeight: 500, marginTop: '1rem'}}> Linkedin : </span>
                <a href="https://www.linkedin.com/in/ujjawal-shrivastava-81a384218/" target="_blank" rel="noopener noreferrer" style={{ color: '#17fc03', pointerEvents: 'auto' }}>Connect Here</a>
                <i className="bi bi-github" style={{ fontSize: '1.7rem', color: '#ff00ff', marginRight: '0.5rem',  marginLeft: '4rem'}}></i>
                <span  style={{color: '#ff00ff', fontFamily: "'Vidaloka', serif", fontWeight: 500, marginTop: '1rem'}}> Github : </span>
                <a href="https://github.com/ujjwalshriv3" target="_blank" rel="noopener noreferrer" style={{ color: '#17fc03', pointerEvents: 'auto' }}>Follow Here</a>
                {/* </motion.div> */}
              </p>
              </motion.div>
            </div>
          </div>
          
          <div className="glowbtnAbt">
          <motion.div
                variants={textVariant(6)}
                initial="hidden"
                animate="show"
            >
            <a href="https://drive.google.com/file/d/1FSn4Er9NH-Qs4ZwZu1ZHWFyMP2Pm4s1K/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn"
            style={{
              padding: '12px',
              borderRadius: '10px',
              backgroundColor: 'transparent',
              textDecoration: 'none',
              color: '#f40388',
              border: 'none',
              marginBottom: '-10px',
              marginLeft: '1px',
              marginTop: '25px',
              fontSize: '16px',
              fontWeight: 'bold',
              transition: 'background-color 0.3s',
              width: '40%',
              textAlign: 'center',
              cursor: 'pointer',
              pointerEvents: 'auto',
            }}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Resume
            </a>
            <a href="/certifications" className="btn"
            style={{
              padding: '12px',
              borderRadius: '10px',
              backgroundColor: 'transparent',
              textDecoration: 'none',
              color: '#f40388',
              border: 'none',
              marginBottom: '-10px',
              marginLeft: '15px',
              marginTop: '25px',
              fontSize: '16px',
              fontWeight: 'bold',
              transition: 'background-color 0.3s',
              width: '40%',
              textAlign: 'center',
              pointerEvents: 'auto',
              cursor: 'pointer'
            }}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              My Certifications
            </a>
            </motion.div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default About;

