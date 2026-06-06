'use client';

import FadeIn from '../animations/FadeIn';
import { services } from '@/data/services';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ServicesOverview() {
  const featuredServices = services.slice(0, 3);

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold tracking-wider uppercase rounded-full bg-primary-blue/10 text-primary-blue border border-primary-blue/20">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-gray-900 mb-4">
              Comprehensive Financial Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From taxation to compliance, we offer end-to-end financial services tailored to your needs.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredServices.map((service, i) => (
            <FadeIn key={service.slug} delay={i * 0.1}>
              <Link
                href={`/services/${service.slug}`}
                className="group block p-8 rounded-2xl bg-white border border-gray-100 hover:shadow-xl hover:border-primary-blue/20 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary-blue/10 mb-6 group-hover:bg-primary-blue group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-7 h-7 text-primary-blue group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-blue transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {service.shortDescription}
                </p>
                <div className="flex items-center gap-2 text-primary-blue font-semibold group-hover:gap-3 transition-all">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary-blue text-white font-semibold rounded-xl hover:bg-primary-dark transition-all shadow-xl hover:shadow-2xl"
            >
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
