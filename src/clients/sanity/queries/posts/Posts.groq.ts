import { baseSanityDocumentFragment } from 'src/clients/sanity'

export const sanityPostsGroqQuery = `
*[_type == "post"]
{
  ${baseSanityDocumentFragment}
  "tags": tags[]->{
    title,
    "slug": slug.current
  },
}
`
