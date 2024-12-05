import React from 'react';

const TimelineItem = ({ date, title, description, icon }) => {
  return (
    <div className="flex gap-4 md:gap-6 animate-fade-in">
      <div className="flex flex-col items-center">
        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary">
          {icon}
        </div>
        <div className="flex-1 w-0.5 bg-gray-200 dark:bg-gray-700 my-2"></div>
      </div>
      
      <div className="flex-1 pb-8">
        <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">{date}</div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default TimelineItem;
