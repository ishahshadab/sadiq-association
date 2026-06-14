'use client';

import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';
import { companyConfig } from '@/config/company';
import { services } from '@/data/services';

export default function Footer() {
  const featuredServices = services.slice(0, 8);

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container-custom px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <div>
                <div className="font-bold text-lg text-white">{companyConfig.shortName}</div>
                <div className="text-xs text-gray-400">Accountants & Tax Consultants</div>
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-5 leading-relaxed">
              {companyConfig.description}
            </p>
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: companyConfig.social.facebook },
                { icon: Instagram, href: companyConfig.social.instagram },
                { icon: Linkedin, href: companyConfig.social.linkedin },
                { icon: Twitter, href: companyConfig.social.twitter },
                { icon: Youtube, href: companyConfig.social.youtube },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-primary-blue flex items-center justify-center transition-colors"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '/' },
                { name: 'About Us', href: '/about' },
                { name: 'Services', href: '/services' },
                
                { name: 'FAQ', href: '/faq' },
                
                { name: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm hover:text-primary-green transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-green" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-5">Our Services</h3>
            <ul className="space-y-3">
              {featuredServices.map((service) => (
                <li key={service.id}>
                  <Link href={`/services/${service.slug}`} className="text-sm hover:text-primary-green transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-green" />
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="text-sm text-primary-green font-semibold hover:underline">
                  View All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-5">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-green flex-shrink-0 mt-0.5" />
                <span className="text-sm">{companyConfig.contact.address}</span>
              </li>
              <li>
                <a href={`tel:${companyConfig.contact.phone}`} className="flex items-center gap-3 hover:text-primary-green transition-colors">
                  <Phone className="w-5 h-5 text-primary-green" />
                  <span className="text-sm">{companyConfig.contact.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${companyConfig.contact.email}`} className="flex items-center gap-3 hover:text-primary-green transition-colors">
                  <Mail className="w-5 h-5 text-primary-green" />
                  <span className="text-sm">{companyConfig.contact.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary-green flex-shrink-0 mt-0.5" />
                <span className="text-sm">{companyConfig.contact.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} {companyConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy-policy" className="hover:text-primary-green transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary-green transition-colors">Terms & Conditions</Link>
            <Link href="/disclaimer" className="hover:text-primary-green transition-colors">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
