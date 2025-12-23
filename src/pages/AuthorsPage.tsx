import Layout from '@/components/layout/Layout';
import { authors } from '@/data/authors';
import { Link } from 'react-router-dom';

const AuthorsPage = () => (
  <Layout>
    <section className="container-editorial section-padding">
      <h1 className="headline-xl mb-4">Our Writers</h1>
      <p className="body-lg text-muted-foreground mb-12 max-w-2xl">Meet the journalists and experts behind Winlandia's award-winning coverage.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {authors.map((author) => (
          <Link key={author.id} to={`/author/${author.id}`} className="group bg-card border border-border rounded-lg p-6 card-hover">
            <img src={author.image} alt={author.name} className="w-24 h-24 rounded-full object-cover mx-auto" />
            <div className="text-center mt-4">
              <h3 className="font-display font-semibold text-lg group-hover:underline">{author.name}</h3>
              <p className="text-sm text-muted-foreground">{author.role}</p>
              <p className="text-sm text-muted-foreground mt-2">{author.articlesCount} articles</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  </Layout>
);

export default AuthorsPage;
