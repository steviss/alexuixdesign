import type { BaseSanityDocument, ConvertSanityDocument } from 'src/types'

import type { SanityPostType } from '../posts/Posts.interface'

export type ConvertSanityTagToTagFunction = ConvertSanityDocument<SanityTagType, TagType>

export type SanityTagType = Omit<BaseSanityDocument, 'featuredImage' | 'body' | 'estimatedReadingTime'> & {
  posts: SanityPostType[]
}

export type TagType = SanityTagType
