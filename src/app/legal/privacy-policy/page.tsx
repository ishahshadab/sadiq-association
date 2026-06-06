import { Metadata } from 'next';
import { companyConfig } from '@/config/company';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for SadiQ Association & Co.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Banner */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-primary-blue to-primary-dark text-white overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="container-custom px-4 md:px-8 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold font-display mb-6">Privacy Policy</h1>
            <p className="text-white/80">Last updated: June 6, 2026</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl prose prose-lg">
          <h2>1. Information We Collect</h2>
          <p>At {companyConfig.name}, we collect personal information that you voluntarily provide to us when you register, express interest in obtaining information about us or our products and services, participate in activities, or otherwise contact us.</p>

          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to comply with legal obligations.</p>

          <h2>3. Information Sharing</h2>
          <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.</p>

          <h2>4. Data Security</h2>
          <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>

          <h2>5. Your Rights</h2>
          <p>You have the right to access, update, or delete your personal information. To exercise these rights, please contact us at {companyConfig.contact.email}.</p>

          <h2>6. Changes to This Policy</h2>
          <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>

          <h2>7. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at {companyConfig.contact.email} or {companyConfig.contact.phone}.</p>
        </div>
      </section>
    </>
  );
}
