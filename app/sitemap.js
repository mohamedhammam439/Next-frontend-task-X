export default function sitemap() {
    return [
      {
        url: 'http://localhost:3000',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 1,
      },
      {
        url: 'http://localhost:3000/home',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      }
     
    ]
  }