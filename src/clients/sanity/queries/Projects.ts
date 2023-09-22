import type { PortableTextProps } from 'astro-portabletext/types'

import type { SanityAssetType } from 'src/types'

export type SanityProjectsGroqQueryType = {
  slug: string
  title: string
  subtitle: string
  description: string
  projectWebsite?: string
  featuredImage?: SanityAssetType
  projectImage?: SanityAssetType
  body: PortableTextProps
  roles: {
    title: string
  }[]
  estimatedReadingTime: number
  pubDate: string
}

export const sanityProjectsGroqQuery = `
*[_type == 'project']
{
    title,
    subtitle,
    description,
    body,
    projectWebsite,
    roles[]->{
        title
    },
    'pubDate': _createdAt,
    "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180),
    featuredImage{asset->{url}},
    projectImage{asset->{url}},
} 
`
