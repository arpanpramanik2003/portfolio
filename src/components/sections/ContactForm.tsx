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
    <div className="bg-card border border-border-subtle rounded-2xl p-7 sm:p-8 shadow-sm">
      <h3 className="font-serif text-xl font-bold text-text-main mb-6">
        Send a Message
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-mono font-medium text-text-sub uppercase mb-1.5">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter your name"
            className="w-full bg-surface border border-border-default focus:border-terracotta rounded-lg px-4 py-2.5 text-text-main placeholder:text-text-mute text-sm transition-colors outline-none"
          />
        </div>

        <div>
          <label className="block text-xs font-mono font-medium text-text-sub uppercase mb-1.5">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="name@example.com"
            className="w-full bg-surface border border-border-default focus:border-terracotta rounded-lg px-4 py-2.5 text-text-main placeholder:text-text-mute text-sm transition-colors outline-none"
          />
        </div>

        <div>
          <label className="block text-xs font-mono font-medium text-text-sub uppercase mb-1.5">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
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
              <span>Transmitting...</span>
            </>
          ) : (
            <>
              <Send size={15} />
              <span>Send Message</span>
            </>
          )}
        </button>

        {/* Status Messages */}
        {submitted && (
          <div className="p-3.5 rounded-lg bg-green-500/10 border border-green-500/30 text-green-700 dark:text-green-400 text-xs font-medium flex items-center gap-2">
            <CheckCircle2 size={16} className="flex-shrink-0" />
            <span>Message received! I will reply as soon as possible.</span>
          </div>
        )}

        {error && (
          <div className="p-3.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-800 dark:text-amber-300 text-xs font-medium flex items-center gap-2">
            <AlertCircle size={16} className="flex-shrink-0" />
            <span>{error}</span>
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
