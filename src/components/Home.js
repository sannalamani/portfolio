import React from 'react';
import { motion } from 'framer-motion';

const Home = () => (
  <section className="bg-stone-950 text-white h-screen flex flex-col justify-center items-center px-6">
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >

      <div className="relative inline-block">
        <motion.h1
          className="text-6xl text-blue-200 font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          Manikanta Sannala
        </motion.h1>

        <motion.div
          className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.5, delay: 0.5, ease: 'easeInOut' }}
        />
      </div>

      <motion.h2
        className="text-4xl text-purple-300 font-semibold my-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.4 }}
      >
        Full Stack Developer
      </motion.h2>

      <motion.p
        className="text-lg mb-6 max-w-xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.6 }}
      >
        I am a Master of Science in Computer Science graduate and have gained valuable experience working as a software developer at Sesamers, where I built a SaaS platform from scratch.
      </motion.p>
    </motion.div>
  </section>
);

export default Home;
