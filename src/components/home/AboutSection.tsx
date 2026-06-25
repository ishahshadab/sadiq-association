'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import FadeIn from '../animations/FadeIn';
import SectionHeading from '../common/SectionHeading';
import { companyConfig } from '@/config/company';

const highlights = [
  'Since 2019',
  '1000+ Happy Clients',
  'Professional Team',
  '100% Compliance Guarantee',
];

export default function AboutSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn direction="left">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800"
                  alt="Professional accounting team"
                  width={800}
                  height={600}
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-blue/30 to-transparent" />
              </div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                className="absolute -bottom-6 -right-6 bg-gradient-primary text-white rounded-2xl p-6 shadow-2xl"
              >
                <div className="text-4xl font-bold">7+</div>
                <div className="text-sm">Years of Excellence</div>
              </motion.div>
            </div>
          </FadeIn>

          <FadeIn direction="right">
            <div className="mb-8">
              <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold tracking-wider uppercase rounded-full bg-primary-blue/10 text-primary-blue border border-primary-blue/20">
                About Us
              </span>
              <p className="text-primary-blue font-semibold text-xl mb-2">Welcome to</p>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold font-display text-gray-900 leading-tight mb-4 whitespace-nowrap">
                {companyConfig.name}
              </h2>
              <p className="text-lg text-gray-600">
                Your one-stop solution for all financial, taxation, and compliance needs.
              </p>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {companyConfig.name} is a premier financial consultancy firm dedicated to providing
              comprehensive taxation, accounting, and compliance solutions. With a team of qualified
              professionals, we serve individuals, startups, and businesses across India.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {highlights.map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary-green flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
