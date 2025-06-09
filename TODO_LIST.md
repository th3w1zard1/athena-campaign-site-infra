# CAMPAIGN WEBSITE IMPROVEMENTS (PRIORITIZED BY COMPLEXITY & VISIBILITY)

## SIMPLE TEXT/CONTENT FIXES (HIGH VISIBILITY)

### Content Accuracy (EASY)

- **FIXED:** About page (line 8) says "Eugene, Florida" - should be "Eugene, Oregon"
- **FIXED:** About page (line 12) says "Eugene, Florida" - should be "Eugene, Oregon"
- **FIXED:** About page (line 18) mentions "University of Florida" - verify if this is correct or should be University of Oregon
- **FIXED:** Line 23-24 in Hero.tsx: Replace "Progressive Leadership for All of Eugene" with "Athena Aguiar for City Council"
- **FIXED:** "Ward 5" text underneath candidate name (smaller text, capitalize the W)
- **FIXED:** Descriptive text under candidate name (lines 25-28)

### Navigation Improvements (EASY)

- **FIXED:** Line 52 in Navbar.tsx: `<NavLink href="/get-involved">Get Involved</NavLink>`
- **FIXED:** Line 95 in Navbar.tsx: `<NavLink href="/get-involved" className="block">Get Involved</NavLink>`
- **FIXED:** Navigation updated to: About, Platform, Issues, Get Involved, Media, Contact, FAQ (removed non-functional Events and Blog pages)

### Non-Functional Content Removal (EASY)

- **FIXED:** Removed Events page (complex event management system with fake data)
- **FIXED:** Removed Blog page (complex blog system with fake posts and individual post routing)
- **FIXED:** Removed UpcomingEvents component (fake event data linking to deleted events page)
- **FIXED:** Removed BlogPosts component (fake blog data linking to deleted blog page)
- **FIXED:** Removed LatestNews component (fake news items with placeholder links)
- **FIXED:** Removed MediaGallery component (fake gallery items with placeholder content)
- **FIXED:** Removed Testimonials component (fake testimonials with external placeholder images)
- **FIXED:** Updated navigation and footer to remove references to deleted pages

### Simple SEO Improvements (EASY)

- **FIXED:** Page titles with "Eugene Ward 5" and "City Council" keywords
- **FIXED:** Meta descriptions for all pages (currently missing)
- **FIXED:** Image file names and alt text for local search ("athena-aguiar-eugene-ward-5.jpg")

### Visual Elements (EASY)

- **FIXED:** All call-to-action buttons from hero section (lines 30-40)
- **UPDATE:** About page candidate photo placeholder (lines 48-52) needs real image
- **FIX:** Image path currently points to "/images/candidate/athena-portrait.jpg" but needs actual photo uploaded
- **IMPLEMENT:** SSL certificate (HTTPS) across entire site
- **ADD:** Privacy policy compliant with CCPA and GDPR

## MODERATE COMPONENT CHANGES (HIGH VISIBILITY)

### Donation System Overhaul (MODERATE)

- **FIXED:** Lines 8-18 in DonationSection.tsx (donationTiers array with perks)
- **FIXED:** Lines 47-65 (perk list rendering with checkmarks)
- **FIXED:** Modal trigger button instead of current donation cards
- **FIXED:** Popup donation modal with preset amounts: $5, $10, $25, $50, $100, Other
- **FIXED:** Entire DonationSection.tsx component (lines 1-103) - remove all perk/checkbox system

### Email Marketing (MODERATE)

- **FIXED:** Email signup forms on every page (not just homepage)
- **CREATE:** Mobile-optimized email templates
- **CREATE:** Welcome email series for new subscribers
- **ADD:** Email automation for event reminders and follow-ups

### Social Media Integration (MODERATE)

- **ADD:** Social media feed widgets on homepage (Twitter, Facebook, Instagram)
- **IMPLEMENT:** Social sharing buttons on all blog posts and news items
- **ADD:** Social proof elements (follower counts, recent social media mentions)
- **CREATE:** Shareable quote graphics and infographics for social media

### Content Additions (MODERATE)

