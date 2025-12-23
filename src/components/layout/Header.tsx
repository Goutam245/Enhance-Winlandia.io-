import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X, Mail } from 'lucide-react';
import { categories } from '@/data/categories';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsSearchOpen(false);
  }, [location]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 bg-background transition-all duration-300 ${
          isScrolled ? 'shadow-header' : 'border-b border-border'
        }`}
      >
        <div className="container-editorial">
          {/* Top bar */}
          <div className="hidden lg:flex items-center justify-between py-2 border-b border-border text-sm">
            <div className="flex items-center gap-4 text-muted-foreground">
              <span>{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
            <div className="flex items-center gap-4">
              <Link to="/newsletter" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="h-4 w-4" />
                <span>Subscribe</span>
              </Link>
            </div>
          </div>

          {/* Main header */}
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 -ml-2"
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6" />
            </button>

            {/* Logo */}
            <Link to="/" className="flex items-center">
              <h1 className="text-2xl lg:text-3xl font-display font-bold tracking-tight">
                WINLANDIA
              </h1>
            </Link>

            {/* Desktop navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {categories.map((category) => (
                <Link
                  key={category.slug}
                  to={`/${category.slug}`}
                  className={`text-sm font-medium uppercase tracking-wide transition-colors link-hover ${
                    location.pathname === `/${category.slug}`
                      ? 'text-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {category.name}
                </Link>
              ))}
            </nav>

            {/* Right side actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 rounded-full hover:bg-secondary transition-colors"
                aria-label="Search"
              >
                <Search className="h-5 w-5" />
              </button>
              <Link
                to="/newsletter"
                className="hidden sm:inline-flex btn-primary text-sm py-2 px-4"
              >
                Subscribe
              </Link>
            </div>
          </div>
        </div>

        {/* Search overlay */}
        {isSearchOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg animate-fade-in">
            <div className="container-editorial py-6">
              <form onSubmit={handleSearch} className="flex items-center gap-4">
                <Search className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search articles, topics, authors..."
                  className="flex-1 bg-transparent text-lg focus:outline-none"
                  autoFocus
                />
                <button
                  type="button"
                  onClick={() => setIsSearchOpen(false)}
                  className="p-2 hover:bg-secondary rounded-full transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </form>
            </div>
          </div>
        )}
      </header>

      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsMenuOpen(false)}
          />
          <nav className="absolute top-0 left-0 bottom-0 w-80 bg-background shadow-xl animate-slide-in-left">
            <div className="flex items-center justify-between p-4 border-b border-border">
              <span className="text-xl font-display font-bold">Menu</span>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 hover:bg-secondary rounded-full transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="p-4 space-y-1">
              {categories.map((category) => (
                <Link
                  key={category.slug}
                  to={`/${category.slug}`}
                  className="block py-3 px-4 text-lg font-medium hover:bg-secondary rounded-lg transition-colors"
                >
                  {category.name}
                </Link>
              ))}
              <div className="border-t border-border my-4" />
              <Link
                to="/about"
                className="block py-3 px-4 text-lg font-medium hover:bg-secondary rounded-lg transition-colors"
              >
                About
              </Link>
              <Link
                to="/authors"
                className="block py-3 px-4 text-lg font-medium hover:bg-secondary rounded-lg transition-colors"
              >
                Authors
              </Link>
              <Link
                to="/contact"
                className="block py-3 px-4 text-lg font-medium hover:bg-secondary rounded-lg transition-colors"
              >
                Contact
              </Link>
              <Link
                to="/careers"
                className="block py-3 px-4 text-lg font-medium hover:bg-secondary rounded-lg transition-colors"
              >
                Careers
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
