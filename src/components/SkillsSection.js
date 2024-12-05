import React from 'react';
import { motion } from 'framer-motion';

const SkillCard = ({ category, skills }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="p-6 rounded-2xl backdrop-blur-lg bg-white/20 dark:bg-gray-900/20 border border-white/20 dark:border-gray-700/20 shadow-glass"
    >
      <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
        {category}
      </h3>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-1">
              <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
              <span className="text-primary dark:text-accent">{skill.level}%</span>
            </div>
            <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-primary to-accent"
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const SkillsSection = () => {
  const skillsData = [
    {
      category: "Frontend Development",
      skills: [
        { name: "Flutter", level: 90 },
        { name: "React.js", level: 85 },
        { name: "HTML/CSS", level: 90 },
        { name: "JavaScript", level: 85 }
      ]
    },
    {
      category: "Backend Development",
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Python", level: 85 },
        { name: "Express.js", level: 80 },
        { name: "MongoDB", level: 75 }
      ]
    },
    {
      category: "Tools & Technologies",
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 75 },
        { name: "AWS", level: 70 },
        { name: "Firebase", level: 85 }
      ]
    }
  ];

  return (
    <section className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-300% animate-gradient"
        >
          Skills & Expertise
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category, index) => (
            <SkillCard key={index} {...category} />
          ))}
        </div>

        {/* Background decorations */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      </div>
    </section>
  );
};

export default SkillsSection;
