import React, { useEffect } from "react";
import { useInView } from 'react-intersection-observer';

const spaceboardsFont = `
  @font-face {
    font-family: 'Spaceboards';
    src: url('/fonts/Spaceboards.otf') format('opentype');
  }
`;

const Home3Style = `
  .home3 {
    font-family: 'Spaceboards', sans-serif;
    font-size: 2.8rem;
    font-weight: bold;
    background: linear-gradient(90deg, #ff7f00, #ff0000, #ff7f00, #ff0000);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: gradient 1.5s infinite;
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
        0 0 0 rgba(255, 127, 0, 0.7), 
        0 0 0 rgba(255, 127, 0, 0.7), 
        0 0 0 rgba(255, 0, 0, 0.7), 
        0 0 0 rgba(255, 0, 0, 0.7), 
        0 0 0 rgba(255, 127, 0, 0.5), 
        0 0 0 rgba(255, 0, 0, 0.5);
    }
    100% {
      text-shadow: 
        0 0 1px rgba(255, 127, 0, 1), 
        0 0 2px rgba(255, 127, 0, 1), 
        0 0 5px rgba(255, 0, 0, 1), 
        0 0 8px rgba(255, 0, 0, 1), 
        0 0 12px rgba(255, 127, 0, 0.7), 
        0 0 15px rgba(255, 0, 0, 0.7);
    }
  }
`;

export default function AboutMe({ isExpanded }) {

  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const content = {
    container: {
      font: `monospace`,
      fontSize: '14px',
      color: 'white',
      padding: '1rem',
      marginLeft: '0',
      marginBottom: '1rem',
      textAlign: 'left',
      display: 'block',
      backgroundColor: 'transparent',
      // background: '#121212',
      backdropFilter: 'blur(7px)',
      WebkitBackdropFilter: 'blur(7px)',
      maxWidth: '100%',
      height: 'auto',
      aspectRatio: 'attr(width) / attr(height)',
      border: '0.1px solid rgb(100, 100, 100)',
      borderRadius: '10px',
      opacity: inView1 ? 1 : 0,
      transform: inView1 ? 'translateY(0)' : 'translateY(-50px)',
      transition: `opacity 1.25s ease-out 3.5s, transform 1.25s ease-out 3.5s`
    },
  }

  useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.innerHTML = spaceboardsFont + Home3Style;
    document.head.appendChild(styleElement);

    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  return (
    <>
      <div ref={ref1} style={isExpanded ? { display: "none" } : content.container}>
        <div className="home3" ref={ref1} style={{ opacity: inView1 ? 1 : 0, transform: inView1 ? 'translateY(0)' : 'translateY(-50px)', transition: `opacity 1.25s ease-out 4.2s, transform 1.25s ease-out 4.2s` }}>
          About Me
        </div>
        <div ref={ref1} style={{ opacity: inView1 ? 1 : 0, transform: inView1 ? 'translateY(0)' : 'translateY(-50px)', transition: `opacity 1.25s ease-out 5s, transform 1.25s ease-out 5s` }}>
          <br />
          B.Tech CSE graduate Engineering student passionate about computers and aiming to kickstart a career in Software Development and
          Salesforce Development. Currently based in Delhi, India, I Completed my Graduation in field of Computer Science at MERI-CET. Having
          basic knowledge of Data Structures and Algorithms (DSA) Eager to contribute my skills in a dynamic environment and continue
          growing as a software engineer and I also passionate about Web Development and AI-powered solutions.<br /><br />

          I have hands-on experience
          in frontend development & backend fundamentals (Node.js, Express.js, MongoDB) and proficient in GitHub for version control.
          Exploring AI automation and developing AI-powered products, with the ability to deploy projects on render, github  and also
          contribute my skills in a dynamic environment and I am to grow as a full-stack developer and AI innovator.
        </div>
      </div>
    </>
  );
};

