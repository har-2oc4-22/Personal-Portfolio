import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/portfolioData';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-surface/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-text">Featured Projects</h2>
            <div className="flex-1 h-px bg-slate-700/50"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-2xl bg-surface border border-slate-700/50 overflow-hidden hover:border-primary/50 transition-colors duration-300 flex flex-col h-full"
              >
                  {/* Card Content */}
                  <div className="p-8 flex flex-col flex-1 z-10">
                     <div className="flex justify-between items-start mb-6">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                            <FaGithub className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex gap-4">
                           {project.github && (
                             <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-primary transition-colors" aria-label="GitHub Repository">
                                <FaGithub className="w-6 h-6" />
                             </a>
                           )}
                           {project.live && (
                             <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-secondary transition-colors" aria-label="Live Project">
                                <FaExternalLinkAlt className="w-5 h-5" />
                             </a>
                           )}
                        </div>
                     </div>
                     
                     <h3 className="text-2xl font-bold text-text mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                     <p className="text-muted/90 leading-relaxed mb-8 flex-1">
                        {project.description}
                     </p>
                     
                     <div className="flex flex-wrap gap-2 mt-auto">
                        {project.tech.map((techItem, techIndex) => (
                           <span key={techIndex} className="px-3 py-1 text-xs font-medium text-secondary bg-secondary/10 rounded-full border border-secondary/20 font-inter">
                              {techItem}
                           </span>
                        ))}
                     </div>
                  </div>
                  
                  {/* Hover effect gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
