import rss from '@astrojs/rss'
import { useGetProjectsQuery } from 'src/clients/sanity'
import { SITE_DESCRIPTION, SITE_TITLE } from 'src/config'

export async function GET(context) {
  const projects = await useGetProjectsQuery()
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: [...projects.map(({ slug, title, description, pubDate }) => ({ title, description, pubDate, link: slug }))],
  })
}
