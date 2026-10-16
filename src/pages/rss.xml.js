import rss from '@astrojs/rss';
import { getPosts } from '../lib/posts';

export async function GET(context) {
  const posts = await getPosts();
  return rss({
    title: 'Stack Notes',
    description: 'Tutorials, tool tests and build logs about AI and web development.',
    site: context.site,
    items: posts.map((p) => ({
      title: p.data.title,
      description: p.data.description,
      pubDate: p.data.pubDate,
      link: `/blog/${p.id}/`,
    })),
  });
}