- **FIXED:** `/issues` page (directory exists but no page.tsx file)
- **FIXED:** `/accomplishments` page content (directory exists, needs page.tsx)
- **UPDATE:** Events page with real upcoming events (currently has sample data)
- **CREATE:** FAQ section addressing common voter concerns

### Basic Accessibility Improvements (MODERATE)

- **FIXED:** Alt text for all images (currently missing on many photos)
- **ENSURE:** Color contrast ratios meet 4.5:1 minimum standard
- **FIXED:** Focus indicators for all clickable elements
- **FIXED:** Skip navigation links for screen readers

## TECHNICAL OPTIMIZATIONS (MEDIUM VISIBILITY)

### Performance Improvements (MODERATE)

- **OPTIMIZE:** Page load speeds to under 2 seconds (current requirement: under 3)
- **FIXED:** Image compression and lazy loading
- **TEST:** Page load speeds (NDTC requires under 3 seconds)
- **OPTIMIZE:** Mobile page load speeds (target: under 1.5 seconds)
- **IMPLEMENT:** Browser caching strategies

### Mobile Optimization (MODERATE)

- **TEST:** Donation forms on mobile (current forms may not be optimized)
- **FIX:** Hero section text sizing on mobile devices
- **VERIFY:** All components work properly on mobile breakpoints
- **REDESIGN:** All forms for mobile-first experience
- **IMPLEMENT:** Touch-friendly button sizes (minimum 44px)
- **OPTIMIZE:** Mobile donation flow (reduce steps to 2-3 maximum)

### Analytics Setup (MODERATE)

- **IMPLEMENT:** Google Analytics 4 with goal tracking for donations and email signups
- **ADD:** Google Search Console for monitoring search performance
- **CREATE:** Google Business Profile for campaign office
- **IMPLEMENT:** UTM parameters for all external links and social media
- **ADD:** Conversion tracking for all campaign goals

## ADVANCED FEATURES (LOWER IMMEDIATE VISIBILITY)

### Advanced Donor & Volunteer Management (COMPLEX)

- **INTEGRATE:** ActBlue donation processing (currently missing)
- **CREATE:** Volunteer portal with shift scheduling
- **ADD:** Yard sign request form
- **IMPLEMENT:** Event RSVP functionality to events page
- **ADD:** Skill-based volunteer matching system
- **CREATE:** Supporter toolkit with downloadable materials

### Advanced SEO & Content Strategy (COMPLEX)

- **IMPLEMENT:** Local schema markup for events and office location
- **CREATE:** XML sitemap and submit to search engines
- **IMPLEMENT:** Local keyword optimization ("Eugene City Council," "Ward 5 candidate," "Eugene Oregon politics")
- **CREATE:** Location-specific content pages (neighborhood issues, local community features)
- **ADD:** Regular blog posting schedule
- **ADD:** Press release integration
- **ADD:** Community involvement highlights

### Conversion Optimization (COMPLEX)

- **IMPLEMENT:** Heat mapping tools (Hotjar) to track user behavior and optimize page layouts
- **A/B TEST:** Hero section headlines to maximize voter engagement
- **A/B TEST:** Donation button colors and placement (research shows simple color changes can increase donations significantly)
- **OPTIMIZE:** Call-to-action buttons with action-oriented language ("Join Our Movement" vs "Learn More")
- **ADD:** Exit-intent popups for email capture and donation requests

### Advanced Analytics & Personalization (COMPLEX)

- **IMPLEMENT:** Email segmentation by voter demographics and interests
- **IMPLEMENT:** Personalized email content based on voter data
- **IMPLEMENT:** A/B testing for email subject lines and content
- **CREATE:** Drip campaigns for different voter segments (undecided, supporters, volunteers)
- **IMPLEMENT:** Voter tracking and behavior analysis
- **CREATE:** Custom dashboards for campaign metrics
- **CREATE:** Voter journey mapping and funnel analysis
- **ADD:** Real-time analytics monitoring during campaign events

### Advanced Technical Features (COMPLEX)

