export const companyConfig = {
  name: 'SadiQ Association & Co.',
  shortName: 'SadiQ Association & Co.',
  tagline: 'Your Trusted Partner for Taxation, Accounting & Business Compliance',
  description:
    'Helping Businesses, Startups and Individuals with Complete Financial, Taxation and Compliance Solutions.',

  founder: {
    name: 'MOHD GASHARIB',
    title: "B.COM(H), GSTP\nFounder & Proprietor",
    image: '/images/founder-placeholder.jpg',
    message:
      'At SadiQ Association & Co., our mission is to provide transparent, reliable and growth-oriented financial solutions. Since 2019, we are committed to helping individuals, startups and businesses manage taxation, compliance and financial responsibilities with confidence.',
  },

  contact: {
    phone: '+91-9540355698',
    phoneDisplay: '+91 95403 55698',
    whatsapp: '919540355698', // No +, no spaces, country code first
    email: 'sadiqassociation.co@gmail.com',
    address: 'Ground floor, F-12/33, near Nooh Masjid, Jogabai Extension, Jamia Nagar, Okhla, New Delhi, Delhi 110025',
    hours: 'Mon - Sat: 10:30 AM - 9:00 PM',
  },

  social: {
    facebook: 'https://facebook.com/sadiqassociation',
    instagram: 'https://www.instagram.com/co.sadiq/',
    linkedin: 'https://linkedin.com/company/sadiqassociation',
    twitter: 'https://twitter.com/sadiqassociation',
    youtube: 'https://youtube.com/@sadiqassociation',
  },

  map: {
  embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.0696323902544!2d77.2816403734076!3d28.567671687026916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce31e19ebfa3f%3A0xc78d6682249b74d6!2sSadiQ%20Association%20%26%20Co.!5e0!3m2!1sen!2sin!4v1780759594897!5m2!1sen!2sin',
  link: 'https://maps.google.com/?q=SadiQ+Association+and+Co',
},
  logo: '/images/logo.png',

  seo: {
    siteUrl: 'https://sadiqassociation.com',
    defaultTitle: 'SadiQ Association & Co. | Taxation, Accounting & Compliance Experts',
    defaultDescription:
      'SadiQ Association & Co. provides expert taxation, accounting, GST, compliance, and business consulting services for individuals, startups, and enterprises.',
    keywords: [
      'Taxation',
      'Accounting',
      'GST',
      'Compliance',
      'Business Consulting',
      'Income Tax Filing',
      'Company Registration',
      'Trademark',
      'Startup India',
    ],
  },
};

export type CompanyConfig = typeof companyConfig;
