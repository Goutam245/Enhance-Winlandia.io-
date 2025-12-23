import { Link } from 'react-router-dom';
import { Twitter, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import { categories } from '@/data/categories';

const Footer = () => {
  return (
    <footer className="bg-charcoal text-primary-foreground">
      <div className="container-editorial py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* About */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <h2 className="text-2xl font-display font-bold">WINLANDIA</h2>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Independent journalism that matters. We bring you in-depth reporting, analysis, and commentary on the issues shaping our world.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/about"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/advertise"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                >
                  Advertise
                </Link>
              </li>
              <li>
                <Link
                  to="/authors"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                >
                  Our Team
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">Sections</h3>
            <ul className="space-y-3">
              {categories.map((category) => (
                <li key={category.slug}>
                  <Link
                    to={`/${category.slug}`}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/archive"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                >
                  Archive
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">Newsletter</h3>
            <p className="text-primary-foreground/70 text-sm">
              Get the best of Winlandia delivered to your inbox daily.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 rounded text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-primary-foreground/40 transition-colors text-sm"
              />
              <button
                type="submit"
                className="w-full px-4 py-3 bg-primary-foreground text-charcoal font-medium text-sm rounded hover:bg-primary-foreground/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
            <p>© {new Date().getFullYear()} Winlandia. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link to="/privacy" className="hover:text-primary-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-primary-foreground transition-colors">
                Terms of Service
              </Link>
              <Link to="/newsletter" className="hover:text-primary-foreground transition-colors">
                Newsletter
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
