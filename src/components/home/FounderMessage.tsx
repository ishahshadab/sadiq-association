'use client';

import FadeIn from '../animations/FadeIn';
import { Quote } from 'lucide-react';
import Image from 'next/image';
import { companyConfig } from '@/config/company';

export default function FounderMessage() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <FadeIn direction="right">
            <div className="relative">
              <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-gray-100">
                <Image
                  src="/images/founder.jpg"
                  alt={`${companyConfig.founder.name} - Founder`}
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
              {/* Decorative Element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-blue/10 rounded-2xl -z-10" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary-green/10 rounded-2xl -z-10" />
            </div>
          </FadeIn>

          {/* Content Section */}
          <FadeIn direction="left">
            <div>
              <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold tracking-wider uppercase rounded-full bg-primary-blue/10 text-primary-blue border border-primary-blue/20">
                Founder's Message
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-6">
                A Word from Our Founder
              </h2>
              
              <div className="relative">
                <Quote className="absolute -top-4 -left-2 w-8 h-8 text-primary-blue/20" />
                <p className="text-gray-600 leading-relaxed text-lg mb-6 pl-6">
                  {companyConfig.founder.message}
                </p>
              </div>

              <div className="border-l-4 border-primary-blue pl-6">
                <h3 className="text-xl font-bold text-gray-900">
                  {companyConfig.founder.name}
                </h3>
                <p className="text-primary-blue font-medium">
                  {companyConfig.founder.designation}
                </p>
                <p className="text-gray-500 text-sm mt-1">
                  {companyConfig.founder.credentials}
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
