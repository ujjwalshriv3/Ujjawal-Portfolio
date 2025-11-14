import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../../styles';
import { education } from '../../constants';
import { SectionWrapper } from '../../hoc';
import { textVariant } from '../../utils/motion';

const EducationCard = ({ education }) => (
    <div className="bg-tertiary p-6 rounded-2xl sm:w-[360px] w-full">
        <div className="relative">
            <div className="absolute -left-12 top-0 w-1 h-full bg-white" />
            <div className="absolute -left-16 top-0 w-10 h-10 rounded-full bg-white flex items-center justify-center">
                <img
                    src={education.icon}
                    alt={education.school}
                    className="w-[60%] h-[60%] object-contain"
                />
            </div>
            <div className="ml-4">
                <h3 className="text-white font-bold text-[24px]">{education.school}</h3>
                <p className="text-secondary text-[16px] font-semibold">{education.degree}</p>
                <p className="text-white-100 text-[14px] mt-2">{education.date}</p>
                <ul className="mt-4 list-disc ml-5 space-y-2">
                    {education.points.map((point, index) => (
                        <li key={`education-point-${index}`} className="text-white-100 text-[14px] pl-1 tracking-wider">
                            {point}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
);

const Education = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>My Education</p>
                <h2 className={styles.sectionHeadText}>Education.</h2>
            </motion.div>

            <div className="mt-20 flex flex-col">
                <div className="flex flex-wrap gap-10">
                    {education.map((edu, index) => (
                        <EducationCard key={`education-${index}`} education={edu} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default SectionWrapper(Education, "education");
