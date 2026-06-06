'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import PageTransition from '@/components/layout/PageTransition';
import FadeIn from '@/components/animations/FadeIn';
import SectionHeading from '@/components/common/SectionHeading';
import FAQAccordion from '@/components/common/FAQAccordion';
import { faqData } from '@/data/services';

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState(faqData[0].category);
  const active = faqData.find((f) => f.category === activeCategory)!;

  return (
    <PageTransition>
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-primary-blue to-primary-dark text-white overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="container-custom px-4 md:px-8 relative">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold tracking-wider uppercase rounded-full bg-white/10 border border-white/20">FAQ</span>
            <h1 className="text-4xl md:text-6xl font-bold font-display mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-white/90">Find answers to common questions about our services.</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeading tag="Got Questions?" title="We Have Answers" subtitle="Browse by category or search for your specific question." />

          <div className="flex gap-2 overflow-x-auto pb-4 mb-8">
            {faqData.map((f) => (
              <button
                key={f.category}
                onClick={() => setActiveCategory(f.category)}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition-all ${
                  activeCategory === f.category
                    ? 'bg-primary-blue text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {f.category}
              </button>
            ))}
          </div>

          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <FAQAccordion items={active.questions} />
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}