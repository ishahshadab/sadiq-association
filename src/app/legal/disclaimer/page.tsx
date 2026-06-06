import { Metadata } from 'next';
import { companyConfig } from '@/config/company';

export const metadata: Metadata = {
  title: 'Disclaimer',
  description: 'Disclaimer for SadiQ Association & Co.',
};

export default function DisclaimerPage() {
  return (
    <>
      {/* Banner */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-primary-blue to-primary-dark text-white overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="container-custom px-4 md:px-8 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold font-display mb-6">Disclaimer</h1>
            <p className="text-white/80">Last updated: June 6, 2026</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl prose prose-lg">
          <h2>General Information</h2>
          <p>The information provided by {companyConfig.name} on our website is for general informational purposes only. All information on the site is provided in good faith, however, we make no representation or warranty of any kind.</p>

          <h2>Professional Advice</h2>
          <p>Our website may contain information related to legal, accounting, tax, and other professional services. Such information is not intended to be a substitute for professional advice. You should always consult with a qualified professional before making decisions based on information found on our website.</p>

          <h2>Limitation of Liability</h2>
          <p>In no event shall {companyConfig.name} be liable for any direct, indirect, incidental, special, or consequential damages arising out of the use of, or inability to use, this website.</p>

          <h2>External Links</h2>
          <p>Our website may contain links to external websites that are not provided or maintained by us. We do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.</p>

          <h2>Changes to This Disclaimer</h2>
          <p>We may update our Disclaimer from time to time. We will notify you of any changes by posting the new Disclaimer on this page and updating the "Last updated" date.</p>

          <h2>Contact Us</h2>
          <p>If you have any questions about this Disclaimer, please contact us at {companyConfig.contact.email}.</p>
        </div>
      </section>
    </>
  );
}
