import React from 'react';

const ContactItem = ({ icon, label, value, link }) => (
  <div className="flex items-center p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
    <span className="text-2xl text-primary mr-4">{icon}</span>
    <div>
      <h3 className="font-medium text-secondary">{label}</h3>
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent">
          {value}
        </a>
      ) : (
        <p className="text-gray-600">{value}</p>
      )}
    </div>
  </div>
);

const Contact = () => {
  return (
    <section className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-secondary mb-8">Contact Me</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ContactItem
          icon="📱"
          label="Phone"
          value="+91 6295259252"
        />
        <ContactItem
          icon="📧"
          label="Email"
          value="gshrey258@gmail.com"
          link="mailto:gshrey258@gmail.com"
        />
        <ContactItem
          icon="💼"
          label="LinkedIn"
          value="linkedin.com/in/shrey258"
          link="https://linkedin.com/in/shrey258"
        />
        <ContactItem
          icon="💻"
          label="GitHub"
          value="github.com/shrey258"
          link="https://github.com/shrey258"
        />
      </div>

      <div className="mt-12 bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-semibold text-primary mb-4">Let's Connect!</h3>
        <p className="text-gray-600 mb-4">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="https://linkedin.com/in/shrey258"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0077b5] text-white px-6 py-3 rounded-full text-center hover:bg-[#006396] transition-colors"
          >
            Connect on LinkedIn
          </a>
          <a
            href="mailto:gshrey258@gmail.com"
            className="bg-primary text-white px-6 py-3 rounded-full text-center hover:bg-accent transition-colors"
          >
            Send Email
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
