'use client';

import Link from 'next/link';

interface FocusArea {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const CampaignFocus = () => {
  const focusAreas: FocusArea[] = [
    {
      id: 1,
      title: "Economic Justice",
      description: "Creating an economy that works for everyone through fair tax policies and supporting local businesses.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mb-4" fill="none" viewBox="0 0 24 24" stroke="#1E90FF">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Labor Rights",
      description: "Fighting for increased minimum wage and stronger enforcement of labor laws to protect workers.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mb-4" fill="none" viewBox="0 0 24 24" stroke="#1E90FF">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Climate Action",
      description: "Implementing a carbon tax and ecological restoration projects to address climate change and protect our environment.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mb-4" fill="none" viewBox="0 0 24 24" stroke="#1E90FF">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Housing For All",
      description: "Providing free housing for the homeless and expanding affordable housing options for Eugene residents.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mb-4" fill="none" viewBox="0 0 24 24" stroke="#1E90FF">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      id: 5,
      title: "Women's Rights",
      description: "Strengthening protections and support services for sexual assault survivors and advancing gender equality.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mb-4" fill="none" viewBox="0 0 24 24" stroke="#1E90FF">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
    {
      id: 6,
      title: "Criminal Justice Reform",
      description: "Decriminalizing drug possession and expanding resources for Sexual Assault Response Teams.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mb-4" fill="none" viewBox="0 0 24 24" stroke="#1E90FF">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
  ];

  return (
    <section className="content-section-alt">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title text-5xl md:text-6xl">Campaign Priorities</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {focusAreas.map((area) => (
            <div
              key={area.id}
              className="card group hover:scale-105 transition-all duration-300 hover:shadow-xl border-2 hover:border-primary-500"
            >
              <div className="flex justify-center">
                {area.icon}
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-3 font-display">{area.title}</h3>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/platform"
            className="inline-flex items-center font-semibold group text-2xl px-10 py-6 bg-primary-500 text-white rounded-lg hover:bg-primary-600 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            Learn more about my platform
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 ml-2 group-hover:translate-x-1 transition-transform"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CampaignFocus;