import Layout from '@/components/layout/Layout';
import ArticleCard from '@/components/articles/ArticleCard';
import { articles } from '@/data/articles';

const ArchivePage = () => (
  <Layout>
    <section className="container-editorial section-padding">
      <h1 className="headline-xl mb-4">Archive</h1>
      <p className="body-lg text-muted-foreground mb-12">Browse all our published articles.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map(article => <ArticleCard key={article.id} article={article} variant="medium" />)}
      </div>
    </section>
  </Layout>
);

export default ArchivePage;
