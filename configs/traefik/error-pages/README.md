# Traefik Custom Error Pages

Beautiful, custom error pages for your Traefik reverse proxy.

## Pages Included

- 403 - Forbidden
- 404 - Not Found
- 429 - Too Many Requests
- 500 - Internal Server Error
- 503 - Service Unavailable
- Rate Limit Explanation Page

## How to Deploy

1. Build and run the error pages container:

```bash
cd configs/traefik
docker-compose -f docker-compose.error-pages.yml up -d
```

2. The error pages are already properly referenced in the `dynamic.yaml` configuration.

## How It Works

Traefik's error pages middleware allows you to customize the error pages returned to users. The middleware catches specific HTTP status codes and redirects the user to a custom error page.

The configuration in `dynamic.yaml` registers these error pages:

```yaml
error-pages:
  errors:
    status:
      - "400-599"
    service: error-pages
    query: "/{status}.html"

error-pages-ratelimit:
  errors:
    status:
      - "429"
    service: error-pages
    query: "/rate-limit-explanation.html"
```

## Customizing

To customize the error pages, simply modify the HTML files in this directory and rebuild the container:

```bash
docker-compose -f docker-compose.error-pages.yml build --no-cache
docker-compose -f docker-compose.error-pages.yml up -d
```

## Styling

All pages use a consistent style with CSS variables for easy customization. To change the color scheme, modify the following variables in each HTML file:

```css
:root {
    --primary-color: #3498db;
    --secondary-color: #2c3e50;
    --accent-color: #e74c3c;
    --background-color: #f9f9f9;
    --text-color: #333;
}
``` 