import type { PortableTextProps } from 'astro-portabletext/types'

import type { ConvertSanityDocument, SanityAssetType } from 'src/types'

export type ConvertSanityProjectToProjectFunction = ConvertSanityDocument<SanityProjectType, ProjectType>

export type SanityProjectType = {
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

export type ProjectType = Omit<SanityProjectType, 'roles'> & {
  roles: string[]
}
