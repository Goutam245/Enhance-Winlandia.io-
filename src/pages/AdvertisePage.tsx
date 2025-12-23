import Layout from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import { BarChart3, Users, Eye } from 'lucide-react';

const AdvertisePage = () => (
  <Layout>
    <section className="container-editorial section-padding">
      <div className="max-w-2xl">
        <h1 className="headline-xl">Advertise With Us</h1>
        <p className="body-lg text-muted-foreground mt-4">Reach millions of engaged readers. Partner with Winlandia to tell your brand's story.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {[
          { icon: Users, stat: '5M+', label: 'Monthly Readers' },
          { icon: Eye, stat: '20M+', label: 'Page Views' },
          { icon: BarChart3, stat: '85%', label: 'Reader Trust Score' },
        ].map((item, i) => (
          <div key={i} className="bg-secondary rounded-lg p-8 text-center">
            <item.icon className="h-10 w-10 mx-auto text-accent" />
            <p className="text-4xl font-display font-bold mt-4">{item.stat}</p>
            <p className="text-muted-foreground">{item.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h2 className="headline-md mb-4">Ready to Get Started?</h2>
        <p className="text-muted-foreground mb-6">Contact our advertising team to discuss partnership opportunities.</p>
        <Link to="/contact" className="btn-primary">Contact Us</Link>
      </div>
    </section>
  </Layout>
);

export default AdvertisePage;
