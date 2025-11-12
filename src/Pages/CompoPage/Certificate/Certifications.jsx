import React, { useEffect, useState } from "react";
import { useInView } from 'react-intersection-observer';
import { motion } from "framer-motion";
import Certificate from "./BaseCertificate";
import { useMediaQuery } from 'react-responsive';
import Spline from '@splinetool/react-spline';
import CloseIcon from "@mui/icons-material/Close";

import bgref from '../../../components/Assest_Used/textures/Bg_Shades/CubeBgAbout.png'
import gssoc24 from "../../../components/Assest_Used/Certifications/GSSoC24_Stats.png";
import postman from "../../../components/Assest_Used/Certifications/postman Api certificate .jpg";
import ibmskillbuild from "../../../components/Assest_Used/Certifications/IBM certification.png";
import genai from "../../../components/Assest_Used/Certifications/Gen-ai.png";
import ibmgenai from "../../../components/Assest_Used/Certifications/IBM_GenAI.png";
import gssoc24Cert from "../../../components/Assest_Used/Certifications/Certificate of participation.jpg";
import skillbuildaifd from "../../../components/Assest_Used/Certifications/AI Certification.jpg";
import accenture from "../../../components/Assest_Used/Certifications/Accenture-completion.png";
import sfadmin from "../../../components/Assest_Used/Certifications/Sf-admin infosys.png";
import sfprogress from "../../../components/Assest_Used/Certifications/sf-progrss .jpg";
import naukri from "../../../components/Assest_Used/Certifications/Naukri-campus.png";
import sfcertificate from "../../../components/Assest_Used/Certifications/Salesforce_Certificate.jpeg";
import ai from "../../../components/Assest_Used/Certifications/AI.png";

const isMobile = window.innerWidth < 798;

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
  position: 'relative',
};

const spaceboardsFont = `
  @font-face {
    font-family: 'Spaceboards';
    src: url('/fonts/Spaceboards.otf') format('opentype');
  }
`;

const CertifiStyle = `
  .cert {
    font-family: 'Spaceboards', sans-serif;
    font-size: 4.6rem;
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

  .cert-PC {
    display: none;
  }

  .cert-Mobile {
    display: block;
    font-size: 3.25rem;
  }

  @media (min-width: 768px) {
    .cert-PC {
      display: block;
    }
    .cert-Mobile {
      display: none;
    }
  }
`;
const textVariant = (delay) => ({
  hidden: { y: -50, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", duration: 1.25, delay: delay },
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
    transition: { type: type, delay: delay, duration: duration, ease: "easeOut" },
  },
});

const popupStyles = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: 100,
  backgroundColor: "rgba(0, 0, 0, 0.6)",
  padding: "1.2rem",
  borderRadius: "15px",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.2)",
  maxWidth: "100vw",
  maxHeight: "90vh",
  display: "flex",
  marginTop: "2.8rem",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
};

const imageStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "10px",
  boxShadow: "0 8px 30px rgba(0, 0, 0, 0.7)",
};

const closeIconStyle = {
  position: "absolute",
  top: "1.5rem",
  right: "1.6rem",
  fontSize: "2.2rem",
  fontWeight: "bold",
  color: "#000000",
  cursor: "pointer",
  background: "rgba(255, 255, 255, 0)",
  padding: "1rem",
  borderRadius: "60%",
};

const responsivePopupStyles = {
  ...popupStyles,
  width: isMobile ? "100vw" : "60vw",
  height: isMobile ? "auto" : "auto",
};

export default function Certifications() {
  const certifications = {
    title: "Certifications",
    content: [
      { certification: "GSsoc'24: Recognizes open-source contribution to significant projects", year: "2024", institution: "GirlScript Summer of Code", image: gssoc24 },
      { certification: "Postman certification validates expertise in API testing and development skills", year: "2024", institution: "Postman", image: postman },
      { certification: "Learning Certification of Fundamentals of Ai india 2.0 ", year: "2025", institution: "GUvi By Skill india", image: skillbuildaifd },
      { certification: "Learning Certification of Fundamental of ibmskillbuild", year: "2025", institution: "Edunet foundation by IBM SkillBuild", image: ibmskillbuild },
      { certification: "genrative ai trailblazer in just 30 minutes hands-on expericence ", year: "2025", institution: "Udemy", image: genai },
      { certification: "IBM SkillBuild AI Internship certifies form edunet foundation and AI skills", year: "2025", institution: "IBM SkillBuild", image: ibmgenai },
      { certification: "GSsoc'24: My 1st Open-source Competition", year: "2024", institution: "GirlScript Summer of Code", image: gssoc24Cert },
      { certification: "Accenture Certification", year: "2025", institution: "Accenture", image: accenture },
      { certification: "Salesforce Admin Certification", year: "2025", institution: "Infosys", image: sfadmin },
      { certification: "Salesforce Progress Certification", year: "2025", institution: "Salesforce", image: sfprogress },
      { certification: "Naukri Campus Certification", year: "2025", institution: "Naukri.com", image: naukri },
      { certification: "Salesforce Developer virtual internship Certificate", year: "2025", institution: "TheSmartbeidge By Salesforce ", image: sfcertificate },
      { certification: "AI Certification", year: "2025", institution: "IBM", image: ai }
    ],
  };

  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleCertificateClick = (image) => {
    setSelectedImage(image);
    setIsPopupOpen(true);
  };

  let lastTouchTime = 0;
  const handleDoubleTouch = (image) => {
    const currentTime = new Date().getTime();
    const tapLength = currentTime - lastTouchTime
    if (tapLength < 500 && tapLength > 0) {  // 500ms threshold for double tap
      setSelectedImage(image);
      setIsPopupOpen(true);
    }
    lastTouchTime = currentTime;
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.innerHTML = spaceboardsFont + CertifiStyle;
    document.head.appendChild(styleElement);

    window.scrollTo({ top: 0, behavior: 'smooth' });

    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  return (
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
        <div
          style={{
            backgroundColor: 'transaprent',
            padding: '12px',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '20px',
            maxWidth: isMobile ? '800px' : '1800px',
            height: 'auto',
            margin: 'auto',
            color: 'white',
            overflow: 'hidden',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
          }}
        >
          <motion.div variants={textVariant(1)} initial="hidden" animate="show" >
            <div className="cert cert-PC" style={{ textAlign: 'center', fontWeight: 'bold', marginTop: '6.4rem' }}>
              My Achievements & Certifications
            </div>
          </motion.div>
          <motion.div variants={textVariant(1)} initial="hidden" animate="show" >
            <div className="cert cert-Mobile" style={{ textAlign: 'center', fontWeight: 'bold', marginTop: '6.4rem' }}>
              My Certifications
            </div>
          </motion.div>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '15px',
              marginTop: '20px',
              justifyContent: 'center',
            }}
          >
            {certifications.content.map((certification, index) => (
              <motion.div
                variants={textVariant(6.8)}
                initial="hidden"
                animate="show"
                variants={fadeIn("", "", index * 0.5, 1.8)}
                onDoubleClick={() => handleCertificateClick(certification.image)}
                // onTouchStart={() => handleDoubleTouch(certification.image)}
                style={{ cursor: 'pointer' }}
              >
                <Certificate key={index} index={index} certification={certification} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      {/* Popup Modal for Certificate */}
      {isPopupOpen && (
        <div style={responsivePopupStyles}>
          <img src={selectedImage} alt="Certificate" style={imageStyle} />
          <div style={closeIconStyle} onClick={closePopup}>
            &#10005;
            {/* <CloseIcon /> */}
          </div>
        </div>
      )}
    </div>
  );
}
