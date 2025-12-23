import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import Breadcrumb from '@/components/Breadcrumb';
import ArticleCard from '@/components/articles/ArticleCard';
import { getArticleById, getRelatedArticles } from '@/data/articles';
import { getAuthorById } from '@/data/authors';
import { Twitter, Facebook, Linkedin, Mail, Clock, Calendar } from 'lucide-react';

const ArticlePage = () => {
  const { id } = useParams();
  const article = getArticleById(id || '');
  const author = article ? getAuthorById(article.authorId) : null;
  const relatedArticles = article ? getRelatedArticles(article.id, 4) : [];

  if (!article) {
    return (
      <Layout>
        <div className="container-editorial section-padding text-center">
          <h1 className="headline-lg">Article not found</h1>
          <Link to="/" className="btn-primary mt-6 inline-block">Back to Home</Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <article className="container-editorial section-padding">
        <div className="max-w-3xl mx-auto">
          <Breadcrumb items={[
            { label: article.category, href: `/${article.category}` },
            { label: article.title.slice(0, 50) + '...' }
          ]} />

          <header className="mt-8">
            <Link to={`/${article.category}`} className={`category-tag category-${article.category}`}>
              {article.category}
            </Link>
            <h1 className="headline-xl mt-4">{article.title}</h1>
            <p className="body-lg text-muted-foreground mt-4">{article.excerpt}</p>

            {author && (
              <div className="flex items-center gap-4 mt-8 pb-8 border-b border-border">
                <Link to={`/author/${author.id}`}>
                  <img src={author.image} alt={author.name} className="w-12 h-12 rounded-full object-cover" />
                </Link>
                <div>
                  <Link to={`/author/${author.id}`} className="font-medium hover:underline">{author.name}</Link>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                    <span className="flex items-center gap-1"><Calendar className="h-4 w-4" />{new Date(article.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                    <span className="flex items-center gap-1"><Clock className="h-4 w-4" />{article.readTime} min read</span>
                  </div>
                </div>
              </div>
            )}
          </header>

          <figure className="mt-8">
            <img src={article.image} alt={article.title} className="w-full rounded-lg" />
          </figure>

          <div className="prose prose-lg max-w-none mt-10">
            {article.content.split('\n\n').map((paragraph, idx) => (
              <p key={idx} className="body-lg mb-6 text-charcoal">{paragraph.trim()}</p>
            ))}
          </div>

          {/* Share buttons */}
          <div className="flex items-center gap-4 mt-10 pt-8 border-t border-border">
            <span className="text-sm font-medium">Share:</span>
            <button className="p-2 hover:bg-secondary rounded-full transition-colors"><Twitter className="h-5 w-5" /></button>
            <button className="p-2 hover:bg-secondary rounded-full transition-colors"><Facebook className="h-5 w-5" /></button>
            <button className="p-2 hover:bg-secondary rounded-full transition-colors"><Linkedin className="h-5 w-5" /></button>
            <button className="p-2 hover:bg-secondary rounded-full transition-colors"><Mail className="h-5 w-5" /></button>
          </div>
        </div>
      </article>

      {relatedArticles.length > 0 && (
        <section className="bg-secondary py-16">
          <div className="container-editorial">
            <h2 className="headline-md mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedArticles.map((a) => (
                <ArticleCard key={a.id} article={a} variant="medium" showAuthor={false} />
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default ArticlePage;
