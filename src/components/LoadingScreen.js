import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = ({ isLoading }) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isLoading ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 ${
        isLoading ? '' : 'pointer-events-none'
      }`}
    >
      <div className="relative">
        <svg className="w-20 h-20" viewBox="0 0 100 100">
          <motion.circle
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
            }}
            strokeWidth="8"
            stroke="url(#gradient)"
            strokeLinecap="round"
            fill="none"
            cx="50"
            cy="50"
            r="40"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--color-primary)" />
              <stop offset="100%" stopColor="var(--color-accent)" />
            </linearGradient>
          </defs>
        </svg>
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-xl"
        />
      </div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="absolute mt-24 text-xl font-medium bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
      >
        Loading...
      </motion.h2>
    </motion.div>
  );
};

export default LoadingScreen;
