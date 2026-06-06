'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react';
import PageTransition from '@/components/layout/PageTransition';
import FadeIn from '@/components/animations/FadeIn';
import { companyConfig } from '@/config/company';

const contactInfo = [
  { icon: Phone, label: 'Phone', value: companyConfig.contact.phoneDisplay, href: `tel:${companyConfig.contact.phone}` },
  { icon: Mail, label: 'Email', value: companyConfig.contact.email, href: `mailto:${companyConfig.contact.email}` },
  { icon: MapPin, label: 'Address', value: companyConfig.contact.address, href: companyConfig.map.link },
  { icon: Clock, label: 'Hours', value: companyConfig.contact.hours, href: '#' },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Hello ${companyConfig.name},\n\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nService: ${form.service}\n\nMessage: ${form.message}`
    );
    window.open(`https://wa.me/${companyConfig.contact.whatsapp}?text=${msg}`, '_blank');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-primary-blue to-primary-dark text-white overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="container-custom px-4 md:px-8 relative">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold tracking-wider uppercase rounded-full bg-white/10 border border-white/20">
              Contact Us
            </span>
            <h1 className="text-4xl md:text-6xl font-bold font-display mb-6">Get in Touch</h1>
            <p className="text-xl text-white/90">We'd love to hear from you. Reach out for any queries or consultations.</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <a
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  className="block p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-primary-blue/30 hover:shadow-2xl transition-all hover-lift"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 shadow-lg">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-sm text-gray-500 mb-1">{info.label}</div>
                  <div className="font-semibold text-gray-900">{info.value}</div>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-10">
            <FadeIn direction="left">
              <div className="p-8 rounded-2xl bg-white shadow-xl">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Send Us a Message</h2>
                <p className="text-gray-600 mb-6">Fill out the form and we'll get back to you shortly.</p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 outline-none"
                  />
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input
                      type="email"
                      placeholder="Email Address"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 outline-none"
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 outline-none"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Service Interested In"
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 outline-none"
                  />
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 outline-none resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-primary-blue text-white font-semibold rounded-xl hover:bg-primary-dark transition-all shadow-lg"
                  >
                    {submitted ? (
                      <>Opening WhatsApp...</>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send via WhatsApp
                      </>
                    )}
                  </button>
                </form>
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <div className="space-y-6">
                <div className="rounded-2xl overflow-hidden shadow-xl h-[300px]">
                  <iframe
                    src={companyConfig.map.embedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Office Location"
                  />
                </div>
                <div className="p-6 rounded-2xl bg-gradient-to-br from-primary-blue to-primary-dark text-white">
                  <h3 className="text-xl font-bold mb-3">Quick Contact</h3>
                  <div className="space-y-3">
                    <a href={`tel:${companyConfig.contact.phone}`} className="flex items-center gap-3 hover:text-primary-green transition-colors">
                      <Phone className="w-5 h-5" />
                      Call Now: {companyConfig.contact.phoneDisplay}
                    </a>
                    <a
                      href={`https://wa.me/${companyConfig.contact.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 hover:text-primary-green transition-colors"
                    >
                      <MessageCircle className="w-5 h-5" />
                      WhatsApp Now
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}