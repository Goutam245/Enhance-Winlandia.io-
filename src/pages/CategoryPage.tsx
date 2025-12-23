import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import ArticleCard from '@/components/articles/ArticleCard';
import Pagination from '@/components/Pagination';
import NewsletterForm from '@/components/NewsletterForm';
import { getArticlesByCategory, articles } from '@/data/articles';
import { getCategoryBySlug } from '@/data/categories';

const CategoryPage = () => {
  const { category } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const categoryData = getCategoryBySlug(category || '');
  const categoryArticles = category ? getArticlesByCategory(category as any) : articles;
  
  const totalPages = Math.ceil(categoryArticles.length / itemsPerPage);
  const paginatedArticles = categoryArticles.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <Layout>
      <section className="container-editorial section-padding">
        <header className="mb-12">
          <h1 className="headline-xl capitalize">{category || 'All Articles'}</h1>
          {categoryData && <p className="body-lg text-muted-foreground mt-4">{categoryData.description}</p>}
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {paginatedArticles.map((article) => (
                <ArticleCard key={article.id} article={article} variant="medium" />
              ))}
            </div>
            {totalPages > 1 && (
              <div className="mt-12">
                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
              </div>
            )}
          </div>
          <aside>
            <NewsletterForm />
          </aside>
        </div>
      </section>
    </Layout>
  );
};

export default CategoryPage;
