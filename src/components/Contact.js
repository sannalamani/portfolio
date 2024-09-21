import React from 'react';

const Contact = () => (
  <section id="contact" className="bg-slate-600 text-white fixed bottom-0 w-full">
    <div className="container mx-auto text-center py-4 flex justify-center space-x-8">
      
      <div className="flex items-center space-x-2">
        <a href="mailto:s.manik@outlook.fr" className="text-xl hover:text-blue-300 transition-colors">
          <i className="fas fa-envelope"></i> 
        </a>
      </div>

      <div className="flex items-center space-x-2">
        <a
          href="https://linkedin.com/in/durga-s-7a6354b3"
          target="_blank"
          rel="noreferrer"
          className="text-xl hover:text-blue-300 transition-colors"
        >
          <i className="fab fa-linkedin"></i> 
        </a>
      </div>

      <div className="flex items-center space-x-2">
        <a
          href="https://github.com/sannalamani"
          target="_blank"
          rel="noreferrer"
          className="text-xl hover:text-blue-300 transition-colors"
        >
          <i className="fab fa-github"></i> 
        </a>
      </div>
    </div>
  </section>
);

export default Contact;
