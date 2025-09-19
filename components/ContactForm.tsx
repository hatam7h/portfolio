'use client';

import { useState, useRef, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';
import { emailConfig } from '@/config/email';

type NotificationType = 'success' | 'error' | null;

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    websiteType: '',
    timeFrame: ''
  });

  const websiteTypes = [
    'Portfolio',
    'E-commerce',
    'Business',
    'Blog',
    'Other'
  ];

  const timeFrames = [
    '3-4 weeks',
    '1-2 months',
    '2-3 months',
    '3-6 months',
    'Not sure yet'
  ];
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState<{ type: NotificationType; message: string } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const showNotification = (type: 'success' | 'error', message: string) => {
    setNotification({ type, message });
    setTimeout(() => setNotification(null), 5000);
  };

  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!form.current) {
      showNotification('error', 'Form reference is missing');
      setIsSubmitting(false);
      return;
    }

    try {
      // Initialize EmailJS with your public key
      emailjs.init(emailConfig.publicKey);
      
      // Prepare template parameters
      const templateParams = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        website_type: formData.websiteType,
        timeline: formData.timeFrame,
        to_email: emailConfig.receiverEmail
      };

      // Send the email using EmailJS
      await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        templateParams,
        emailConfig.publicKey
      );

      // Show success message
      showNotification('success', 'Your message has been sent successfully!');
      
      // Reset form
      setFormData({ 
        name: '', 
        email: '', 
        message: '',
        websiteType: '',
        timeFrame: ''
      });
      
      // Reset form fields
      if (form.current) {
        form.current.reset();
      }
    } catch (error) {
      console.error('Error sending email:', error);
      showNotification('error', 'Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative">
      <form ref={form} onSubmit={handleSubmit} className="space-y-6">
        {/* Hidden input for template params */}
        <input type="hidden" name="to_email" value={emailConfig.receiverEmail} />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <label 
            htmlFor="name" 
            className="block text-sm font-medium text-[var(--color-text)]/80 mb-2 transition-colors duration-200"
          >
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-[var(--color-heading)] focus:border-transparent text-[var(--color-text)] placeholder-[var(--color-text)]/40 backdrop-blur-sm transition-all duration-200 hover:border-white/20 focus:shadow-lg focus:shadow-[var(--color-heading)]/10"
            placeholder="John Doe"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.05 }}
        >
          <label 
            htmlFor="email" 
            className="block text-sm font-medium text-[var(--color-text)]/80 mb-2 transition-colors duration-200"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-[var(--color-heading)] focus:border-transparent text-[var(--color-text)] placeholder-[var(--color-text)]/40 backdrop-blur-sm transition-all duration-200 hover:border-white/20 focus:shadow-lg focus:shadow-[var(--color-heading)]/10"
            placeholder="you@example.com"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="relative"
        >
          <label 
            htmlFor="websiteType" 
            className="block text-sm font-medium text-[var(--color-text)]/80 mb-2 transition-colors duration-200"
          >
            Type of Website
          </label>
          <div className="relative">
            <select
              id="websiteType"
              name="websiteType"
              value={formData.websiteType}
              onChange={handleChange}
              required
              className="w-full px-4 py-3.5 pr-10 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-[var(--color-heading)] focus:border-transparent text-[var(--color-text)] placeholder-[var(--color-text)]/40 appearance-none backdrop-blur-sm transition-all duration-200 hover:border-white/20 focus:shadow-lg focus:shadow-[var(--color-heading)]/10"
            >
              <option value="">Select a website type</option>
              {websiteTypes.map((type) => (
                <option key={type} value={type} className="bg-[#1a1a2e] text-white">
                  {type}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg className="w-5 h-5 text-[var(--color-text)]/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.15 }}
          className="relative"
        >
          <label 
            htmlFor="timeFrame" 
            className="block text-sm font-medium text-[var(--color-text)]/80 mb-2 transition-colors duration-200"
          >
            Expected Timeline
          </label>
          <div className="relative">
            <select
              id="timeFrame"
              name="timeFrame"
              value={formData.timeFrame}
              onChange={handleChange}
              required
              className="w-full px-4 py-3.5 pr-10 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-[var(--color-heading)] focus:border-transparent text-[var(--color-text)] placeholder-[var(--color-text)]/40 appearance-none backdrop-blur-sm transition-all duration-200 hover:border-white/20 focus:shadow-lg focus:shadow-[var(--color-heading)]/10"
            >
              <option value="">Select a time frame</option>
              {timeFrames.map((time) => (
                <option key={time} value={time} className="bg-[#1a1a2e] text-white">
                  {time}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg className="w-5 h-5 text-[var(--color-text)]/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <label 
            htmlFor="message" 
            className="block text-sm font-medium text-[var(--color-text)]/80 mb-2 transition-colors duration-200"
          >
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-[var(--color-heading)] focus:border-transparent text-[var(--color-text)] placeholder-[var(--color-text)]/40 resize-none backdrop-blur-sm transition-all duration-200 hover:border-white/20 focus:shadow-lg focus:shadow-[var(--color-heading)]/10"
            placeholder="Tell me about your project, requirements, and any specific features you're looking for..."
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.25 }}
          className="pt-2"
        >
          <button
            type="submit"
            disabled={isSubmitting}
            className={`cursor-pointer group w-full py-4 px-6 rounded-xl font-medium transition-all duration-300 transform hover:-translate-y-0.5 ${
              isSubmitting
                ? 'bg-[var(--color-heading)]/70 cursor-not-allowed'
                : 'bg-[var(--color-heading)] hover:bg-[var(--color-heading)]/90 text-white shadow-lg hover:shadow-xl hover:shadow-[var(--color-heading)]/20'
            }`}
          >
            <span className="flex items-center justify-center gap-2">
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </>
              )}
            </span>
          </button>
        </motion.div>
      </form>

      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className={`fixed bottom-6 right-6 px-6 py-4 rounded-xl shadow-xl z-50 backdrop-blur-md ${
              notification.type === 'success' 
                ? 'bg-green-500/90 border border-green-400/30' 
                : 'bg-red-500/90 border border-red-400/30'
            } text-white`}
          >
            <div className="flex items-start gap-3 max-w-xs">
              <div className={`mt-0.5 flex-shrink-0 p-1.5 rounded-full ${
                notification.type === 'success' ? 'bg-green-400/20' : 'bg-red-400/20'
              }`}>
                {notification.type === 'success' ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </div>
              <div>
                <p className="font-medium">
                  {notification.type === 'success' ? 'Message Sent!' : 'Something went wrong'}
                </p>
                <p className="text-sm opacity-90 mt-0.5">{notification.message}</p>
              </div>
              <button 
                onClick={() => setNotification(null)}
                className="ml-2 p-1 rounded-full hover:bg-white/10 transition-colors -mt-1 -mr-2"
                aria-label="Close notification"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
