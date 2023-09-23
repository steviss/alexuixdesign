import { DEFAULT_PREFIX } from './Posts.consts'
import type { ConvertSanityPostToPostFunction,  PostType } from './Posts.interface'

const convertSanityPostToPost: ConvertSanityPostToPostFunction = (items, options) => {
  const prefix = options?.prefix ? DEFAULT_PREFIX : false
  return items.map(({ slug, body, featuredImage, tags, ...post }) => <PostType>({
    ...post,
    slug: prefix ? `${prefix}/${slug}` : slug,
    tags: tags.map((tag) => ({ ...tag, slug: `tag/${tag.slug}` })),
  }))
}

export default convertSanityPostToPost
