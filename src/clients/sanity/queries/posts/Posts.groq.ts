export const sanityPostsGroqQuery = `
*[_type == "post"]
{
  title,
  "slug": slug.current,
  featuredImage{asset->{url}},
  body,
  "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180),
  "tags": tags[]->{
    title,
    "slug": slug.current
  },
  'pubDate': _createdAt,
}
`
