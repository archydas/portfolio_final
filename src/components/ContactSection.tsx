import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { sendContactEmail } from '../services/resend';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactSection = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | ''>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');
    
    try {
      const result = await sendContactEmail(formData);
      
      if (result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      
      // Clear status after 5 seconds
      setTimeout(() => {
        setSubmitStatus('');
      }, 5000);
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-white mb-16 text-center">
          Get In Touch
        </h2>
        
        <div className="bg-slate-800/90 backdrop-blur-sm rounded-lg p-8 border border-slate-600 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-white text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="Your name"
                className="w-full bg-slate-700 text-white placeholder-slate-400 border border-slate-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-white text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="your@email.com"
                className="w-full bg-slate-700 text-white placeholder-slate-400 border border-slate-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-white text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={5}
                placeholder="Your message..."
                className="w-full bg-slate-700 text-white placeholder-slate-400 border border-slate-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 disabled:cursor-not-allowed text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </>
              )}
            </button>

            {submitStatus === 'success' && (
              <div className="flex items-center justify-center space-x-2 text-green-400 font-medium">
                <CheckCircle className="w-5 h-5" />
                <span>Message sent! Check your email for confirmation.</span>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="flex items-center justify-center space-x-2 text-red-400 font-medium">
                <AlertCircle className="w-5 h-5" />
                <span>Failed to send message. Please try again.</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;