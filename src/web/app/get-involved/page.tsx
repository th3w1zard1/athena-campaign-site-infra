'use client';

import { useState } from 'react';
import NewsletterSignup from '../components/NewsletterSignup';

interface FormData {
  name: string;
  email: string;
  phone: string;
  interests: string[];
  other: string;
}

export default function GetInvolvedPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    interests: [],
    other: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const volunteerInterests = [
    'Phone Banking',
    'Canvassing',
    'Event Support',
    'Data Entry',
    'Social Media',
    'Graphic Design',
    'Digital Outreach',
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((item: string) => item !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email) {
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    if (formData.interests.length === 0 && !formData.other.trim()) {
      setErrorMessage('Please select at least one volunteer interest or specify in the "Other" field.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        interests: [],
        other: '',
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <>
      <section className="page-header">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-display">
              Get Involved
            </h1>
            <p className="text-xl text-primary-100">
              Join our grassroots movement to bring progressive change to Ward 5. Every volunteer makes a difference.
            </p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-display">
                Volunteer Sign-Up
              </h2>
              <p className="text-xl text-muted-foreground">
                Ready to make a difference? Fill out the form below and we&apos;ll connect you with volunteer opportunities that match your interests.
              </p>
            </div>

            {isSubmitted ? (
              <div className="max-w-2xl mx-auto bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-8 text-center">
                <h3 className="text-2xl text-green-700 dark:text-green-400 font-semibold mb-4">Thank You for Volunteering!</h3>
                <p className="text-green-600 dark:text-green-300 text-lg">
                  Your volunteer application has been submitted successfully. A member of our team will contact you within 24-48 hours to discuss next steps and get you involved with the activities that interest you most.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-8">
                {errorMessage && (
                  <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
                    <p className="text-destructive font-medium">{errorMessage}</p>
                  </div>
                )}

                {/* Contact Information */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-foreground mb-4">Contact Information</h3>
                  
                  <div>
                    <label htmlFor="name" className="block text-muted-foreground font-medium mb-2">
                      Full Name <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="block w-full px-4 py-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring bg-background text-foreground"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-muted-foreground font-medium mb-2">
                      Email Address <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="block w-full px-4 py-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring bg-background text-foreground"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-muted-foreground font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="block w-full px-4 py-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring bg-background text-foreground"
                    />
                  </div>
                </div>

                {/* Volunteer Interests */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-foreground mb-4">Volunteer Interests</h3>
                  <p className="text-muted-foreground mb-4">
                    Select all activities that interest you (check at least one):
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {volunteerInterests.map((interest) => (
                      <label key={interest} className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.interests.includes(interest)}
                          onChange={() => handleCheckboxChange(interest)}
                          className="h-5 w-5 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                        />
                        <span className="text-foreground font-medium">{interest}</span>
                      </label>
                    ))}
                  </div>

                  <div>
                    <label htmlFor="other" className="block text-muted-foreground font-medium mb-2">
                      Other interests or skills you&apos;d like to contribute
                    </label>
                    <textarea
                      id="other"
                      name="other"
                      value={formData.other}
                      onChange={handleInputChange}
                      rows={3}
                      placeholder="Tell us about other ways you&apos;d like to help or special skills you have..."
                      className="block w-full px-4 py-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring bg-background text-foreground"
                    />
                  </div>
                </div>

                <div className="pt-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full btn-primary text-lg py-4 ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? 'Submitting...' : 'Sign Up to Volunteer'}
                  </button>
                </div>

                <p className="text-sm text-muted-foreground text-center">
                  We respect your privacy and will only use your information to coordinate volunteer activities. You can opt out at any time.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Other Ways to Help Section */}
      <section className="content-section">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-display">
                Other Ways to Help
              </h2>
              <p className="text-xl text-muted-foreground">
                Can&apos;t volunteer regularly? There are still many ways you can support our campaign and help spread the word.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Request a Yard Sign */}
              <div className="platform-card interactive-card">
                <h3 className="text-xl font-bold text-foreground mb-4">Request a Yard Sign</h3>
                <p className="text-muted-foreground mb-4">
                  Show your support with a yard sign in your front yard or window.
                </p>
                <a 
                  href="/contact?subject=Yard%20Sign%20Request" 
                  className="btn-primary w-full text-center"
                >
                  Request Yard Sign
                </a>
              </div>

              {/* Share on Social Media */}
              <div className="platform-card interactive-card">
                <h3 className="text-xl font-bold text-foreground mb-4">Share on Social Media</h3>
                <p className="text-muted-foreground mb-4">
                  Follow and share Athena&apos;s posts to help spread the word online.
                </p>
                <div className="space-y-3">
                  <a 
                    href="https://twitter.com/intent/tweet?text=I%27m%20supporting%20Athena%20for%20Eugene%20City%20Council%20Ward%205!%20Join%20me%20in%20voting%20for%20progressive%20change.%20%23AthenaForEugene%20%23Eugene2024&url=https://athenaforeugene.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary w-full text-center flex items-center justify-center"
                  >
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                    Share on Twitter
                  </a>
                  <a 
                    href="https://www.facebook.com/sharer/sharer.php?u=https://athenaforeugene.org&quote=I%27m%20supporting%20Athena%20for%20Eugene%20City%20Council%20Ward%205!%20Join%20me%20in%20voting%20for%20progressive%20change."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary w-full text-center flex items-center justify-center"
                  >
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                    Share on Facebook
                  </a>
                </div>
              </div>

              {/* Write a Letter to the Editor */}
              <div className="platform-card interactive-card">
                <h3 className="text-xl font-bold text-foreground mb-4">Write a Letter to the Editor</h3>
                <p className="text-muted-foreground mb-4">
                  Submit letters to local newspapers supporting Athena&apos;s candidacy.
                </p>
                <div className="space-y-3">
                  <a 
                    href="mailto:letters@eugeneweekly.org?subject=Letter%20to%20the%20Editor%20-%20Supporting%20Athena%20for%20City%20Council&body=Dear%20Editor,%0A%0AI%20am%20writing%20to%20express%20my%20support%20for%20Athena%20Aguiar%20for%20Eugene%20City%20Council%20Ward%205.%0A%0A[Please%20share%20your%20thoughts%20on%20why%20you%20support%20Athena's%20campaign]%0A%0ASincerely,%0A[Your%20Name]"
                    className="btn-primary w-full text-center flex items-center justify-center"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Eugene Weekly
                  </a>
                  <a 
                    href="mailto:placeholder@registerguard.com?subject=Letter%20to%20the%20Editor%20-%20Supporting%20Athena%20for%20City%20Council&body=Dear%20Editor,%0A%0AI%20am%20writing%20to%20express%20my%20support%20for%20Athena%20Aguiar%20for%20Eugene%20City%20Council%20Ward%205.%0A%0A[Please%20share%20your%20thoughts%20on%20why%20you%20support%20Athena's%20campaign]%0A%0ASincerely,%0A[Your%20Name]"
                    className="btn-secondary w-full text-center flex items-center justify-center"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Register Guard (TBD)
                  </a>
                </div>
              </div>

              {/* Talk to Your Neighbors */}
              <div className="platform-card interactive-card">
                <h3 className="text-xl font-bold text-foreground mb-4">Talk to Your Neighbors</h3>
                <p className="text-muted-foreground mb-4">
                  Have conversations with friends, family, and neighbors about the election.
                </p>
                <a 
                  href="/platform" 
                  className="btn-primary w-full text-center"
                >
                  Learn Talking Points
                </a>
              </div>

              {/* Display a Yard Sign (moved for better layout) */}
              <div className="platform-card interactive-card">
                <h3 className="text-xl font-bold text-foreground mb-4">Display a Yard Sign</h3>
                <p className="text-muted-foreground mb-4">
                  Already have a sign? Here&apos;s how to maximize its impact.
                </p>
                <a 
                  href="/contact?subject=Yard%20Sign%20Tips" 
                  className="btn-secondary w-full text-center"
                >
                  Get Display Tips
                </a>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      <section className="content-section-alt">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title">
              Every Voice Matters
            </h2>
            <p className="section-subtitle">
              Join hundreds of Ward 5 residents who are working together to build a better Eugene. Your involvement can help create real change in our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <a href="/contact" className="btn-secondary">
                Contact Us
              </a>
              <a href="/donate" className="btn-primary">
                Make a Donation
              </a>
            </div>
          </div>
        </div>
      </section>

      <NewsletterSignup />
    </>
  );
} 
