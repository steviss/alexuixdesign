import { baseSanityDocumentFragment } from '../base/BaseSanityDocument.groq'

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
*[_type == 'project']
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