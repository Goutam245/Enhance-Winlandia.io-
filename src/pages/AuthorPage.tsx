import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import ArticleCard from '@/components/articles/ArticleCard';
import { getAuthorById } from '@/data/authors';
import { articles } from '@/data/articles';
import { Twitter, Linkedin, Mail } from 'lucide-react';

const AuthorPage = () => {
  const { id } = useParams();
  const author = getAuthorById(id || '');
  const authorArticles = articles.filter(a => a.authorId === id);

  if (!author) return <Layout><div className="container-editorial section-padding text-center"><h1 className="headline-lg">Author not found</h1><Link to="/authors" className="btn-primary mt-6 inline-block">View All Authors</Link></div></Layout>;

  return (
    <Layout>
      <section className="container-editorial section-padding">
        <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
          <img src={author.image} alt={author.name} className="w-32 h-32 rounded-full object-cover" />
          <div>
            <h1 className="headline-lg">{author.name}</h1>
            <p className="text-muted-foreground">{author.role}</p>
            <p className="body-md mt-4 max-w-2xl">{author.bio}</p>
            <div className="flex gap-4 mt-4">
              {author.twitter && <a href={`https://twitter.com/${author.twitter}`} className="p-2 hover:bg-secondary rounded-full"><Twitter className="h-5 w-5" /></a>}
              {author.linkedin && <a href={`https://linkedin.com/in/${author.linkedin}`} className="p-2 hover:bg-secondary rounded-full"><Linkedin className="h-5 w-5" /></a>}
              <a href={`mailto:${author.email}`} className="p-2 hover:bg-secondary rounded-full"><Mail className="h-5 w-5" /></a>
            </div>
          </div>
        </div>
        <h2 className="headline-sm border-b border-border pb-4 mb-8">Articles by {author.name}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {authorArticles.map(article => <ArticleCard key={article.id} article={article} variant="medium" showAuthor={false} />)}
        </div>
      </section>
    </Layout>
  );
};

export default AuthorPage;
