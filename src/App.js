import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Home from './pages/Home';
import LoadingScreen from './components/LoadingScreen';
import CustomCursor from './components/CustomCursor';
import { ThemeProvider } from './components/ThemeContext';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
          <CustomCursor />
          <AnimatePresence mode="wait">
            {isLoading ? (
              <LoadingScreen key="loading" isLoading={isLoading} />
            ) : (
              <div key="content" className="App">
                <Home />
              </div>
            )}
          </AnimatePresence>
          <Analytics />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
