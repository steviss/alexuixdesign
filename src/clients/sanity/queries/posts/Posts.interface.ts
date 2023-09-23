import type { PortableTextProps } from 'astro-portabletext/types'

import type { ConvertSanityDocument } from 'src/types'

export interface ConvertSanityPostToPostFunctionRetrieveFieldsI {
  body?: boolean
}

export type ConvertSanityPostToPostFunction = ConvertSanityDocument<SanityPostType, PostType>

export type SanityPostType = {
  slug: string
  title: string
  featuredImage: {
    asset: {
      path: string
      url: string
    }
  }
  body: PortableTextProps
  tags: {
    title: string
    slug: string
  }[]
  estimatedReadingTime: number
  pubDate: string
}

export type PostType = SanityPostType
