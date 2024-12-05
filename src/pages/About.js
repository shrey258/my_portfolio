// src/pages/About.js
import React, { useEffect, useState } from 'react';

const About = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 200);
  }, []);

  return (
    <section className={`max-w-4xl mx-auto transition-all duration-700 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
      <h2 className="text-3xl font-bold text-secondary mb-8">About Me</h2>
      
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h3 className="text-xl font-semibold text-primary mb-4">Education</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-medium">SRM Institute of Science and Technology</h4>
            <p className="text-gray-600">Bachelor of Technology in Computer Science</p>
            <p className="text-gray-500">CGPA: 8.89 | Expected June 2025</p>
            <p className="text-gray-500">Chennai, TN</p>
          </div>
          <div>
            <h4 className="font-medium">Navyug Convent School</h4>
            <p className="text-gray-600">Senior Secondary</p>
            <p className="text-gray-500">Percentage: 86.2% | June 2021</p>
            <p className="text-gray-500">Delhi</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h3 className="text-xl font-semibold text-primary mb-4">Professional Experience</h3>
        <div className="mb-4">
          <h4 className="font-medium">IIT Madras</h4>
          <p className="text-gray-600">Intern: Full Stack Developer</p>
          <p className="text-gray-500">June 2023 – July 2023 | Chennai, TN</p>
          <ul className="list-disc list-inside text-gray-600 mt-2">
            <li>Developed Linux client and server programs for network speed measurement</li>
            <li>Created a frontend application using Flutter and a backend service with Node.js and Express.js</li>
            <li>Utilized Python for scripting and automation tasks, and Dart for mobile application development</li>
          </ul>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-semibold text-primary mb-4">Social Engagements</h3>
        <div className="space-y-2">
          <div>
            <h4 className="font-medium">App Dev Lead at NSCC SRM</h4>
            <p className="text-gray-600">Leading app development initiatives and mentoring team members</p>
          </div>
          <div>
            <h4 className="font-medium">Tech Associate at Cherry+ Network, SRM KTR</h4>
            <p className="text-gray-600">Contributing to technical projects and community building</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
