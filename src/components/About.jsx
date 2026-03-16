import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo, achievements, interests } from '../data/portfolioData';
import { FaGraduationCap, FaTrophy, FaExternalLinkAlt } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="py-24 bg-surface/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-text">About Me</h2>
            <div className="flex-1 h-px bg-slate-700/50"></div>
          </div>

          <div className="mb-20 relative">
             <div className="max-w-3xl space-y-6">
                 <p className="text-lg text-muted/90 leading-relaxed font-light whitespace-pre-line">
                    {personalInfo.about}
                 </p>
                 
                 <div className="p-6 rounded-2xl bg-surface border border-slate-700/50 shadow-lg mt-8 inline-block w-full sm:w-auto">
                    <div className="flex items-center gap-3 mb-4">
                       <FaGraduationCap className="w-6 h-6 text-primary" />
                       <h3 className="text-xl font-semibold text-text">Education</h3>
                    </div>
                    <div className="space-y-2">
                        <p className="font-medium text-lg text-secondary">Institute Of Engineering And Technology, Lucknow</p>
                        <p className="text-muted">Bachelor of Technology in Computer Science</p>
                        <p className="text-sm text-primary/80 font-mono">Nov 2022 - June 2026</p>
                    </div>
                 </div>
             </div>
          </div>

          {/* Interests Section */}
          <div className="mb-20">
             <div className="flex items-center gap-4 mb-10">
               <h2 className="text-2xl md:text-3xl font-bold text-text uppercase tracking-widest border-b border-white/20 pb-2">Interests</h2>
             </div>
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                 {interests.map((interest, index) => {
                     const Icon = interest.icon;
                     return (
                         <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="bg-surface border border-slate-700/50 flex flex-col items-center justify-center gap-4 p-8 rounded-xl shadow-lg hover:scale-105 hover:bg-slate-800 transition-all duration-300 group text-center"
                         >
                            <Icon className={`text-5xl ${interest.color} group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300`} />
                            <h3 className="text-lg text-text font-medium group-hover:text-primary transition-colors">{interest.title}</h3>
                         </motion.div>
                     )
                 })}
             </div>
          </div>

          {/* Achievements Section Layout Refactor */}
          <div>
             <div className="flex items-center gap-4 mb-10">
               <h2 className="text-2xl md:text-3xl font-bold text-text uppercase tracking-widest border-b border-white/20 pb-2">Achievements</h2>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                 {achievements.map((item, index) => (
                     <motion.a 
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="group flex flex-col h-full bg-gradient-to-br from-surface to-background p-6 rounded-2xl border border-slate-700/50 shadow-xl hover:-translate-y-2 hover:shadow-primary/20 hover:border-primary/50 transition-all duration-300 relative overflow-hidden"
                     >
                        <div className="flex justify-between items-start mb-4 z-10">
                           <div className="p-3 bg-slate-800/80 rounded-lg group-hover:bg-primary/20 transition-colors">
                               <FaTrophy className="w-6 h-6 text-yellow-500 group-hover:text-primary transition-colors" />
                           </div>
                           <FaExternalLinkAlt className="w-4 h-4 text-muted group-hover:text-primary transition-colors" />
                        </div>
                        
                        <h4 className="text-xl font-bold text-text mb-3 z-10 group-hover:text-primary transition-colors">{item.title}</h4>
                        <p className="text-muted/90 text-sm leading-relaxed mb-6 z-10 flex-1">{item.description}</p>
                        
                        <span className="inline-flex items-center text-sm font-semibold text-secondary group-hover:text-primary transition-colors z-10">
                           View Details <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                        </span>
                        
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                     </motion.a>
                 ))}
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
