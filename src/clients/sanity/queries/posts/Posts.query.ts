import { useSanityClient } from '@sanity/astro'

import convertSanityPostToPost from './Posts.converter'
import { sanityPostsGroqQuery } from './Posts.groq'
import type { SanityPostType } from './Posts.interface'

const getPosts = async (prefix?: string | undefined | boolean | null) => {
  const query = await useSanityClient().fetch<SanityPostType[]>(sanityPostsGroqQuery)
  return convertSanityPostToPost(query, { prefix })
}

export default getPosts
