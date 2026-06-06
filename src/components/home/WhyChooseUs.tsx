'use client';

import FadeIn from '../animations/FadeIn';
import AnimatedCounter from '../common/AnimatedCounter';
import { Users, Award, FileCheck, TrendingUp } from 'lucide-react';

const stats = [
  { icon: Users, value: 400, suffix: '+', label: 'Happy Clients' },
  { icon: Award, value: 7, suffix: '+', label: 'Years Experience' },
  { icon: FileCheck, value: 2500, suffix: '+', label: 'Returns Filed' },
  { icon: TrendingUp, value: 98, suffix: '%', label: 'Success Rate' },
];

export default function StatsCounter() {
  return (
    <section className="section-padding bg-gradient-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="container-custom relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-white/80 font-medium">{stat.label}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
