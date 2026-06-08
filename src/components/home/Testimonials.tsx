'use client';

import { Star, Quote } from 'lucide-react';
import FadeIn from '../animations/FadeIn';
import SectionHeading from '../common/SectionHeading';

const testimonials = [
  {
    name: 'Shadab Shah',
    role: 'Director, GZR international private ltd',
    text: 'SadiQ Association handled our complete company incorporation and GST registration seamlessly. Their expertise saved us time and money.',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    role: 'Freelance Consultant',
    text: 'The tax planning advice I received helped me save significantly. Their team is professional, responsive, and truly knowledgeable.',
    rating: 4.5,
  },
  {
    name: 'Hammad Rizvi',
    role: 'Director, Metro Retail Solutions',
    text: 'We have been using their accounting and compliance services for 5 years. Absolutely reliable and thorough in their work.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading
          tag="Testimonials"
          title="What Our Clients Say"
          subtitle="Trusted by thousands of businesses and individuals across India."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:shadow-2xl transition-all hover-lift relative">
                <Quote className="absolute top-6 right-6 w-10 h-10 text-primary-blue/10" />
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-primary-green text-primary-green" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed italic">"{t.text}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{t.name}</div>
                    <div className="text-sm text-gray-500">{t.role}</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
