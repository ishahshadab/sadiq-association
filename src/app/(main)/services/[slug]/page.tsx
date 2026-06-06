import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { MessageCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { services } from '@/data/services';
import { companyConfig } from '@/config/company';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return {};
  return {
    title: service.name,
    description: service.shortDescription,
    openGraph: {
      title: `${service.name} | ${companyConfig.name}`,
      description: service.shortDescription,
    },
  };
}

export default function ServiceDetailPage({ params }: Props) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) notFound();

  const Icon = service.icon || MessageCircle;

  const whatsappMessage = encodeURIComponent(
    `Hello ${companyConfig.name},\n\nI would like to book an appointment for ${service.name}.\n\nPlease share available timings and details.`
  );
  const whatsappUrl = `https://wa.me/${companyConfig.contact.whatsapp}?text=${whatsappMessage}`;

  return (
    <>
      {/* Banner */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-primary-blue to-primary-dark text-white overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="container-custom px-4 md:px-8 relative">
          <div className="max-w-3xl">
            <Link href="/services" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 text-sm">
              <ArrowRight className="w-4 h-4 rotate-180" />
              Back to Services
            </Link>
            <div className="inline-flex items-center gap-3 px-4 py-2 mb-4 rounded-full bg-white/10 border border-white/20">
              <Icon className="w-5 h-5" />
              <span className="text-sm font-semibold">{service.category}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-display mb-6">
              {service.name}
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              {service.shortDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-10">
              {/* Description */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">About This Service</h2>
                <p className="text-gray-600 leading-relaxed text-lg">{service.description}</p>
              </div>

              {/* Benefits */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Benefits</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.benefits.map((b, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100">
                      <CheckCircle2 className="w-5 h-5 text-primary-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Process</h2>
                <div className="space-y-4">
                  {service.process.map((step, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-primary-blue/5 to-transparent border-l-4 border-primary-blue">
                      <div className="w-10 h-10 rounded-full bg-primary-blue text-white flex items-center justify-center font-bold flex-shrink-0">
                        {i + 1}
                      </div>
                      <span className="font-medium text-gray-900">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              <div className="sticky top-28 p-6 rounded-2xl bg-gradient-to-br from-primary-blue to-primary-dark text-white shadow-2xl">
                <h3 className="text-xl font-bold mb-3">Book Appointment</h3>
                <p className="text-white/80 mb-6 text-sm">
                  Get expert consultation for {service.name} directly on WhatsApp.
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-primary-green text-white font-semibold rounded-xl hover:bg-green-600 transition-all shadow-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  Book on WhatsApp
                </a>
                <div className="mt-6 pt-6 border-t border-white/20 space-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary-green" />
                    <span>Free Initial Consultation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary-green" />
                    <span>Expert Guidance</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary-green" />
                    <span>Quick Response</span>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-white/90 mb-8">Book your appointment for {service.name} today.</p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-blue font-semibold rounded-xl hover:bg-gray-100 transition-all shadow-xl"
          >
            <MessageCircle className="w-5 h-5" />
            Book Appointment Now
          </a>
        </div>
      </section>
    </>
  );
}
