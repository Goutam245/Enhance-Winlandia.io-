import Layout from '@/components/layout/Layout';
import NewsletterForm from '@/components/NewsletterForm';

const NewsletterPage = () => (
  <Layout>
    <section className="container-editorial section-padding">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="headline-xl">Stay Informed</h1>
        <p className="body-lg text-muted-foreground mt-4">Get the most important stories delivered to your inbox. Choose your frequency and topics.</p>
      </div>
      <div className="max-w-xl mx-auto mt-12">
        <NewsletterForm variant="hero" />
      </div>
    </section>
  </Layout>
);

export default NewsletterPage;
