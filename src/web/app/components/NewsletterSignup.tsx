'use client';

import { useState } from 'react';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json() as { error?: string };

      if (!response.ok) {
        throw new Error(data.error || 'Failed to subscribe');
      }
      
      setStatus('success');
      setMessage('Thank you for signing up! Please check your email to confirm your subscription.');
      setEmail('');
    } catch (error) {
      setStatus('error');
      setMessage(error instanceof Error ? error.message : 'Failed to subscribe. Please try again.');
    }
  };

  return (
    <section className="content-section-alt">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-title">Stay Updated</h2>
          <p className="section-subtitle">
            Join our newsletter to receive campaign updates, event invitations, and ways to get involved.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex-1 max-w-md">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg border border-input 
                    focus:ring-2 focus:ring-ring focus:border-transparent
                    bg-background text-foreground
                    placeholder-muted-foreground"
                  required
                  disabled={status === 'loading'}
                />
              </div>
              <button
                type="submit"
                disabled={status === 'loading'}
                className={`btn-primary ${
                  status === 'loading' ? 'opacity-75 cursor-not-allowed' : ''
                }`}
              >
                {status === 'loading' ? (
                  <span className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Subscribing...
                  </span>
                ) : (
                  'Subscribe'
                )}
              </button>
            </div>

            {message && (
              <div
                className={`mt-4 p-4 rounded-lg ${
                  status === 'success'
                    ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-300'
                    : 'bg-destructive/10 border border-destructive/20 text-destructive'
                }`}
              >
                {message}
              </div>
            )}
          </form>

          <p className="mt-6 text-sm text-muted-foreground">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;