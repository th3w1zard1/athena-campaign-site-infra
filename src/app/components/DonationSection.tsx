'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const DonationSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');
  const [hasAutoShown, setHasAutoShown] = useState(false);
  const pathname = usePathname();

  const presetAmounts = [5, 10, 25, 50, 100];

  // Auto-popup functionality for main page only
  useEffect(() => {
    // Only run on main page
    if (pathname !== '/') return;

    // Check if popup has already been shown this session
    const hasShownThisSession = sessionStorage.getItem('donationPopupShown');
    if (hasShownThisSession) {
      setHasAutoShown(true);
      return;
    }

    const handleScroll = () => {
      if (hasAutoShown || isModalOpen) return;

      const scrollPosition = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      
      // Show popup when user has scrolled down 30% of the page or 500px, whichever comes first
      const scrollThreshold = Math.min(documentHeight * 0.3, 500);
      
      if (scrollPosition > scrollThreshold) {
        setIsModalOpen(true);
        setHasAutoShown(true);
        // Mark as shown for this session
        sessionStorage.setItem('donationPopupShown', 'true');
        // Remove scroll listener once shown
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname, hasAutoShown, isModalOpen]);

  const openModal = (amount?: number) => {
    if (amount) {
      setSelectedAmount(amount);
      setCustomAmount('');
    } else {
      setSelectedAmount(null);
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedAmount(null);
    setCustomAmount('');
  };

  const handleDonate = () => {
    const amount = selectedAmount || parseInt(customAmount);
    if (amount && amount > 0) {
      // Redirect to donation processing page
      window.location.href = `/donate?amount=${amount}`;
    }
  };

  return (
    <>
      <section className="py-16 bg-gradient-to-br from-primary-900 to-primary-800 dark:from-primary-950 dark:to-primary-900 text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">Support Our Campaign</h2>
            <p className="text-xl text-primary-100 dark:text-primary-200 max-w-3xl mx-auto">
              Your contribution helps us fight for progressive values and build a better Eugene.
              Every donation makes a difference.
            </p>
          </div>

          <div className="text-center">
            <button
              onClick={() => openModal()}
              className="btn-secondary text-lg px-8 py-4"
            >
              Donate Now
            </button>
          </div>

          <div className="mt-12 text-center text-sm text-primary-200 dark:text-primary-300">
            <p>
              Contributions or gifts to Athena for Eugene Campaign Committee are not tax deductible.
              Campaign contributions are limited to $2,800 per election.
            </p>
          </div>
        </div>
      </section>

      {/* Donation Modal - Enhanced with auto-popup styling */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 animate-fadeIn">
          <div className="bg-white dark:bg-neutral-800 rounded-lg max-w-md w-full p-6 shadow-2xl animate-slideUp">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                Support Our Campaign
              </h3>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                aria-label="Close donation popup"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="mb-6">
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Help us build a better Eugene. Choose an amount to support our campaign:
              </p>
              
              <div className="grid grid-cols-3 gap-3 mb-4">
                {presetAmounts.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => setSelectedAmount(amount)}
                    className={`p-3 rounded-md border-2 font-semibold transition-all transform hover:scale-105 ${
                      selectedAmount === amount
                        ? 'border-blue-600 bg-blue-50 text-blue-600 dark:bg-blue-900 dark:text-blue-300 scale-105'
                        : 'border-gray-300 text-gray-700 hover:border-blue-400 dark:border-gray-600 dark:text-gray-300'
                    }`}
                  >
                    ${amount}
                  </button>
                ))}
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Or enter a custom amount:
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                  <input
                    type="number"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setSelectedAmount(null);
                    }}
                    placeholder="0"
                    className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-neutral-700 dark:border-gray-600 dark:text-gray-200"
                    min="1"
                  />
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={closeModal}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
              >
                Maybe Later
              </button>
              <button
                onClick={handleDonate}
                disabled={!selectedAmount && !customAmount}
                className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-105 disabled:hover:scale-100"
              >
                Donate {selectedAmount ? `$${selectedAmount}` : customAmount ? `$${customAmount}` : ''}
              </button>
            </div>

            {/* Disclaimer */}
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-4 text-center">
              Contributions are limited to $2,800 per election
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default DonationSection;