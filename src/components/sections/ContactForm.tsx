'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { sendContactEmail } from '../../app/actions/contact';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const result = await sendContactEmail(formData);
      if (result.success) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setError(result.message);
      }
    } catch {
      setError('An unexpected error occurred. Please reach out to diya.chanda03@gmail.com directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-card border border-border-subtle rounded-2xl p-6 sm:p-8 shadow-sm">
      <h3 className="font-serif text-xl sm:text-2xl font-bold text-text-main mb-6">
        Send a Message
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="contact-name" className="block text-xs font-mono font-medium text-text-sub uppercase mb-1.5">
            Your Name <span className="text-terracotta">*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            name="name"
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            required
            aria-required="true"
            placeholder="Enter your name"
            className="w-full bg-surface border border-border-default focus:border-terracotta rounded-lg px-4 py-2.5 text-text-main placeholder:text-text-mute text-sm transition-colors outline-none"
          />
        </div>

        <div>
          <label htmlFor="contact-email" className="block text-xs font-mono font-medium text-text-sub uppercase mb-1.5">
            Email Address <span className="text-terracotta">*</span>
          </label>
          <input
            id="contact-email"
            type="email"
            name="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            required
            aria-required="true"
            placeholder="name@example.com"
            className="w-full bg-surface border border-border-default focus:border-terracotta rounded-lg px-4 py-2.5 text-text-main placeholder:text-text-mute text-sm transition-colors outline-none"
          />
        </div>

        <div>
          <label htmlFor="contact-message" className="block text-xs font-mono font-medium text-text-sub uppercase mb-1.5">
            Message <span className="text-terracotta">*</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            aria-required="true"
            placeholder="Write your note or project inquiry..."
            rows={4}
            className="w-full bg-surface border border-border-default focus:border-terracotta rounded-lg px-4 py-2.5 text-text-main placeholder:text-text-mute text-sm transition-colors outline-none resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full inline-flex items-center justify-center gap-2 bg-terracotta hover:bg-terracotta-hover disabled:opacity-60 text-white font-medium py-3 rounded-lg shadow-sm transition-colors text-sm cursor-pointer"
        >
          {loading ? (
            <>
              <Loader2 size={16} className="animate-spin" />
              <span>Transmitting Secure Message...</span>
            </>
          ) : (
            <>
              <Send size={15} />
              <span>Send Message</span>
            </>
          )}
        </button>

        {submitted && (
          <div
            role="status"
            aria-live="polite"
            className="flex items-center gap-2 p-3.5 bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 rounded-lg text-xs font-mono"
          >
            <CheckCircle2 size={16} className="flex-shrink-0" />
            <span>Thank you! Your message was transmitted directly to Diya.</span>
          </div>
        )}

        {error && (
          <div
            role="alert"
            aria-live="assertive"
            className="flex items-center gap-2 p-3.5 bg-rose-500/10 border border-rose-500/30 text-rose-700 dark:text-rose-400 rounded-lg text-xs font-mono"
          >
            <AlertCircle size={16} className="flex-shrink-0" />
            <span>{error}</span>
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
