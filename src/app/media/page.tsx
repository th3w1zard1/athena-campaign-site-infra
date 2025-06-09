'use client';

import { useState } from 'react';
import NewsletterSignup from '../components/NewsletterSignup';

export default function MediaPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  const galleryItems = [
    // Events Category
    {
      id: 1,
      title: "Community Town Hall",
      category: "events",
      thumbnail: "/images/gallery/placeholder-1.jpg",
      description: "Athena discussing her platform with community members at the Eugene Town Hall.",
      date: "April 15, 2023"
    },
    {
      id: 2,
      title: "Labor Rights Rally",
      category: "events",
      thumbnail: "/images/gallery/placeholder-3.jpg",
      description: "Speaking at the Workers' Rights Rally about minimum wage and labor law enforcement.",
      date: "June 8, 2023"
    },
    {
      id: 3,
      title: "Policy Discussion Panel",
      category: "events",
      thumbnail: "/images/gallery/placeholder-5.jpg",
      description: "Athena participating in a panel discussion on housing policy and homelessness.",
      date: "August 3, 2023"
    },
    {
      id: 4,
      title: "Climate Action Forum",
      category: "events",
      thumbnail: "/images/gallery/placeholder-7.jpg",
      description: "Discussing ecological restoration and carbon tax proposals at the Climate Action Forum.",
      date: "October 5, 2023"
    },
    {
      id: 5,
      title: "Women's Rights Conference",
      category: "events",
      thumbnail: "/images/gallery/placeholder-9.jpg",
      description: "Athena speaking at the Women's Rights Conference about strengthening protections for sexual assault survivors.",
      date: "November 12, 2023"
    },

    // Campaign Category
    {
      id: 6,
      title: "Campaign Launch",
      category: "campaign",
      thumbnail: "/images/gallery/placeholder-2.jpg",
      description: "Athena announcing her candidacy at the Eugene Community Center.",
      date: "March 1, 2023"
    },
    {
      id: 7,
      title: "Neighborhood Canvassing",
      category: "campaign",
      thumbnail: "/images/gallery/placeholder-4.jpg",
      description: "Meeting with residents to discuss their concerns and share Athena's vision.",
      date: "July 12, 2023"
    },
    {
      id: 8,
      title: "Press Conference",
      category: "campaign",
      thumbnail: "/images/gallery/placeholder-6.jpg",
      description: "Athena addressing the press about her economic justice platform and tax reform proposals.",
      date: "September 23, 2023"
    },
    {
      id: 9,
      title: "Labor Rights Rally",
      category: "campaign",
      thumbnail: "/images/gallery/placeholder-8.jpg",
      description: "Speaking at a rally for workers' rights and fair wages with the United Workers Union.",
      date: "October 18, 2023"
    },
    {
      id: 10,
      title: "Campaign Office Opening",
      category: "campaign",
      thumbnail: "/images/gallery/placeholder-10.jpg",
      description: "Grand opening of Athena's campaign headquarters in downtown Eugene.",
      date: "April 8, 2023"
    },

    // Volunteering Category
    {
      id: 11,
      title: "Environmental Cleanup Day",
      category: "volunteering",
      thumbnail: "/images/gallery/placeholder-11.jpg",
      description: "Athena and volunteers working on ecological restoration at Eugene River Park.",
      date: "May 22, 2023"
    },
    {
      id: 12,
      title: "Youth Outreach Program",
      category: "volunteering",
      thumbnail: "/images/gallery/placeholder-12.jpg",
      description: "Working with local youth on community engagement and civic education.",
      date: "September 18, 2023"
    },
    {
      id: 13,
      title: "Homeless Shelter Service",
      category: "volunteering",
      thumbnail: "/images/gallery/placeholder-13.jpg",
      description: "Athena volunteering at the Eugene Homeless Shelter, discussing her housing first policy.",
      date: "July 30, 2023"
    },
    {
      id: 14,
      title: "Food Drive Organization",
      category: "volunteering",
      thumbnail: "/images/gallery/placeholder-14.jpg",
      description: "Organizing a community food drive for families in need.",
      date: "November 5, 2023"
    },
    {
      id: 15,
      title: "Community Garden Project",
      category: "volunteering",
      thumbnail: "/images/gallery/placeholder-15.jpg",
      description: "Helping establish a community garden in an underserved neighborhood.",
      date: "August 19, 2023"
    }
  ];

  const filteredItems = activeFilter === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <>
      <section className="py-16 md:py-24 bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Campaign Media Gallery
            </h1>
            <p className="text-xl text-blue-100">
              Follow Athena&apos;s journey as she works to build a better Eugene for all residents.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-md shadow-sm">
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-5 py-3 text-base font-medium rounded-l-md ${activeFilter === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
                  } border border-gray-300`}
              >
                All Photos
              </button>
              <button
                onClick={() => setActiveFilter('events')}
                className={`px-5 py-3 text-base font-medium ${activeFilter === 'events'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
                  } border-t border-b border-r border-gray-300`}
              >
                Events
              </button>
              <button
                onClick={() => setActiveFilter('campaign')}
                className={`px-5 py-3 text-base font-medium ${activeFilter === 'campaign'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
                  } border-t border-b border-r border-gray-300`}
              >
                Campaign Trail
              </button>
              <button
                onClick={() => setActiveFilter('volunteering')}
                className={`px-5 py-3 text-base font-medium rounded-r-md ${activeFilter === 'volunteering'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
                  } border-t border-b border-r border-gray-300`}
              >
                Volunteering
              </button>
            </div>
          </div>

          <p className="text-center text-gray-600 mb-8">
            Showing {filteredItems.length} of {galleryItems.length} photos
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group"
              >
                <div className="h-64 w-full relative">
                  <div className="absolute inset-0 bg-blue-600 bg-opacity-10 flex items-end justify-start group-hover:bg-opacity-20 transition-colors">
                    <span className="bg-blue-600 text-white text-sm uppercase tracking-wider py-1 px-3 m-3 rounded">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                    <span className="text-sm text-gray-500">{item.date}</span>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Campaign Videos</h2>
            <p className="text-lg text-gray-600 mb-12">
              Watch Athena speak about her vision for Eugene and the key issues she&apos;s fighting for.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="aspect-w-16 aspect-h-9 bg-gray-200 mb-4 rounded flex items-center justify-center">
                  <span className="text-gray-500">Video placeholder</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Campaign Launch Speech</h3>
                <p className="text-gray-600">Athena announces her candidacy and outlines her vision for Eugene&apos;s future.</p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow">
                <div className="aspect-w-16 aspect-h-9 bg-gray-200 mb-4 rounded flex items-center justify-center">
                  <span className="text-gray-500">Video placeholder</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Housing Policy Explained</h3>
                <p className="text-gray-600">A detailed look at Athena&apos;s plans to address homelessness and housing affordability.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <NewsletterSignup />
    </>
  );
} 