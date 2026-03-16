import React from 'react';
import { FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';

const Footer = () => {
  return (
    <footer className="bg-surface py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-center">
        
        <div className="flex space-x-6 mb-6">
           <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-primary transition-colors">
              <FaGithub className="w-6 h-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-secondary transition-colors">
              <FaLinkedin className="w-6 h-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
        </div>
        
        <p className="text-muted flex items-center justify-center text-sm mb-2">
            Built with <FaHeart className="text-red-500 mx-2" /> by {personalInfo.name}
        </p>
        
        <p className="text-muted/60 text-xs">
          &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
