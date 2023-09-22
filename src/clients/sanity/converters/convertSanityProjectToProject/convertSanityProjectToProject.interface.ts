import type { SanityProjectsGroqQueryType } from 'src/clients/sanity/queries'

import type { ConvertSanityDocumentToTypeFunction, ProjectType } from 'src/types'

export type ConvertSanityProjectToProjectFunction = ConvertSanityDocumentToTypeFunction<SanityProjectsGroqQueryType, ProjectType>
