import Layout from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import { Target, Award, Users, Newspaper } from 'lucide-react';
import { authors } from '@/data/authors';

const AboutPage = () => (
  <Layout>
    <section className="container-editorial section-padding">
      <div className="max-w-3xl">
        <h1 className="headline-xl">About Winlandia</h1>
        <p className="body-lg text-muted-foreground mt-6">Winlandia is an independent digital publication dedicated to delivering high-quality journalism that informs, challenges, and inspires. Since our founding, we've been committed to rigorous reporting, thoughtful analysis, and storytelling that matters.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
        {[
          { icon: Newspaper, title: 'Quality Journalism', desc: 'We prioritize accuracy, depth, and fairness in every story we publish.' },
          { icon: Target, title: 'Our Mission', desc: 'To empower readers with the information they need to understand our complex world.' },
          { icon: Users, title: 'Community First', desc: 'We serve our readers and are accountable to them above all else.' },
          { icon: Award, title: 'Award-Winning', desc: 'Recognized for excellence in investigative and explanatory journalism.' },
        ].map((item, i) => (
          <div key={i} className="bg-secondary rounded-lg p-6">
            <item.icon className="h-10 w-10 text-accent mb-4" />
            <h3 className="font-display font-semibold text-lg">{item.title}</h3>
            <p className="text-sm text-muted-foreground mt-2">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <h2 className="headline-md mb-8">Meet Our Team</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {authors.slice(0, 8).map(author => (
            <Link key={author.id} to={`/author/${author.id}`} className="group text-center">
              <img src={author.image} alt={author.name} className="w-20 h-20 rounded-full object-cover mx-auto" />
              <p className="font-medium mt-3 group-hover:underline">{author.name}</p>
              <p className="text-sm text-muted-foreground">{author.role}</p>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link to="/authors" className="btn-secondary">View All Team Members</Link>
        </div>
      </div>

      <div className="mt-16 text-center">
        <h2 className="headline-md mb-4">Join Our Team</h2>
        <p className="text-muted-foreground mb-6">We're always looking for talented journalists and creators.</p>
        <Link to="/careers" className="btn-primary">View Open Positions</Link>
      </div>
    </section>
  </Layout>
);

export default AboutPage;
