import React from 'react';

const About = () => (
    <section id="about" className="py-12 bg-stone-950">
    <div className="container mx-auto px-6">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-blue-200 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-4">Education</h3>
          <p className="font-semibold">MSc - Software Engineering</p>
          <p className="mb-4">EPITA, Paris (09/2022 - 03/2024)</p>
          <ul className="list-disc list-inside mb-4">
            <li>Facility Management System</li>
           <li>Country Info application</ li>
           <li> E-Commerce application </ li>
           <li>Employee Management System</ li>
            <li>Tic Tac Toe Game</li>
          </ul>
  
          <p className="font-semibold">B.Tech - Electronics & Communication</p>
          <p>SMVEC, Pondicherry (07/2016 - 08/2020)</p>
          <ul className="list-disc list-inside">
            <li>Android Application for Pharmacy</li>
          </ul>
        </div>
  
        {/* Experience Section */}
        <div className="bg-blue-200 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-4">Work Experience</h3>
          
          {/* Sesamers Experience */}
          <p className="font-semibold">Software Developer</p>
          <p className="mb-2">Sesamers, Paris (03/2024 - 09/2024)</p>
          <p className="text-sm mb-4">
            Developed a SaaS platform from scratch to connect startups and venture capitalists (VCs), and to serve as a job board. 
            <br />Technology stack: NextJS, MongoDB, Tailwind CSS, WordPress, and PHP.
            <br />Worked on design, planning, development, and deployment, and created innovative solutions to meet business goals.
          </p>
          
          {/* Infosys Experience */}
          <p className="font-semibold">Systems Engineer</p>
          <p className="mb-2">Infosys, Bangalore (11/2020 - 09/2021)</p>
          <p className="text-sm">
            SAP BASIS, SAP SD. 
            <br />Certified as an Infosys Software Programmer.
          </p>
        </div>
      </div>
  

    </div>
  </section>
  
);

export default About;
