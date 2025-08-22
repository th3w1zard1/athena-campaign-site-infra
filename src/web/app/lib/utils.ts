/**
 * Utility functions for the campaign website
 */

/**
 * Get the base path for the application
 */
export function getBasePath(): string {
  return process.env.NEXT_BASE_PATH || '';
}

/**
 * Prepend the base path to a public asset URL
 * This ensures that public assets work correctly with GitHub Pages
 */
export function assetUrl(path: string): string {
  const basePath = getBasePath();
  // Ensure the path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${basePath}${normalizedPath}`;
}