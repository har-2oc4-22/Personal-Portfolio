import React from 'react';
import { motion } from 'framer-motion';
import { competitiveProfiles } from '../data/portfolioData';
import { FaExternalLinkAlt } from 'react-icons/fa';

const CompetitiveProgramming = () => {
  return (
    <section id="cp" className="py-24 bg-background relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-text">Competitive Programming</h2>
            <div className="flex-1 h-px bg-slate-700/50"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {competitiveProfiles.map((profile, index) => {
              const Icon = profile.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative rounded-2xl bg-surface border border-slate-700/50 overflow-hidden hover:border-primary/50 transition-colors duration-300 flex flex-col h-full hover:-translate-y-2 hover:shadow-[0_0_30px_-10px_var(--tw-shadow-color)] hover:shadow-primary/20"
                >
                    {/* Card Content */}
                    <div className="p-8 flex flex-col flex-1 z-10">
                       <div className="flex justify-between items-start mb-6">
                          <div className={`w-14 h-14 rounded-xl bg-slate-800/80 border border-slate-700/50 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                              <Icon className={`w-8 h-8 ${profile.color} transition-colors duration-300`} />
                          </div>
                       </div>
                       
                       <h3 className="text-2xl font-bold text-text mb-2 group-hover:text-primary transition-colors">{profile.platform}</h3>
                       <p className="text-sm text-muted font-mono mb-4">@{profile.username}</p>
                       <p className="text-muted/90 leading-relaxed mb-8 flex-1">
                          {profile.description}
                       </p>
                       
                       <div className="mt-auto">
                           <a 
                               href={profile.url} 
                               target="_blank" 
                               rel="noopener noreferrer" 
                               className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-800 hover:bg-slate-700 text-text font-medium text-sm transition-colors border border-slate-700 group-hover:border-primary/30"
                           >
                              Visit Profile <FaExternalLinkAlt className="w-3.5 h-3.5" />
                           </a>
                       </div>
                    </div>
                    
                    {/* Hover effect gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompetitiveProgramming;
