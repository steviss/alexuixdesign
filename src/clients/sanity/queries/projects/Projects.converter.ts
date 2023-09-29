import { addSlugPrefix } from 'src/clients/sanity'

import { DEFAULT_PREFIX } from './Projects.consts'
import type { ConvertSanityProjectToProjectFunction } from './Projects.interface'

const convertSanityProjectToProject: ConvertSanityProjectToProjectFunction = (items, options) => {
  const prefix = options?.prefix ? DEFAULT_PREFIX : false
  return items.map(({ roles, slug, ...project }) => ({
    ...project,
    slug: addSlugPrefix(slug, prefix),
    roles: roles.map(({ title }) => title),
  }))
}

export default convertSanityProjectToProject
