import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import ArticleCard from '@/components/articles/ArticleCard';
import { articles } from '@/data/articles';
import { Search } from 'lucide-react';

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const [query, setQuery] = useState(initialQuery);

  const results = query ? articles.filter(a => 
    a.title.toLowerCase().includes(query.toLowerCase()) || 
    a.excerpt.toLowerCase().includes(query.toLowerCase())
  ) : [];

  return (
    <Layout>
      <section className="container-editorial section-padding">
        <form className="max-w-2xl mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Search articles..."
              className="input-field pl-12 text-lg"
              autoFocus
            />
          </div>
        </form>

        <div className="mt-12">
          {query && <p className="text-muted-foreground mb-8">Found {results.length} results for "{query}"</p>}
          {results.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {results.map(article => <ArticleCard key={article.id} article={article} variant="medium" />)}
            </div>
          ) : query ? (
            <p className="text-center text-muted-foreground">No articles found. Try a different search term.</p>
          ) : null}
        </div>
      </section>
    </Layout>
  );
};

export default SearchPage;
