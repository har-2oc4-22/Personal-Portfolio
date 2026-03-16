import React from 'react';
import { motion } from 'framer-motion';
import { categorizedSkills } from '../data/portfolioData';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
};
  
const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
        {/* Decorative Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center justify-end gap-4 mb-16">
            <div className="flex-1 h-px bg-slate-700/50 hidden md:block"></div>
            <h2 className="text-3xl md:text-5xl font-bold text-text">Technical Skills</h2>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
             {categorizedSkills.map((categoryGroup, index) => (
                 <motion.div 
                     key={index} 
                     variants={itemVariants}
                     className="bg-surface/80 p-6 rounded-2xl border border-slate-700/50 hover:bg-surface hover:border-primary/50 shadow-lg hover:shadow-[0_0_20px_-5px_var(--tw-shadow-color)] hover:shadow-primary/20 hover:scale-[1.02] transition-all duration-300"
                 >
                     <h2 className="text-xl font-bold text-text tracking-widest uppercase mb-6 border-b border-slate-700/50 pb-3">{categoryGroup.category}</h2>
                     <div className="space-y-5">
                         {categoryGroup.items.map((skill, itemIndex) => {
                             const Icon = skill.icon;
                             return (
                                 <div key={itemIndex} className="flex items-center gap-4 group cursor-pointer">
                                     <div className={`p-2.5 rounded-lg bg-background border border-slate-800 group-hover:bg-slate-800 transition-colors duration-300 flex items-center justify-center`}>
                                         <Icon className={`w-7 h-7 ${skill.color} group-hover:scale-110 transition-transform duration-300`} />
                                     </div>
                                     <span className="text-base font-medium text-muted/90 group-hover:text-primary transition-colors">{skill.name}</span>
                                 </div>
                             );
                         })}
                     </div>
                 </motion.div>
             ))}
          </motion.div>
        </div>
    </section>
  );
};

export default Skills;
