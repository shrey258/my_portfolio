import React, { useState } from 'react';
import { motion } from 'framer-motion';

const FormInput = ({ label, type, name, value, onChange, error }) => (
  <div className="mb-6">
    <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor={name}>
      {label}
    </label>
    <input
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      className={`w-full px-4 py-3 rounded-lg backdrop-blur-lg bg-white/30 dark:bg-gray-900/20 border ${
        error ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'
      } text-gray-900 dark:text-gray-100 focus:border-primary dark:focus:border-accent outline-none transition-colors duration-300 placeholder-gray-500 dark:placeholder-gray-400`}
    />
    {error && (
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-2 text-sm text-red-500"
      >
        {error}
      </motion.p>
    )}
  </div>
);

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      setSubmitStatus('submitting');
      
      // Simulate API call
      try {
        await new Promise(resolve => setTimeout(resolve, 2000));
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } catch (error) {
        setSubmitStatus('error');
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto p-8 rounded-2xl backdrop-blur-lg bg-white/30 dark:bg-gray-900/20 border border-gray-300 dark:border-gray-700 shadow-glass"
    >
      <FormInput
        label="Name"
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        error={errors.name}
      />
      <FormInput
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
      />
      <FormInput
        label="Subject"
        type="text"
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        error={errors.subject}
      />
      <div className="mb-6">
        <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          className={`w-full px-4 py-3 rounded-lg backdrop-blur-lg bg-white/30 dark:bg-gray-900/20 border ${
            errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'
          } text-gray-900 dark:text-gray-100 focus:border-primary dark:focus:border-accent outline-none transition-colors duration-300 placeholder-gray-500 dark:placeholder-gray-400`}
        />
        {errors.message && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-2 text-sm text-red-500"
          >
            {errors.message}
          </motion.p>
        )}
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        disabled={isSubmitting}
        className={`w-full py-4 rounded-lg ${
          isSubmitting
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-gradient-to-r from-primary to-accent hover:shadow-lg'
        } text-white font-medium transition-all duration-300`}
      >
        {isSubmitting ? (
          <div className="flex items-center justify-center">
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
            Sending...
          </div>
        ) : (
          'Send Message'
        )}
      </motion.button>

      {submitStatus === 'success' && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 text-green-500 text-center"
        >
          Message sent successfully!
        </motion.p>
      )}

      {submitStatus === 'error' && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 text-red-500 text-center"
        >
          Failed to send message. Please try again.
        </motion.p>
      )}
    </motion.form>
  );
};

export default ContactForm;
