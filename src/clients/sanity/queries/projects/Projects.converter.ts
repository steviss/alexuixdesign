import { DEFAULT_PREFIX } from './Projects.consts'
import type { ConvertSanityProjectToProjectFunction, ProjectType } from './Projects.interface'

const convertSanityProjectToProject: ConvertSanityProjectToProjectFunction = (items, options) => {
  const prefix = options?.prefix ? DEFAULT_PREFIX : false
  return items.map(({ roles, slug, ...project }) => <ProjectType>({
    ...project,
    slug: prefix ? `${prefix}/${slug}` : slug,
    roles: roles.map(({ title }) => title),
  }))
}

export default convertSanityProjectToProject
