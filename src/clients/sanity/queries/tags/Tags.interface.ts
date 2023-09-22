import type { ConvertSanityDocumentToTypeFunction } from 'src/types'

import type { PostType } from '../posts/Posts.interface'

export type ConvertSanityTagToTagFunction = ConvertSanityDocumentToTypeFunction<SanityTagType, TagType>

export type SanityTagType = {
  slug: string
  title: string
  description: string
  posts: {
    title: string
    slug: string
    _createdAt: string
    _updatedAt: string
  }[]
  _createdAt: string
  _updatedAt: string
}

export type TagType = {
  title: string
  slug: string
  updatedAt: Date
  createdAt: Date
  description: string
  posts: PostType[]
}
