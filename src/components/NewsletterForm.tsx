import { useState } from 'react';
import { toast } from 'sonner';

interface NewsletterFormProps {
  variant?: 'default' | 'minimal' | 'hero';
  className?: string;
}

const NewsletterForm = ({ variant = 'default', className = '' }: NewsletterFormProps) => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      toast.error('Please enter your email address');
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success('Successfully subscribed! Check your inbox for confirmation.');
    setEmail('');
    setIsLoading(false);
  };

  if (variant === 'minimal') {
    return (
      <form onSubmit={handleSubmit} className={`flex gap-2 ${className}`}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="input-field flex-1"
          disabled={isLoading}
        />
        <button
          type="submit"
          className="btn-primary whitespace-nowrap"
          disabled={isLoading}
        >
          {isLoading ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>
    );
  }

  if (variant === 'hero') {
    return (
      <div className={`bg-secondary rounded-xl p-8 lg:p-12 ${className}`}>
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="headline-md">Stay Informed</h3>
          <p className="mt-3 body-md text-muted-foreground">
            Get the day's most important stories delivered to your inbox every morning.
          </p>
          <form onSubmit={handleSubmit} className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="input-field flex-1"
              disabled={isLoading}
            />
            <button
              type="submit"
              className="btn-primary"
              disabled={isLoading}
            >
              {isLoading ? 'Subscribing...' : 'Subscribe Free'}
            </button>
          </form>
          <p className="mt-4 text-xs text-muted-foreground">
            By subscribing, you agree to our{' '}
            <a href="/privacy" className="underline hover:text-foreground">Privacy Policy</a>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-secondary rounded-lg p-6 ${className}`}>
      <h4 className="font-display font-semibold text-lg">Newsletter</h4>
      <p className="mt-2 text-sm text-muted-foreground">
        Get the latest news delivered to your inbox.
      </p>
      <form onSubmit={handleSubmit} className="mt-4 space-y-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
          className="input-field"
          disabled={isLoading}
        />
        <button
          type="submit"
          className="btn-primary w-full"
          disabled={isLoading}
        >
          {isLoading ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>
    </div>
  );
};

export default NewsletterForm;
