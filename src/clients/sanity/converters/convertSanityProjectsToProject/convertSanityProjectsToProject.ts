import type { ProjectType } from 'src/types'

import { DEFAULT_PREFIX } from './convertSanityProjectsToProject.consts'
import type { ConvertSanityProjectToProjectFunction } from './convertSanityProjectsToProject.interface'

const convertSanityProjectToProject: ConvertSanityProjectToProjectFunction = (items, options) => {
  const prefix = options?.prefix ? DEFAULT_PREFIX : false
  return items.map(({ pubDate, roles, slug, ...project }) => ({
    ...project,
    slug: prefix ? `${prefix}/${slug}` : slug,
    roles: roles.map(({ title }) => title),
    pubDate: new Date(pubDate),
  })) as unknown as ProjectType[]
}

export default convertSanityProjectToProject
