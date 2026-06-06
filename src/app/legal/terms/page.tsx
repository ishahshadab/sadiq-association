import { Metadata } from 'next';
import { companyConfig } from '@/config/company';

export const metadata: Metadata = {
  title: 'Terms and Conditions',
  description: 'Terms and Conditions for SadiQ Association & Co.',
};

export default function TermsPage() {
  return (
    <>
      {/* Banner */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-primary-blue to-primary-dark text-white overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="container-custom px-4 md:px-8 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold font-display mb-6">Terms and Conditions</h1>
            <p className="text-white/80">Last updated: June 6, 2026</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl prose prose-lg">
          <h2>1. Agreement to Terms</h2>
          <p>By accessing our website, you agree to be bound by these Terms and Conditions. If you disagree with any part of the terms, you may not access the website.</p>

          <h2>2. Use License</h2>
          <p>Permission is granted to temporarily access the materials on {companyConfig.name}'s website for personal, non-commercial viewing only.</p>

          <h2>3. Disclaimer</h2>
          <p>The materials on our website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property.</p>

          <h2>4. Limitations</h2>
          <p>In no event shall {companyConfig.name} or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website.</p>

          <h2>5. Accuracy of Materials</h2>
          <p>The materials appearing on our website could include technical, typographical, or photographic errors. We do not warrant that any of the materials on our website are accurate, complete, or current.</p>

          <h2>6. Governing Law</h2>
          <p>These terms and conditions are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.</p>

          <h2>7. Contact Information</h2>
          <p>For any questions regarding these Terms and Conditions, please contact us at {companyConfig.contact.email} or {companyConfig.contact.phone}.</p>
        </div>
      </section>
    </>
  );
}
