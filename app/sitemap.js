export default function sitemap() {
  const baseUrl = "https://techsupport4.com";

  const staticPages = [
    "",
    "/contact",
    "/internet-support-usa",
    "/printer-support-usa",
    "/wifi-router-support-usa",
    "/smart-tv-support-usa",
  ];

  const cities = [
    "internet-support-new-york",
    "internet-support-california",
    "printer-support-london",
    "wifi-support-toronto",
  ];

  const staticUrls = staticPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
  }));

  const cityUrls = cities.map((slug) => ({
    url: `${baseUrl}/location/${slug}`,
    lastModified: new Date(),
  }));

  return [...staticUrls, ...cityUrls];
}