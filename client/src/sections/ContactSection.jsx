import React, { useState } from 'react';
import { Mail, Github, Linkedin, Check, Copy, Loader2, ArrowRight } from 'lucide-react';
import { Toast } from '../components/Toast';
import { personalInfo } from '../data/portfolioData';
import { sendContactMessage } from '../services/api';

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!EMAIL_REGEX.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required.';
    } else if (formData.subject.trim().length < 2) {
      newErrors.subject = 'Subject must be at least 2 characters.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await sendContactMessage({
        name: formData.name.trim(),
        email: formData.email.trim(),
        subject: formData.subject.trim(),
        message: formData.message.trim(),
      });

      setToast({
        show: true,
        type: 'success',
        message: response.message || 'Thank you! Your message has been sent.'
      });

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setErrors({});
    } catch (error) {
      console.error('Contact Form Error:', error);
      setToast({
        show: true,
        type: 'error',
        message: error.message || 'Failed to send message. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.socialLinks.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-20 border-t border-neutral-150">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-start">
          {/* Left Column: Heading & Contact Info */}
          <div className="md:col-span-5 space-y-6">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1 font-medium">
                Contact
              </div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900 tracking-tight">
                Let's work together.
              </h2>
              <p className="mt-3 text-sm sm:text-base text-neutral-500 leading-relaxed font-normal">
                I'm open to software engineering opportunities, technical collaborations, and interesting projects.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              {/* Email Row with Copy */}
              <div className="flex items-center justify-between p-3.5 rounded-md border border-neutral-200 bg-neutral-50/50 text-xs sm:text-sm">
                <div className="flex items-center gap-2.5 min-w-0">
                  <Mail className="w-4 h-4 text-neutral-400 shrink-0" />
                  <span className="text-neutral-700 font-medium truncate">
                    {personalInfo.socialLinks.email}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="text-neutral-400 hover:text-neutral-900 transition-colors p-1"
                  title="Copy email address"
                  aria-label="Copy email"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-neutral-900" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-3 pt-1">
                <a
                  href={personalInfo.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-md border border-neutral-200 bg-white hover:bg-neutral-50 text-xs font-medium text-neutral-700 transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
                <a
                  href={personalInfo.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-md border border-neutral-200 bg-white hover:bg-neutral-50 text-xs font-medium text-neutral-700 transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Contact Form */}
          <div className="md:col-span-7">
            <form onSubmit={handleSubmit} className="p-6 sm:p-7 rounded-lg border border-neutral-200 bg-white shadow-card space-y-4" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-neutral-700 mb-1.5">
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Jane Doe"
                    className={`w-full px-3 py-2 rounded-md border text-sm text-neutral-900 bg-white focus:outline-none transition-colors ${
                      errors.name
                        ? 'border-red-400 focus:border-red-500'
                        : 'border-neutral-200 focus:border-neutral-900'
                    }`}
                    disabled={isSubmitting}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-500">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-neutral-700 mb-1.5">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jane@company.com"
                    className={`w-full px-3 py-2 rounded-md border text-sm text-neutral-900 bg-white focus:outline-none transition-colors ${
                      errors.email
                        ? 'border-red-400 focus:border-red-500'
                        : 'border-neutral-200 focus:border-neutral-900'
                    }`}
                    disabled={isSubmitting}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-xs font-medium text-neutral-700 mb-1.5">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Software Engineering Opportunity"
                  className={`w-full px-3 py-2 rounded-md border text-sm text-neutral-900 bg-white focus:outline-none transition-colors ${
                    errors.subject
                      ? 'border-red-400 focus:border-red-500'
                      : 'border-neutral-200 focus:border-neutral-900'
                  }`}
                  disabled={isSubmitting}
                />
                {errors.subject && (
                  <p className="mt-1 text-xs text-red-500">{errors.subject}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-medium text-neutral-700 mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hello Abiraj, I'd like to talk about..."
                  className={`w-full px-3 py-2 rounded-md border text-sm text-neutral-900 bg-white focus:outline-none transition-colors resize-none ${
                    errors.message
                      ? 'border-red-400 focus:border-red-500'
                      : 'border-neutral-200 focus:border-neutral-900'
                  }`}
                  disabled={isSubmitting}
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-500">{errors.message}</p>
                )}
              </div>

              {/* Submit */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md bg-neutral-900 text-white hover:bg-neutral-800 disabled:opacity-50 transition-colors text-sm font-medium cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending message...</span>
                    </>
                  ) : (
                    <span>Send Message</span>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Toast Feedback */}
      {toast.show && (
        <Toast
          type={toast.type}
          message={toast.message}
          onClose={() => setToast({ show: false, message: '', type: 'success' })}
        />
      )}
    </section>
  );
};
