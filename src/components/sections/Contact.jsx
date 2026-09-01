import { useState } from "react";
import emailjs from "@emailjs/browser";
import data from "../../data/sections/contact.json";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Loader2, ArrowUpRight } from "lucide-react";
import { LinkedinIcon } from "../common/Icons";

// Safely initialize EmailJS if public key is provided
const emailPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
if (emailPublicKey) {
  emailjs.init(emailPublicKey);
}

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setError("Email service is not configured yet. Please reach out directly at " + data.email);
      setLoading(false);
      return;
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          to_email: data.email,
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        publicKey
      );
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (_err) {
      setError("Failed to send message. Please try again or email directly at " + data.email);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 border-t border-border-subtle bg-surface/30 transition-colors">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-mono uppercase tracking-widest text-terracotta font-semibold mb-2">
            Get In Touch
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-text-main tracking-tight mb-6">
            {data.heading}
          </h2>
          <div className="w-12 h-0.5 bg-terracotta mx-auto mb-4" />
          <p className="text-text-sub text-base sm:text-lg">
            {data.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* Contact Details (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="font-serif text-xl font-bold text-text-main mb-4">
              Direct Channels
            </h3>

            {/* Email Card */}
            <div className="bg-card border border-border-subtle hover:border-terracotta/40 rounded-xl p-4 shadow-sm transition-all flex items-center gap-4">
              <div className="p-3 rounded-lg bg-surface border border-border-subtle text-terracotta">
                <Mail size={20} />
              </div>
              <div className="min-w-0">
                <span className="block text-xs font-mono text-text-mute uppercase">Email</span>
                <a
                  href={`mailto:${data.email}`}
                  className="text-sm font-medium text-text-main hover:text-terracotta transition-colors truncate block"
                >
                  {data.email}
                </a>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-card border border-border-subtle hover:border-terracotta/40 rounded-xl p-4 shadow-sm transition-all flex items-center gap-4">
              <div className="p-3 rounded-lg bg-surface border border-border-subtle text-terracotta">
                <Phone size={20} />
              </div>
              <div>
                <span className="block text-xs font-mono text-text-mute uppercase">Phone</span>
                <a
                  href={`tel:${data.phone}`}
                  className="text-sm font-medium text-text-main hover:text-terracotta transition-colors"
                >
                  {data.phone}
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-card border border-border-subtle rounded-xl p-4 shadow-sm flex items-center gap-4">
              <div className="p-3 rounded-lg bg-surface border border-border-subtle text-terracotta">
                <MapPin size={20} />
              </div>
              <div>
                <span className="block text-xs font-mono text-text-mute uppercase">Location</span>
                <p className="text-sm font-medium text-text-main">
                  {data.location}
                </p>
              </div>
            </div>

            {/* LinkedIn Card */}
            <div className="bg-card border border-border-subtle hover:border-terracotta/40 rounded-xl p-4 shadow-sm transition-all flex items-center justify-between gap-4">
              <div className="flex items-center gap-4 min-w-0">
                <div className="p-3 rounded-lg bg-surface border border-border-subtle text-terracotta">
                  <LinkedinIcon size={20} />
                </div>
                <div>
                  <span className="block text-xs font-mono text-text-mute uppercase">LinkedIn</span>
                  <span className="text-sm font-medium text-text-main">Diya Chanda</span>
                </div>
              </div>
              <a
                href={data.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-mono text-terracotta hover:underline"
              >
                <span>Profile</span>
                <ArrowUpRight size={13} />
              </a>
            </div>
          </div>

          {/* Contact Form (7 cols) */}
          <div className="lg:col-span-7">
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
                    rows="4"
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
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
