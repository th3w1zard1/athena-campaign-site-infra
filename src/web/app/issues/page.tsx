import NewsletterSignup from '../components/NewsletterSignup';

export const metadata = {
  title: 'Key Issues | Athena for Eugene Ward 5 City Council',
  description: 'Explore the key issues Athena Aguiar is addressing for Eugene Ward 5: housing, economic justice, climate action, women\'s rights, and criminal justice reform.',
};

export default function IssuesPage() {
  const issues = [
    {
      title: "Housing for All",
      description: "Addressing the housing crisis with comprehensive solutions for affordable housing and homelessness.",
      points: [
        "Increase affordable housing supply",
        "Provide free housing for the homeless",
        "Strengthen tenant protections",
        "Support first-time homebuyer programs"
      ]
    },
    {
      title: "Economic Justice",
      description: "Creating an economy that works for everyone, not just the wealthy few.",
      points: [
        "Increase minimum wage",
        "Support small businesses",
        "Ensure corporations pay their fair share",
        "Create good-paying jobs"
      ]
    },
    {
      title: "Climate Action",
      description: "Taking bold action to address climate change and protect our environment.",
      points: [
        "Implement carbon tax",
        "Support renewable energy",
        "Protect natural spaces",
        "Promote sustainable transportation"
      ]
    },
    {
      title: "Women's Rights",
      description: "Fighting for gender equality and protecting women's rights.",
      points: [
        "Strengthen protections for sexual assault survivors",
        "Support reproductive rights",
        "Address gender pay gap",
        "Promote women's leadership"
      ]
    },
    {
      title: "Criminal Justice Reform",
      description: "Creating a more just and equitable criminal justice system.",
      points: [
        "Decriminalize drug use",
        "Focus on treatment over criminalization",
        "Reform police accountability",
        "Support restorative justice"
      ]
    },
    {
      title: "Labor Rights",
      description: "Protecting workers and ensuring fair wages and safe working conditions.",
      points: [
        "Strengthen labor law enforcement",
        "Support union organizing",
        "Ensure workplace safety",
        "Fight for worker dignity"
      ]
    }
  ];

  return (
    <>
      <section className="page-header">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-display">
              Key Issues for Ward 5
            </h1>
            <p className="text-xl text-primary-100">
              The challenges facing our community require bold, progressive solutions. Here's where I stand on the issues that matter most.
            </p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {issues.map((issue, index) => (
              <div key={index} className="issue-card">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {issue.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {issue.description}
                </p>
                <ul className="space-y-2">
                  {issue.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start">
                      <svg className="h-5 w-5 text-primary-campaign mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-muted-foreground">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section-alt">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title">
              Your Voice Matters
            </h2>
            <p className="section-subtitle">
              These issues affect all of us. I want to hear your thoughts, concerns, and ideas for solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="btn-primary"
              >
                Share Your Thoughts
              </a>
              <a
                href="/platform"
                className="btn-outline"
              >
                Read Full Platform
              </a>
            </div>
          </div>
        </div>
      </section>

      <NewsletterSignup />
    </>
  );
} 