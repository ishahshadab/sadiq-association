'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, MessageCircle, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { companyConfig } from '@/config/company';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar - Contact Info */}
      <div className="hidden md:block bg-gradient-to-r from-primary-blue to-primary-dark text-white py-2 text-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href={`tel:${companyConfig.contact.phone}`} className="flex items-center gap-2 hover:text-primary-green transition-colors">
              <Phone className="w-4 h-4" />
              {companyConfig.contact.phoneDisplay}
            </a>
            <a href={`mailto:${companyConfig.contact.email}`} className="hover:text-primary-green transition-colors">
              {companyConfig.contact.email}
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-white/80">{companyConfig.contact.hours}</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-lg shadow-lg'
            : 'bg-white/80 backdrop-blur-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo - Full Company Name */}
<Link href="/" className="flex items-center gap-3 group">
  {/* Logo - Clean without frame */}
  <div className="w-12 h-12 flex items-center justify-center group-hover:scale-105 transition-transform">
    <img 
      src="/images/logo.png" 
      alt={companyConfig.name}
      className="w-full h-full object-contain"
    />
  </div>
{/* Company Name */}
<div className="block">
  <div className="font-bold text-base sm:text-xl text-gray-900 leading-tight">
    {companyConfig.name}
  </div>
  <div className="text-xs text-gray-500 font-medium hidden sm:block">
    Accountants & Tax Consultants
  </div>
</div>
</Link>

{/* Desktop Navigation - Simple Links */}
<nav className="hidden lg:flex items-center gap-1">
  {navLinks.map((link) => (
    <Link
      key={link.name}
      href={link.href}
      className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary-blue rounded-lg hover:bg-primary-blue/5 transition-all"
    >
      {link.name}
    </Link>
  ))}
</nav>
            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={`tel:${companyConfig.contact.phone}`}
                className="flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-primary-blue border-2 border-primary-blue rounded-lg hover:bg-primary-blue hover:text-white transition-all"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
              <a
                href={`https://wa.me/${companyConfig.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-primary-green rounded-lg hover:bg-green-600 transition-all shadow-lg hover:shadow-xl"
              >
                <MessageCircle className="w-4 h-4" />
                Consult
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden bg-white border-t border-gray-100"
            >
              <div className="max-w-7xl mx-auto px-4 py-6 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-primary-blue/5 hover:text-primary-blue rounded-lg transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-4 space-y-3 border-t border-gray-100 mt-4">
                  <a
                    href={`tel:${companyConfig.contact.phone}`}
                    className="flex items-center justify-center gap-2 w-full px-4 py-3 text-sm font-semibold text-primary-blue border-2 border-primary-blue rounded-lg"
                  >
                    <Phone className="w-4 h-4" />
                    Call Now
                  </a>
                  <a
                    href={`https://wa.me/${companyConfig.contact.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-4 py-3 text-sm font-semibold text-white bg-primary-green rounded-lg"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp Consult
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
