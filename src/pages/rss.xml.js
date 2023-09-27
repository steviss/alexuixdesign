import rss from '@astrojs/rss'
import { useGetPostsQuery, useGetProjectsQuery } from 'src/clients/sanity'
import { SITE_DESCRIPTION, SITE_TITLE } from 'src/config'

export async function GET(context) {
  const posts = await useGetPostsQuery()
  const projects = await useGetProjectsQuery()
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: [
      ...posts.map(({ slug, title, description, pubDate }) => ({
        title,
        description,
        pubDate,
        link: slug,
      })),
      ...projects.map(({ slug, title, description, pubDate }) => ({ title, description, pubDate, link: slug })),
    ],
  })
}
