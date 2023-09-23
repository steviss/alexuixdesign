import { addSlugPrefix } from '..'
import { DEFAULT_PREFIX } from './Posts.consts'
import { DEFAULT_PREFIX as DEFAULT_PREFIX_TAG } from '../tags/Tags.consts'
import type { ConvertSanityPostToPostFunction,  PostType } from './Posts.interface'

const convertSanityPostToPost: ConvertSanityPostToPostFunction = (items, options) => {
  const prefix = options?.prefix ? DEFAULT_PREFIX : false
  return items.map(({ slug, body, featuredImage, tags, ...post }) => <PostType>({
    ...post,
    slug: addSlugPrefix(slug, prefix),
    tags: tags.map((tag) => ({ ...tag, slug: addSlugPrefix(slug, DEFAULT_PREFIX_TAG ) })),
  }))
}

export default convertSanityPostToPost
