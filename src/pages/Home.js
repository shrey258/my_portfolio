import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import SpotlightSection from '../components/SpotlightSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import TimelineSection from '../components/TimelineSection';
import ContactSection from '../components/ContactSection';
import FloatingActionButton from '../components/FloatingActionButton';
import Footer from '../components/Footer';
import Particles from '../components/Particles';

const Home = () => {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      {/* Fixed background particles */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <Particles />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white/10 to-emerald-50/30 dark:from-blue-900/30 dark:via-gray-900/10 dark:to-emerald-900/30 backdrop-blur-[2px]" />
        
        {/* Additional ambient gradients */}
        <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-gradient-to-tl from-accent/5 to-transparent rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Content with higher z-index */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <div id="about">
          <SpotlightSection />
        </div>
        <div id="skills">
          <SkillsSection />
        </div>
        <div id="projects">
          <ProjectsSection />
        </div>
        <div id="timeline">
          <TimelineSection />
        </div>
        <div id="contact">
          <ContactSection />
        </div>
        <FloatingActionButton />
        <Footer />
      </div>
    </main>
  );
};

export default Home;