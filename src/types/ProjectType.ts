import type { PortableTextProps } from 'astro-portabletext/types'

import type { SanityAssetType } from './SanityAssetType'

export type ProjectType = {
  title: string
  subtitle: string
  description: string
  slug: string
  featuredImage?: SanityAssetType
  projectImage?: SanityAssetType
  projectWebsite?: string
  body: PortableTextProps
  roles: {
    title: string
  }[]
  estimatedReadingTime: number
  pubDate: Date
}
