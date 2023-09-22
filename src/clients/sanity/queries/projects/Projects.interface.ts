import type { PortableTextProps } from 'astro-portabletext/types'

import type { ConvertSanityDocumentToTypeFunction, SanityAssetType } from 'src/types'

export type ConvertSanityProjectToProjectFunction = ConvertSanityDocumentToTypeFunction<SanityProjectType, ProjectType>

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
