//import PageTransition from '@/components/layout/PageTransition';
import { companyConfig } from '@/config/company';

export const metadata = { title: 'Privacy Policy' };

export default function PrivacyPolicyPage() {
  return (
    //<PageTransition>
      <section className="py-20 md:py-28 bg-gradient-to-br from-primary-blue to-primary-dark text-white">
        <div className="container-custom px-4 md:px-8">
          <h1 className="text-4xl md:text-5xl font-bold font-display mb-4">Privacy Policy</h1>
          <p className="text-white/80">Last updated: June 6, 2026</p>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl prose prose-lg">
          <h2>1. Information We Collect</h2>
          <p>At {companyConfig.name}, we collect personal information that you voluntarily provide to us when you register, express interest in obtaining information about us or our products and services, participate in activities, or otherwise contact us.</p>

          <h2>2. How We Use Your Information</h2>
          <p>We use personal information collected via our website for various business purposes including: providing services, sending administrative information, fulfilling orders, sending marketing communications, and protecting our services.</p>

          <h2>3. Information Sharing</h2>
          <p>We do not sell, trade, or rent your personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information with our business partners and trusted affiliates.</p>

          <h2>4. Data Security</h2>
          <p>We adopt appropriate data collection, storage, and processing practices and security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information.</p>

          <h2>5. Your Rights</h2>
          <p>You have the right to access, update, or delete your personal information at any time. You can do this by contacting us using the details provided on our contact page.</p>

          <h2>6. Cookies</h2>
          <p>We may use cookies to enhance your experience, gather general visitor information, and track visits to our website.</p>

          <h2>7. Changes to This Policy</h2>
          <p>{companyConfig.name} has the discretion to update this privacy policy at any time. We encourage users to frequently check this page for any changes.</p>

          <h2>8. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at {companyConfig.contact.email}.</p>
        </div>
      </section>
   // </PageTransition>
  );
}
