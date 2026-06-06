'use client';

import { motion } from 'framer-motion';
import { Target, Eye, Heart, Award, Users, Clock } from 'lucide-react';
import Image from 'next/image';
import PageTransition from '@/components/layout/PageTransition';
import FadeIn from '@/components/animations/FadeIn';
import SectionHeading from '@/components/common/SectionHeading';
import { companyConfig } from '@/config/company';

const values = [
  { icon: Heart, title: 'Integrity', desc: 'We uphold the highest ethical standards in all our dealings.' },
  { icon: Users, title: 'Client First', desc: 'Your success is our priority. We listen, understand, and deliver.' },
  { icon: Award, title: 'Excellence', desc: 'We strive for excellence in every service we provide.' },
  { icon: Clock, title: 'Timeliness', desc: 'Deadlines are sacred. We never compromise on time.' },
];

const timeline = [
  { year: '2010', title: 'Foundation', desc: 'Company established with a vision to simplify financial services.' },
  { year: '2014', title: 'Growth Phase', desc: 'Expanded services to include GST, compliance, and IP registration.' },
  { year: '2018', title: 'Digital Transformation', desc: 'Launched online portal for seamless client experience.' },
  { year: '2022', title: '400+ Clients', desc: 'Crossed the milestone of serving over 400+ happy clients.' },
  { year: '2026', title: 'Present Day', desc: 'Leading financial consultancy with pan-India presence.' },
];

export default function AboutPage() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-primary-blue to-primary-dark text-white overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="container-custom px-4 md:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold tracking-wider uppercase rounded-full bg-white/10 border border-white/20">
              About Us
            </span>
            <h1 className="text-4xl md:text-6xl font-bold font-display mb-6">
              About {companyConfig.shortName}
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Building trust through transparent, reliable, and growth-oriented financial solutions since 2010.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn direction="left">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800"
                  alt="Our team"
                  width={800}
                  height={600}
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <SectionHeading
                tag="Who We Are"
                title="Your Trusted Financial Partner"
                align="left"
              />
              <p className="text-gray-600 mb-4 leading-relaxed">
                {companyConfig.name} is a premier financial consultancy firm founded by{' '}
                <strong>{companyConfig.founder.name}</strong> with a mission to provide comprehensive
                financial, taxation, and compliance solutions to individuals, startups, and businesses.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With over 15 years of experience and a team of qualified Chartered Accountants,
                Company Secretaries, and tax professionals, we have successfully served 1000+ clients
                across India, helping them navigate complex financial landscapes with confidence.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Mission Vision */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-6">
            <FadeIn>
              <div className="p-8 rounded-2xl bg-white shadow-lg border border-gray-100 hover-lift">
                <div className="w-14 h-14 rounded-xl bg-primary-blue/10 flex items-center justify-center mb-5">
                  <Target className="w-7 h-7 text-primary-blue" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To provide transparent, reliable, and growth-oriented financial solutions that empower
                  individuals, startups, and businesses to manage taxation, compliance, and financial
                  responsibilities with confidence and ease.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="p-8 rounded-2xl bg-white shadow-lg border border-gray-100 hover-lift">
                <div className="w-14 h-14 rounded-xl bg-primary-green/10 flex items-center justify-center mb-5">
                  <Eye className="w-7 h-7 text-primary-green" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To become India's most trusted financial consultancy, recognized for excellence,
                  integrity, and client-centric approach, setting new benchmarks in the industry.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            tag="Core Values"
            title="What Drives Us"
            subtitle="The principles that guide every decision we make."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-primary-blue/30 hover:shadow-2xl transition-all text-center hover-lift">
                  <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <v.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{v.title}</h3>
                  <p className="text-gray-600 text-sm">{v.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            tag="Our Journey"
            title="Business Timeline"
            subtitle="Key milestones in our growth story."
          />
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-primary hidden md:block" />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className={`relative md:flex items-center ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className="md:w-1/2 md:px-8">
                      <div className="p-6 rounded-2xl bg-white shadow-lg border border-gray-100 hover-lift">
                        <div className="inline-block px-3 py-1 mb-3 text-sm font-bold text-primary-blue bg-primary-blue/10 rounded-full">
                          {item.year}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-primary items-center justify-center text-white font-bold shadow-lg">
                      {i + 1}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            tag="Leadership"
            title="Meet Our Founder"
            subtitle="The vision behind our success."
          />
          <div className="grid lg:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
            <FadeIn direction="left">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={companyConfig.founder.image}
                  alt={companyConfig.founder.name}
                  width={600}
                  height={700}
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <h3 className="text-3xl font-bold text-gray-900 mb-2">{companyConfig.founder.name}</h3>
              <p className="text-primary-blue font-semibold mb-6">{companyConfig.founder.title}</p>
              <blockquote className="text-lg text-gray-600 leading-relaxed italic border-l-4 border-primary-green pl-6 mb-6">
                "{companyConfig.founder.message}"
              </blockquote>
            </FadeIn>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