- **ADD:** Content Delivery Network (CDN) for faster global loading
- **OPTIMIZE:** Core Web Vitals (LCP, FID, CLS) for better Google rankings
- **IMPLEMENT:** Progressive Web App (PWA) features for mobile users
- **ADD:** Offline functionality for key pages
- **OPTIMIZE:** Database queries and server response times
- **IMPLEMENT:** Full WCAG 2.1 Level AA compliance assessment
- **ADD:** Screen reader compatibility testing
- **TEST:** Website with actual assistive technology users
- **ADD:** Captions for any video content
- **IMPLEMENT:** Keyboard navigation support for all interactive elements

### Security & Advanced Integration (COMPLEX)

- **IMPLEMENT:** Secure donation processing with PCI compliance
- **ADD:** Two-factor authentication for admin access
- **IMPLEMENT:** Regular security audits and vulnerability scanning
- **ADD:** CAPTCHA protection on all forms
- **IMPLEMENT:** Data backup and disaster recovery plan
- **INTEGRATE:** CRM system with website data
- **IMPLEMENT:** Marketing automation workflows
- **ADD:** Zapier integrations for data synchronization
- **CREATE:** API connections with voter databases
- **IMPLEMENT:** Automated social media posting from website content
- **ADD:** Calendar integration for event management

### Advanced Engagement Features (COMPLEX)

- **CREATE:** Landing pages for specific voter segments (young voters, seniors, business owners)
- **IMPLEMENT:** Progressive profiling in forms to gather voter data gradually
- **CREATE:** Social media login options for newsletter signup
- **ADD:** Instagram feed integration showing campaign events and community engagement
- **IMPLEMENT:** Facebook Pixel for retargeting website visitors
- **CREATE:** Issue-specific landing pages with local data and solutions
- **ADD:** Voter testimonials and success stories
- **IMPLEMENT:** Interactive policy comparison tools
- **ADD:** Behind-the-scenes campaign content (day-in-the-life, team spotlights)
- **IMPLEMENT:** User-generated content campaigns (#AthenaForWard5)
- **CREATE:** Downloadable resources (voting guides, policy summaries)
- **IMPLEMENT:** Swipe gestures for image galleries and testimonials
- **IMPLEMENT:** Gamification elements for volunteer activities
- **ADD:** Peer-to-peer fundraising capabilities
- **IMPLEMENT:** Event check-in system with QR codes
- **CREATE:** Volunteer leaderboards and recognition system
- **IMPLEMENT:** Predictive analytics for voter engagement

### Crisis Communication (COMPLEX)

- **CREATE:** Rapid response content management system
- **IMPLEMENT:** Emergency notification system for supporters
- **ADD:** Fact-checking and rumor response protocols
- **CREATE:** Crisis communication templates
- **IMPLEMENT:** Real-time monitoring of online mentions and sentiment

## VISUAL DESIGN UPDATES (ONGOING DISCUSSION)

- Discuss and define better colors. Current colors are not acceptable.
- The font will want to be changed at some point, to be decided on which one.

## TRAINING & DOCUMENTATION

- [ ] Complete "Building a Campaign Website" 30-minute course
- [ ] Complete end-of-course activities and assessments  
- [ ] Review "Campaign Website Best Practices Handout"
- [ ] Review "Guide to Creating Your Campaign's Website" handout
- [ ] **Extra Credit:** Complete "Creating Digital Calls to Action" training
- [ ] Audit current website against NDTC
change color and font (doc in discord)
remove endorsements sections for now (will need to be added back later though)
donation auto pop-up as previously discussed
delete the blurb under the words campaign priorities
delete the blurbs under the priorities themselves  as well
make basically all the words not deleted bigger
on get involved page remove all of the text regarding phone banking canvassing time skills all of that remove it and instead make that section a form with name email and phone number and the person can check boxes like phone bank canvass or whatever thei interests after in volunteering
make it day volunteer indtead of volunteer opportunities
delete host a house party
 all of those other oncs should be clickable and the yard dign one should say request a yard sign and then lead to a digital form
 share on social media should have links with pre-made like tweeets or whatever like lead externally to the social media sites
 change to "write a letter to the editor"
 add an email button to <letters@eugeneweekly.krg> and the register guard one i will get you that email later
 remove attend events box on get involved page
