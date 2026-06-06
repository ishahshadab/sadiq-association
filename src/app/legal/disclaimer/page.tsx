import PageTransition from '@/components/layout/PageTransition';
import { companyConfig } from '@/config/company';

export const metadata = { title: 'Disclaimer' };

export default function DisclaimerPage() {
  return (
    <PageTransition>
      <section className="py-20 md:py-28 bg-gradient-to-br from-primary-blue to-primary-dark text-white">
        <div className="container-custom px-4 md:px-8">
          <h1 className="text-4xl md:text-5xl font-bold font-display mb-4">Disclaimer</h1>
          <p className="text-white/80">Last updated: June 6, 2026</p>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl prose prose-lg">
          <h2>General Information</h2>
          <p>The information provided by {companyConfig.name} on our website is for general informational purposes only. All information on the site is provided in good faith, however, we make no representation or warranty of any kind.</p>

          <h2>Professional Advice</h2>
          <p>The information on this website does not constitute professional financial, tax, or legal advice. Always seek the advice of a qualified professional with any questions you may have regarding your specific situation.</p>

          <h2>External Links</h2>
          <p>Our website may contain links to external sites. We are not responsible for the content or practices of these external websites.</p>

          <h2>Accuracy of Information</h2>
          <p>While we strive to keep information up to date and correct, tax laws and regulations change frequently. We recommend verifying any information with current official sources.</p>

          <h2>Contact</h2>
          <p>If you have any questions about this disclaimer, please contact us at {companyConfig.contact.email}.</p>
        </div>
      </section>
    </PageTransition>
  );
}