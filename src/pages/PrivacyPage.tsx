import Layout from '@/components/layout/Layout';

const PrivacyPage = () => (
  <Layout>
    <section className="container-editorial section-padding">
      <div className="max-w-3xl">
        <h1 className="headline-xl">Privacy Policy</h1>
        <p className="text-muted-foreground mt-2">Last updated: December 23, 2024</p>
        <div className="mt-10 prose prose-lg max-w-none space-y-8">
          <section><h2 className="headline-sm">Information We Collect</h2><p className="body-md text-muted-foreground">We collect information you provide directly, such as when you subscribe to our newsletter or contact us. We also collect usage data through cookies and analytics.</p></section>
          <section><h2 className="headline-sm">How We Use Your Information</h2><p className="body-md text-muted-foreground">We use your information to deliver our services, improve user experience, send newsletters, and communicate important updates.</p></section>
          <section><h2 className="headline-sm">Data Security</h2><p className="body-md text-muted-foreground">We implement industry-standard security measures to protect your personal information from unauthorized access or disclosure.</p></section>
          <section><h2 className="headline-sm">Contact Us</h2><p className="body-md text-muted-foreground">For privacy-related inquiries, contact privacy@winlandia.io.</p></section>
        </div>
      </div>
    </section>
  </Layout>
);

export default PrivacyPage;
