import { Link } from 'react-router-dom';
import { Article } from '@/data/articles';
import { getAuthorById } from '@/data/authors';

interface ArticleCardProps {
  article: Article;
  variant?: 'large' | 'medium' | 'small' | 'featured';
  showExcerpt?: boolean;
  showAuthor?: boolean;
}

const CategoryBadge = ({ category }: { category: string }) => {
  const categoryClasses: Record<string, string> = {
    politics: 'category-politics',
    technology: 'category-technology',
    business: 'category-business',
    culture: 'category-culture',
    world: 'category-world',
    opinion: 'category-opinion',
  };

  return (
    <Link
      to={`/${category}`}
      className={`category-tag ${categoryClasses[category] || 'bg-secondary text-secondary-foreground'}`}
    >
      {category}
    </Link>
  );
};

const ArticleCard = ({
  article,
  variant = 'medium',
  showExcerpt = true,
  showAuthor = true,
}: ArticleCardProps) => {
  const author = getAuthorById(article.authorId);

  if (variant === 'featured') {
    return (
      <article className="group relative">
        <Link to={`/article/${article.id}`} className="block">
          <div className="image-zoom aspect-[16/9] lg:aspect-[21/9] rounded-lg overflow-hidden">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="mt-6 lg:mt-8 max-w-3xl">
            <CategoryBadge category={article.category} />
            <h2 className="mt-4 headline-xl text-balance group-hover:underline underline-offset-4 decoration-2">
              {article.title}
            </h2>
            {showExcerpt && (
              <p className="mt-4 body-lg text-muted-foreground line-clamp-2">
                {article.excerpt}
              </p>
            )}
            {showAuthor && author && (
              <div className="mt-6 flex items-center gap-3">
                <img
                  src={author.image}
                  alt={author.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="text-sm">
                  <span className="font-medium">{author.name}</span>
                  <span className="text-muted-foreground mx-2">·</span>
                  <span className="text-muted-foreground">
                    {new Date(article.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </span>
                  <span className="text-muted-foreground mx-2">·</span>
                  <span className="text-muted-foreground">{article.readTime} min read</span>
                </div>
              </div>
            )}
          </div>
        </Link>
      </article>
    );
  }

  if (variant === 'large') {
    return (
      <article className="group card-hover">
        <Link to={`/article/${article.id}`} className="block">
          <div className="image-zoom aspect-[16/9] rounded-lg overflow-hidden">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="mt-4">
            <CategoryBadge category={article.category} />
            <h3 className="mt-3 headline-md line-clamp-2 group-hover:underline underline-offset-4 decoration-1">
              {article.title}
            </h3>
            {showExcerpt && (
              <p className="mt-2 body-md text-muted-foreground line-clamp-2">
                {article.excerpt}
              </p>
            )}
            {showAuthor && author && (
              <div className="mt-4 flex items-center gap-3">
                <img
                  src={author.image}
                  alt={author.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div className="text-sm">
                  <span className="font-medium">{author.name}</span>
                  <span className="text-muted-foreground mx-2">·</span>
                  <span className="text-muted-foreground">{article.readTime} min</span>
                </div>
              </div>
            )}
          </div>
        </Link>
      </article>
    );
  }

  if (variant === 'small') {
    return (
      <article className="group flex gap-4">
        <Link to={`/article/${article.id}`} className="flex-shrink-0">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded overflow-hidden image-zoom">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </Link>
        <div className="flex-1 min-w-0">
          <Link to={`/article/${article.id}`}>
            <h4 className="font-display font-semibold text-base sm:text-lg leading-snug line-clamp-2 group-hover:underline underline-offset-2">
              {article.title}
            </h4>
          </Link>
          <p className="mt-1 text-sm text-muted-foreground">
            {new Date(article.date).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
            })}
            <span className="mx-2">·</span>
            {article.readTime} min
          </p>
        </div>
      </article>
    );
  }

  // Default medium variant
  return (
    <article className="group card-hover">
      <Link to={`/article/${article.id}`} className="block">
        <div className="image-zoom aspect-[4/3] rounded-lg overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="mt-4">
          <CategoryBadge category={article.category} />
          <h3 className="mt-3 font-display font-semibold text-lg sm:text-xl leading-snug line-clamp-2 group-hover:underline underline-offset-4 decoration-1">
            {article.title}
          </h3>
          {showExcerpt && (
            <p className="mt-2 text-muted-foreground text-sm line-clamp-2">
              {article.excerpt}
            </p>
          )}
          <div className="mt-3 text-sm text-muted-foreground">
            {new Date(article.date).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            })}
            <span className="mx-2">·</span>
            {article.readTime} min read
          </div>
        </div>
      </Link>
    </article>
  );
};

export default ArticleCard;
