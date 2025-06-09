'use client';

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: "Community Leadership",
      items: [
        "Precinct Committee Person for the Democratic Party of Lane County",
        "Steering Committee Member of DSA Electoral-Legislative Group",
        "Founded the Eugene Youth Mentorship Program, connecting 500+ students with professional mentors",
        "Led the Eugene Clean Parks Initiative, resulting in renovation of 7 community parks"
      ]
    },
    {
      id: 2,
      title: "Professional Experience",
      items: [
        "10+ years experience in public administration and community development",
        "Former Director of Eugene Economic Development Council",
        "Former Environmental Steward with focus on ecological restoration",
        "Certified Public Administrator with expertise in municipal finance and planning"
      ]
    },
    {
      id: 3,
      title: "Awards & Recognition",
      items: [
        "Eugene Citizen of the Year Award (2022)",
        "Oregon Community Service Medal (2021)",
        "Environmental Conservation Leadership Award (2019)",
        "Distinguished Public Service Award from State Association of Municipal Leaders"
      ]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Experience & Achievements
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Athena brings a strong background of leadership, service, and results to her campaign.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((category) => (
            <div
              key={category.id}
              className="rounded-lg border border-blue-100 bg-blue-50 p-8 hover:shadow-md transition-shadow"
            >
              <h3 className="text-2xl font-semibold text-blue-700 mb-6 text-center">
                {category.title}
              </h3>
              <ul className="space-y-4">
                {category.items.map((item, index) => (
                  <li key={index} className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-green-500 flex-shrink-0 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default Achievements; 