'use client';

import { MessageCircle, FileText, CheckCircle2, Rocket } from 'lucide-react';
import FadeIn from '../animations/FadeIn';
import SectionHeading from '../common/SectionHeading';

const steps = [
  { icon: MessageCircle, title: 'Consultation', desc: 'Book a free consultation via WhatsApp or call.' },
  { icon: FileText, title: 'Documentation', desc: 'Share required documents securely.' },
  { icon: CheckCircle2, title: 'Processing', desc: 'Our experts process your request efficiently.' },
  { icon: Rocket, title: 'Delivery', desc: 'Receive completed work with full support.' },
];

export default function ProcessOverview() {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-blue to-primary-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="container-custom relative">
        <SectionHeading
          tag="Our Process"
          title="How We Work"
          subtitle="A simple, transparent 4-step process to get your work done."
          light
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <FadeIn key={i} delay={i * 0.15}>
              <div className="relative text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-primary-green flex items-center justify-center font-bold text-white shadow-lg">
                  {i + 1}
                </div>
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-4 mt-4">
                  <step.icon className="w-8 h-8 text-primary-green" />
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-white/70 text-sm">{step.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}