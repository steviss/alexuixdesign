import type { ConvertSanityDocument } from 'src/types'

import type { SanityPostType } from '../posts/Posts.interface'

export type ConvertSanityTagToTagFunction = ConvertSanityDocument<SanityTagType, TagType>

export type SanityTagType = {
  slug: string
  title: string
  description: string
  posts: SanityPostType[]
  pubDate: string
}

export type TagType = SanityTagType
