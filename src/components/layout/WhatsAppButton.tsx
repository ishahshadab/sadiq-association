'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { companyConfig } from '@/config/company';

export default function WhatsAppButton() {
  const message = encodeURIComponent(
    `Hello ${companyConfig.name},\n\nI would like to book a consultation.\n\nPlease share available timings and details.`
  );
  const url = `https://wa.me/${companyConfig.contact.whatsapp}?text=${message}`;

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: 'spring' }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-40 flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-5 py-3.5 rounded-full shadow-2xl shadow-green-500/40 transition-colors group"
      aria-label="Chat on WhatsApp"
    >
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="relative"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white" />
      </motion.div>
      <span className="hidden sm:inline font-semibold">Chat with us</span>
    </motion.a>
  );
}