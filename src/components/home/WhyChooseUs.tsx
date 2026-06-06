'use client';

import FadeIn from '../animations/FadeIn';
import { Shield, Clock, Users, Award, TrendingUp, CheckCircle2 } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: '7+ Years Experience',
    description: 'Trusted financial expertise since 2019 with proven track record.',
  },
  {
    icon: Users,
    title: '400+ Happy Clients',
    description: 'Serving businesses and individuals across India with dedication.',
  },
  {
    icon: Shield,
    title: '100% Compliance',
    description: 'Guaranteed compliance with all tax laws and regulations.',
  },
  {
    icon: Clock,
    title: 'Timely Delivery',
    description: 'Never miss a deadline. Your returns filed on time, every time.',
  },
  {
    icon: TrendingUp,
    title: 'Tax Savings',
    description: 'Smart tax planning strategies to maximize your savings legally.',
  },
  {
    icon: CheckCircle2,
    title: 'Expert CA Team',
    description: 'Qualified Chartered Accountants handling your finances.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold tracking-wider uppercase rounded-full bg-primary-green/10 text-primary-green border border-primary-green/20">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-gray-900 mb-4">
              Why Businesses Trust Us
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We combine expertise, technology, and dedication to deliver exceptional financial services.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="group p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-xl hover:border-primary-blue/20 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary-blue/10 mb-6 group-hover:bg-primary-blue group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="w-7 h-7 text-primary-blue group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
