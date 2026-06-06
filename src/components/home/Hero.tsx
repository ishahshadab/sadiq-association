'use client';

import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, CheckCircle2, Users, TrendingUp, Shield } from 'lucide-react';
import Link from 'next/link';
import { companyConfig } from '@/config/company';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center w-full overflow-hidden bg-gradient-to-br from-slate-50 via-white to-primary-blue/5">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden w-full">
        <div className="absolute top-0 -left-40 w-96 h-96 bg-primary-blue/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 -right-40 w-96 h-96 bg-primary-green/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial opacity-30" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-blue/5" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="w-full px-4 md:px-8 lg:px-16 relative z-10 py-20">
        <div className="container-custom mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-primary-blue/10 border border-primary-blue/20"
              >
                <span className="w-2 h-2 rounded-full bg-primary-green animate-pulse" />
                <span className="text-sm font-semibold text-primary-blue">Since 2019</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-gray-900 leading-tight mb-6"
              >
                Your Trusted Partner for{' '}
                <span className="text-gradient">Taxation, Accounting</span>{' '}
                & Business Compliance
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
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-blue text-white font-semibold rounded-xl hover:bg-primary-dark transition-all shadow-xl shadow-primary-blue/20 hover:shadow-2xl hover:-translate-y-0.5"
                >
                  Explore Services
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href={`https://wa.me/${companyConfig.contact.whatsapp}?text=${encodeURIComponent(`Hello ${companyConfig.name}, I would like to book a consultation.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-green text-white font-semibold rounded-xl hover:bg-green-600 transition-all shadow-xl shadow-primary-green/20 hover:shadow-2xl hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-5 h-5" />
                  Book Consultation on WhatsApp
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
                    <CheckCircle2 className="w-5 h-5 text-primary-green" />
                    <span className="text-sm font-medium text-gray-700">{item}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Visual - Stats Cards */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              <div className="relative">
                {/* Main Card - 400+ Clients */}
                <div className="glass rounded-3xl p-8 shadow-2xl">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <div className="text-sm text-gray-500">Clients Handled</div>
                      <div className="text-4xl font-bold text-gray-900">400+</div>
                      <div className="text-sm text-primary-green mt-1">Growing Strong</div>
                    </div>
                    <div className="w-14 h-14 rounded-xl bg-primary-blue/10 flex items-center justify-center">
                      <Users className="w-7 h-7 text-primary-blue" />
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
                          <div className="w-10 h-10 rounded-lg bg-primary-green/10 flex items-center justify-center">
                            <item.icon className="w-5 h-5 text-primary-green" />
                          </div>
                          <span className="text-sm text-gray-600">{item.label}</span>
                        </div>
                        <span className="font-bold text-gray-900">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floating Badge - Experience */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-6 -right-6 glass rounded-2xl p-4 shadow-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary-green flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Experience</div>
                      <div className="font-bold text-gray-900">7+ Years</div>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Badge - Clients */}
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                  className="absolute -bottom-6 -left-6 glass rounded-2xl p-4 shadow-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary-blue flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Happy Clients</div>
                      <div className="font-bold text-gray-900">400+</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
