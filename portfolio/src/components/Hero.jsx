import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-50 mix-blend-screen animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl opacity-50 mix-blend-screen animate-blob animation-delay-2000"></div>
      
      <div className="max-w-7xl mx-auto z-10 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">
          
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left space-y-6"
          >
            <p className="text-secondary font-medium tracking-wide">Hi, my name is</p>
            
            <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-text to-muted tracking-tight">
               {personalInfo.name}.
            </h1>
            
            <h2 className="text-3xl md:text-5xl font-bold text-muted/80 tracking-tight">
               I build things for the web.
            </h2>
            
            <p className="max-w-xl text-lg md:text-xl text-muted/90 leading-relaxed mt-6">
              {personalInfo.tagline} {personalInfo.role} experienced in crafting digital experiences from concept to scale.
            </p>
            
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-5 mt-10">
              <a
                href="#projects"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-background font-bold text-lg hover:shadow-[0_0_30px_-5px_var(--tw-shadow-color)] shadow-primary/50 transition-all duration-300 transform hover:-translate-y-1"
              >
                View My Work
              </a>
              <a
                href={personalInfo.resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full border border-slate-600 hover:border-primary text-text font-bold text-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                Check Resume
              </a>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-6 mt-8">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-primary transition-colors transform hover:scale-110">
                <FaGithub className="w-7 h-7" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-secondary transition-colors transform hover:scale-110">
                <FaLinkedin className="w-7 h-7" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </motion.div>

          {/* Right: Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-shrink-0"
          >
            <div className="relative group">
              {/* Glow ring behind image */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-primary via-secondary to-primary rounded-full blur-md opacity-40 group-hover:opacity-70 transition-opacity duration-500"></div>
              
              {/* Image container */}
              <div className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-slate-700/80 shadow-2xl shadow-primary/10 group-hover:border-primary/50 transition-all duration-500">
                <img 
                  src="https://avatars.githubusercontent.com/har-2oc4-22" 
                  alt="Harsh Shukla"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-sm text-muted mb-2 tracking-widest uppercase">Scroll</span>
        <div className="w-6 h-10 border-2 border-muted rounded-full p-1 opacity-75">
          <div className="w-1.5 h-3 bg-primary rounded-full mx-auto animate-float"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
