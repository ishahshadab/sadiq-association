'use client';

import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Briefcase } from 'lucide-react';
import Link from 'next/link';
import { companyConfig } from '@/config/company';
import type { Service } from '@/data/services';

interface ServiceCardProps {
  service: Service;
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  // Fallback icon agar service.icon undefined ho
  const Icon = service.icon || Briefcase;

  const whatsappMessage = encodeURIComponent(
    `Hello ${companyConfig.name},\n\nI would like to book an appointment for ${service.name}.\n\nPlease share available timings and details.`
  );
  const whatsappUrl = `https://wa.me/${companyConfig.contact.whatsapp}?text=${whatsappMessage}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group relative bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-primary-blue/20 hover-lift overflow-hidden"
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/5 to-primary-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative">
        {/* Icon - with fallback */}
        <div className="mb-5 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-primary shadow-lg shadow-primary-blue/20 group-hover:scale-110 transition-transform duration-300">
          {Icon && <Icon className="w-7 h-7 text-white" />}
        </div>

        {/* Category */}
        <span className="inline-block px-3 py-1 mb-3 text-xs font-medium text-primary-blue bg-primary-blue/10 rounded-full">
          {service.category}
        </span>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-blue transition-colors">
          {service.name}
        </h3>

        {/* Description */}
        <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
          {service.shortDescription}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href={`/services/${service.slug}`}
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-primary-blue bg-primary-blue/10 rounded-lg hover:bg-primary-blue hover:text-white transition-all duration-300"
          >
            Learn More
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-primary-green rounded-lg hover:bg-green-600 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <MessageCircle className="w-4 h-4" />
            Book Appointment
          </a>
        </div>
      </div>
    </motion.div>
  );
}