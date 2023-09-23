import { useSanityClient } from '@sanity/astro'

import convertSanityProjectToProject from './Projects.converter'
import { sanityProjectsGroqQuery } from './Projects.groq'
import type { SanityProjectType } from './Projects.interface'

const getProjectsQuery = async (prefix?: string | undefined | boolean | null) => {
  const query = await useSanityClient().fetch<SanityProjectType[]>(sanityProjectsGroqQuery)
  return convertSanityProjectToProject(query, { prefix })
}

export default getProjectsQuery
