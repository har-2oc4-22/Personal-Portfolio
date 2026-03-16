import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-32 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.6 }}
           className="space-y-8"
        >
           <p className="text-primary font-mono tracking-widest text-sm uppercase">What's Next?</p>
           <h2 className="text-5xl md:text-6xl font-bold text-text tracking-tight">Get In Touch</h2>
           
           <p className="text-lg text-muted/90 max-w-2xl mx-auto leading-relaxed mt-6">
             I'm currently looking for new opportunities as a Full-Stack Developer. 
             Whether you have a question or just want to say hi, I'll try my best to get back to you!
           </p>

           <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
              <a
                 href={`mailto:${personalInfo.email}`}
                 className="px-8 py-4 w-full sm:w-auto rounded-full bg-gradient-to-r from-primary to-secondary text-background font-bold text-lg hover:shadow-[0_0_30px_-5px_var(--tw-shadow-color)] shadow-primary/50 transition-all duration-300 transform hover:-translate-y-1 text-center"
              >
                 Say Hello
              </a>
              
              <button
                 onClick={handleCopyEmail}
                 className="px-8 py-4 w-full sm:w-auto rounded-full border border-slate-600 hover:border-secondary text-text font-bold text-lg transition-all duration-300 relative overflow-hidden group"
              >
                  <span className={`transition-opacity duration-300 ${copied ? 'opacity-0' : 'opacity-100'}`}>
                     Copy Email
                  </span>
                  <span className={`absolute inset-0 flex items-center justify-center text-primary transition-opacity duration-300 ${copied ? 'opacity-100' : 'opacity-0'}`}>
                     Copied!
                  </span>
              </button>
           </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
