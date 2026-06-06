'use client';

import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, CheckCircle2, Users, TrendingUp, Shield } from 'lucide-react';
import Link from 'next/link';
import { companyConfig } from '@/config/company';

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center bg-slate-50 overflow-hidden">
      {/* Full Width Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100" />
      
      {/* Grid Pattern Full Width */}
      <div className="absolute inset-0 w-full h-full opacity-30 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Floating Shapes for aesthetics */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-blue-100 border border-blue-200"
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-semibold text-blue-800">Since 2019</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-gray-900 leading-tight mb-6"
            >
              Your Trusted Partner for{' '}
              <span className="text-blue-600">Taxation</span> &{' '}
              <span className="text-green-600">Business</span> Growth
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed"
            >
              {companyConfig.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
              >
                Explore Services
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href={`https://wa.me/${companyConfig.contact.whatsapp}?text=${encodeURIComponent(`Hello ${companyConfig.name}, I would like to book a consultation.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 transition-all shadow-lg hover:shadow-xl"
              >
                <MessageCircle className="w-5 h-5" />
                Book Consultation
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-wrap gap-6"
            >
              {['Expert Team', '100% Compliance', '24/7 Support'].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span className="text-sm font-medium text-gray-700">{item}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="text-sm text-gray-500">Clients Handled</div>
                  <div className="text-4xl font-bold text-gray-900">400+</div>
                  <div className="text-sm text-green-600 mt-1">Growing Strong</div>
                </div>
                <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center">
                  <Users className="w-7 h-7 text-blue-600" />
                </div>
              </div>
              <div className="space-y-4">
                {[
                  { label: 'Years Experience', value: 'Since 2019', icon: TrendingUp },
                  { label: 'Returns Filed', value: '2,500+', icon: Shield },
                  { label: 'Success Rate', value: '98%', icon: CheckCircle2 },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-gray-50">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-green-600" />
                      </div>
                      <span className="text-sm text-gray-600">{item.label}</span>
                    </div>
                    <span className="font-bold text-gray-900">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Decorative Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl z-20"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-xs text-gray-500">Experience</div>
                  <div className="font-bold text-gray-900">7+ Years</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
