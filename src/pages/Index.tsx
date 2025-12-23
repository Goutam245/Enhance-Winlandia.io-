import Layout from '@/components/layout/Layout';
import ArticleCard from '@/components/articles/ArticleCard';
import NewsletterForm from '@/components/NewsletterForm';
import { articles, getFeaturedArticles, getLatestArticles, getArticlesByCategory } from '@/data/articles';
import { Link } from 'react-router-dom';
import { TrendingUp } from 'lucide-react';

const Index = () => {
  const featuredArticles = getFeaturedArticles();
  const latestArticles = getLatestArticles(8);
  const politicsArticles = getArticlesByCategory('politics').slice(0, 3);
  const techArticles = getArticlesByCategory('technology').slice(0, 3);
  const businessArticles = getArticlesByCategory('business').slice(0, 3);
  const cultureArticles = getArticlesByCategory('culture').slice(0, 3);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="container-editorial section-padding">
        {featuredArticles[0] && (
          <ArticleCard article={featuredArticles[0]} variant="featured" />
        )}
      </section>

      {/* Featured Grid */}
      <section className="container-editorial pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {featuredArticles.slice(1, 4).map((article) => (
            <ArticleCard key={article.id} article={article} variant="large" />
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* Main Content */}
      <section className="container-editorial section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Articles */}
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="headline-sm uppercase tracking-wider mb-6 pb-3 border-b border-border">
                Latest News
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {latestArticles.map((article) => (
                  <ArticleCard key={article.id} article={article} variant="medium" showAuthor={false} />
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            {/* Trending */}
            <div>
              <h3 className="flex items-center gap-2 headline-sm uppercase tracking-wider mb-6 pb-3 border-b border-border">
                <TrendingUp className="h-5 w-5 text-accent" />
                Trending Now
              </h3>
              <div className="space-y-6">
                {articles.slice(0, 5).map((article, idx) => (
                  <div key={article.id} className="flex gap-4 group">
                    <span className="text-3xl font-display font-bold text-muted-foreground/50">{idx + 1}</span>
                    <Link to={`/article/${article.id}`} className="flex-1">
                      <h4 className="font-display font-semibold leading-snug group-hover:underline">{article.title}</h4>
                      <p className="text-sm text-muted-foreground mt-1">{article.readTime} min read</p>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            <NewsletterForm />
          </aside>
        </div>
      </section>

      {/* Category Sections */}
      {[
        { title: 'Politics', articles: politicsArticles, slug: 'politics' },
        { title: 'Technology', articles: techArticles, slug: 'technology' },
        { title: 'Business', articles: businessArticles, slug: 'business' },
        { title: 'Culture', articles: cultureArticles, slug: 'culture' },
      ].map((section) => (
        <section key={section.slug} className="container-editorial pb-16">
          <div className="flex items-center justify-between mb-6 pb-3 border-b border-border">
            <h2 className="headline-sm uppercase tracking-wider">{section.title}</h2>
            <Link to={`/${section.slug}`} className="btn-text text-sm">
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {section.articles.map((article) => (
              <ArticleCard key={article.id} article={article} variant="medium" showAuthor={false} />
            ))}
          </div>
        </section>
      ))}

      {/* Newsletter CTA */}
      <section className="container-editorial pb-16">
        <NewsletterForm variant="hero" />
      </section>
    </Layout>
  );
};

export default Index;
