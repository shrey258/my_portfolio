import React from 'react';

const SkillCategory = ({ title, skills }) => (
  <div className="bg-white rounded-lg shadow-lg p-6">
    <h3 className="text-xl font-semibold text-primary mb-4">{title}</h3>
    <div className="flex flex-wrap gap-3">
      {skills.map((skill, index) => (
        <span
          key={index}
          className="px-4 py-2 bg-neutral rounded-full text-secondary hover:bg-primary hover:text-white transition-colors"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["C", "C++", "Java", "Dart", "Python", "JavaScript", "HTML", "TypeScript"]
    },
    {
      title: "Frameworks",
      skills: ["Flutter", "Node.js", "Express.js", "Riverpod"]
    },
    {
      title: "Databases",
      skills: ["Firebase", "MongoDB", "MySQL"]
    },
    {
      title: "Technologies",
      skills: ["Android Studio", "Git", "GitHub", "Figma"]
    },
    {
      title: "Cloud Platforms",
      skills: ["Google Cloud Platform (GCP)", "AWS", "Azure"]
    },
    {
      title: "Operating Systems",
      skills: ["Linux", "Windows"]
    }
  ];

  return (
    <section className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-secondary mb-8">Technical Skills</h2>
      <div className="space-y-6">
        {skillCategories.map((category, index) => (
          <SkillCategory key={index} {...category} />
        ))}
      </div>

      <div className="mt-12 space-y-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-semibold text-primary mb-4">Certifications</h3>
          <ul className="space-y-3">
            <li className="flex items-center">
              <span className="w-3 h-3 bg-primary rounded-full mr-3"></span>
              <span>Alteryx Foundations Micro-Credential - Alteryx</span>
            </li>
            <li className="flex items-center">
              <span className="w-3 h-3 bg-primary rounded-full mr-3"></span>
              <span>Flutter and Dart - The Complete Guide - Udemy</span>
            </li>
            <li className="flex items-center">
              <span className="w-3 h-3 bg-primary rounded-full mr-3"></span>
              <span>Supervised Machine Learning: Regression and Classification - Coursera</span>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-semibold text-primary mb-4">Achievements</h3>
          <div className="flex items-center">
            <span className="w-3 h-3 bg-primary rounded-full mr-3"></span>
            <span>2nd Place in Genesis Web3 Hackathon for developing a frontend solution integrated with blockchain technology</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
