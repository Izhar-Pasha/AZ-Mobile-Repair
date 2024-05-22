const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const path = require('path');

// Define your hostname
const hostname = 'https://www.azmobileservice.shop'; // Replace with your actual domain

// Define your routes
const routes = [
  '/',
  '/Mobile',
  '/Watch',
  '/Headphones',
  '/Earpods',  // Add more specific routes as needed
  // Add more static routes here
];

async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname });
  const writeStream = createWriteStream(path.resolve(__dirname, 'public', 'sitemap.xml'));

  sitemap.pipe(writeStream);

  routes.forEach(route => {
    sitemap.write({ url: route, changefreq: 'daily', priority: 0.8 });
  });

  sitemap.end();

  await streamToPromise(sitemap);
  console.log('Sitemap successfully generated!');
}

generateSitemap().catch(console.error);
