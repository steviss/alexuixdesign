export const sanityTagsGroqQuery = `
*[_type == "tag"]{
  title,
  description,
  "slug": slug.current,
  "posts": *[_type=="post" && references(^._id)]{ 
  	title,
  	"slug": slug.current,
    "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180),
    'pubDate': _createdAt,
	},
  'pubDate': _createdAt,
}
`
