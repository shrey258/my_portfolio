import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-900 to-black flex items-center justify-center z-50">
      <div className="relative">
        {/* Animated rings */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border-2 border-primary/30"
            style={{
              width: `${100 + i * 30}px`,
              height: `${100 + i * 30}px`,
              border: `2px solid ${i === 1 ? 'var(--accent)' : 'var(--primary)'}`,
              opacity: 0.3 - i * 0.1,
            }}
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Center pulse */}
        <motion.div
          className="relative w-24 h-24"
          animate={{ scale: [0.95, 1.05, 0.95] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent opacity-30 blur-xl" />
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent opacity-20" />
          
          {/* Inner content */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{ rotate: 360 }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <div className="w-12 h-12 rounded-full border-4 border-transparent border-t-primary border-r-accent" />
          </motion.div>
        </motion.div>

        {/* Loading text */}
        <motion.div
          className="absolute -bottom-16 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.span 
            className="block text-xl font-medium bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Loading
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              ...
            </motion.span>
          </motion.span>
        </motion.div>
      </div>
    </div>
  );
};

export default LoadingScreen;
