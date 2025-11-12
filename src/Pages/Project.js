// Todo:  Try Chnages
import React, { useEffect, useState } from 'react';
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { Helmet } from 'react-helmet';
import useSound from 'use-sound';
import link from '../components/Assest_Used/link.png';
import github from '../components/Assest_Used/github.png';
import Spline from '@splinetool/react-spline';
import { useMediaQuery } from 'react-responsive';

// Project Thumbnail
import bgref from '../components/Assest_Used/textures/Bg_Shades/CubeBgAbout.png';
import orthobotAi from '../components/Assest_Used/ProjectImg/orthobot_Ai.png';
import MyPortfolio from '../components/Assest_Used/ProjectImg/USPortfolio.png';
import medbriefAi from '../components/Assest_Used/ProjectImg/medbrief-Ai.png';
import RecodeHive from '../components/Assest_Used/ProjectImg/Recode-hive.png';
import FlightImg from '../components/Assest_Used/ProjectImg/flight-img.png';
import foodOrder from '../components/Assest_Used/ProjectImg/Food-img.png';
import movie from '../components/Assest_Used/ProjectImg/movie.webp';

import soundeffect1 from '../components/Assest_Used/Sounds/select-click.wav';

const styles = {
  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-9 sm:py-16 py-10",
};

const textVariant = (delay) => ({
  hidden: {
    y: -50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1.25,
      delay: delay,
    },
  },
});

const fadeIn = (direction, type, delay, duration) => ({
  hidden: {
    x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
    y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type: type,
      delay: delay,
      duration: duration,
      ease: "easeOut",
    },
  },
});

const staggerContainer = (staggerChildren, delayChildren) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: staggerChildren,
      delayChildren: delayChildren || 0,
    },
  },
});

