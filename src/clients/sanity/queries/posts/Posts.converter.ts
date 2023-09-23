import { DEFAULT_PREFIX, DEFAULT_RETRIEVE_FIELDS } from './Posts.consts'
import type { ConvertSanityPostToPostFunction, ConvertSanityPostToPostFunctionRetrieveFieldsI, PostType } from './Posts.interface'

const convertSanityPostToPost: ConvertSanityPostToPostFunction = (items, options) => {
  const prefix = options?.prefix ? DEFAULT_PREFIX : false
  const retrieveFields: ConvertSanityPostToPostFunctionRetrieveFieldsI = { ...DEFAULT_RETRIEVE_FIELDS, ...options?.retrieveFields }
  return items.map(({ title, slug, _createdAt, _updatedAt, body, mainImage, estimatedReadingTime, tags }) => ({
    title,
    slug: prefix ? `${prefix}/${slug}` : slug,
    heroImage: mainImage?.asset?.url,
    body: retrieveFields.body && body,
    estimatedReadingTime,
    tags: tags.map((tag) => ({ ...tag, slug: `tag/${tag.slug}` })),
    createdAt: new Date(_createdAt),
    updatedAt: new Date(_updatedAt),
  })) as unknown as PostType[]
}

export default convertSanityPostToPost
