import React from 'react';

const Footer = () => {
  return (
    <footer className="relative py-8 px-4 backdrop-blur-lg bg-white/5 dark:bg-gray-900/5 border-t border-white/10 dark:border-gray-800/10">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-gray-700 dark:text-gray-300">
          © 2024 Shreyansh Gupta | Built with{' '}
          <span className="text-red-500">❤️</span> using{' '}
          <span className="text-primary dark:text-accent">React</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
