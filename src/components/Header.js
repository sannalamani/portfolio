import React, { useState, useEffect } from 'react';

const greetings = ["Bonjour", "Hello"];

const Header = () => {
  const [currentGreeting, setCurrentGreeting] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGreeting((prevGreeting) => (prevGreeting + 1) % greetings.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-blue-200 py-4 px-6">
      <div className="container mx-auto text-slate-600 flex justify-between items-center">
        <h1 className="text-3xl font-bold italic">{greetings[currentGreeting]}</h1>
        
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-slate-600 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        <nav className="hidden md:flex space-x-4">
          <a href="#about" className="px-4">About</a>
          <a href="#skills" className="px-4">Skills</a>
          <a href="#projects" className="px-4">Projects</a>
        </nav>

        {isMenuOpen && (
          <nav className="md:hidden absolute top-16 left-0 w-full bg-blue-200 flex flex-col items-center space-y-4 py-4">
            <a href="#about" className="px-4" onClick={toggleMenu}>About</a>
            <a href="#skills" className="px-4" onClick={toggleMenu}>Skills</a>
            <a href="#projects" className="px-4" onClick={toggleMenu}>Projects</a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
