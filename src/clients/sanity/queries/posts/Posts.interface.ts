import type { BaseSanityDocument, ConvertSanityDocument } from 'src/types'

import type { TagType } from '..'

export type ConvertSanityPostToPostFunction = ConvertSanityDocument<SanityPostType, PostType>

export type PostTagType = Pick<TagType, 'title' | 'slug'>

export type SanityPostType = BaseSanityDocument & {
  tags: PostTagType[]
}

export type PostType = SanityPostType
