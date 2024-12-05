import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import LoadingScreen from './components/LoadingScreen';
import CustomCursor from './components/CustomCursor';

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
    <>
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
    </>
  );
}

export default App;