const spline_model = { 
  position: "fixed",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  zIndex: "1",
};
const mainContSplinebg = {
  zIndex: '1',
  backgroundImage: `url(${bgref})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  transition: 'all 0.3s ease',
  position: 'relative', 
};

const projects = [
  {
    name: "OrthoBot AI",
    description:
      "OrthoBot AI – A virtual healthcare assistant for post-op care, built with React and Node.js, featuring an AI-powered knowledge base, voice chat, and responsive UI for 24/7 recovery guidance.",
    tags: [
      {
        name: "HTML",
        color: "bg-orange-500",
      },
      {
        name: "CSS",
        color: "bg-white",
      },
      {
        name: "React.js",
        color: "bg-green-500",
      },
      {
        name: "nodejs",
        color: "bg-orange-500",
      },
      {
        name: "MongoDB",
        color: "bg-white",
      },
      {
        name: "Backend - Express.js",
        color: "bg-green-500",
      },
    ],
    image: orthobotAi,
    live_link: "https://orthobot-ai.vercel.app/",
    source_code_link: "https://github.com/ujjwalshriv3/OrthoBot-AI",
  },
  {
    name: "My Portfolio",
    description:
      "Explore my portfolio to see a diverse array of projects, showcasing my educational background, professional experience, and personal work. Each piece reflects a blend of creativity, skill, and dedication to excellence.",
    tags: [
      {
        name: "HTML",
        color: "bg-orange-500",
      },
      {
        name: "CSS",
        color: "bg-white",
      },
      {
        name: "Javascript",
        color: "bg-green-500",
      },
      {
        name: "React",
        color: "bg-orange-500",
      },
      {
        name: "Vanta.js",
        color: "bg-white",
      },
      {
        name: "Magic UI",
        color: "bg-green-500",
      },
    ],
    image: MyPortfolio,
    live_link: "*",
    source_code_link: "*",
  },
  {
    name: "Medbrief-AI",
    description:
      "MedBrief AI helps patients by generating clear, structured summaries of medical reports for better understanding and faster decision-making.",
    tags: [
      {
        name: "Javascript",
        color: "bg-orange-500",
      },
      {
        name: "Nodejs",
        color: "bg-white",
      },
      {
        name: "Api",
        color: "bg-green-500",
      },
      {
        name: "React",
        color: "bg-orange-500",
      },
      {
        name: "MongoDB",
        color: "bg-white",
      },
    ],
    image: medbriefAi,
    live_link: "https://medbrief-ai.vercel.app/",
    source_code_link: "https://github.com/ujjwalshriv3/MedBrief-AI-frontend",
  },
  {
    name: "Recode Hive",
    description:
      "I was Contributing to this project which is Creating a list of awesome github profiles under one roof",
    tags: [
      {
        name: "HTML",
        color: "bg-orange-500",
      },
      {
        name: "CSS",
        color: "bg-white",
      },
      {
        name: "Javascript",
        color: "bg-green-500",
      },
    ],
    image: RecodeHive,
    live_link: "https://recodehive.github.io/awesome-github-profiles/",
    source_code_link: "https://github.com/ujjwalshriv3/awesome-github-profiles",
  },
  {
    name: "Flight Reservation System",
    description:
      "Flight Reservation System is a web application that allows users to search and book flights. The system includes features such as flight search, booking, and cancellation. The application is built using HTML, CSS, JavaScript, this is the Frontend use only not work in backend",
    tags: [
      {
        name: "HTML",
        color: "bg-orange-500",
      },
      {
        name: "CSS",
        color: "bg-green-500",
      },
      {
        name: "JavaScript",
        color: "bg-blue-500",
      },
    ],
    image: FlightImg,
    live_link: "https://flight-travel-tour.netlify.app/",
    source_code_link: "https://github.com/ujjwalshriv3/Flight-Reservation-System",
  },
  {
    name: "Food Order",
    description:
      "Food Order is a web application that allows users to order food from a restaurant. The system includes features such as food search, ordering, and payment. The application is built using HTML, CSS, JavaScript, this is the Frontend use only not work in backend",
    tags: [
      {
        name: "JavaScript",
        color: "bg-orange-500",
      },
      {
        name: "CSS",
        color: "bg-white",
      },
      {
        name: "HTML",
        color: "bg-green-500",
      },
    ],
    image: foodOrder,
    live_link: "*",
    source_code_link: "https://github.com/ujjwalshriv3/food-delievery-Website-",
  },
  {
    name: "Movie Website ",
    description:
      "Movie Website using HTML, CSS, and JavaScript. you can easily make a Movie Website using HTML, CSS, and JavaScript. You also make this Movie Website by following my youtube tutorial which, I have given below. This Movie Website is fully responsive all browsers compatible.",
    tags: [
      {
        name: "HTML",
        color: "bg-orange-500",
      },
      {
        name: "CSS",
        color: "bg-white",
      },
      {
        name: "JavaScript",
        color: "bg-green-500",
      },
    ],
    image: movie,
    live_link: "*",
    source_code_link: "https://github.com/ujjwalshriv3/MOVIE-WEBISTE-PROJECT",
  },
  // {
  //   name: "Hotel Management IDE",
  //   description:
  //     "Check out my Hotel Management project on GitHub! Developed during my 12th class using Python, this IDE-based project demonstrates cutting-edge technology with advanced features tailored for hotel management.",
  //   tags: [
  //     {
  //       name: "Python",
  //       color: "bg-orange-500",
  //     },
  //     {
  //       name: "Tkinter",
  //       color: "bg-white",
  //     },
  //   ],
  //   image: Hotel,
  //   live_link: "https://github.com/ujjwalshriv3/Hotel_Management_System",
  //   source_code_link: "https://github.com/ujjwalshriv3/Hotel_Management_System",
  // },

];

const spaceboardsFont = `
  @font-face {
    font-family: 'Spaceboards';
    src: url('/fonts/Spaceboards.otf') format('opentype');
  }
`;

const ProjectStyle = `
  .Proj {
    font-family: 'Spaceboards', sans-serif;
    font-size: 5rem;
    font-weight: bold;
    background: linear-gradient(90deg, #ff7f00, #ff0000, #ff7f00, #ff0000);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 
      0 0 3px rgba(255, 127, 0, 0.7), 
      0 0 5px rgba(255, 127, 0, 0.7), 
      0 0 7px rgba(255, 0, 0, 0.7), 
      0 0 9px rgba(255, 0, 0, 0.7), 
      0 0 12px rgba(255, 127, 0, 0.5), 
      0 0 15px rgba(255, 0, 0, 0.5);
    margin-left: 4rem;
    animation: gradient 1.5s infinite, glow 1.2s infinite alternate;
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

  .Proj-PC {
    display: none;
  }

  .Proj-Mobile {
    display: block;
  }

  @media (min-width: 768px) {
    .Proj-PC {
      display: block;
    }
    .Proj-Mobile {
      display: none;
    }
  }
`;


const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  live_link,
  source_code_link,
}) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    className="w-full sm:w-[350px] h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6 rounded-3xl shadow-lg transition-transform transform hover:scale-150"
  >
    <Tilt
      options={{
        max: 25,
        scale: 1,
        speed: 300,
      }}
    >
      <div className="relative w-full h-[220px] sm:mb-10">
        <img
          src={image}
          alt="project_image"
          className="w-full h-full object-cover rounded-3xl"
          style={{pointerEvents: "auto"}}
        />
        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          <div
            onClick={() => window.open(live_link, "_blank")}
            className="w-14 h-14 bg-black bg-opacity-60 p-2.5 rounded-full flex justify-center items-center cursor-pointer transition-transform transform hover:scale-110"
            style={{pointerEvents: "auto"}}
          >
            <img
              src={link}
              alt="live link"
              className="w-10 h-10 object-contain"
            />
          </div>
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className="w-14 h-14 bg-black bg-opacity-60 p-1.5 rounded-full flex justify-center items-center cursor-pointer transition-transform transform hover:scale-110"
            style={{pointerEvents: "auto"}}
          >
            <img
              src={github}
              alt="source code"
              className="w-10 h-10 object-contain"
            />
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-white font-bold text-[22px] mb-2 mt-5">{name}</h3>
        <p className="text-white text-[13.5px] mb-9">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={`${name}-${tag.name}`} className={`text-[12.5px] ${tag.color} px-2 py-1.5 rounded-full`}>
              #{tag.name}
            </span>
          ))}
        </div>
      </div>
    </Tilt>
  </motion.div>
);

const Works = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  
  const handleTouchStart = () => setIsHovered(true);
  const handleTouchEnd = () => setIsHovered(false);

  const [playSoundAlert] = useSound(soundeffect1);

  useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.innerHTML = spaceboardsFont + ProjectStyle;
    document.head.appendChild(styleElement);

    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  return (
    <>
    <Helmet>
      <title>My Projects | Portfolio - Ujjawal</title>
    </Helmet>
    <div style={mainContSplinebg}>
      {!isMobile ? (
        <Spline 
          style={spline_model} 
          scene="https://prod.spline.design/z6sedxN3BKPCAM0N/scene.splinecode"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      ) : (
        'none'
      )}
      <div className="mt-1" style={{ zIndex: '20', position: 'relative', pointerEvents: "none", }}>
        <motion.section
          variants={staggerContainer(0.5, 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className={`${styles.padding} max-w-12xl mx-auto sm:h-full h-[100vh]`}
        >
          <span className="hash-span" id="works">
            &nbsp;
          </span>

          <motion.div variants={textVariant(0.3)}>
            <div className="Proj Proj-PC" style={{ textAlign: 'center', marginBottom: '3rem', marginTop: '2.5rem' }}>
              My Innovative Development Works
            </div>
            <div className="Proj Proj-Mobile" style={{ textAlign: 'center', marginBottom: '2.4rem', marginLeft: '4rem', marginRight: '7rem', marginTop: '2.2rem' }}>
              Projects
            </div>
          </motion.div>
          
          <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-7 mt-3 overflow-hidden overflow-x-hidden overflow-y-hidden">
            {projects.map((project, index) => (
              <ProjectCard key={`project-${index}`} index={index} {...project} 
              onClick={() => {
                playSoundAlert(); 
              }}/>
            ))}
          </div>

          <div className="md:hidden mt-5 flex flex-col gap-4 overflow-hidden overflow-x-hidden overflow-y-hidden">
            {projects.map((project, index) => (
              <ProjectCard key={`project-${index}`} index={index} {...project} 
              onClick={() => {
                playSoundAlert();
              }}/>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
    </>
  );
};

export default Works;
