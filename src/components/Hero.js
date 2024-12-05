import React, { useState, useEffect, useMemo } from 'react';

const SocialIcon = ({ href, label, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="transform hover:scale-110 transition-transform duration-300"
    aria-label={label}
  >
    <div className="w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-lg bg-gradient-to-br from-primary/40 to-accent/40 dark:from-primary/20 dark:to-accent/20 shadow-glass hover:shadow-lg border border-white/20 dark:border-gray-800/50">
      {icon}
    </div>
  </a>
);

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  const roles = useMemo(() => [
    'Flutter Developer',
    'Full-Stack Engineer',
    'AI Explorer'
  ], []);

  // Cursor blink effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    const currentRole = roles[index % roles.length];
    const timer = setTimeout(() => {
      if (!isDeleting && displayText.length < currentRole.length) {
        setDisplayText(currentRole.slice(0, displayText.length + 1));
      } else if (isDeleting && displayText.length > 0) {
        setDisplayText(currentRole.slice(0, displayText.length - 1));
      } else if (displayText.length === 0 && isDeleting) {
        setIsDeleting(false);
        setIndex(prev => (prev + 1) % roles.length);
      } else if (displayText.length === currentRole.length && !isDeleting) {
        setTimeout(() => {
          setIsDeleting(true);
        }, 1500);
      }
    }, isDeleting ? 100 : 150);

    return () => clearTimeout(timer);
  }, [displayText, index, isDeleting, roles]);

  const socialIcons = useMemo(() => ({
    github: (
      <svg className="w-6 h-6 text-gray-800 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
      </svg>
    ),
    linkedin: (
      <svg className="w-6 h-6 text-gray-800 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    email: (
      <svg className="w-6 h-6 text-gray-800 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  }), []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-32">
        <div className="flex flex-col items-center text-center">
          <div className="relative mb-6">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary bg-300% animate-gradient">
              Shreyansh Gupta
            </h1>
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-3xl -z-10" />
          </div>
          
          <div className="h-12 mb-8">
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300">
              <span className="inline-block min-w-[20ch]">
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-300% animate-gradient">
                  {displayText}
                  <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>|</span>
                </span>
              </span>
            </p>
          </div>

          <div className="flex gap-6 mb-12">
            <SocialIcon
              href="https://github.com/shrey258"
              label="GitHub Profile"
              icon={socialIcons.github}
            />
            <SocialIcon
              href="https://linkedin.com/in/shreyansh-gupta"
              label="LinkedIn Profile"
              icon={socialIcons.linkedin}
            />
            <SocialIcon
              href="mailto:contact@shreyansh.dev"
              label="Email Contact"
              icon={socialIcons.email}
            />
          </div>

          <button
            onClick={() => scrollToSection('about')}
            className="animate-bounce"
            aria-label="Scroll to About section"
          >
            <svg
              className="w-10 h-10 text-gray-700 dark:text-gray-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
