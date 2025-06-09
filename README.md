# Athena for Eugene Campaign Website

A professional, responsive campaign website for Athena, a candidate running for office in Eugene, Florida.

## Technology Stack

- **Frontend Framework**: [Next.js 15.2.3](https://nextjs.org/) with App Router architecture
- **Language**: [TypeScript 5](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) with custom configurations
- **State Management**: React's built-in state management
- **Content Management**: Integration with Strapi CMS
- **Containerization**: Docker with comprehensive docker-compose setup
- **UI Components**: Custom React components with responsive design

## Project Structure

```
src/
├── app/                    # Next.js App Router structure
│   ├── components/         # Reusable UI components
│   ├── about/              # About page
│   ├── platform/           # Platform/policies page
│   ├── donate/             # Donation page
│   ├── get-involved/       # Volunteer page
│   ├── blog/               # Blog section

│   ├── accomplishments/    # Achievements page
│   ├── events/             # Events calendar
│   ├── contact/            # Contact form
│   ├── media/              # Media gallery
│   ├── issues/             # Campaign issues
│   ├── faq/                # Frequently asked questions
│   ├── layout.tsx          # Root layout with metadata
│   └── page.tsx            # Homepage component
├── data/                   # Static data and content
└── lib/                    # Utility functions and helpers
```

## Key Features

- **Modern Architecture**: Built with Next.js App Router for optimized routing and server components
- **Responsive Design**: Mobile-first approach using Tailwind CSS for consistent styling across devices
- **Component-Based Structure**: Modular, reusable components for maintainable code
- **SEO Optimized**: Metadata configuration for search engine visibility
- **CMS Integration**: Strapi backend for content management
- **Docker Infrastructure**: Containerized development and deployment environment
- **Development Tools**: Support for various CMS options (Strapi, Contentful, Sanity, Ghost, etc.)

## Page Components

- **Hero**: Dynamic hero section showcasing campaign messaging
- **CampaignFocus**: Highlights the key policy areas and campaign focus

- **NewsletterSignup**: Email subscription for campaign updates
- **DonationSection**: Interface for campaign contributions
- **UpcomingEvents**: Calendar of campaign events and appearances
- **MediaGallery**: Collection of photos and videos
- **Testimonials**: Supporter testimonials
- **BlogPosts**: Campaign news and updates
- **VolunteerCTA**: Call-to-action for volunteer recruitment
- **Achievements**: Candidate's accomplishments and background

## Infrastructure

The project uses a sophisticated Docker-based infrastructure with:

- **Traefik**: Reverse proxy and SSL management
- **Tailscale**: Secure network mesh for team collaboration and remote access. See [Tailscale Setup Guide](docs/tailscale-setup.md) for instructions on joining the network
- **Monitoring**: Prometheus and cAdvisor for container monitoring
- **Logging**: Dozzle for log management
- **Content Management Options**:
  - Strapi (primary CMS)
  - Contentful, Sanity, Ghost, Directus (alternative options)
- **Development Environment**: VS Code Server for cloud-based development

## Getting Started

1. **Clone the repository**:

   ```shell
   git clone https://github.com/yourusername/athena-campaign-website.git
   cd athena-campaign-website
   ```

2. **Install dependencies**:

   ```shell
   npm install
   ```

3. **Run the development server**:

   ```shell
   npm run dev
   ```

4. **Using Docker (recommended)**:

   ```shell
   docker-compose -f docker-compose.dev.yml up
   ```

5. **Open your browser** and navigate to `http://localhost:3000`

## Customization

- Update content in respective page files
- Replace placeholder images in `/public/images`
- Modify color scheme in Tailwind configuration
- Content management through the Strapi CMS interface

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Development

To run the development server:

```bash
npm run dev
```

## Docker Deployment

This project includes Docker configuration for easy deployment.

### Prerequisites

- Docker and Docker Compose installed on your system
- Tailscale installed for secure remote access (see [Tailscale Setup Guide](docs/tailscale-setup.md))

### Setup

1. Copy the example environment file:

   ```bash
   cp .env.example .env
   ```

2. Modify the `.env` file with your specific settings

3. Build and start the containers:

   ```bash
   docker-compose up -d
   ```

4. The website will be available at <http://localhost:3000> or at the domain specified in your environment variables.

### Environment Variables

The following environment variables can be set in your `.env` file:

- `WEBSITE_PORT`: The port to expose the website on (default: 3000)
- `WEBSITE_DOMAIN`: The domain name for the website (default: athena-campaign.example.com)
- `NODE_ENV`: The Node.js environment (default: production)
