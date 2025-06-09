import NewsletterSignup from '../components/NewsletterSignup';
import DonationSection from '../components/DonationSection';

export const metadata = {
  title: 'Platform | Athena for Eugene Ward 5 City Council',
  description: 'Discover Athena Aguiar\'s detailed platform and policy proposals for Eugene Ward 5 City Council. Progressive solutions for housing, climate, and economic justice.',
};

export default function PlatformPage() {
  // Platform categories with their issues
  const platformCategories = [
    {
      id: 'economy',
      title: 'Economic Development & Revenue',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary-campaign" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      issues: [
        {
          title: 'Tax Large Corporations',
          description: 'Implement a fair tax structure ensuring large corporations pay their equitable share to fund community services.',
          details: 'Establish progressive business tax rates based on revenue, implement tax incentives for corporations that invest in local communities, and close corporate tax loopholes.'
        },
        {
          title: 'Small Business Support',
          description: 'Create a small business incubator program to provide resources, mentorship, and financial support to local entrepreneurs.',
          details: 'Establish low-interest microloans for startups, reduce permit processing times by 50%, and create a dedicated small business liaison office at city hall.'
        },
        {
          title: 'Job Creation',
          description: 'Partner with local colleges to develop workforce training programs aligned with the needs of growing industries.',
          details: 'Create tax incentives for businesses that hire locally, establish a job training fund with $2 million in initial funding, and develop apprenticeship programs for high school students.'
        },
        {
          title: 'Downtown Revitalization',
          description: 'Implement a comprehensive downtown revitalization plan to attract businesses and visitors.',
          details: 'Launch a façade improvement grant program, create pedestrian-friendly spaces, improve parking solutions, and host regular community events to drive foot traffic.'
        }
      ]
    },
    {
      id: 'labor',
      title: 'Labor Rights',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary-campaign" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      issues: [
        {
          title: 'Increase Minimum Wage',
          description: 'Fight for a living wage to ensure all workers can support themselves and their families.',
          details: 'Advocate for a $15 minimum wage with annual cost-of-living adjustments, implement living wage requirements for city contractors, and create tax incentives for businesses that pay living wages.'
        },
        {
          title: 'Labor Law Enforcement',
          description: 'Strengthen enforcement of labor laws to protect workers from exploitation and unsafe conditions.',
          details: 'Create a local labor standards office, increase penalties for wage theft and labor violations, and establish a worker rights hotline and education program.'
        },
        {
          title: 'Worker Training Programs',
          description: 'Invest in workforce development to prepare residents for good-paying jobs in growing industries.',
          details: 'Establish partnerships with local colleges for job training, create apprenticeship programs, and provide scholarships for workers seeking to upgrade their skills.'
        }
      ]
    },
    {
      id: 'womens-rights',
      title: 'Women\'s Rights',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary-campaign" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      issues: [
        {
          title: 'Sexual Assault Survivors\' Rights',
          description: 'Strengthen protections and support services for survivors of sexual assault.',
          details: 'Increase funding for rape crisis centers, implement trauma-informed training for law enforcement, and establish a fast-track system for sexual assault evidence processing.'
        },
        {
          title: 'Gender Pay Equity',
          description: 'Work to eliminate the gender wage gap in Eugene through policy and enforcement.',
          details: 'Implement pay transparency requirements for local businesses, conduct regular audits of city employees\' pay, and create incentives for businesses with equitable pay practices.'
        },
        {
          title: 'Women\'s Healthcare Access',
          description: 'Ensure all women have access to comprehensive healthcare services.',
          details: 'Support funding for women\'s health clinics, advocate for expanded reproductive healthcare coverage, and establish transportation assistance to healthcare facilities.'
        }
      ]
    },
    {
      id: 'housing',
      title: 'Housing & Homelessness',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary-campaign" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      issues: [
        {
          title: 'Free Housing for the Homeless',
          description: 'Implement a Housing First approach to address chronic homelessness in our community.',
          details: 'Establish a public housing program for the homeless, convert vacant properties into transitional housing, and provide comprehensive support services including mental health and substance abuse treatment.'
        },
        {
          title: 'Affordable Housing Development',
          description: 'Increase the supply of affordable housing through innovative development strategies.',
          details: 'Create inclusionary zoning requirements, establish a housing trust fund, and provide incentives for developers who build affordable units.'
        },
        {
          title: 'Tenant Protections',
          description: 'Strengthen protections for renters against unfair evictions and rent increases.',
          details: 'Implement rent stabilization measures, extend eviction notice requirements, and create a tenant legal assistance program.'
        }
      ]
    },
    {
      id: 'environment',
      title: 'Climate Change & Environmental Protection',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary-campaign" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      issues: [
        {
          title: 'Carbon Tax',
          description: 'Implement a local carbon tax to reduce emissions and fund climate initiatives.',
          details: 'Establish a graduated carbon tax on large emitters, reinvest revenue in renewable energy projects, and provide rebates to low-income residents to offset potential cost increases.'
        },
        {
          title: 'Ecological Restoration',
          description: 'Invest in restoring natural ecosystems to combat climate change and protect biodiversity.',
          details: 'Restore wetlands and forests, create urban green corridors, implement native species planting programs, and establish conservation easements on critical habitat.'
        },
        {
          title: 'Climate Action Plan',
          description: 'Develop and implement a comprehensive climate action plan for Eugene.',
          details: 'Set a goal for carbon neutrality by 2040, create green building incentives for new construction, and establish an electric vehicle charging infrastructure throughout the city.'
        }
      ]
    },
    {
      id: 'safety',
      title: 'Law Enforcement & Public Safety',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary-campaign" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      issues: [
        {
          title: 'Drug Decriminalization',
          description: 'Reform drug policies to focus on treatment rather than criminalization.',
          details: 'Decriminalize possession of small amounts of drugs for personal use, redirect resources to treatment and rehabilitation programs, and establish drug diversion courts.'
        },
        {
          title: 'Expand Sexual Assault Response Team',
          description: 'Strengthen the community response to sexual assault through expanded resources and training.',
          details: 'Increase funding for the Sexual Assault Response Team, expand 24/7 coverage, provide specialized training for all first responders, and improve coordination between medical, legal, and support services.'
        },
        {
          title: 'Community Policing',
          description: 'Implement a community-oriented policing model that builds trust between residents and law enforcement.',
          details: 'Establish neighborhood policing teams, require officers to complete 40 hours of community engagement annually, and create citizen advisory boards for each precinct.'
        }
      ]
    }
  ];

  return (
    <>
      <section className="page-header">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-display">
              My Platform for Eugene
            </h1>
            <p className="text-xl text-primary-100">
              A comprehensive plan to address our community's most pressing challenges and create opportunities for all residents.
            </p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">
              Key Focus Areas
            </h2>
            <p className="section-subtitle">
              My campaign is built on concrete policies that address the real needs of Eugene residents.
            </p>
          </div>

          <div className="space-y-16">
            {platformCategories.map((category) => (
              <div key={category.id} id={category.id} className="scroll-mt-24">
                <div className="flex items-center mb-8">
                  <div className="mr-4">{category.icon}</div>
                  <h2 className="text-3xl font-bold text-foreground font-display">{category.title}</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {category.issues.map((issue, index) => (
                    <div
                      key={index}
                      className="platform-card"
                    >
                      <h3 className="text-xl font-semibold text-foreground mb-3">{issue.title}</h3>
                      <p className="text-muted-foreground mb-4">{issue.description}</p>
                      <div className="bg-muted p-4 rounded-md">
                        <p className="text-sm text-muted-foreground">{issue.details}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section-alt">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title">
              Policy Documents
            </h2>
            <p className="section-subtitle">
              Download detailed policy proposals and position papers on key issues.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a
                href="#"
                className="flex items-center p-4 bg-card rounded-lg border border-border shadow-sm hover:bg-muted transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-destructive mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <div className="text-left">
                  <div className="font-semibold text-foreground">Economic Development Plan</div>
                  <div className="text-sm text-muted-foreground">PDF • 2.3 MB</div>
                </div>
              </a>

              <a
                href="#"
                className="flex items-center p-4 bg-card rounded-lg border border-border shadow-sm hover:bg-muted transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-destructive mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <div className="text-left">
                  <div className="font-semibold text-foreground">Education Reform Proposal</div>
                  <div className="text-sm text-muted-foreground">PDF • 1.8 MB</div>
                </div>
              </a>

              <a
                href="#"
                className="flex items-center p-4 bg-card rounded-lg border border-border shadow-sm hover:bg-muted transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-destructive mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <div className="text-left">
                  <div className="font-semibold text-foreground">Environmental Action Plan</div>
                  <div className="text-sm text-muted-foreground">PDF • 3.1 MB</div>
                </div>
              </a>

              <a
                href="#"
                className="flex items-center p-4 bg-card rounded-lg border border-border shadow-sm hover:bg-muted transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-destructive mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <div className="text-left">
                  <div className="font-semibold text-foreground">Community Safety Initiative</div>
                  <div className="text-sm text-muted-foreground">PDF • 2.5 MB</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <DonationSection />
      <NewsletterSignup />
    </>
  );
} 