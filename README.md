# NextJS Campaign Website

This repo consists of a nextjs app I wrote for my cousin's campaign. Given she did not want to use it, I am making this public domain.

This app follows NDTC standards given for anyone trying to make a campaign website. The colors and theme were slightly modified for her preference.

The website has placeholders intended to be replaced with headshots and other photos she desires advertising.

I am using `npm` with `nodejs` mainly for popularity reasons since `yarn` does not seem to be used as often anymore.

in addition to the website, we also have:
- docker-compose.yml stack
- cloudflare vercel pages/worker deployment
- tinyauth (protects development site from scraping/search engines). This was made before she announced candidacy and the login portal ensures that.
- code-server, easy to modify the source code renotely without arduously setting up a debugging environment.
- traefik: provides HTTPS encryption through tls, http, and dns01 challenges. Preconfigured to use a letsencrypt ca trust server.

To use this (template) infra yourself, simply set:
.env-example and rename to .env, and set the variables accordingly.

the source code for the site itself is presented in ./src/web/.

this uses nextjs, with tailwind v3.

in the root of the repo is a TODO_LIST.md which keeps track of my changelogs since the original version.

## Quick Start

### Docker

```bash
git clone https://github.com/th3w1zard1/athena-campaign-site-infra
docker compose up -d
```

### Cloudflare Pages deployment

```bash
git clone https://github.com/th3w1zard1/athena-campaign-site-infra
cd src/cloudflare-deploy
npm install
npm run build
npm run deploy
```

Make sure you have `CLOUDFLARE_API_TOKEN` set in `.env` when using this method.

## Requirements

### Docker (method 1)

install the following:

- Docker
- Docker compose

### Cloudflare (method 2)
if you dont want to use Docker you may run manually with:
- nodejs (recommended version 18 or later)
- npm (node package manager)
- cloudflare wrangler

## In Progress

The following is incomplete:
- Donation API handling
- Contact Us form

The current pages are static html and do not execute the necessary js or handshake any APIs.

## License

Given the person this was created for did not want it, this is now public domain under MIT license. You may do whatever you like under this flexible licensing. I am not responsible for any bugs or issues that are created by using this app. 
