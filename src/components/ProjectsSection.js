import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectCard = ({ title, description, techStack, links, category, image }) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 20 }}
    className="group relative p-6 rounded-2xl backdrop-blur-lg bg-white/20 dark:bg-gray-900/20 border border-white/20 dark:border-gray-700/20 shadow-glass transform hover:scale-[1.02] transition-all duration-300"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    <div className="relative z-10">
      {image && (
        <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      )}
      <div className="mb-4">
        <span className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary dark:text-accent">
          {category}
        </span>
      </div>
      <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
        {title}
      </h3>
      <p className="text-gray-700 dark:text-gray-300 mb-6">
        {description}
      </p>
      <div className="flex flex-wrap gap-2 mb-6">
        {techStack.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 text-sm rounded-full bg-white/30 dark:bg-gray-800/30 text-gray-700 dark:text-gray-300"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        {links.github && (
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-primary dark:text-accent hover:underline"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
            </svg>
            View Code
          </a>
        )}
        {links.demo && (
          <a
            href={links.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-primary dark:text-accent hover:underline"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Live Demo
          </a>
        )}
      </div>
    </div>
  </motion.div>
);

const FilterButton = ({ category, isActive, onClick }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className={`px-6 py-2 rounded-full transition-all duration-300 ${
      isActive
        ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg'
        : 'bg-white/20 dark:bg-gray-800/20 text-gray-700 dark:text-gray-300 hover:bg-white/30 dark:hover:bg-gray-800/30'
    }`}
  >
    {category}
  </motion.button>
);

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const projects = useMemo(() => [
    {
      title: 'Rule Engine App',
      description: 'A scalable rule engine for dynamic evaluation, supporting complex conditional logic and real-time processing.',
      techStack: ['Flutter', 'Node.js', 'MongoDB'],
      category: 'Flutter Apps',
      links: {
        github: 'https://github.com/shrey258/rule-engine',
        demo: 'https://rule-engine-demo.com'
      },
      image: '/images/rule-engine.jpg'
    },
    {
      title: 'Weather Monitoring System',
      description: 'Real-time weather updates with customizable alert thresholds and comprehensive data visualization.',
      techStack: ['React', 'Node.js', 'WebSocket', 'MongoDB'],
      category: 'Web Apps',
      links: {
        github: 'https://github.com/shrey258/weather-monitor',
        demo: 'https://weather-monitor-demo.com'
      },
      image: '/images/weather-monitor.jpg'
    },
    {
      title: 'Speed Test App',
      description: 'TCP/IP-based network performance tool providing detailed insights into connection quality.',
      techStack: ['Flutter', 'Go', 'WebRTC'],
      category: 'Flutter Apps',
      links: {
        github: 'https://github.com/shrey258/speed-test',
        demo: 'https://speed-test-demo.com'
      },
      image: '/images/speed-test.jpg'
    },
    {
      title: 'Portfolio Website',
      description: 'Modern portfolio website built with React and Tailwind CSS, featuring dark mode and smooth animations.',
      techStack: ['React', 'Tailwind CSS', 'Framer Motion'],
      category: 'Web Apps',
      links: {
        github: 'https://github.com/shrey258/portfolio',
        demo: 'https://portfolio-demo.com'
      },
      image: '/images/portfolio.jpg'
    }
  ], []);

  const categories = useMemo(() => {
    const cats = ['All', ...new Set(projects.map(project => project.category))];
    return cats;
  }, [projects]);

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesFilter = activeFilter === 'All' || project.category === activeFilter;
      const matchesSearch = searchQuery === '' || 
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.techStack.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, searchQuery, projects]);

  return (
    <section className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-300% animate-gradient"
        >
          Featured Projects
        </motion.h2>

        <div className="mb-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map(category => (
                <FilterButton
                  key={category}
                  category={category}
                  isActive={activeFilter === category}
                  onClick={() => setActiveFilter(category)}
                />
              ))}
            </div>
            <div className="w-full md:w-64">
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 rounded-full backdrop-blur-lg bg-white/20 dark:bg-gray-900/20 border border-white/20 dark:border-gray-700/20 focus:border-primary dark:focus:border-accent outline-none transition-colors duration-300"
              />
            </div>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredProjects.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-gray-600 dark:text-gray-400 mt-12"
          >
            No projects found matching your criteria.
          </motion.p>
        )}

        {/* Background decorations */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      </div>
    </section>
  );
};

export default ProjectsSection;
