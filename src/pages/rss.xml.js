import rss from '@astrojs/rss'
import { getPosts } from 'src/clients/sanity'
import { SITE_DESCRIPTION, SITE_TITLE } from 'src/config'

export async function GET(context) {
  const posts = await getPosts()
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: posts.map((post) => ({
      ...post.data,
      link: post.slug,
    })),
  })
}
