import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaJava, FaDocker, FaNodeJs } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss, SiTypescript, SiSpringboot, SiMongodb, SiMysql, SiPostgresql, SiJenkins } from 'react-icons/si';

const skills = [
    { name: 'NextJS', icon: <FaNodeJs /> },
    { name: 'ReactJS', icon: <FaReact /> },
    { name: 'JavaScript', icon: <SiJavascript /> },
  { name: 'TypeScript', icon: <SiTypescript /> },
  { name: 'Tailwind', icon: <SiTailwindcss /> },
  { name: 'Java', icon: <FaJava /> },
  { name: 'Springboot', icon: <SiSpringboot /> },
  { name: 'MongoDB', icon: <SiMongodb /> },
  { name: 'MySQL', icon: <SiMysql /> },
  { name: 'PostgreSQL', icon: <SiPostgresql /> },
  { name: 'Docker', icon: <FaDocker /> },
  { name: 'Jenkins', icon: <SiJenkins /> },
];

const Skills = () => (
  <section id="skills" className="py-12 bg-stone-950">
    <div className="container mx-auto px-6">
      <h2 className="text-4xl text-white font-bold mb-6">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-blue-200 p-4 shadow flex items-center justify-center rounded-xl flex-col"
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <div className="text-4xl mb-2 text-black-500">
              {skill.icon}
            </div>
            <p className="text-lg text-black font-semibold">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
