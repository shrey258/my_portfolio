import React from 'react';
import ThemeSwitcher from './ThemeSwitcher';

const Layout = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <ThemeSwitcher />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default Layout;
