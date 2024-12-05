import React from 'react';
import ProjectDemo from '../components/ProjectDemo';
import TechIcon from '../components/TechIcon';
import ScrollReveal from '../components/ScrollReveal';

const ProjectCard = ({ title, description, tech, link, demoImages }) => {
  return (
    <ScrollReveal className="bg-white rounded-xl shadow-lg overflow-hidden">
      <ProjectDemo images={demoImages} title={title} />
      <div className="p-6">
        <h3 className="text-xl font-bold text-secondary mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((item, index) => (
            <div key={index} className="flex items-center space-x-1">
              <TechIcon name={item} className="w-4 h-4" />
              <span className="text-sm text-gray-600">{item}</span>
            </div>
          ))}
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-primary hover:text-accent transition-colors"
        >
          View Project <span className="ml-2">→</span>
        </a>
      </div>
    </ScrollReveal>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Speed Test Application",
      description: "A comprehensive network performance analyzer built with Flutter and Node.js. Features real-time speed measurements and detailed network statistics.",
      tech: ["Flutter", "Node.js", "Express.js", "Dart"],
      link: "https://github.com/shrey258/speed-test-app",
      demoImages: ["/images/speed-test.png"]
    },
    {
      title: "Nasa Project",
      description: "A scalable backend system with CSV parsing and MongoDB integration, featuring multithreading and SSL encryption for enhanced performance.",
      tech: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
      link: "https://github.com/shrey258/nasa-project",
      demoImages: ["/images/nasa-project.png"]
    },
    {
      title: "The Campus Web",
      description: "A Flutter-based platform for SRM students to manage their academic life, featuring attendance tracking, timetable management, and more.",
      tech: ["Flutter", "Riverpod", "UI Development"],
      link: "https://github.com/shrey258/campus-web",
      demoImages: ["/images/campus-web.png"]
    }
  ];

  return (
    <section className="max-w-6xl mx-auto px-4">
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold text-secondary mb-4">Featured Projects</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Here are some of my recent projects that showcase my skills in full-stack development,
          mobile app development, and system architecture.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>

      <div className="mt-12 text-center">
        <a 
          href="https://github.com/shrey258"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-full hover:bg-accent transition-colors"
        >
          View More on GitHub <span className="ml-2">→</span>
        </a>
      </div>
    </section>
  );
};

export default Projects;
