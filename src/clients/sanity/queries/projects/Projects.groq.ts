export const sanityProjectsGroqQuery = `
*[_type == 'project']
{
    title,
    "slug": slug.current,
    subtitle,
    description,
    body,
    projectWebsite,
    roles[]->{
        title
    },
    'pubDate': _createdAt,
    'upDate': _updatedAt,
    "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180),
    featuredImage{asset->{url}},
    projectImage{asset->{url}},
} 
`
