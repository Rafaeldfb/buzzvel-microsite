export default function robots() {
  return {
    rules: [
      {
        userAgent: ['Googlebot', 'Applebot', 'Bingbot'],
        allow: ['/'],
        disallow: ['/private/'],
      }
    ],
    sitemap: 'https://acme.com/sitemap.xml',
  }
}