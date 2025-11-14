import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from "framer-motion";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Spline from '@splinetool/react-spline';
import { useMediaQuery } from 'react-responsive';

import bgref from '../components/Assest_Used/textures/Bg_Shades/CubeBgAbout.png';
import IBM from '../components/Assest_Used/CompanyLogo/IBM_Logo.png';
import Gssoc from '../components/Assest_Used/CompanyLogo/Gssoc_Logo.png';
import Salesforce from '../components/Assest_Used/CompanyLogo/Sf_logo.png';
import freelance from '../components/Assest_Used/CompanyLogo/WorkOnPC.png';
import curious from '../components/Assest_Used/CompanyLogo/Curious_Logo.png';

const textVariant = (delay) => ({
  hidden: { y: -50, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", duration: 1.25, delay: delay },
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

const spaceboardsFont = `
  @font-face {
    font-family: 'Spaceboards';
    src: url('/fonts/Spaceboards.otf') format('opentype');
  }
`;

const WorkExStyle = `
  .Work-Ex {
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
  .Work-Ex-PC {
    display: none;
  }

  .Work-Ex-Mobile {
    display: block;
  }

  @media (min-width: 768px) {
    .Work-Ex-PC {
      display: block;
    }
    .Work-Ex-Mobile {
      display: none;
    }
  }
`;

const experiences = [
  {
    date: "July 2025 - November 2025",
    company_name: "Galipia Molecules Pvt Ltd",
    title: "AI Full Stack Automation Developer",
    iconBg: "#fff",
    icon: curious,
    points: [
      "Contributing to the development of AI-powered healthcare solutions designed to assist patients and doctors in day-to-day medical workflows.",
      "Built frontend applications with React.js, ensuring responsive interfaces and smooth user experience.",
      "Optimized Frontend services for scalability.",
      "Deployed applications on Vercel, managed GitHub version control, and contributed to scalable system design.",
    ],
  },
  {
    date: "July 2023 - September 2023",
    company_name: "Cloud Counsulage Pvt. Ltd",
    title: "Cloud Computing Intern",
    iconBg: "#fff",
    icon: freelance,
    points: [
      "As a Cloud Computing Intern at Cloud Counsulage Pvt. Ltd, I worked on automating database operations using AWS services.",
      "I developed and implemented automation scripts for MongoDB backup and restore processes.",
      "These efforts enhanced data reliability, storage efficiency, and system performance.",
      "This experience strengthened my skills in cloud infrastructure management and automation.",
    ],
  },
  {
    date: "July 2024 - August 2024",
    company_name: "Salesforce Developer Virtual Internship - Online",
    title: "Salesforce Developer",
    iconBg: "#fff",
    icon: Salesforce,
    points: [
      "During The internship I completed the Trailhead Modules Which is Provided by TheSmartbridge I learn Salesforce fundamentals Organizational Setup Relationship & Process Automation Types of Flows & Security.",
      "Apex, Testing, Debugging, Vscode Setup with CLI and Lighting and Web components (Lwc) & API.",
      "I earned Superbadges such as Apex Specialist Process Automation Specialist and Developer Superset .",
    ],
  },
  {
    date: "June 2025 - August 2025",
    company_name: "Edunet With IBM SkillsBuild - Internship",
    title: "AI Developer",
    iconBg: "#fff",
    icon: IBM,
    points: [
      "Designing and developing responsive and user-friendly web interfaces.",
      "Optimizing website performance and ensuring cross-browser compatibility.",
      "Contributing to code reviews and upholding code quality.",
    ],
  },
  {
    date: "May 2024 - July 2024",
    company_name: "GirlScript Summer of Code - Apprenticeship",
    title: "Gssoc Contributor",
    iconBg: "#fff",
    icon: Gssoc,
    points: [
      "Contributed to open-source projects as part of the GirlScript Summer of Code apprenticeship.",
      "Developed and implemented features and bug fixes in collaboration with project maintainers.",
      "Gained hands-on experience in software development and project management through active participation.",
    ],
  },
  {
    date: "Aug 2025 - Oct 2025",
    company_name: "IBM Skillbuild - Internship (As a Learner)",
    title: "AI Internship",
    iconBg: "#fff",
    icon: IBM,
    points: [
      "Analyzed and interpreted complex data sets to inform business decisions.",
      "Created visualizations and reports to communicate findings effectively to stakeholders.",
      "Applied statistical techniques and data modeling to extract insights from data.",
    ],
  },
];

const Experience = () => {
  
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.innerHTML = spaceboardsFont + WorkExStyle;
    document.head.appendChild(styleElement);

    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  return (
    <>
    <Helmet>
      <title>Experience | Portfolio - Ujjawal</title>
    </Helmet>
    <div style={mainContSplinebg}>
      {!isMobile ? (
        <Spline 
          style={spline_model} 
          scene="https://prod.spline.design/rBcaq3Xa97MnC3a4/scene.splinecode"
        />
      ) : (
        <Spline 
          style={spline_model} 
          scene="https://prod.spline.design/tQH4xs3CwWIS7EtM/scene.splinecode"
        />
      )}
      <div className="mt-20" style={{ zIndex: '20', position: 'relative', pointerEvents: "none", }}>
        <motion.div
          variants={textVariant(0.3)}
          initial="hidden"
          animate="show"
        >
        <div className="Work-Ex Work-Ex-PC" style={{ textAlign: 'center', marginBottom: '3.5rem', marginTop: '7.6rem'}}>
          My Technical Experience
        </div>
        <div className="Work-Ex Work-Ex-Mobile" style={{ textAlign: 'center', marginBottom: '3.5rem', marginTop: '7.6rem'}}>
          My Experience
        </div>
        </motion.div>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <VerticalTimelineElement
              key={`experience-${index}`}
              // contentStyle={{ background: "#140b40", color: "#fff", borderRadius: "10px", boxShadow: "0 3px 5px rgba(0, 0, 0, 0.3)" }}
              contentStyle={{ background: "rgba(255, 255, 255, 0.09)", color: "#fff", borderRadius: "18px", boxShadow: "0 3px 5px rgba(0, 0, 0, 0.3)", backdropFilter: "blur(6px)" }}
              contentArrowStyle={{ borderRight: "7px solid  #232631" }}
              date={experience.date}
              dateClassName="date"
              iconStyle={{ background: experience.iconBg }}
              icon={<div className="flex items-center justify-center w-full h-full"><img src={experience.icon} alt={experience.company_name} className="w-full h-full object-cover rounded-full" /></div>}
            >
              <h3 className="company-title">{experience.title}</h3>
              <p className="company-name">{experience.company_name}</p>
              <ul className="mt-5 list-disc ml-5 space-y-3.5">
                {experience.points.map((point, idx) => (
                  <li key={`experience-point-${idx}`} className="text-[#d4d4d8] sm:text-[15px] text-[12px] pl-1 tracking-wider">
                    {point}
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
        <style jsx global>{`
          .vertical-timeline-element-date {
            font-size: 18px !important;
            color: #fff !important;
            font-weight: bold !important;
          }
          
          .company-title {
            color: white;
            font-size: 25px;
            font-weight: bold;
          }

          .company-name {
            color: #e4e4e7 !important;
            font-size: 13px !important;
            font-weight: bold !important;
          }

          @media (max-width: 768px) {
            .Work-Ex {
              font-size: 34px;
              margin-right: 2.4rem;
            }
            .company-title {
            font-size: 18.5px;
            }
            .vertical-timeline-element-date {
              font-size: 14px !important;
            }
          }
        `}</style>
      </div>
    </div>
    </>
  );
};

export default Experience;



// Todo: Use for Emergency 
// ! Sample 1: USe For Gradient Text Styling

// const WorkExStyle = `
//   .Work-Ex {
//     font-family: 'Spaceboards', sans-serif;
//     font-size: 5rem;
//     font-weight: bold;
//     background: linear-gradient(90deg, #0cffc5, #a939ff, #0cffc5, #a939ff);
//     -webkit-background-clip: text;
//     -webkit-text-fill-color: transparent;
//     text-shadow: 1.5px 1.5px 3px rgba(0, 255, 197, 0.7), 1px 1.5px 10px rgba(169, 57, 255, 0.7), 10px 5.5px 30px rgba(0, 255, 197, 0.5), 0 10px 40px rgba(169, 57, 255, 0.5);
//     margin-left: 4rem;
//     animation: gradient 2s infinite;
//     letter-spacing: 0.1rem;
//     background-size: 300% 300%;
//   }

//   @keyframes gradient {
//     0% {
//       background-position: 0% 50%;
//     }
//     50% {
//       background-position: 100% 50%;
//     }
//     100% {
//       background-position: 0% 50%;
//     }
//   }
// `;

// ! Sample 2: Use for Normal FLuid Styling
// const WorkExStyle = `
//   .Work-Ex {
//     font-family: 'Spaceboards', sans-serif;
//     font-size: 5rem;
//     font-weight: bold;
//     background: linear-gradient(90deg, #0cffc5, #a939ff);
//     -webkit-background-clip: text;
//     -webkit-text-fill-color: transparent;
//     text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
//     margin-left: 4rem;
//     animation: gradient 3s infinite;
//     letter-spacing: 0.1rem;
//     background-size: 200% 200%;
//   }

//   @keyframes gradient {
//     0% {
//       background-position: 0% 50%;
//     }
//     50% {
//       background-position: 100% 50%;
//     }
//     100% {
//       background-position: 0% 50%;
//     }
//   }
// `;