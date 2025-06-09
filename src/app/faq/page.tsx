'use client';

import { useState } from 'react';
import Link from 'next/link';
import NewsletterSignup from '../components/NewsletterSignup';

type FAQ = {
  question: string;
  answer: string;
};

type FAQCategories = {
  campaign: FAQ[];
  platform: FAQ[];
  involvement: FAQ[];
  contact: FAQ[];
  [key: string]: FAQ[];
};

export default function FAQPage() {
  const [activeTab, setActiveTab] = useState<string>('campaign');

  const faqs: FAQCategories = {
    campaign: [
      {
        question: "What position is Athena running for?",
        answer: "Athena is running for City Council Ward 5 in Eugene, Oregon. She's campaigning to represent the people of Ward 5 and bring progressive leadership to city government."
      },
      {
        question: "When is the election?",
        answer: "The election will be held on November 5, 2024. Early voting will be available starting October 21, 2024. We encourage all supporters to make a plan to vote early if possible."
      },
      {
        question: "How is the campaign funded?",
        answer: "Athena's campaign is funded entirely through grassroots donations from individuals who believe in her vision for Eugene. She does not accept corporate PAC money or donations from special interest groups that don't align with her values."
      },
      {
        question: "Does Athena have prior political experience?",
        answer: "Yes, Athena currently serves as a Precinct Committeeperson for the Democratic Party of Lane County and is a steering committee member of the DSA electoral-legislative group. She also has extensive experience in community organizing and public service."
      },
      {
        question: "Which party is Athena affiliated with?",
        answer: "Athena is running as a Democrat. She is actively involved with the Democratic Party of Lane County and the Democratic Socialists of America (DSA)."
      }
    ],
    platform: [
      {
        question: "What are Athena's top priorities if elected?",
        answer: "Athena's top priorities include implementing economic justice through fair taxation, increasing the minimum wage, providing free housing for the homeless, taking bold climate action including a carbon tax and ecological restoration, strengthening women's rights with a focus on supporting sexual assault survivors, and reforming drug policies to focus on treatment rather than criminalization."
      },
      {
        question: "How does Athena plan to fund free housing for the homeless?",
        answer: "Athena plans to fund free housing for the homeless through a combination of progressive taxation on large corporations, reallocation of existing budget priorities, and pursuing state and federal grants specifically designed for housing initiatives. The program will start with transitional housing and expand based on needs and outcomes."
      },
      {
        question: "What experience does Athena have with environmental issues?",
        answer: "Athena is a former environmental steward who led ecological restoration projects throughout Eugene. She has hands-on experience implementing community-based environmental monitoring programs and developing educational programming on climate change and sustainability."
      },
      {
        question: "How will Athena's minimum wage proposal affect small businesses?",
        answer: "Athena's minimum wage proposal includes a phased implementation that gives small businesses time to adjust. It also includes tax incentives and support programs specifically designed to help small businesses transition to paying living wages while remaining competitive."
      },
      {
        question: "What is Athena's stance on public safety and policing?",
        answer: "Athena supports a comprehensive approach to public safety that includes community policing, expanding the Sexual Assault Response Team, and decriminalizing drug possession in favor of treatment-focused approaches. She believes in addressing the root causes of crime through social services, mental health resources, and economic opportunity."
      }
    ],
    involvement: [
      {
        question: "How can I volunteer for the campaign?",
        answer: "You can volunteer by visiting our Volunteer page and filling out the form. We need help with canvassing, phone banking, event organizing, social media, and more. No experience necessary – we'll provide all the training you need!"
      },
      {
        question: "Can I make a donation to the campaign?",
        answer: "Yes! Donations of any size are greatly appreciated and help fund our grassroots campaign. You can donate through our secure donation page. All donations are subject to campaign finance limits and reporting requirements."
      },
      {
        question: "I have expertise in a specific area (like healthcare, education, etc.). Can I help shape policy?",
        answer: "Absolutely! We welcome policy input from experts in all fields. Please contact us through our Contact page and mention your area of expertise. We'll connect you with the appropriate policy team."
      },
      {
        question: "Can high school or college students get involved?",
        answer: "Yes! We have a vibrant youth outreach program and offer internship opportunities for students. It's a great way to learn about local politics and make a difference in your community."
      },
      {
        question: "How can I host a house party or fundraiser for Athena?",
        answer: "We would be thrilled to have you host an event! Please fill out the form on our Events page or contact our events coordinator directly at events@athenaforeugene.org to discuss details and get support from our team."
      }
    ],
    contact: [
      {
        question: "How can I contact the campaign directly?",
        answer: "You can reach us through our Contact page form, by email at info@athenaforeugene.org, or by phone at (555) 123-4567. Our campaign office is located at 123 Main Street, Eugene, OR and is open Monday-Friday from 9am-7pm and Saturdays from 10am-4pm."
      },
      {
        question: "Does Athena do interviews or speaking engagements?",
        answer: "Yes, Athena is available for interviews, forums, debates, and speaking engagements as her schedule permits. Please contact our communications team at media@athenaforeugene.org with your request and details."
      },
      {
        question: "How can local businesses indicate their support?",
        answer: "Local businesses can show their support by contacting our campaign directly through our Contact page. We also welcome opportunities to visit your business and meet with employees to discuss our platform."
      },
      {
        question: "I have an issue in my neighborhood I'd like Athena to know about. How can I share it?",
        answer: "Athena wants to hear about the issues that matter to you! Please use our Contact form to describe the issue, or attend one of our community listening sessions which are held monthly in different neighborhoods."
      },
      {
        question: "How can I stay updated on campaign news and events?",
        answer: "The best way to stay updated is to sign up for our newsletter at the bottom of this page. You can also follow us on social media platforms including Facebook, Twitter, and Instagram."
      }
    ]
  };

  return (
    <>
      <section className="py-16 md:py-24 bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-blue-100">
              Find answers to common questions about Athena&apos;s campaign, platform, and how you can get involved.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200 mb-8">
            <nav className="flex -mb-px" aria-label="Tabs">
              {Object.keys(faqs).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-6 text-center border-b-2 font-medium text-lg ${activeTab === tab
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </nav>
          </div>

          <div className="space-y-8">
            {faqs[activeTab].map((faq: FAQ, index: number) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Don&apos;t see your question answered here?</p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <NewsletterSignup />
    </>
  );
} 