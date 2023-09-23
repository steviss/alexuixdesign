import { baseSanityDocumentFragment } from '../base/BaseSanityDocument.groq'

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
