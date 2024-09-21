import React, { useState } from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    name: 'Sesamers SaaS Platform',
    stack: 'NextJS / MongoDB / Tailwind CSS',
    link: 'https://app.sesamers.com/',
    description: 'A SaaS platform for managing the community of startups, events, venture capitals with features such as fundraising, job board, call for startups. Built with modern web technologies NextJS.'
  },
  {
    name: 'Country Info App',
    stack: 'ReactJS / Mapbox GL / TypeScript',
    link: 'https://github.com/sannalamani/kanop-react-test',
    description: 'An interactive app that provides detailed information on countries when hover over the country name on the map, powered by Mapbox GL for geospatial data.'
  },
  {
    name: 'E-Commerce App',
    stack: 'Java / Springboot / MySQL',
    link: 'https://github.com/sannalamani/e-commerce-java-springboot',
    description: 'An online e-commerce platform built with Java and Spring Boot for scalable back-end services.'
  },
];

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <section id="projects" className="py-12 bg-stone-950">
      <div className="container mx-auto flex flex-col md:flex-row px-6">
        <h2 className="text-4xl text-white font-bold mb-6 md:w-1/2">Projects</h2>
        <div className="md:w-1/2 space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="border-b border-gray-600 pb-4"
              whileHover={{ scale: 1.02 }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <h3 className="text-2xl text-white font-semibold mb-1">{project.name}</h3>
              <p className="text-gray-300 mb-2">{project.stack}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="text-blue-300 hover:underline"
              >
                View Project
              </a>
            </motion.div>
          ))}
        </div>


        <div className="hidden md:block md:w-1/2 md:pl-12">
          {hoveredProject !== null && (
            <motion.div
              className="text-gray-300"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl text-white font-semibold mb-2">
                {projects[hoveredProject].name}
              </h3>
              <p className="mb-2">
                {projects[hoveredProject].description}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
