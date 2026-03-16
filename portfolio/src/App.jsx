import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import CompetitiveProgramming from './components/CompetitiveProgramming';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { personalInfo } from './data/portfolioData';

function App() {
  return (
    <HelmetProvider>
      <div className="bg-background text-text min-h-screen font-inter selection:bg-primary/30 selection:text-primary">
          <Helmet>
            <title>{personalInfo.name} | {personalInfo.role}</title>
            <meta name="description" content={personalInfo.tagline} />
            <meta name="keywords" content="Portfolio, Full-Stack Developer, Web Development, React, MERN, Node.js" />
            
            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://harshshukla.com/" />
            <meta property="og:title" content={`${personalInfo.name} | ${personalInfo.role}`} />
            <meta property="og:description" content={personalInfo.tagline} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://harshshukla.com/" />
            <meta property="twitter:title" content={`${personalInfo.name} | ${personalInfo.role}`} />
            <meta property="twitter:description" content={personalInfo.tagline} />
          </Helmet>

          <Navbar />
          
          <main>
              <Hero />
              <About />
              <Skills />
              <CompetitiveProgramming />
              <Projects />
              <Contact />
          </main>

          <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;
