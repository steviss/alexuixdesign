import { baseSanityDocumentFragment } from 'src/clients/sanity/base/BaseSanityDocument.groq'

export const sanityProjectFragment = `
  ${baseSanityDocumentFragment}
  subtitle,
  projectWebsite,
  roles[]->{
    title
  },
  projectImage{asset->{url}},
`

export const sanityProjectsGroqQuery = `
*[_type == 'project'] | order(_createdAt desc)
{
  ${sanityProjectFragment}
} 
`

export const stanityProjectsPaginatedGroqQuery = `
*[_type == 'project' && _id > $lastId] | order(_id $orderBy) [0...$limit]
{
  _id,
  ${sanityProjectFragment}
} 
`
