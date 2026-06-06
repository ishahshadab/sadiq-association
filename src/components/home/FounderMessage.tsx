'use client';

import { Quote } from 'lucide-react';
import Image from 'next/image';
import FadeIn from '../animations/FadeIn';
import { companyConfig } from '@/config/company';

export default function FounderMessage() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-5 gap-10 items-center">
          <FadeIn direction="left" className="lg:col-span-2">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={companyConfig.founder.image}
                  alt={companyConfig.founder.name}
                  width={600}
                  height={700}
                  className="w-full h-[500px] object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-blue/40 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gradient-primary text-white rounded-2xl p-6 shadow-2xl hidden md:block">
                <Quote className="w-8 h-8 mb-2 opacity-50" />
                <div className="font-bold text-lg">{companyConfig.founder.name}</div>
                <div className="text-sm opacity-90">{companyConfig.founder.title}</div>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right" className="lg:col-span-3">
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold tracking-wider uppercase rounded-full bg-primary-green/10 text-primary-green border border-primary-green/20">
              Founder's Message
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-gray-900 mb-6">
              A Message from Our{' '}
              <span className="text-gradient">Founder</span>
            </h2>
            <blockquote className="text-lg text-gray-600 leading-relaxed mb-6 italic border-l-4 border-primary-green pl-6">
              "{companyConfig.founder.message}"
            </blockquote>
            <div className="md:hidden">
              <div className="font-bold text-xl text-gray-900">{companyConfig.founder.name}</div>
              <div className="text-primary-blue font-medium">{companyConfig.founder.title}</div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}