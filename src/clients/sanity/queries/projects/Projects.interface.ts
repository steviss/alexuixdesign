import type { SanityImageWithAssetStub } from '@sanity/image-url/lib/types/types'

import type { BaseSanityDocument, ConvertSanityDocument } from 'src/types'

export type ConvertSanityProjectToProjectFunction = ConvertSanityDocument<SanityProjectType, ProjectType>

export type SanityProjectType = BaseSanityDocument & {
  subtitle: string
  projectWebsite?: string
  projectImage?: SanityImageWithAssetStub
  roles?: {
    title: string
  }[]
}

export type ProjectType = Omit<SanityProjectType, 'roles'> & {
  roles?: string[]
}
