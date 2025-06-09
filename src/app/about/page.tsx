import Achievements from '../components/Achievements';
import NewsletterSignup from '../components/NewsletterSignup';

export const metadata = {
  title: 'About Athena | Eugene Ward 5 City Council Candidate',
  description: 'Learn about Athena Aguiar, candidate for Eugene Ward 5 City Council. Discover her background, values, and vision for Eugene, Oregon.',
};

export default function AboutPage() {
  return (
    <>
      <section className="page-header">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">
                Meet Athena
              </h1>
              <p className="text-xl text-primary-100 mb-6">
                A passionate advocate for Eugene, Oregon with the experience and vision to lead our community forward.
              </p>
              <div className="prose prose-lg max-w-none text-primary-100">
                <p>
                  For over a decade, Athena has been a tireless advocate for the people of Eugene.
                  From her early days as a community organizer to her leadership roles in local government
                  and non-profit organizations, she has consistently put the needs of residents first.
                </p>
                <p>
                  Born and raised in Eugene, Athena understands the unique challenges and opportunities
                  our community faces. After graduating with honors from the University of Oregon with
                  a degree in Public Administration, she returned to Eugene to dedicate her career to
                  public service.
                </p>
                <p>
                  Athena currently serves as a Precinct Committeeperson for the Democratic Party of Lane County
                  and is a steering committee member of the DSA electoral-legislative group. Her hands-on approach
                  to community organizing has resulted in significant positive changes for Eugene residents.
                </p>
                <p>
                  As a former environmental steward and Director of the Eugene Economic Development Council, 
                  Athena helped create hundreds of jobs by attracting new businesses to the area while supporting 
                  existing local enterprises and protecting our natural resources. Her innovative approach to 
                  sustainable community development has earned recognition across the state.
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="platform-card">
                <div className="h-96 bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center rounded-t-lg">
                  <span className="text-white text-2xl font-bold">Athena</span>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-foreground">Athena Johnson</h3>
                  <p className="text-primary-campaign font-medium">Candidate for Eugene, Oregon</p>
                  <ul className="mt-3 text-muted-foreground">
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary-campaign" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Precinct Committeeperson, Democratic Party of Lane County
                    </li>
                    <li className="flex items-center mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary-campaign" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      DSA Electoral-Legislative Group Steering Committee
                    </li>
                    <li className="flex items-center mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary-campaign" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Former Environmental Steward
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-title text-center">
              My Vision & Values
            </h2>

            <div className="prose prose-lg max-w-none dark:prose-dark">
              <h3 className="text-foreground">Community First</h3>
              <p className="text-muted-foreground">
                I believe that effective governance starts with listening to the community.
                Every policy decision should be made with the direct input of those it will affect.
                My door will always be open to hear your concerns, ideas, and feedback.
              </p>

              <h3 className="text-foreground">Economic Opportunity for All</h3>
              <p className="text-muted-foreground">
                Eugene deserves an economy that works for everyone. I'm committed to policies that
                create good-paying jobs, support small businesses, ensure corporations pay their fair share,
                and ensure that economic growth benefits all residents, not just a select few.
              </p>

              <h3 className="text-foreground">Environmental Stewardship</h3>
              <p className="text-muted-foreground">
                Our community is blessed with natural beauty that we must protect for future generations.
                I will champion sustainable policies that preserve our environment, implement ecological
                restoration initiatives, and advocate for a carbon tax to address climate change while
                allowing for responsible development and growth.
              </p>

              <h3 className="text-foreground">Justice and Equality</h3>
              <p className="text-muted-foreground">
                I am committed to fighting for women's rights, including strengthening protections for
                sexual assault survivors. I will also work to decriminalize drug use and focus on
                treatment rather than criminalization. Every person deserves dignity, respect, and equal
                protection under the law.
              </p>

              <h3 className="text-foreground">Housing for All</h3>
              <p className="text-muted-foreground">
                I believe housing is a human right. I will work to provide free housing for the homeless and
                increase the supply of affordable housing for all Eugene residents. No one should have to
                worry about having a safe place to call home.
              </p>

              <h3 className="text-foreground">Labor Rights</h3>
              <p className="text-muted-foreground">
                Workers deserve fair wages and safe working conditions. I will advocate for increasing the
                minimum wage and strengthening enforcement of labor laws to ensure all workers in Eugene
                are treated with dignity and can support their families.
              </p>

              <h3 className="text-foreground">Transparent Leadership</h3>
              <p className="text-muted-foreground">
                You deserve a leader who is honest, accessible, and accountable. I pledge to maintain
                the highest standards of transparency in all aspects of governance and decision-making.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Achievements />

      <section className="content-section-alt">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title">
              Personal Life
            </h2>
            <div className="prose prose-lg mx-auto dark:prose-dark">
              <p className="text-muted-foreground">
                When not working for the community, Athena enjoys spending time with her family,
                hiking the beautiful trails around Eugene, and volunteering at the local animal shelter.
                She is an avid reader, particularly of history and public policy, and hosts a monthly
                book club focused on civic engagement.
              </p>
              <p className="text-muted-foreground">
                Athena lives in the Oak Ridge neighborhood with her husband Michael, their two children,
                and their rescue dog, Scout. They are active members of the Eugene Community Church and
                regular volunteers at the Eugene Food Bank.
              </p>
            </div>
          </div>
        </div>
      </section>

      <NewsletterSignup />
    </>
  );
} 