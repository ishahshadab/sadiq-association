import PageTransition from '@/components/layout/PageTransition';
import { companyConfig } from '@/config/company';

export const metadata = { title: 'Terms & Conditions' };

export default function TermsPage() {
  return (
    <PageTransition>
      <section className="py-20 md:py-28 bg-gradient-to-br from-primary-blue to-primary-dark text-white">
        <div className="container-custom px-4 md:px-8">
          <h1 className="text-4xl md:text-5xl font-bold font-display mb-4">Terms & Conditions</h1>
          <p className="text-white/80">Last updated: June 6, 2026</p>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl prose prose-lg">
          <h2>1. Agreement to Terms</h2>
          <p>By accessing our website, you agree to be bound by these Terms and Conditions. If you disagree with any part of the terms, you may not access the website.</p>

          <h2>2. Services</h2>
          <p>{companyConfig.name} provides financial, taxation, accounting, and compliance consulting services. All services are subject to separate engagement letters and fee agreements.</p>

          <h2>3. Intellectual Property</h2>
          <p>The content on this website, including text, graphics, logos, and software, is the property of {companyConfig.name} and is protected by intellectual property laws.</p>

          <h2>4. User Obligations</h2>
          <p>Users agree to provide accurate information, use the services only for lawful purposes, and not engage in any activity that disrupts or interferes with the website.</p>

          <h2>5. Limitation of Liability</h2>
          <p>In no event shall {companyConfig.name} be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services.</p>

          <h2>6. Governing Law</h2>
          <p>These terms shall be governed by and construed in accordance with the laws of India.</p>

          <h2>7. Changes to Terms</h2>
          <p>We reserve the right to modify these terms at any time. Continued use of the website constitutes acceptance of modified terms.</p>

          <h2>8. Contact</h2>
          <p>For questions about these Terms, contact us at {companyConfig.contact.email}.</p>
        </div>
      </section>
    </PageTransition>
  );
}