import Layout from '@/components/layout/Layout';

const TermsPage = () => (
  <Layout>
    <section className="container-editorial section-padding">
      <div className="max-w-3xl">
        <h1 className="headline-xl">Terms of Service</h1>
        <p className="text-muted-foreground mt-2">Effective: December 23, 2024</p>
        <div className="mt-10 prose prose-lg max-w-none space-y-8">
          <section><h2 className="headline-sm">Acceptance of Terms</h2><p className="body-md text-muted-foreground">By accessing Winlandia, you agree to be bound by these terms. If you disagree, please do not use our services.</p></section>
          <section><h2 className="headline-sm">Use of Content</h2><p className="body-md text-muted-foreground">All content is protected by copyright. You may read, share, and link to our articles for personal, non-commercial purposes.</p></section>
          <section><h2 className="headline-sm">User Conduct</h2><p className="body-md text-muted-foreground">You agree not to misuse our services or help anyone else do so.</p></section>
          <section><h2 className="headline-sm">Limitation of Liability</h2><p className="body-md text-muted-foreground">Winlandia provides content "as is" without warranties. We are not liable for damages arising from use of our services.</p></section>
        </div>
      </div>
    </section>
  </Layout>
);

export default TermsPage;
