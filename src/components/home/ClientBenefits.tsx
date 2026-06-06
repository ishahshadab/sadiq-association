'use client';

import { CheckCircle2 } from 'lucide-react';
import FadeIn from '../animations/FadeIn';
import SectionHeading from '../common/SectionHeading';

const benefits = [
  'Save up to 40% on tax liabilities legally',
  '100% compliance with all regulations',
  'Dedicated relationship manager',
  'Transparent pricing with no hidden fees',
  'Secure document handling',
  'Timely updates and notifications',
  'Expert advice from qualified professionals',
  'Post-service support and guidance',
];

export default function ClientBenefits() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn direction="left">
            <SectionHeading
              tag="Client Benefits"
              title="Why Businesses Trust Us"
              subtitle="Experience the difference of working with true financial experts."
              align="left"
            />
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((b, i) => (
                <FadeIn key={i} delay={i * 0.05}>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary-green flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{b}</span>
                  </div>
                </FadeIn>
              ))}
            </div>
          </FadeIn>
          <FadeIn direction="right">
            <div className="relative">
              <div className="glass rounded-3xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Started Today</h3>
                <div className="space-y-4">
                  {['Free Initial Consultation', 'Customized Solution Proposal', 'Transparent Pricing', 'Quick Onboarding'].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-white border border-gray-100">
                      <div className="w-10 h-10 rounded-lg bg-primary-blue/10 flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-primary-blue">{i + 1}</span>
                      </div>
                      <span className="font-medium text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}