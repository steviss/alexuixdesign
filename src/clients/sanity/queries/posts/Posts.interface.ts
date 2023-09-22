import type { PortableTextProps } from 'astro-portabletext/types'

import type { ConvertSanityDocumentToTypeFunction } from 'src/types'

export interface ConvertSanityPostToPostFunctionRetrieveFieldsI {
  body?: boolean
}

export type ConvertSanityPostToPostFunction = ConvertSanityDocumentToTypeFunction<
  SanityPostType,
  PostType,
  ConvertSanityPostToPostFunctionRetrieveFieldsI
>

export type SanityPostType = {
  slug: string
  title: string
  mainImage: {
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
  _createdAt: string
  _updatedAt: string
}
export type PostType = {
  title: string
  slug: string
  heroImage?: string
  body: PortableTextProps
  tags: {
    title: string
    slug: string
  }[]
  estimatedReadingTime: number
  updatedAt: Date
  createdAt: Date
}
